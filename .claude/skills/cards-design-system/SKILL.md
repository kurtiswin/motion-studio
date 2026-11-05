---
name: cards-design-system
description: The Cards UI design system for this project — quiet, precise, tactile, card-based UI (light grey canvas, white cards, one crisp shadow, color only for intent). Use whenever creating, editing, styling or reviewing ANY UI in this project — React components, pages, layouts, forms, buttons, dialogs, menus, tables, dashboards, HTML mockups — or when the user mentions "Cards", the design system, tokens, theming, dark mode, spacing, typography, radius or shadows. Stack is React + Tailwind v4 + shadcn/ui conventions.
---

# Cards — design system

Apply every rule below to all UI you create or edit. When something isn't covered, extrapolate from these principles rather than falling back to generic defaults.

## Setup files (bundled)
- `references/tokens.css` — the complete global stylesheet (tokens, Tailwind `@theme` mapping, type scale, radius, elevation, concentric-radius utilities, keyframes, base styles). Copy it verbatim into the global stylesheet (e.g. `app/globals.css`, `src/index.css`). Do not add other colors.
- `references/utils.ts` — the `cn()` helper with tailwind-merge extended for type tokens and system shadows. Copy to `lib/utils.ts`.
- When setting up a new project, install: `tailwindcss@4 @tailwindcss/vite (or postcss) radix-ui class-variance-authority clsx tailwind-merge lucide-react`.

## Aesthetic
Quiet, precise and tactile, and card-based. Every screen is a very light grey canvas with content grouped into white cards; hairline strokes and generous whitespace do the rest, and color is reserved for intent (actions, status, focus) so it always means something. Depth comes from one crisp, small shadow rather than borders or heavy drop shadows. Typography does the heavy lifting: tight tracking, medium-weight labels and a clear size hierarchy.

## Stack & conventions
- React + Tailwind CSS v4. Components follow **shadcn/ui** conventions: Radix UI primitives (`radix-ui`), variants with `class-variance-authority`, a `cn()` helper (clsx + tailwind-merge), `data-slot` attributes, `asChild` via Radix Slot. Colors and type come only from Cards's semantic tokens.
- Icons: Lucide (`lucide-react`). Outline by default, size-5 (20px). Lucide has no brand logos, so use inline SVGs from Simple Icons for those.
- Fonts: Inter Variable for UI text, Inter Display for headings (text-heading-*), DM Mono for code/numbers. Headings use weight 500.
- Load fonts in the document head:
  `<link rel="stylesheet" href="https://rsms.me/inter/inter.css">`
  `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap">`
- Default mode: light. Dark mode is class-based (`.dark` on `<html>`) and handled entirely by tokens — never write `dark:` color overrides for semantic tokens.
- tailwind-merge must treat `text-heading-*`, `text-ui-*`, `text-body-*`, `text-overline-*` as font sizes, and the system shadows as one group (see `references/utils.ts`).

