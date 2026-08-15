# Site structure — God's Girls Foundation

## Sitemap

- `/` — Home — Move a donor moved by the founder's survivor story to donate toward mastectomy-supply access in Kenya.
- `/about` — About (Pam Dreda Oyola) — tells the founder's story and why she started the foundation.
- `/outreach` — Outreach — Gallery of past and upcoming outreach. Currently a "coming soon" placeholder.

## Navigation

Primary nav (in order):

1. **Home** → `/`
2. **About** → `/about`
3. **Outreach** → `/outreach`

Primary CTA: **Donate** → `/#donate`

Notes:

- The header CTA points at the single donate section on the homepage
  (`/#donate`). There is one donation path on the site; do not build a
  second donation flow on any other route.
- **No live donation URL exists yet.** The homepage donate section and the
  `/about` closing CTA are both placeholders until the foundation selects a
  platform. Do not fabricate a link or platform name (`PRODUCT.md` →
  Capabilities and Constraints).
- Nav is mirrored in the compact mobile panel (`details.mobile-nav`) in the
  same order.

## Footer

- **Outreach** → `/outreach`
- **Our story** → `/about`
- **Donate** → `/#donate`
- Tagline: "Daring, Deserving and Dignified."
- Prototype note: final content, imagery, and donation link are pending.

## Out of nav (and why)

- No `/donate` route — donation is an anchored section on the homepage
  linking out to a third-party platform, not its own page.
- No legal/registration, tax-deductibility, or impact-statistics pages —
  none of that is confirmed (see `PRODUCT.md` → Capabilities and Constraints).

## Repeatable content

**None.** Every route is a fixed page backed by a `pages/*-copy.md` contract.
No content collections are scaffolded. If the outreach gallery later becomes
a repeatable set of outreach events with photos, define its collection,
route, slug convention, metadata, draft behavior, and asset ownership at
that point — do not create an empty collection ahead of that decision.

## Decisions (Alex, 2026-08-15)

- **`About` nav link repoints** from the homepage anchor `/#story` to the
  real `/about` route. The homepage `#story` section stays where it is as
  the condensed version of the story.
- **Footer "Our story" repoints** from `/#story` to `/about` for the same
  reason.
- **The homepage now names Pam Dreda Oyola.** She was previously anonymous
  ("the foundation's founder") because the name was unconfirmed; Alex
  confirmed it, so `/` and `/about` are consistent.
- **`/about` closing CTA is a placeholder button, not a link.** No donation
  platform is selected.

## Open

- **Birth year unconfirmed.** The `/about` opening field renders "– 2026"
  with a leading dash until a verified year replaces it.
- **Whether the homepage should acknowledge Pam's death.** `/about` is
  written as a memorial; `/` currently names her without noting she has
  passed. Not decided.
- **No `pages/home-copy.md` exists.** The homepage was built before this
  lane's Gate S artifacts, so its copy lives only in `src/pages/index.astro`.
  Backfilling it would close that gap.
- Redirects: none needed. `/about` is a new route, not a rename.
