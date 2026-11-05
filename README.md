# Motion Studio

A full motion studio built from 100% free, open-source tools — 16 GitHub repos covering motion, VFX, 3D, sound and export.

**Brief → scenes → motion → sound → render → launch.**

---

## 1. Plan — brief and scenes

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 02 | **Storyboarder** | Shot planning and animatics | [wonderunit/storyboarder](https://github.com/wonderunit/storyboarder) |

## 2. Motion — 2D animation and video

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 01 | **Remotion** | React video engine — build videos with code | [remotion-dev/remotion](https://github.com/remotion-dev/remotion) |
| 03 | **Anime.js** | Animation timelines and easing | [juliangarnier/anime](https://github.com/juliangarnier/anime) |
| 04 | **Flubber** | Smooth shape morphing | [veltman/flubber](https://github.com/veltman/flubber) |
| 05 | **Pixelorama** | Pixel art and sprite animation | [Orama-Interactive/Pixelorama](https://github.com/Orama-Interactive/Pixelorama) |

## 3. 3D — scenes, worlds and physics

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 06 | **Three.js** | 3D scenes, lighting and cameras | [mrdoob/three.js](https://github.com/mrdoob/three.js) |
| 07 | **PlayCanvas** | Real-time 3D worlds | [playcanvas/engine](https://github.com/playcanvas/engine) |
| 08 | **cannon-es** | 3D physics and collisions | [pmndrs/cannon-es](https://github.com/pmndrs/cannon-es) |
| 09 | **Sverchok** | Procedural geometry inside Blender | [nortikin/sverchok](https://github.com/nortikin/sverchok) |

## 4. VFX — particles and shaders

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 10 | **Effekseer** | Particle effects and stylised VFX | [effekseer/Effekseer](https://github.com/effekseer/Effekseer) |
| 11 | **twigl** | Live shader coding and GIF loops | [doxas/twigl](https://github.com/doxas/twigl) |

## 5. Sound

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 12 | **Bark** | Generative voices and sound | [suno-ai/bark](https://github.com/suno-ai/bark) |
| 13 | **Pedalboard** | Reverb, compression and audio effects | [spotify/pedalboard](https://github.com/spotify/pedalboard) |

## 6. Capture, edit and render

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 14 | **OBS Studio** | Screen capture and recording | [obsproject/obs-studio](https://github.com/obsproject/obs-studio) |
| 15 | **Shotcut** | Timeline editing and finishing | [mltframework/shotcut](https://github.com/mltframework/shotcut) |

## 7. Export and launch

| # | Tool | What it's for | Repo |
|---|------|---------------|------|
| 16 | **FFmpeg** | Encoding, compression and delivery | [FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg) |

---

## Pipeline at a glance

```
Brief ─► Storyboarder ─► Remotion / Anime.js / Flubber / Pixelorama
                              │
                              ├─► Three.js / PlayCanvas / cannon-es / Sverchok (3D)
                              ├─► Effekseer / twigl (VFX)
                              └─► Bark / Pedalboard (sound)
                                        │
                     OBS (capture) ─► Shotcut (edit) ─► FFmpeg (render & deliver) ─► Launch
```

## Notes

- **Desktop apps** (install and run): Storyboarder, Pixelorama, Effekseer, OBS Studio, Shotcut.
- **Code libraries** (JavaScript): Remotion, Anime.js, Flubber, Three.js, PlayCanvas, cannon-es.
- **Python**: Bark, Pedalboard.
- **Blender add-on**: Sverchok.
- **Browser-based**: twigl.
- **Command line**: FFmpeg.
