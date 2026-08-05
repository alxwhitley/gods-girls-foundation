---
name: "God's Girls Foundation"
description: "A luminous, faith-rooted sanctuary for survivor testimony and dignified action."
colors:
  sanctuary-ink: "#102e37"
  sanctuary-ink-soft: "#174550"
  foundation-teal: "#1d99a6"
  deep-teal: "#0d5f69"
  woven-gold: "#fbd13e"
  burnished-gold: "#c69a17"
  warm-linen: "#f7f1e7"
  luminous-paper: "#fffaf1"
  warm-white: "#fff9ed"
  misted-teal: "#c5dde0"
  footer-ink: "#0a242b"
typography:
  display:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "clamp(3.75rem, 6.6vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "clamp(2.75rem, 5vw, 5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  square: "0"
spacing:
  control-sm: "0.7rem 1rem"
  control-md: "0.7rem 1.5rem"
  section-inline: "clamp(1.25rem, 4vw, 5rem)"
  section-block: "clamp(5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.woven-gold}"
    textColor: "{colors.sanctuary-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-md}"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "#ffe170"
    textColor: "{colors.sanctuary-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-md}"
  timeline-date:
    backgroundColor: "{colors.warm-linen}"
    textColor: "{colors.deep-teal}"
    typography: "{typography.title}"
    rounded: "{rounded.square}"
    size: "4.8rem"
---

# Design System: God's Girls Foundation

## Overview

**Creative North Star: "The Luminous Sanctuary of Testimony"**

This system makes a survivor's testimony feel like entering a quiet sanctuary: midnight teal establishes gravity, woven gold introduces hope and action, and warm linen gives the story room to breathe. The mood is devotional but not institutional, editorial but not luxurious for its own sake, and emotionally direct without relying on generic breast-cancer visual shorthand.

The visual hierarchy moves from monumental conviction to calm, specific evidence. Bodoni Moda carries vision, testimony, and dates; Source Sans 3 keeps the practical mission legible and human. Fine keylines, spare line drawings, square controls, and light moving across deep color create distinction without decorative excess.

**Key Characteristics:**

- Midnight-teal sanctuary fields opening into warm linen and luminous paper.
- Gold used selectively for light, dates, focus, fine keylines, and the primary action.
- Monumental editorial display type paired with a calm humanist sans serif.
- Square, flat, precisely outlined forms rather than soft cards or floating surfaces.
- Survivor testimony and supply-specific evidence remain the emotional and factual center.

## Colors

The palette balances the gravity of deep teal with woven gold light and tactile warm neutrals; teal and gold are the fixed brand anchors, while every supporting color preserves that sanctuary atmosphere.

### Primary

- **Foundation Teal:** The mandated brand teal carries line art, timeline structure, and the bridge between dark sanctuary fields and light content.
- **Deep Teal:** Grounds icons, checks, and quieter brand emphasis on warm backgrounds.

### Secondary

- **Woven Gold:** Reserved for primary action, light, focus, sacred marks, and the most meaningful emphasis.
- **Burnished Gold:** A quieter gold for fine rules and marks where the brighter accent would overpower long-form content.

### Neutral

- **Sanctuary Ink:** The principal dark field and primary text color; it supplies gravity without using pure black.
- **Sanctuary Ink Soft:** A slightly lifted dark surface for the supply index and secondary dark fields.
- **Warm Linen:** The testimony ground, chosen for a tactile, humane reading atmosphere.
- **Luminous Paper:** A brighter warm surface for educational content and gentle section contrast.
- **Warm White:** High-contrast display and navigation text on dark fields.
- **Misted Teal:** Secondary copy on dark fields, maintaining the palette while softening hierarchy.
- **Footer Ink:** The deepest supporting surface, reserved for the footer boundary.

**The Woven Light Rule.** Gold is rare and meaningful: use it for light, dates, keylines, focus, and primary action—not as a broad decorative fill.

**The No Pink-Ribbon Rule.** Do not substitute generic breast-cancer pinks or awareness motifs for the foundation's own teal-and-gold identity.

## Typography

**Display Font:** Bodoni Moda (with serif fallback)  
**Body Font:** Source Sans 3 (with sans-serif fallback)

**Character:** Bodoni Moda gives the testimony dignity, conviction, and a quiet devotional quality. Source Sans 3 keeps mission copy, navigation, and practical evidence open, contemporary, and highly readable.

### Hierarchy

- **Display** (500, fluid monumental scale, 0.92 line-height): Hero vision statements only; keep the measure narrow enough to form a strong vertical silhouette.
- **Headline** (500, fluid section scale, 0.98 line-height): Section-opening statements and the final donation appeal.
- **Title** (500, compact editorial scale, approximately 1.1 line-height): Supply names, timeline milestones, and other short evidence labels.
- **Body** (400, 1.05rem, 1.6 line-height): Narrative and explanatory copy; long passages stay at or below 65 characters per line where the layout permits.
- **Label** (600, compact scale): Navigation, controls, status labels, and concise utility copy.

**The Monument and Witness Rule.** Let display type carry one decisive idea at a time; supporting truth belongs in restrained sans-serif copy, never in competing oversized statements.

## Layout

The desktop system uses full-width fields with an adaptive inline gutter and split compositions that alternate between testimony, evidence, and action. The hero balances a narrower text sanctuary against a wider image field; evidence bands use three equal columns; long-form sections stay within a 78rem reading frame. Major section spacing is generous and fluid, with smaller spacing concentrated inside evidence rows and controls.

At 62rem, split compositions stack into a single column and the supply band becomes a vertical index. At 44rem, navigation reduces to the brand and Donate action, the origin timeline turns from a horizontal procession into a vertical path, and hero text precedes imagery. Interactive targets remain at least 2.75rem high, and the layout remains readable at 320px.

**The Processional Rhythm Rule.** Each section should advance from conviction to specific proof to action; do not fill the page with interchangeable card grids.

## Elevation & Depth

The system is flat by design and uses no box shadows. Depth comes from tonal fields, full-bleed imagery, a subtle hero overlay, hairline gold or teal separators, and the opening clip-path motion on the sanctuary image. Hover movement is limited to a slight upward translation on primary actions.

**The Flat Sanctuary Rule.** Surfaces do not float. Separate them with color, light, fine rules, and spatial rhythm rather than shadows.

## Shapes

Corners are square throughout. Buttons, date markers, status fields, and content boundaries use rectilinear silhouettes; the only softened forms come from the human figure and hand-drawn supply or faith line art. Borders are one-pixel keylines, and the recurring diamond timeline mark supplies a small geometric accent.

**The Devotional Geometry Rule.** Keep controls and containers square, then introduce humanity through typography, illustration, and light—not rounded cards or pill shapes.

## Components

### Buttons

Buttons feel direct, luminous, and purposeful.

- **Shape:** Square with no radius; primary actions maintain a minimum 3rem height.
- **Primary:** Woven-gold fill, sanctuary-ink text, semibold label typography, and generous horizontal padding; the hero variant adds a fine arrow.
- **Hover / Focus:** Brighten the gold and lift by 0.125rem over 180ms ease-out. Focus uses a 0.2rem gold outline with a 0.2rem offset.
- **Navigation variant:** The compact header Donate action preserves the same color and square geometry with slightly tighter padding.

### Cards / Containers

Content groups are framed passages rather than conventional cards.

- **Corner Style:** Square.
- **Background:** Full-width sanctuary ink, soft ink, warm linen, or luminous paper fields.
- **Shadow Strategy:** None; tonal contrast and keylines provide separation.
- **Border:** Fine gold, teal, or translucent ink rules define supply items, timelines, lists, and status regions.
- **Internal Padding:** Fluid page gutters for sections; compact 1.25–1.5rem spacing for evidence rows.

### Navigation

The header is transparent over the dark hero, separated by a translucent gold keyline. The Bodoni brand lockup pairs with a simple gold line mark; Source Sans 3 links are semibold and reveal a gold underline for current and hover states. On narrow screens, secondary links disappear while Donate remains prominent and reachable.

### Supply Index

The supply index is a full-width dark band crossing the hero threshold. Each item pairs a fine gold line drawing with a Bodoni title and muted explanatory copy; vertical separators on desktop become horizontal rules when stacked.

### Origin Timeline

The timeline uses square outlined dates and a single teal path to turn verified chronology into visual proof. Its undated middle milestone uses a small burnished-gold diamond rather than inventing a date. On mobile, the path becomes vertical and the content aligns beside each marker.

### Fit Checklist

The checklist is typographic and linear, not card-based. Each Bodoni line sits between fine translucent rules with a deep-teal check, making practical fit guidance feel authoritative and calm.

## Do's and Don'ts

### Do:

- **Do** reserve woven gold for light, dates, focus, keylines, and primary action.
- **Do** pair monumental Bodoni statements with calm, specific Source Sans 3 evidence.
- **Do** build hierarchy with full-width tonal fields, generous space, and fine rules.
- **Do** keep survivor testimony and real supply details more prominent than generic nonprofit claims.
- **Do** preserve semantic controls, visible focus, reduced-motion behavior, and mobile reading order.

### Don't:

- **Don't** introduce pink-ribbon imagery, generic charity photography, or a conventional nonprofit template aesthetic.
- **Don't** add rounded cards, pill buttons, gradients, or drop shadows to create interest.
- **Don't** spread gold across large decorative areas; its rarity creates its meaning.
- **Don't** crowd the page with multiple oversized messages or dense grids of equal-weight content.
- **Don't** let prototype imagery or unconfirmed donation, impact, partner, or legal claims read as final truth.
