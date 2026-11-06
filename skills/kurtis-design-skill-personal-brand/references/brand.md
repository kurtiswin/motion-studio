# KurtisWin brand

The exact values behind the personal-brand look. Use them as written.

## Contents
1. Colour
2. Type
3. Layout and spacing
4. Components
5. Icons
6. Motion
7. Links, handles and copy
8. Other formats

---

## 1. Colour

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#000000` | Every background, including cards, pills, buttons |
| `--text` | `#FFFFFF` | Headlines and body text |
| `--muted` | `#B8B8B8` | Small labels ("WHAT TO EXPECT"), footer is `#8F8F8F` |
| `--gold` | `#FFC65C` | Accent only: one headline word, line icons, hover/focus ring |
| `--line` | `rgba(255,255,255,.12)` | Hairline outlines on cards, pills, buttons, inputs, dividers |
| input fill | `#0A0A0A` | Email field background (a hair lighter than the page) |

Rules:
- Gold never fills a big area. A filled gold button was tried and replaced with black + gold ring.
- No grey surfaces for cards. Cards are black with a `--line` outline.
- Single dark theme; set `color-scheme: dark`.
- Contrast: white on black 21:1, gold on black about 12.9:1, muted on black above 9:1.

## 2. Type

Google Fonts: `Poppins:wght@300;400;500;600` and `Instrument+Serif:ital@1`.

| Role | Style |
| --- | --- |
| Hero headline | Poppins 600, `clamp(2.9rem, 10.5vw, 5.4rem)`, letter-spacing `-.035em`, line-height 1.02, centred, `text-wrap: balance` |
| Feeling word in headline | Instrument Serif italic 400, gold, `font-size: 1.12em`, line-height .9 ("*beautiful*") |
| Story / body | Poppins 300, white, `clamp(1.05rem, 2.4vw, 1.5rem)`, line-height 1.75, max-width 39ch, centred |
| Emphasis word in body | Instrument Serif italic, white, `1.22em` ("*nine*", "*beautiful*") |
| Link names in body | Poppins 500, white; underline in gold on hover (offset 4px) |
| Labels | Poppins 500, 12–13px, uppercase, letter-spacing .14em (items) to .24em (section labels) |
| Buttons and pills | Poppins 500–600, 15–16px |

Keep the serif to one or two words per screen; that scarcity is what makes it feel special.

## 3. Layout and spacing

