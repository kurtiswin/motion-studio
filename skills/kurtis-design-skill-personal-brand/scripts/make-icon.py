#!/usr/bin/env python3
"""Turn a logo into a small link icon (PNG).
  python3 make-icon.py wordmark in.png out.png   # whole wordmark across a black square (favicon style), white on black logos
  python3 make-icon.py mark in.png out.png       # square crop around a light mark on a dark background
  python3 make-icon.py badge in.jpg out.png      # round badge on a light background, cut to a circle
Options: --size 160 (output px), --fill 0.92 (share of the square the wordmark spans)."""
import sys
from PIL import Image, ImageDraw
import numpy as np

args = sys.argv[1:]
size = int(args[args.index('--size') + 1]) if '--size' in args else 160
fill = float(args[args.index('--fill') + 1]) if '--fill' in args else 0.92
mode, src, out = args[0], args[1], args[2]

def bbox(mask):
    ys, xs = np.where(mask)
    return xs.min(), ys.min(), xs.max(), ys.max()

def square(im, cx, cy, side):
    return im.crop((int(cx - side / 2), int(cy - side / 2), int(cx + side / 2), int(cy + side / 2)))

if mode in ('wordmark', 'mark'):
    g = np.array(Image.open(src).convert('L'))
    h, w = g.shape
    g[int(h * .88):, int(w * .88):] = 0          # ignore corner watermarks/sparkles
    x0, y0, x1, y1 = bbox(g > 128)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    side = (x1 - x0) / fill if mode == 'wordmark' else max(x1 - x0, y1 - y0) * 1.18
    im = square(Image.fromarray(g), cx, cy, side).resize((size, size), Image.LANCZOS).convert('RGB')
    im.save(out)
elif mode == 'badge':
    im = Image.open(src).convert('RGB')
    x0, y0, x1, y1 = bbox(np.array(im.convert('L')) < 90)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    b = square(im, cx, cy, max(x1 - x0, y1 - y0)).resize((size, size), Image.LANCZOS)
    m = Image.new('L', (size * 4, size * 4), 0)
    ImageDraw.Draw(m).ellipse((0, 0, size * 4 - 1, size * 4 - 1), fill=255)
    o = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    o.paste(b, (0, 0), m.resize((size, size), Image.LANCZOS))
    o.save(out)
else:
    sys.exit(__doc__)
print(out)
