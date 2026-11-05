---
name: quiet-studio-design
description: Apply a "quiet studio" design language to websites: restrained, editorial, gallery-like pages where large warm photography does the talking, one sans typeface at a single weight, a serif used only for human voices, 8px radii, 5px grid gutters, frosted-glass pill navigation, and one cinematic scroll-pinned dark section. Use whenever the user wants a site to look premium, minimal, calm, editorial, "like a design studio", "Apple-ish but warmer", or asks to apply the "Sandcastle style" / "quiet studio style" to a new or existing site (portfolio, agency, product, hospitality, property, personal brand). Also use when reviewing a site against these principles.
---

# Quiet Studio design language

Studied from sandcastle.studio (a Framer-built design & technology studio site, Nov 2026). Use the **principles and system**, not their copy, imagery, logo or name.

## The 8 principles (read these first)

1. **Images are the design.** UI chrome is near-invisible so large, warm, art-directed photography carries the emotion. If the images are weak, the style fails. Budget effort for imagery first.
2. **One typeface, one weight.** A neo-grotesk (Helvetica Neue style) at weight 400 *everywhere*, including headings. Hierarchy comes from size, tracking and colour, never bold.
3. **A serif only for human voices.** Testimonials and the footer sign-off use a soft text serif. It signals "a person is speaking".
4. **Centre the story, grid the proof.** Narrative copy is centred in a narrow column (~340-360px wide). Work/journal is shown in tight, full-width card grids.
5. **Tiny, consistent geometry.** 8px radius on everything (images, buttons, nav). 5px gutters between cards so the grid reads as one mosaic.
6. **Whitespace instead of dividers.** No borders, no lines, no shadows. Sections are separated by 150-250px of air or a full-bleed colour change.
7. **One dramatic moment.** Exactly one full-bleed warm-black section where scroll is pinned and short statements fade in one at a time. Everything else stays calm.
8. **Small, low-contrast buttons.** CTAs are 13px text in a soft grey pill (8px radius). Invert to solid black/white only for the single most important CTA per section.

## Design tokens

See `references/tokens.css` for copy-paste CSS variables and a Tailwind config.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#000000` | Primary text on white |
| `--ink-warm` | `#090705` | Dark section / footer background (warm, never pure black) |
| `--muted` | `#6E6E6C` | Subtitles, dates, meta |
| `--paper` | `#FFFFFF` | Page background |
| `--glass` | `rgba(204,204,204,.25)` + `backdrop-filter: blur(10px)` | Nav pills, secondary buttons |
| `--radius` | `8px` | Everything |
| `--gutter` | `5px` | Between grid cards |
| `--container` | `1194px` max, ~123px side margin at 1440 | Content width |
| `--page-pad` | `20px` desktop nav, `18px` mobile | Edge padding |

### Type scale (all weight 400)

| Role | Size / line-height | Tracking | Font |
|---|---|---|---|
| H1 hero | 53 / 53px (1.0) | -0.02em | Sans |
| H2 section | 30 / 36px | -0.02em | Sans |
| Card title | 18 / 21.6px | -0.01em | Sans |
| Intro / body | 15-17 / 1.2 | 0 | Sans |
| Meta / button | 13 / 15.6px | 0 | Sans |
| Quote | 20 / 28px | -0.01em | Serif |

Mobile: H1 drops to ~44px and wraps to 4 lines; everything else stays almost the same size.

**Fonts.** Original uses *Helvetica Neue LT Pro 55 Roman* (licensed) and *Hedvig Letters Serif* (Google Fonts, free). Free sans substitutes: `Inter Tight`, `Geist`, or system `"Helvetica Neue", Helvetica, Arial`. Keep the serif: `Hedvig Letters Serif`.

## Page anatomy (homepage template)

