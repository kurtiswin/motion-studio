# How the KurtisWin site was designed

A record of the November 2026 session, so the same approach can be repeated for new pieces.

## Contents
1. Inputs
2. Concepts
3. Tools and commands
4. Change log (every feedback round)

---

## 1. Inputs

- Kurtis's Carrd draft (screenshots): black background, white text, gold `#FFC65C`, Poppins, sections for Who (Java Bonito, Stories from Football, Woolton FC) and Why (injured at nine; "Chase their dreams").
- References: danieldalen.com (big headline, social pills, story paragraph with inline project links with small logos, film card with caption, "What to expect" signup card) and sandcastle.studio (floating pill nav, huge regular-weight headline with one small line under, big rounded media tiles).
- Assets he supplied: profile photo (sunset keepy-ups), four DJI clips (2880×2160, H.264 and HEVC, ~10.5 s each), Java Bonito wordmark, MSB Woolton FC badge, Stories from Football ball mark.
- Both reference sites and javabonito.co.uk were blocked by the cloud session's network, so details came from his screenshots.

## 2. Concepts

| Concept | Idea | Outcome |
| --- | --- | --- |
| A · Personal letter | Daniel Dalen: one narrow column, heavy headline, story paragraph, film + signup card | **Chosen** |
| B · Studio | Sandcastle: floating nav, huge light headline, project photo tiles, full-screen Why | Dropped |
| C · Hybrid | Sandcastle hero + Dalen pills, chips and signup | Dropped (was my recommendation) |

Lesson: he chose the most personal, simplest option over the recommended hybrid. Lead with the personal story.

## 3. Tools and commands

All pages were single HTML files (no build step) published as a claude.ai artifact board, then committed to `kurtiswin/studio` on the `personal-brand-site` branch under `kurtis-site/`.

- Screenshots: `node scripts/shoot.cjs <page.html> <out-dir>` gives phone (390px at 2×, full page) and laptop (1440px) shots and reports overflow, console errors and video state.
- Contact sheets: the website-builder skill's `scripts/contact-sheet.py`.
- Video: `bash scripts/stitch-video.sh out.mp4 clip1 clip2 ...` scales each clip to 1280×960, joins them in the order given, removes audio, encodes H.264 CRF 27 with faststart, and writes `out-poster.jpg`. Four clips came to 42 s and 3 MB.
- Logo icons: `python3 scripts/make-icon.py wordmark in.png out.png` (whole wordmark centred across a black square, like a favicon) or `badge in.jpg out.png` (cropped to a circle) or `mark in.png out.png` (square crop around a mark).
- Alignment check: compare each inline icon's vertical centre with the text's cap-height centre via `getBoundingClientRect` in Playwright.
- Kit (ConvertKit) form for the signup: Grow → Landing Pages & Forms → Create new → Form → **Inline** → any template → Save → Publish → HTML. The number in `https://app.kit.com/forms/<ID>/subscriptions` is the form ID.

## 4. Change log

- **v1:** board with A, B, C.
- **v2 (A chosen):** icon above headline replaced with his profile photo as a darkened round avatar; Poppins everywhere with Instrument Serif kept for "beautiful" (gold) and "nine"; real social and project links; inline link icons fixed so commas sit tight; four clips stitched into one silent loop; caption, card heading, topic descriptions and "no spam" removed; topics on one line.
- **v3:** avatar removed; pills show icon + @kurtiswin; story text all white with "nine" gold; real logos as link icons, centred on the words; topics centred; footer privacy link removed.
- **v4:** "nine" back to white; story column wider (one fewer line on laptop, links still on separate lines); Java Bonito icon = whole wordmark in a black square like its favicon; pills black with gold ring on hover; Sign up button black, white text, lift + arrow on hover; video card sized like Dalen's on laptop.
- **v5:** hero lower and more space between headline, pills and story ("a bit more luxury"); card black with hairline; project icons zoom and twist on hover.
- **v6:** social icons redrawn as brand outline icons; gold and white versions compared, gold chosen.
- **v7–v8:** eight gold topic icons added (People, Places, Stories, The build, Coffee, Community, Football, Filmmaking), then reduced to People, Places, The build.
- **v9:** centred "WHAT TO EXPECT" label above the topics.
- **Final:** board turned into the KurtisWin brand board: other concepts, versions and to-do lists removed; colour, type, pieces and the website kept.
