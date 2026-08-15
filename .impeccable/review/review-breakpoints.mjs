import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const [label, rawUrl, ...rawWidths] = process.argv.slice(2);
const widths = rawWidths.map(Number);

if (!label || !rawUrl || widths.some((width) => !Number.isFinite(width))) {
  throw new Error("Usage: node review-breakpoints.mjs <label> <url> <width...>");
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

for (const width of widths) {
  const height = width >= 1000 ? 1100 : 900;
  const profile = await mkdtemp(join(tmpdir(), `ggf-review-${label}-${width}-`));
  const browser = spawn(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--disable-background-networking",
    "--disable-component-update",
    "--no-first-run",
    "--hide-scrollbars",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "about:blank",
  ], { stdio: "ignore" });

  try {
    const portFile = join(profile, "DevToolsActivePort");
    let port;
    for (let attempt = 0; attempt < 100; attempt += 1) {
      try {
        [port] = (await readFile(portFile, "utf8")).trim().split("\n");
        break;
      } catch {
        await wait(50);
      }
    }
    if (!port) throw new Error(`Chrome did not expose DevTools for ${width}px`);

    const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
    const page = targets.find((target) => target.type === "page");
    if (!page) throw new Error(`No page target for ${width}px`);

    const socket = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    });

    let sequence = 0;
    const pending = new Map();
    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (!message.id || !pending.has(message.id)) return;
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    });

    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++sequence;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });

    await send("Page.enable");
    await send("Runtime.enable");
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768,
      screenWidth: width,
      screenHeight: height,
    });
    await send("Emulation.setEmulatedMedia", {
      media: "screen",
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
    await send("Page.navigate", { url: rawUrl });
    await wait(1200);

    if (label.startsWith("nav") && width < 768) {
      await send("Runtime.evaluate", {
        expression: `document.querySelector('.mobile-nav').open = true`,
      });
      await wait(100);
    }

    const { result } = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const supply = document.querySelector('.supply-band');
        const navToggle = document.querySelector('.nav-toggle');
        const operating = document.querySelector('.operating-model');
        const rect = (element) => element ? ({
          left: element.getBoundingClientRect().left,
          right: element.getBoundingClientRect().right,
          width: element.getBoundingClientRect().width,
        }) : null;
        return {
          innerWidth,
          documentScrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          supply: rect(supply),
          supplyItems: [...document.querySelectorAll('.supply-item')].map(rect),
          navToggle: rect(navToggle),
          mobileNavPanel: rect(document.querySelector('.mobile-nav-panel')),
          donate: rect(document.querySelector('.header-donate')),
          operating: rect(operating),
        };
      })()`,
    });

    const metrics = result.value;
    const reviewSelector = label.startsWith("supply")
      ? ".supply-band"
      : label.startsWith("operating")
        ? ".operating-model"
        : null;
    if (reviewSelector) {
      await send("Runtime.evaluate", {
        expression: `document.querySelector(${JSON.stringify(reviewSelector)})?.scrollIntoView({ block: 'center' })`,
      });
      await wait(200);
    }
    const capture = await send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
      fromSurface: true,
    });
    await writeFile(new URL(`./${label}-${width}.png`, import.meta.url), Buffer.from(capture.data, "base64"));
    console.log(JSON.stringify({ width, ...metrics }));

    if (metrics.documentScrollWidth > width || metrics.bodyScrollWidth > width) {
      process.exitCode = 2;
    }
    if (label.startsWith("nav") && width < 768) {
      const controlsFit = metrics.navToggle?.left >= 0
        && metrics.navToggle?.right <= width
        && metrics.donate?.left >= 0
        && metrics.donate?.right <= width;
      if (!controlsFit) process.exitCode = 3;
    }
    socket.close();
  } finally {
    browser.kill("SIGTERM");
    await wait(300);
    await rm(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  }
}