- One centred column, max 760px; the media card can be wider than the text (700px on laptop vs ~580px of text, like Daniel Dalen's ratio of about 1.2×).
- Side gutter at least 16px (`max(16px, env(safe-area-inset-left))`).
- Hero sits low: top padding `clamp(110px, 18vh, 190px)`.
- Gaps: headline → pills 40px; pills → story 46px; story → card 60px (72px on laptop); card → footer 52px.
- Hero order: headline, social pills, story with inline project links, then the film + signup card. No avatar or logo above the headline (tried and removed).
- Footer: just "© 2026 Kurtis Windrow", 14px, muted. No privacy link or separator dot.

## 4. Components

### Social pill
```css
.pill{display:inline-flex;align-items:center;gap:9px;min-height:44px;padding:0 18px 0 14px;border-radius:999px;background:#000;
  box-shadow:0 0 0 1px var(--line);font-size:15px;font-weight:500;transition:box-shadow .25s ease}
.pill:hover{box-shadow:0 0 0 2px var(--gold)}
.pill svg{width:20px;height:20px;color:var(--gold)}
```
Content: gold outline platform icon + "@kurtiswin" in white. Give the link an `aria-label` such as "YouTube: @kurtiswin".

### Inline project link (logo chip)
```css
.chip{color:var(--text);text-decoration:none;font-weight:500;white-space:nowrap}
.chip img{display:inline-block;width:1.4em;height:1.4em;margin-right:.35em;border-radius:.38em;object-fit:cover;
  vertical-align:-.36em;background:#000;box-shadow:0 0 0 1px var(--line);
  transition:transform .45s cubic-bezier(.34,1.56,.64,1)}
.chip img.round{border-radius:50%;box-shadow:none}           /* Woolton badge */
.chip:hover img,.chip:focus-visible img{transform:scale(1.22) rotate(-8deg)}
```
Keep the link inline (not flex), so commas sit directly after the name. Each project link should land on its own line of the paragraph; check after changing widths.

### Media + signup card
```css
.card{border-radius:32px;overflow:hidden;background:#000;box-shadow:inset 0 0 0 1px var(--line)}
.film{aspect-ratio:4/3}  /* matches the source clips; no caption over the video */
@media (min-width:900px){.card{width:700px}.card .signup{max-width:680px;margin:0 auto}}
```
Video: `autoplay muted loop playsinline preload="metadata"` with a poster frame.

Signup block, top to bottom: centred label "WHAT TO EXPECT" (12px, .24em, muted) → centred row of topic items (gold icon + uppercase label) → hairline → email field + button side by side. Current topics: People, Places, The build. No descriptions after the topics and no "no spam" line (both removed).

### Email field and button
```css
input{flex:1 1 0;min-width:0;height:56px;border-radius:16px;border:1px solid var(--line);background:#0a0a0a;color:#fff;padding:0 14px 0 16px;font-size:16px}
input:focus{outline:none;border-color:transparent;box-shadow:0 0 0 2px var(--gold)}
button{height:56px;padding:0 18px 0 20px;border-radius:16px;border:0;background:#000;color:#fff;font-weight:600;font-size:16px;
  display:inline-flex;align-items:center;gap:8px;box-shadow:0 0 0 1px var(--line);
  transition:box-shadow .25s ease,transform .25s cubic-bezier(.2,.7,.2,1)}
button:hover{box-shadow:0 0 0 2px var(--gold);transform:translateY(-2px)}
button .arr{transition:transform .25s cubic-bezier(.2,.7,.2,1)}   /* "Sign up →" */
button:hover .arr{transform:translateX(4px)}
```
Keep field and button on one line on phones (`flex-wrap: nowrap`); the placeholder is "name@email.com".

## 5. Icons

Line icons: 24×24 viewBox, `fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"`, coloured gold.

```html
<!-- YouTube -->   <rect x="2" y="5" width="20" height="14" rx="4.5"/><path d="M10.2 9.2v5.6l4.8-2.8z" fill="currentColor"/>
<!-- Instagram --> <rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/>
<!-- People -->    <circle cx="9" cy="8" r="3"/><path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5"/><circle cx="17" cy="9" r="2.4"/><path d="M16.2 14.6c2.6.3 4.3 2.5 4.3 5.4"/>
<!-- Places -->    <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>
<!-- The build --> <path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>
<!-- Stories -->   <rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>
<!-- Coffee -->    <path d="M4 10h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11.5h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3.5c-.8 1 .8 2 0 3.5M12 3.5c-.8 1 .8 2 0 3.5"/>
<!-- Community --> <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>
<!-- Football -->  <circle cx="12" cy="12" r="9"/><path d="M12 8.3l3.5 2.5-1.3 4.1H9.8l-1.3-4.1z"/><path d="M12 8.3V3.2M15.5 10.8l4.8-1.6M14.2 14.9l2.9 4M9.8 14.9l-2.9 4M8.5 10.8l-4.8-1.6"/>
<!-- Filmmaking --><rect x="2.5" y="7" width="13" height="10" rx="2"/><path d="M15.5 10.5l6-3.5v10l-6-3.5z"/>
```

Project logos (`assets/icons/`):
- `icon-jb.png`: Java Bonito's full wordmark across a black square, like its favicon on javabonito.co.uk.
- `icon-wfc.png`: MSB Woolton FC badge, cut to a circle.
- `icon-sff.png`: Stories from Football's split-ball mark, white on black.

## 6. Motion

- Page load: blocks rise 18px and fade in, staggered 0.08–0.42s, `cubic-bezier(.2,.7,.2,1)`, 0.9s.
- Hover: gold ring on pills, button and input focus; button lifts and arrow slides; project logos zoom (1.22) and twist (-8°) with a springy ease.
- Video: silent autoplay loop.
- Everything off under `prefers-reduced-motion`.

## 7. Links, handles and copy

- YouTube: https://youtube.com/@kurtiswin
- Instagram: https://www.instagram.com/kurtiswin
- Java Bonito: https://www.javabonito.co.uk
- Woolton FC: https://www.wooltonfc.co.uk
- Stories from Football: https://www.storiesfromfootball.co.uk
- Email list: Kit (ConvertKit) inline form; post `email_address` to `https://app.kit.com/forms/<FORM_ID>/subscriptions`. Form ID not set up yet (Nov 2026).

Approved copy:
- Headline: "Telling *beautiful* stories."
- Story: "I got injured at *nine* and never got to chase the dream. So now I build things that help other people chase theirs: [Java Bonito], coffee that gives 5% back to support dreams, [Woolton FC], where I coach at the largest grassroots club in the UK, and [Stories from Football], because everyone has a *beautiful* story to tell."
- Older lines from his Carrd draft, fine to reuse: "To transform lives through football." "Connecting the world through conversation, because everyone has a beautiful story to tell." "Coffee for football – giving 5% back from every coffee sold to support dreams." "Join the Club."

Tone: warm, first person, short sentences, football and community first. No hype words.

## 8. Other formats

Apply the same system; these are starting points to confirm with Kurtis.
- **YouTube thumbnail (1280×720):** black or darkened photo, Poppins SemiBold white title of 2–4 words with one serif-italic gold word, generous margin; nothing else in gold.
- **Instagram post (1080×1350) / story (1080×1920):** black, centred headline in the hero style, one photo or video frame in a 32px-radius card with a hairline, @kurtiswin pill at the bottom.
- **Slides:** black, one idea per slide, headline style for titles, Poppins Light body, gold icons only.
- **Email:** black header band with the headline style, white body on black, black "Read more →" button with a hairline.
- Photos: Kurtis likes moody, slightly darkened, cinematic images that sit into black (his sunset keepy-ups photo is the profile picture).