## Principles
1. **Neutral first, color with intent.** 95% of any screen is neutral tokens (surface/canvas backgrounds, fg-* text, line-* strokes). Primary appears on the single most important action and on focus/selection. Status colors only communicate state, never decoration.
2. **Semantic tokens only.** Never use raw hex values or Tailwind's default palette. Use semantic tokens (bg-surface, text-fg-muted, ring-line). They flip automatically in dark mode.
3. **Cards on a canvas.** The page background is always bg-canvas. All content lives in white cards: `rounded-2xl bg-surface shadow-sm`. Never put content directly on the canvas except page titles and section headings. Don't nest cards; divide a card's sections with full-bleed `h-px bg-line` dividers.
4. **One shadow, scaled.** shadow-xs on resting inputs, shadow-sm on cards, shadow-md on floating layers (popovers, toasts), shadow-lg on dialogs. Buttons, badges and menus use their own crisp tokens: shadow-button, shadow-primary, shadow-inverse, shadow-danger, shadow-badge, shadow-menu. Shadowed surfaces (cards, popovers, dialogs) get no border or ring — the shadow alone defines the edge. Rings are for controls (inputs, checkboxes) that carry no real shadow. Never invent new shadows.
5. **One radius, scaled.** Buttons: rounded-button (medium) / rounded-button-sm (compact). Other controls rounded-lg, compact controls rounded-md, small marks rounded-xs/sm, cards rounded-2xl, dialogs rounded-3xl. Avatars and toggles always rounded-full.
6. **Higher is lighter in dark mode.** Pick the surface token for the element's height: canvas → surface → raised → floating; subtle for recessed wells. Never hard-code dark colors. Dark strokes are translucent white.
7. **Concentric corners.** Nested rounded element with a small gap: `rounded-parent-{size}` on the container, `rounded-concentric-{n}` on the child, n = container padding step (p-2 → rounded-concentric-2). Never give a nested element the same radius as its container.
8. **Type tokens, not font utilities.** Use named styles (text-heading-4, text-ui-sm, text-body-sm, text-overline-xs) which bundle size, line-height, tracking and weight. Never combine them with font-size, leading, tracking or font-weight utilities. Never use full uppercase unless the user asks.
9. **One spacing unit.** Every padding, margin, gap, offset and size is a whole Tailwind step (1 = 4px). Never half steps (1.5, 2.5, 3.5) or arbitrary pixel values. Inside components 2–4; between related elements 4–6; card padding 5–6; between sections 8–12. Control heights 40/36/32/28. Only 1–2px hairlines are exempt.
10. **Hover shifts, press squeezes, focus sharpens.** Hover changes color only, one step; nothing moves or grows. Buttons squeeze slightly when pressed. Buttons and select triggers: focus-visible 2px outline at 2px offset (outline-line-focus); other controls: shadow-focus / shadow-focus-primary / shadow-focus-danger halo. Every interactive element has both hover and focus.
11. **Icons are line, 20px, muted.** size-5 in medium fields, size-4 in compact ones. Buttons and select triggers always size-4 at a 1.5px rendered stroke. Icons default to text-fg-subtle, darken to text-fg-muted on interaction. Fill with currentColor only for media controls and ratings.

## Color usage
- **Surfaces by height:** bg-canvas (page) → bg-surface (cards, sidebars) → bg-raised (on a card, e.g. selected segmented tab) → bg-floating (popovers, menus, dialogs). Recessed wells (code blocks) bg-subtle; segmented-tab tray bg-tray; table header rows bg-table-head.
- **Selected tabs:** bg-raised + shadow-sm, no ring. **Selected tiles** also add `ring-1 ring-[rgb(0_0_0/0.5)] dark:ring-[rgb(255_255_255/0.5)] dark:shadow-control`. Never a heavy solid outline.
- **Hover:** bg-hover (translucent tint). Exception: anything with a border (fields, select triggers, tiles, outline buttons) never goes gray on hover — it stays white with its shadow; only the border darkens (hover:ring-line-strong).
- **Focused / open fields:** ring-line-focus + focus shadow.
- **Text fields** (inputs, textareas): bg-field + shadow-field + ring-field-line. **Select triggers and outline buttons** are controls: bg-control + shadow-button. Gray fills on fields mean disabled.
- **Text:** text-fg primary; text-fg-muted secondary/descriptions; text-fg-subtle placeholders, meta, icons; text-fg-disabled disabled.
- **Lines:** line (default), line-strong (controls needing contrast), line-focus only for focused inputs.
- **Inverted** (tooltips, neutral solid buttons): bg-inverse + text-fg-inverse.
- **Primary tints:** bg-primary-subtle for selected rows; primary-subtle-strong / -stronger for focus halos.
- **Status:** {state}-subtle backgrounds with {state} icons/text for inline messages; solid {state} fills only for small high-signal marks (badges, dots). States: danger, warning, success, info, highlight, caution, neutral.
- Text on primary: text-primary-foreground.
- Primary: `#000000` light / `#F2F2F2` dark. Neutral ramp: gray.

## Image placeholders
Where an image would go and none exists, use a top-to-bottom sky gradient: `linear-gradient(to bottom in oklab, top, bottom)`. Never stock photos, generated art or grey boxes. Same in light and dark.
- Morning: First Light #A9C8E8→#FBDCC8; Dawn Rose #B7B4DC→#F9CFCB; Soft Haze #D5DEE8→#F7E8D8; Golden Hour #BFD9E6→#FDE3A8; Mist #C9D8DE→#EEF1EA
- Day: Clear Sky #5BA4EC→#CFE7F8; High Noon #2F86E0→#9AD0F5; Summer #49B4EA→#E6F6FB; Thin Cloud #9CC4E8→#F1F5F8; Coastal #4FA3C7→#D4EFE6
- Sunset: Dusk #6C63A8→#F8A878; Ember #B4506A→#F9B26C; Coral #E8748A→#FCC98F; Afterglow #3E4A89→#EE8D83; Last Light #8D5FA6→#F6C1A0
- Night: Midnight #0B1026→#2C3A68; Deep Blue #050A1C→#14305C; Blue Hour #1C2A5A→#5A6CA8; Aubergine #120C2C→#45305F; Moonlit #10181F→#3A4C5C

