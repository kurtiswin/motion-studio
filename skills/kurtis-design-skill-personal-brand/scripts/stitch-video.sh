#!/usr/bin/env bash
# Join clips (in the order given) into one silent, looping, web-ready MP4 plus a poster frame.
#   bash stitch-video.sh out.mp4 clip1.mov clip2.mov ...
# Each clip is scaled to 1280x960 (4:3, matching DJI 2880x2160). Change W/H for other shapes.
set -euo pipefail
out=$1; shift
W=${W:-1280}; H=${H:-960}; FPS=${FPS:-24000/1001}; CRF=${CRF:-27}
inputs=(); filters=""; labels=""
i=0
for f in "$@"; do
  inputs+=(-i "$f")
  filters+="[$i:v]scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1,fps=${FPS}[v$i];"
  labels+="[v$i]"; i=$((i+1))
done
ffmpeg -v error -y "${inputs[@]}" -filter_complex "${filters}${labels}concat=n=${i}:v=1:a=0,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -preset slow -crf "$CRF" -profile:v high -movflags +faststart "$out"
ffmpeg -v error -y -i "$out" -frames:v 1 -q:v 4 "${out%.*}-poster.jpg"
echo "$out ($(du -h "$out" | cut -f1), $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$out")s) + ${out%.*}-poster.jpg"