1. **Fixed nav** - centred glass pill with 4 links (Home / Work / About / Contact) + one glass pill on the far right for a single utility action (e.g. "Ask", "Book"). No logo needed; the pills auto-adapt to light/dark sections because they are translucent.
2. **Hero text** - centred two-line H1 (manual `<br>` so the break is designed), 2-line muted-black intro below at 15px. ~110px top padding.
3. **Hero image** - container-width, ~1.63:1, 8px radius. A product/device mockup staged in a warm, sunlit interior.
4. **Positioning blurb** - 3 centred lines + small glass "About Us" button.
5. **Selected work** - centred H2, 3-column grid of 4:5 cards, 5px gutter. Title (18px black) + one-line descriptor (15px muted) under each. Small "All Projects" button centred below.
6. **Dark manifesto** - full-bleed `#090705`, ~5 viewports tall, a sticky centred line that swaps between 3-4 short statements as you scroll. Last statement gets a solid white CTA.
7. **Journal** - H2 + 2-line muted intro, 4-column 4:5 cards, title + 2-line excerpt + date in light grey. Solid black "View All" button.
8. **Testimonial** - serif quote in a 360px column, small square avatar (8px radius) + name/role in muted grey, round prev/next arrows in light grey.
9. **Footer** - full-viewport warm black with a subtle animated ASCII/noise canvas, serif two-line sign-off bottom-left, three small link columns bottom-right (muted label + white links), © bottom-left.

## Motion rules

- Easing `cubic-bezier(.22,1,.36,1)`, 0.6-0.9s. Nothing bouncy.
- Elements fade + rise 12-20px on enter, once. No staggered confetti.
- Image hover: scale 1.03 inside an `overflow:hidden` 8px frame, 0.8s.
- Scroll-pinned manifesto: opacity crossfade between lines, no movement.
- Respect `prefers-reduced-motion` (disable pinning, show statements stacked).

Code for every component: `references/components.md`.

## Imagery brief (give this to the user or an image generator)

- Warm neutral palette: oatmeal, sand, walnut, cream, soft shadow.
- Real-world staging: device on a table, tablet on upholstery, phone on a stand in a sunlit room.
- Soft directional daylight, shallow depth of field, no people, no hard contrast.
- Consistent grade across all images so the grid reads as one set.
- Export: hero 2400x1470, cards 1600x2000 (4:5), WebP/AVIF.

## How to apply to a new site

1. Ask for (or propose) the brand's 3-4 short manifesto statements and the 1 utility action for the right-hand pill.
2. Map their content to the page anatomy above; drop sections that have no real content (journal, testimonial) rather than faking them.
3. Start from `references/tokens.css`; build components from `references/components.md`.
4. Swap colours only if the brand demands it: keep one paper, one warm-dark, one muted grey. Never add an accent colour to the UI; let images bring colour.
5. Check against the review checklist below before shipping.

If the user also has the `kurtis-website-builder-skill`, use it for project setup, build and hosting, and this skill for the visual language.

## Review checklist

- [ ] Only one font weight on the page? No bold anywhere?
- [ ] Serif used only for quotes / sign-off?
- [ ] Every corner 8px? No borders, shadows or divider lines?
- [ ] Card grids use 5px gutters and identical aspect ratios?
- [ ] Narrative copy centred and under ~360px wide?
- [ ] Only one dark section (+ footer)?
- [ ] At most one solid (inverted) button per section?
- [ ] Images share one warm grade?
- [ ] Nav readable on both white and dark sections?
- [ ] Works at 390px: single-column cards, 18px side padding, no horizontal scroll?
- [ ] Reduced-motion fallback in place?

## Known weaknesses to avoid copying

- 13px buttons on low-contrast grey are hard to see and tap; use min 40px tap height on mobile.
- Muted grey `#6E6E6C` on white is ~5:1, fine; the lighter date grey is below 4.5:1, so darken it.
- The pinned dark section is ~5 viewports of mostly empty black; keep it to ~3 or users think the page broke.
- The same testimonial repeated 4 times in a carousel looks like placeholder content.