## Typography (density ×1)
| Token | Size / line | Use for |
|---|---|---|
| text-heading-1 | 56/64 | Marketing hero only |
| text-heading-2 | 48/56 | Marketing section titles |
| text-heading-3 | 40/48 | Large page heroes |
| text-heading-4 | 32/40 | Page titles in marketing / onboarding |
| text-heading-5 | 24/32 | App page titles, empty states |
| text-heading-6 | 20/28 | Section titles inside apps |
| text-ui-xl | 24/32 | Large numbers / stats |
| text-ui-lg | 18/24 | Prominent labels, card stats |
| text-ui-md | 16/24 | Card, dialog and list-item titles |
| text-ui-sm | 14/20 | Buttons, form labels, nav items (default UI label) |
| text-ui-xs | 12/16 | Small labels, table headers |
| text-body-lg | 18/24 | Lead paragraphs |
| text-body-md | 16/24 | Long-form body |
| text-body-sm | 14/20 | Default UI body, descriptions, input text |
| text-body-xs | 12/16 | Hints, captions, meta |
| text-overline-xs | 12/16 | Eyebrows / group labels |
| text-overline-2xs | 11/12 | Small badges, tiny eyebrows |

## Radius scale (base 8px)
rounded-xs 3px · rounded-sm 5px · rounded-md 6px · rounded-lg 8px · rounded-xl 10px · rounded-2xl 13px · rounded-3xl 19px · rounded-full
- Buttons: always rounded-button (8px) / rounded-button-sm (6px). Never hard-code a button radius.
- Inputs/selects: rounded-lg; compact rounded-md. Checkbox/kbd: rounded-xs. Badges: rounded-full.
- Alerts, menu-item containers: rounded-xl. Cards, popovers: rounded-2xl. Dialogs, sheets: rounded-3xl.

## Spacing (4pt grid)
| Step | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 |
|---|---|---|---|---|---|---|---|---|---|---|
| px | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 |
- Icon ↔ label / inside controls: 2. Control padding px-3 / px-4.
- Between fields or related items 4–6. Card padding p-5 / p-6. Gap between cards 6.
- Between page sections 8–12. Control heights h-9 (h-11 on phones) / h-8 / h-7 / h-6.

## Elevation
- shadow-xs — resting inputs · shadow-sm — cards · shadow-md — popovers, tooltips, toasts · shadow-lg — dialogs, sheets
- shadow-button (white buttons, select triggers, neutral badges), shadow-primary / -inverse / -danger (solid buttons), shadow-badge (tinted badges), shadow-menu (select/dropdown menus) — fixed, don't scale
- shadow-focus / -focus-primary / -focus-danger — focus halos on fields and controls; buttons and select triggers use a 2px outline instead

## Component recipes

### Button
API: `variant` = primary | neutral | danger, `mode` = solid | outline | soft | ghost | raised, `size` = medium (h-9, h-11 on phones) | small (h-8) | xsmall (h-7) | xxsmall (h-6), `flat` = no shadow / press squeeze. cva + Radix Slot (asChild).
```
base:    inline-flex items-center justify-center gap-1 whitespace-nowrap text-ui-sm outline-none
         [&_svg]:size-4 [&_svg]:[stroke-width:2.25]
         focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-line-focus
         transition-[color,background-color,box-shadow,filter,scale] duration-150 ease-tactile
         active:scale-[0.97] (icon-only active:scale-[0.94])
         disabled:opacity-60 (icon-only disabled:opacity-40) disabled:active:scale-100
medium:  h-9 max-md:h-11 rounded-button px-4      small: h-8 rounded-button-sm px-4
xsmall:  h-7 rounded-button-sm px-2              xxsmall: h-6 rounded-button-sm px-2
leading icon: has-[>svg:first-child]:pl-3
primary/solid:   bg-primary text-primary-foreground shadow-primary hover:bg-primary-hover
                 dark:disabled:bg-control dark:disabled:text-fg-disabled dark:disabled:opacity-100 dark:disabled:shadow-none
primary/outline, soft: bg-control text-primary shadow-button hover:bg-control-hover
primary/ghost:   bg-transparent text-primary hover:bg-primary-subtle
neutral/solid:   bg-inverse text-fg-inverse shadow-inverse hover:bg-inverse-hover (+ same dark disabled classes)
neutral/outline, soft, raised (the white button; never a grey fill):
                 bg-control text-fg shadow-button [&_svg]:text-fg-subtle (icon-only [&_svg]:text-fg-muted) hover:bg-control-hover
neutral/ghost:   bg-transparent text-fg-muted hover:bg-hover hover:text-fg
danger/solid (final confirm in a dialog): bg-danger text-white shadow-danger hover:brightness-95
danger/outline (trigger that opens it): bg-control text-danger-fg shadow-button hover:bg-danger-subtle
danger/soft:     bg-danger-subtle text-danger-fg ring-[0.5px] ring-danger-line hover:bg-danger-line
danger/ghost:    bg-transparent text-danger hover:bg-danger-subtle
flat:            shadow-none active:scale-100; white buttons add ring-1 ring-inset ring-line hover:ring-line-strong
```

