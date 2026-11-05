# Component recipes (React + Tailwind + Framer Motion)

Assumes the Tailwind config in `tokens.css`. Plain-CSS builds: translate the classes 1:1 using the tokens.

## 1. Glass nav

```jsx
export function Nav({ links, action }) {
  const pill =
    "rounded-lg bg-[rgba(204,204,204,.25)] backdrop-blur-[10px] px-2.5 py-2 text-[15px] leading-[18px]";
  return (
    <nav className="fixed inset-x-0 top-5 z-50 flex justify-center px-5 mix-blend-normal">
      <div className={`${pill} flex gap-2.5`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="opacity-90 hover:opacity-100">{l.label}</a>
        ))}
      </div>
      <a href={action.href} className={`${pill} absolute right-5`}>{action.label}</a>
    </nav>
  );
}
```
On dark sections, switch text to white and pill bg to `rgba(255,255,255,.18)` (use an IntersectionObserver on sections with `data-theme="dark"`).

## 2. Hero

```jsx
<header className="pt-[110px] text-center">
  <h1 className="text-[clamp(40px,3.7vw,53px)] leading-none tracking-[-0.02em]">
    Line one of the promise<br />line two of the promise.
  </h1>
  <p className="mx-auto mt-6 max-w-[360px] text-[15px] leading-[1.2]">Two-line intro sentence.</p>
</header>
<Reveal className="container mt-14">
  <img src="/hero.webp" alt="" className="aspect-[1.63] w-full rounded-lg object-cover" />
</Reveal>
```

## 3. Buttons

```jsx
const soft  = "inline-block rounded-lg bg-[#f0f0f0] px-2.5 py-2 text-[13px] leading-[15.6px] min-h-10 md:min-h-0";
const solid = "inline-block rounded-lg bg-black text-white px-2.5 py-2 text-[13px] leading-[15.6px]";
const solidOnDark = "inline-block rounded-lg bg-white text-black px-2.5 py-2 text-[13px]";
```

## 4. Card grid (work: 3 cols, journal: 4 cols)

```jsx
export function CardGrid({ items, cols = 3 }) {
  const grid = cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`container grid grid-cols-1 gap-[5px] ${grid}`}>
      {items.map((it) => (
        <a key={it.href} href={it.href} className="group block">
          <div className="overflow-hidden rounded-lg">
            <img src={it.img} alt="" loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[800ms] ease-quiet group-hover:scale-[1.03]" />
          </div>
          <h3 className="mt-3 text-[18px] leading-[1.2] tracking-[-0.01em]">{it.title}</h3>
          <p className="text-[15px] text-muted">{it.blurb}</p>
          {it.date && <p className="mt-1 text-[15px] text-faint">{it.date}</p>}
        </a>
      ))}
    </div>
  );
}
```
Note: on mobile add `gap-y-8` so stacked cards breathe.

## 5. Reveal on scroll

```jsx
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, className }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
```

## 6. Pinned dark manifesto

```jsx
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function Manifesto({ lines, cta }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  if (reduce) return (
    <section data-theme="dark" className="bg-ink-warm py-40 text-center text-white space-y-10">
      {lines.map((l) => <p key={l} className="narrow text-[17px]">{l}</p>)}
    </section>
  );
  const n = lines.length;
  return (
    <section ref={ref} data-theme="dark" className="relative bg-ink-warm text-white"
      style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 grid h-screen place-items-center">
        {lines.map((line, i) => {
          const a = i / n, b = (i + 1) / n, f = 0.08 / n * 4;
          const opacity = useTransform(scrollYProgress,
            [a, a + f, b - f, b], [i === 0 ? 1 : 0, 1, 1, i === n - 1 ? 1 : 0]);
          return (
            <motion.div key={line} style={{ opacity }} className="absolute max-w-[360px] text-center">
              <p className="text-[17px] leading-[1.2]">{line}</p>
              {i === n - 1 && cta && <a href={cta.href} className="mt-6 inline-block rounded-lg bg-white px-2.5 py-2 text-[13px] text-black">{cta.label}</a>}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
```
Keep `lines` to 3-4 (≈3-4 viewports).

## 7. Testimonial

```jsx
<figure className="mx-auto max-w-[360px] py-[220px]">
  <blockquote className="font-serif text-[20px] leading-[1.4] tracking-[-0.01em]">"Quote…"</blockquote>
  <figcaption className="mt-8 flex items-center gap-2.5 text-[15px] text-muted">
    <img src="/avatar.webp" alt="" className="size-10 rounded-lg object-cover grayscale" />
    <span>Name<br />Role at Company</span>
  </figcaption>
</figure>
```
Arrows: 34px circles, `bg-[#e5e5e5] text-white`. Only show a carousel with 2+ different quotes.

## 8. Footer with ASCII field

```jsx
<footer data-theme="dark" className="relative h-screen bg-ink-warm text-white overflow-hidden">
  <AsciiField className="absolute inset-0 opacity-30" />
  <div className="absolute inset-x-11 bottom-11 flex flex-wrap justify-between gap-10">
    <div>
      <p className="font-serif text-[20px] leading-[1.4]">Short sign-off line.<br />Second line.</p>
      <p className="mt-24 text-[13px]">© Brand</p>
    </div>
    <div className="flex gap-20 text-[15px] leading-[28px]">
      {columns.map((c) => (
        <div key={c.title}><p className="text-muted">{c.title}</p>
          {c.links.map((l) => <a key={l.href} href={l.href} className="block">{l.label}</a>)}</div>
      ))}
    </div>
  </div>
</footer>
```

`AsciiField` (canvas, ~40 lines): fill the canvas with a monospace grid of random characters at 11px; per cell, alpha = smooth noise(x, y, t) mapped to 0-0.35; redraw at ~12fps with `requestAnimationFrame`; pause when off-screen (IntersectionObserver) and render a single static frame under reduced motion.
