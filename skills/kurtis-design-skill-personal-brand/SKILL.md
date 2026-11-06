---
name: kurtis-design-skill-personal-brand
description: Kurtis's Design Skill (Personal Brand). The KurtisWin brand system (black, white, gold #FFC65C, Poppins with Instrument Serif italic accents, gold outline icons, black outlined pills and buttons with a gold hover ring) and the step-by-step process for designing anything in it. Use this whenever Kurtis (KurtisWin, @kurtiswin) wants something designed or restyled for his personal brand or the things he runs under it — his website or a new page, a design board, link-in-bio page, YouTube thumbnail, Instagram post or story, newsletter or email signup, slide, banner, merch mock-up, or Java Bonito / Stories from Football / Woolton FC content shown on his personal channels — even if he only says "make it look like my brand", "on brand", "in my style" or "like my site".
---

# Kurtis's Design Skill (Personal Brand)

This skill holds the KurtisWin look and the way it was arrived at, so anything new (a page, a thumbnail, a post, an email) feels like it came from the same hand as kurtiswin's website.

It was built from one design session in November 2026: three concepts (inspired by danieldalen.com and sandcastle.studio) on a design board, Kurtis picked the Daniel Dalen–style "personal letter", then ten rounds of feedback refined it into the brand board. Everything he asked for and rejected is recorded, because those preferences are the brand.

## Before anything else

1. Read `references/brand.md`. It has the exact tokens, type, components and icon drawings. Use the values; don't approximate them.
2. Read `references/lessons.md`. It lists what Kurtis liked, what he removed, and the technical traps already hit.
3. If you're building a web page, open `assets/reference/site.html`. It is the finished site and the best example of the system in code. `assets/reference/brand-board.html` shows the system on one page.

## The brand in one screen

- **Mood:** black page, white words, one touch of gold, lots of space. Calm, cinematic, personal. "Luxury and professional" through restraint, not decoration.
- **Headline voice:** "Telling *beautiful* stories." Poppins SemiBold, with one feeling word in Instrument Serif italic and gold.
- **Body:** Poppins Light, white, centred, short lines. A serif italic word (white) can mark emphasis ("*nine*", "*beautiful*").
- **Gold `#FFC65C`** is for accents only: the one headline word, line icons, the hover ring. Never a background or a big fill.
- **Controls:** black with a hairline outline (white 12%); on hover a 2px gold ring. Buttons also lift 2px and their arrow slides right.
- **Icons:** thin gold outline icons (stroke 1.7, rounded). Real project logos sit inline beside project names and zoom and twist on hover.
- **Cards:** black with a hairline outline, 32px radius, never a lighter grey surface.
- **Who he is (copy source):** founder of Java Bonito (coffee for football, 5% back to support dreams), coach at Woolton FC (the UK's biggest grassroots club), founder of Stories from Football (connecting the world through conversation). His why: injured at nine, so he helps others chase their dreams. Handle: @kurtiswin.

## Workflow

### 1. Brief

Fill in what's already known from `references/brand.md` (links, handles, projects, copy) and ask only for what's missing: what the piece is for, where it will live, the one action it should drive, and any photos, video or logos. Ask for highest-resolution originals. Don't invent facts, quotes, numbers or captions that will be published; leave a clearly labelled slot instead (a gold "Your film here" tag worked well).

Kurtis often sends voice-transcribed messages: "Curtis Wynn" means KurtisWin, "Walton" means Woolton, "Java Benito" means Java Bonito, "danieldaylor" means danieldalen. Use the right spelling without comment. "Make all of that writing right" meant "white".

### 2. Design board (for anything new or big)

For a new page, campaign or format, build two or three static HTML concepts first, each inside the brand: for example one close to a reference he likes, one more editorial, and one hybrid. Screenshot each at phone (390px, 2× scale) and laptop (1440px) with `scripts/shoot.cjs`, and publish a board page with scrollable phone previews, a short "what's different" list per concept, and your pick. Small pieces (a single thumbnail, a button) can skip straight to step 3.

Once he picks, the board becomes the record: remove the other concepts, versions and to-do lists, and keep colour, type, pieces and the finished thing (this is what he asked for at the end).

### 3. Feedback rounds

Turn each message into a checklist, make every change, then reply with the same list marked done, noting anything interpreted. After each round:

- Screenshot what changed (zoom into the area, phone and laptop), look at it yourself, then send it.
- Measure what you can instead of eyeballing: icon centre vs text cap-height centre, number of lines, horizontal overflow at 320/375/390/430/768/1440px.
- Republish the board to the same link and commit.
- If something was changed outside the session (for example he renamed the board), merge it rather than overwriting.

Expect small, precise asks (spacing "just a tiny bit more", a word's colour, one fewer line). Make exactly that change and keep everything else as it is.

### 4. Build and hand over

For a full website, use the kurtis-website-builder skill (React + Vite + Tailwind) with the tokens from `references/brand.md`, using `assets/reference/site.html` as the visual spec. For other formats (thumbnails, posts, slides), apply the same tokens, type and spacing; see "Other formats" in `references/brand.md`.

### 5. Keep the skill learning

At the end of every piece of work, add what changed to `references/lessons.md` (dated, one to three lines, under the right heading). If a preference turns out to hold everywhere, move it into `references/brand.md` and delete the lesson. Tell Kurtis what you added.

## Files

- `references/brand.md`: tokens, type scale, spacing, components (with CSS), icon SVGs, links, copy, other formats.
- `references/process.md`: how the session ran, the tools and commands used (screenshots, video stitching, logo icons, Kit email form), and the full change log.
- `references/lessons.md`: preferences and traps. Read first, append last.
- `scripts/shoot.cjs`: phone and laptop screenshots plus overflow, console-error and line checks.
- `scripts/stitch-video.sh`: joins clips into one silent, looping, web-ready MP4 and a poster frame.
- `scripts/make-icon.py`: turns a logo into a square favicon-style tile or a round badge icon.
- `assets/icons/`: Java Bonito, Woolton FC and Stories from Football link icons.
- `assets/reference/`: the finished site page, the brand board, screenshots and the film poster. The film (`film.mp4`, 42 s, 3 MB) is there too.