### Input
Wrapper div carries the styling; the `<input>` inside is transparent. Optional leading icon / trailing slot.
```
wrapper: group flex h-9 max-md:h-11 w-full items-center gap-2 rounded-lg bg-field px-3 shadow-field ring-1 ring-inset ring-field-line transition
         hover:ring-line-strong focus-within:shadow-focus focus-within:ring-line-focus
         [&_svg]:size-5 [&_svg]:text-fg-subtle
error:   ring-danger focus-within:shadow-focus-danger
input:   w-full bg-transparent text-body-sm text-fg outline-none placeholder:text-fg-subtle
label:   text-ui-sm text-fg   (optional hint suffix: text-body-sm text-fg-muted)
message: flex items-center gap-1 text-body-xs text-fg-muted [&_svg]:size-4
```

### Select / Dropdown
Radix Select. Trigger is the white button, not a field.
```
trigger: flex h-9 max-md:h-11 w-full items-center gap-2 rounded-lg bg-control px-3 text-body-sm text-fg shadow-button
         hover:bg-control-hover active:scale-[0.97] data-[state=open]:bg-control-hover
         focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-line-focus
         chevron: size-4 text-fg-subtle group-data-[state=open]:rotate-180 duration-150 ease-tactile
menu:    rounded-parent-2xl bg-floating p-2 shadow-menu
         origin-(--radix-select-content-transform-origin) animate-menu-in data-[state=closed]:animate-menu-out
         motion-reduce:animate-menu-fade-in
item:    flex items-center gap-2 rounded-concentric-2 p-2 text-body-sm text-fg-muted not-first:mt-1
         highlighted: bg-hover text-fg     chosen: bg-selected text-fg, no tick
other floating layers (popover, combobox): rounded-parent-2xl bg-floating p-2 shadow-md
group label: px-2 py-1 text-overline-xs text-fg-subtle
```

### Checkbox, Radio, Switch
```
checkbox: size-4 rounded-xs bg-surface shadow-xs ring-1 ring-inset ring-line-strong
          checked: bg-primary ring-primary, white 1.6px check stroke
radio:    size-4 rounded-full (same states), checked: bg-primary with a size-2 white dot
switch:   track h-6 w-10 rounded-full bg-track p-1 → checked bg-switch-on
          thumb size-4 rounded-full bg-white shadow-sm, translate-x-4 when checked
all:      focus-visible:shadow-focus-primary; disabled: bg-track, no ring/shadow
```

### Accordion
Radix Accordion. type="multiple" for settings, type="single" collapsible for FAQs.
```
item:    border-b border-line (none on last)
trigger: flex flex-1 items-center justify-between gap-2 py-4 text-ui-sm text-fg
         ChevronDownIcon size-5 text-fg-subtle, rotates 180° when open
         row actions (e.g. Reset) sit beside the trigger, never inside it
content: pb-5, animate-accordion-down / animate-accordion-up
```

