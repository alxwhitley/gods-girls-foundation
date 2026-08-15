---
target: "Gods Girls Foundation home page at http://127.0.0.1:4321/"
total_score: 16
max_score: 28
na_heuristics: 7,9,10
p0_count: 2
p1_count: 3
timestamp: 2026-08-05T20-22-25Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Donate controls appear active but terminate at “Donation link coming soon.” |
| 2 | Match System / Real World | 4 | Actual products, fit criteria, dates, places, and the founder’s lived problem are explained plainly. |
| 3 | User Control and Freedom | 1 | At 390px the supply band overflows, content is clipped, and usable header navigation disappears. |
| 4 | Consistency and Standards | 3 | The visual system is coherent, but “Donate” violates the expected behavior of a donation control. |
| 5 | Error Prevention | 1 | The principal conversion cannot be completed and offers no alternate action. |
| 6 | Recognition Rather Than Recall | 3 | Desktop headings, icons, timeline, and fit checks scan well; mobile navigation and content recognition break down. |
| 7 | Flexibility and Efficiency | n/a | Expert acceleration is not meaningful for this persuasive surface. |
| 8 | Aesthetic and Minimalist Design | 3 | Desktop is confident; prototype notices and broken mobile layout reduce finish. |
| 9 | Error Recovery | n/a | No transaction exists to evaluate recovery; the missing donation path is scored under status and prevention. |
| 10 | Help and Documentation | n/a | Separate documentation is not inherently required here. |
| **Total** | | **16/28** | **57% — distinctive concept, materially incomplete experience** |

## Design Specificity Verdict

**Distinctive art direction and mission-specific content, but not yet a credible donation experience.** Midnight teal, linen, gold keylines, Bodoni typography, Kenyan textile imagery, product illustrations, and founder testimony create an authored visual world. The external prosthesis, mastectomy bra, fit criteria, Kenyan context, and Raleigh origin cannot be transplanted unchanged to another cause.

Specificity weakens where donor confidence matters most. The homepage does not yet explain current program activity, distribution, local partners, gift allocation, governance, contact routes, or measurable proof. The identity is specific; the institution still feels provisional.

**Deterministic scan:** 15 findings in `src/styles/global.css`: one `side-tab` warning, one undocumented design-system color advisory, and 13 font-ramp advisories. The side-tab finding is a false positive for the horizontal body rule. The `#ffe170` color matches a component value documented in DESIGN.md but is absent from its top-level color map. The font advisories identify real token drift, although many are intentional responsive/component subscales rather than visible defects.

**Visual overlays:** No fresh user-visible overlay exists. Native DevTools and a mutable page-context surface were unavailable. Current desktop and 390px renders were inspected through isolated headless-browser fallbacks.

## Overall Impression

The page gives survivors dignity rather than pity and makes an unfamiliar supply gap concrete. Its largest opportunity is to make the experience as credible as its art direction: repair mobile comprehension, provide an honest conversion path, and show how the organization operates.

## What's Working

1. **Dignified framing:** The headline, direct gaze, warm palette, and editorial typography convey agency without trivializing the medical need.
2. **Concrete cause explanation:** Prostheses, mastectomy bras, soft seams, underbands, cups, and straps make the need legible to unfamiliar donors.
3. **Structured founder story:** The portrait and 2018-to-2023 timeline connect firsthand need to the foundation’s origin.

## Priority Issues

### [P0] The mobile supply section is structurally broken

- **Why it matters:** At 390px, the band extends past the viewport, headings and descriptions are clipped, and a large off-canvas strip appears. This obstructs the clearest explanation of the foundation’s work.
- **Fix:** Remove the overflowing intrinsic width, constrain grid children with `min-width: 0`, verify the band against the viewport, and test 320, 360, 390, and 430px. Do not conceal it with global `overflow-x: hidden`.
- **Suggested command:** `$impeccable adapt`

### [P0] The primary conversion is a dead end

- **Why it matters:** Header and hero Donate controls promise a transaction but terminate at “Donation link coming soon,” wasting the highest-intent moment.
- **Fix:** Ship a working donation route. Until then, replace Donate with “Get donation updates” or “Contact the foundation” and provide a real email or form.
- **Suggested command:** `$impeccable harden`

### [P1] Mobile navigation disappears

- **Why it matters:** At 390px, the logo remains but Home, Outreach, About, and the highlighted Donate control are unavailable. Visitors cannot discover Outreach or retain a persistent action.
- **Fix:** Add an accessible compact menu and ensure the primary action fits at the narrowest supported width.
- **Suggested command:** `$impeccable adapt`

### [P1] Donor trust lacks an operating model

- **Why it matters:** There is no visible evidence of active distribution, local partners, geographic scope, beneficiary access, gift use, governance, or organizational contact.
- **Fix:** Add one concise, verified proof section explaining what happens today, where, with whom, how supplies reach survivors, and what contributions enable. Do not invent metrics.
- **Suggested command:** `$impeccable clarify`

### [P1] Placeholder imagery blurs editorial and documentary truth

- **Why it matters:** The polished hero can be mistaken for a real survivor or beneficiary before its small disclosure is read.
- **Fix:** Use approved foundation photography or make the illustration unmistakably editorial. Keep disclosure adjacent and prominent.
- **Suggested command:** `$impeccable polish`

## Persona Red Flags

**Jordan — first-time donor:** Jordan taps Donate expecting amounts and payment, then reaches a coming-soon message without an alternate giving method, email signup, contact route, or launch timeline.

**Amina — Kenyan survivor or family member:** Amina sees relevant products but cannot determine whether distribution is active, where services exist, who qualifies, or how to request support. On mobile, supply descriptions are clipped and Outreach is inaccessible.

**Priya — diligence-minded grant partner:** Priya finds a plausible founder origin but no partner organizations, program method, governance, registration details, contact information, financial transparency, or outcomes. Prototype imagery and the nonfunctional donation path amplify the readiness gap.

## Minor Observations

- The desktop logo is too small to function as a confident organizational signature.
- “Related garments” is materially vaguer than the other supply categories.
- The founder appears but is not named or attributed on the homepage.
- “Faithful response” introduces spirituality without explaining its relationship to partnerships or service.
- Three separate incompleteness notices make the page feel like an internal review artifact.
- The timeline’s undated middle milestone looks equivalent to its dated milestones.
- Focus styles, skip navigation, reduced-motion handling, semantic headings, lists, and explicit image dimensions are thoughtful source-level strengths.

## Questions to Consider

- If a survivor—not a donor—arrived first, what should she be able to do within 20 seconds?
- What is the smallest verified proof that would make the foundation feel operational rather than aspirational?
- Should “Donate” exist before donation is possible, or is a smaller honest commitment more valuable now?
- What happens between a contribution and a survivor receiving a properly fitted garment?
- Could the founder’s name, voice, and verified local partnerships carry more trust than the placeholder portrait?
