---
target: homepage
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-18T12-55-29Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | None of the 3 Donate entry points signal upfront that donation isn't live. |
| 2 | Match System / Real World | 3 | Supply band's clinical terms land before any story context explains them. |
| 3 | User Control and Freedom | 3 | Low-risk nav; mobile details panel has no explicit Escape handling. |
| 4 | Consistency and Standards | 3 | /#donate vs #donate href inconsistency; dead .operating-cards base CSS. |
| 5 | Error Prevention | 2 | All 3 Donate CTAs create a false affordance. |
| 6 | Recognition Rather Than Recall | 1 | Header is position:absolute, not sticky — disappears for ~80% of the page. |
| 7 | Flexibility and Efficiency | n/a | Single-visit persuade page. |
| 8 | Aesthetic and Minimalist Design | 3 | Operating Model spends outsized weight on all-blank status. |
| 9 | Error Recovery | 3 | No forms/destructive actions; alt text thorough and specific. |
| 10 | Help and Documentation | n/a | Landing page; no task complex enough to need docs. |
| **Total** | | **20/32** | **Acceptable (62.5%)** |

## Design Specificity Verdict

Strongly grounded where real story content exists (undated timeline milestone as gold diamond, purpose-built supply icons, fit checklist from the founder's own knowledge, no pink-ribbon convention). Generic exactly where content is missing: Operating Model's five "TO BE CONFIRMED" cards and the terminal donate status — honest, but most template-like right before the ask.

Deterministic scan: static CLI clean; runtime browser detector flagged 2 anti-patterns — "side-tab" pseudo-element stripe (likely the intentional body::before gold hairline, false positive) and "cream-palette" (the named DESIGN.md Warm Linen brand token, false positive).

## Priority Issues

[P0] Donate CTA is a dead end with no alternative action — every donation-ready visitor before the real platform launches is lost with zero capture. Fix: add a low-commitment fallback (email capture). Suggested: /impeccable harden

[P1] No persistent way to donate for ~80% of scroll depth — header is position:absolute and disappears after the hero, including through the emotional peak. Fix: sticky header or persistent Donate affordance. Suggested: /impeccable layout

[P1] Operating Model section erodes trust immediately before the ask — five "TO BE CONFIRMED" cards right before Donate. Fix: reduce visual dominance or reframe copy forward. Suggested: /impeccable quieter

[P2] Page's actual ending is an administrative disclaimer, not an emotional close. Fix: separate disclosure rhythmically from donate copy. Suggested: /impeccable clarify

[P3] Clinical supply terms open the page before any story context. Fix: consider reordering or bridging. Suggested: /impeccable shape

## Persona Red Flags

Jordan: hero Donate button leads to unexplained "coming soon" reveal. Riley: all 3 Donate CTAs share the same non-function, reads as systemic. Casey: header/Donate disappears proportionally faster on mobile; no sticky bottom donate bar. Project-specific "The Moved Donor": her decision point (the Story section) has no CTA; must travel through the trust-eroding TBD mosaic to reach a broken ask.

## Minor Observations

Dead .operating-cards base CSS; /#donate vs #donate inconsistency; mobile header Donate at exactly 44px (no comfort margin); side-tab detector flag likely the intentional gold hairline; unnecessary role="status" on static .donate-status content.