### Tile group
Single-choice tiles. Radix RadioGroup underneath.
```
group:    grid gap-2
tile:     flex flex-col items-center justify-center gap-2 rounded-parent-lg p-2 text-ui-xs text-fg-muted
          ring-1 ring-inset ring-line hover:ring-line-strong hover:text-fg (no gray fill)
selected: bg-raised text-fg shadow-sm ring-[rgb(0_0_0/0.5)] dark:ring-[rgb(255_255_255/0.5)] dark:shadow-control
inner content hugging the edge: rounded-concentric-2
```

### Card
```
page:    min-h-screen bg-canvas, cards laid out with gap-6
card:    rounded-2xl bg-surface shadow-sm
header:  flex items-start gap-4 p-5
         icon: size-10 rounded-full ring-1 ring-inset ring-line text-fg-muted [&_svg]:size-5
         title: text-ui-md text-fg   description: text-body-sm text-fg-muted
divider: h-px bg-line (full-bleed)
content: p-5        footer: flex items-center gap-3 px-5 py-4 (actions right-aligned)
```

### Dialog
```
overlay: fixed inset-0 bg-overlay backdrop-blur-[6px]
content: max-w-[440px] rounded-3xl bg-floating shadow-lg animate-in
layout:  header (as Card header, title text-ui-md) / body with border-t / footer with border-t, buttons right-aligned
close:   absolute top-4 right-4 size-6 rounded-md text-fg-muted hover:bg-hover
```

### Tabs
```
segmented: list rounded-parent-lg bg-tray p-1 gap-1; trigger h-7 flex-1 rounded-concentric-1 text-ui-sm text-fg-muted
           active: bg-raised text-fg shadow-sm
line:      list flex gap-6 border-b border-line; trigger h-12 text-ui-sm text-fg-muted
           active: text-fg + 2px bg-primary bar on bottom edge, icon text-primary
```

### Badge & status
```
badge:   inline-flex h-5 items-center gap-1 rounded-full px-2 text-ui-xs tabular-nums
         soft (default): bg-{state}-subtle text-{state}-fg shadow-badge
         neutral soft:   bg-control text-fg-muted shadow-button (never a grey fill)
         tint:  bg-{state}-line text-{state}-fg     solid: bg-{state} text-white
         outline: bg-transparent ring-1 ring-inset ring-{state}-line text-{state}
status pill (tables): h-6 rounded-full bg-control px-2 text-ui-xs text-fg-muted shadow-button + size-2 dot bg-{state}
```

### Alert, Tooltip, Avatar
```
alert:   flex items-start gap-3 rounded-xl p-4 bg-{state}-subtle, icon size-5 text-{state},
         title text-ui-sm text-fg, body text-body-sm text-fg-muted
tooltip: rounded-md bg-inverse px-2 py-1 text-body-xs text-fg-inverse shadow-md
avatar:  rounded-full, sizes 24/32/40/48/64; fallback initials bg-{state}-line text-{state}-fg
         groups -space-x-2 with ring-2 ring-line-inverse
```

## Do
- Group related content in white cards on the canvas (rounded-2xl, shadow-sm, no border) with a header of icon-in-ring + title + description.
- Pair a label (text-ui-sm) with every input; helper/error text below in text-body-xs.
- Sentence case for all UI copy — labels, badges, buttons, eyebrows.
- Right-align primary actions in footers; neutral outline for cancel, solid primary for confirm.
- Use h-px bg-line dividers to separate card sections instead of nested boxes.

## Don't
- No full uppercase (typed, `uppercase` class or text-transform) unless asked. Acronyms/codes keep normal form.
- No more than one solid primary button per view.
- No shadows larger than shadow-sm on in-flow content; no white page background.
- No arbitrary radii (rounded-[7px]).
- No gradients, glows or saturated backgrounds for large areas (image placeholders excepted).
- No raw Tailwind colors (gray-500, blue-600) or hex values in components.
- No half spacing steps or arbitrary pixel spacing.

## Self-check before finishing UI work
- [ ] Page is bg-canvas; content in rounded-2xl bg-surface shadow-sm cards, no nested cards
- [ ] Only semantic tokens; no `dark:` color overrides, no hex, no default palette
- [ ] Only text-{heading|ui|body|overline}-* type styles, no font-size/weight/leading/tracking utilities
- [ ] Whole spacing steps only; correct control heights
- [ ] At most one solid primary; every interactive element has hover + focus-visible
- [ ] Icons Lucide, size-4 in buttons / size-5 in fields, text-fg-subtle
- [ ] Nested radii use rounded-parent-* / rounded-concentric-*
- [ ] Sentence case everywhere
