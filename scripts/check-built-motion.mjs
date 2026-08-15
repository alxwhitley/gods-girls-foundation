import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const assetsDirectory = new URL("../dist/_astro/", import.meta.url);
const cssFile = (await readdir(assetsDirectory)).find((file) => file.endsWith(".css"));

if (!cssFile) {
  throw new Error("No built CSS asset found. Run npm run build first.");
}

const css = await readFile(join(assetsDirectory.pathname, cssFile), "utf8");
const hasViewTimelineLonghand = /animation-timeline\s*:\s*view\(\)/.test(css);
const hasInvalidViewTimelineShorthand = /animation\s*:[^;{}]*\bview\(\)/.test(css);

if (!hasViewTimelineLonghand || hasInvalidViewTimelineShorthand) {
  throw new Error(
    "Production CSS rewrote scroll-linked animations into an unsupported animation shorthand.",
  );
}

console.log("Built CSS preserves scroll-linked animation timelines.");
