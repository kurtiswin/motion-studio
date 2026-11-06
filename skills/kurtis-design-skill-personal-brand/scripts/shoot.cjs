#!/usr/bin/env node
/**
 * Screenshot a page at phone and laptop size and report problems.
 *   node shoot.cjs <page.html or URL> [out-dir]
 * Writes <out>/<name>-phone.jpg (390px, 2x, full page) and <out>/<name>-laptop.jpg (1440x900 first screen),
 * and prints horizontal overflow, console errors, video state and story line count for 320–1440px.
 * Needs Playwright with Chromium (pre-installed in Claude Code cloud sessions).
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const [, , target, out = 'shots'] = process.argv;
if (!target) { console.error('usage: node shoot.cjs <page.html|url> [out-dir]'); process.exit(1); }
const url = /^https?:|^file:/.test(target) ? target : 'file://' + path.resolve(target);
const name = path.basename(target).replace(/\.html?$/, '') || 'page';
(async () => {
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  for (const [w, h, label, dsf, full] of [[390, 844, 'phone', 2, true], [1440, 900, 'laptop', 1, false]]) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dsf });
    await p.goto(url); await p.waitForTimeout(2000);
    await p.screenshot({ path: `${out}/${name}-${label}.jpg`, fullPage: full, type: 'jpeg', quality: 82 });
    await p.close();
  }
  for (const w of [320, 375, 390, 430, 768, 1280, 1440]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    const errs = [];
    p.on('pageerror', (e) => errs.push(e.message));
    p.on('console', (m) => m.type() === 'error' && errs.push(m.text().slice(0, 160)));
    await p.goto(url); await p.waitForTimeout(1200);
    const r = await p.evaluate(() => {
      const st = document.querySelector('.story');
      const v = document.querySelector('video');
      let lines = null, chipLines = null;
      if (st) {
        const lh = parseFloat(getComputedStyle(st).lineHeight), t = st.getBoundingClientRect().top;
        lines = Math.round(st.offsetHeight / lh);
        chipLines = [...st.querySelectorAll('.chip')].map((c) => Math.floor((c.getClientRects()[0].top - t) / lh) + 1);
      }
      return { overflow: document.documentElement.scrollWidth - innerWidth, lines, chipLines, video: v ? (v.readyState >= 2 ? 'ok' : 'not loaded') : '-' };
    });
    console.log(`${w}px  overflow ${r.overflow}px  story lines ${r.lines ?? '-'}  links on lines ${JSON.stringify(r.chipLines)}  video ${r.video}  errors ${errs.length ? JSON.stringify(errs) : 'none'}`);
    await p.close();
  }
  await b.close();
})();
