---
target: about page
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-18T12-55-42Z
slug: src-pages-about-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | CTA block silently disappears with JS disabled (verified). |
| 2 | Match System / Real World | 3 | Memorial status conveyed only via en-dash convention, no plain-text backup. |
| 3 | User Control and Freedom | 3 | Working nav exits; no wayfinding on an unusually long scroll. |
| 4 | Consistency and Standards | 3 | Header Donate reads live/active; page's own CTA for same action is disabled. |
| 5 | Error Prevention | 4 | Genuinely disabled button with captioned reason. |
| 6 | Recognition Rather Than Recall | 4 | Current-page nav state visible. |
| 7 | Flexibility and Efficiency | n/a | Persuade/memorial page. |
| 8 | Aesthetic and Minimalist Design | 4 | One CTA, restrained palette, generous whitespace. |
| 9 | Error Recovery | 3 | Unavailable-donation state labeled but offers zero fallback. |
| 10 | Help and Documentation | n/a | No help surface applies. |
| **Total** | | **27/32** | **Good (84%)** |

## Design Specificity Verdict

Strongly grounded in a specific real story (named collaborators, dated arc, concrete sensory detail, specific fit criteria). Page architecture is a fairly conventional nonprofit-about skeleton but executed with intent (drop cap, type-scale escalation at climax, DESIGN.md system).

Deterministic scan: static CLI clean (scoped to about.astro + Layout.astro); runtime browser detector flagged 3 anti-patterns traced to source: call-caps-body (uppercase on the 31-char "Founder, God's Girls Foundation" label — debatable, it's a short label not body prose), low-contrast (2.3:1, needs 3:1, gold-deep on linen at the final "In memory" timeline marker — real WCAG AA failure), cream-palette (the named DESIGN.md Warm Linen token — false positive).

## Priority Issues

[P1] Single CTA is a dead end, no fallback anywhere on the site (checked /outreach too — also "coming soon", no contact info anywhere). Fix: low-friction fallback (email capture). Suggested: /impeccable harden

[P1] Real WCAG AA contrast failure (2.3:1) on the final "In memory" timeline marker — the single most weighted moment on the page. Fix: darken the pairing at that marker to clear 3:1/4.5:1. Suggested: /impeccable audit

[P2] CTA block invisible with JavaScript disabled — verified via computed opacity staying 0. A real gap beyond the original build spec's no-JS fallback (which only covers unsupported IntersectionObserver, not JS off entirely). Fix: visible-by-default base state, JS only handles timing. Suggested: /impeccable harden

[P2] Header Donate and the page's own CTA speak two different languages for the same unavailable action — header looks fully live, in-page CTA is explicitly disabled. Fix: unify the affordance language. Suggested: /impeccable clarify

[P2] Memorial fact implied, not stated, where a first-time visitor most needs it — conveyed only via en-dash convention, no aria-label, first unambiguous statement two-thirds down the page. Fix: explicit line near hero + visually-hidden text for assistive tech. Suggested: /impeccable clarify

## Persona Red Flags

Jordan: misses the en-dash memorial cue, then hits a fully-live-looking header Donate that redirects to the homepage's own dead end. Riley: JS-disabled CTA is silently absent; header Donate always forces navigation away from /about. Casey: only always-visible Donate sits outside thumb reach; page's own CTA is at the bottom of a 5.5-screen scroll and disabled anyway. Project-specific "Achieng" (Kenyan survivor/caregiver): finds a page entirely about honoring Pam and asking for money, with zero acknowledgment of her own need and no contact channel anywhere on the site.

## Minor Observations

Mobile narrative has no internal wayfinding on an unusually long scroll; call-caps-body finding is debatable given it's a short label; redundant disabled+aria-disabled on the button; footer prototype disclaimer is honest and well-placed; second timeline marker reads slightly cramped vs its siblings.
