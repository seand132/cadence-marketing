#!/bin/bash
# Render a Cadence LinkedIn carousel campaign to 1080x1080 PNGs.
#
# Usage:
#   ./render.sh <campaign-folder-name>
#   ./render.sh 2026-04-25-tuesday-247
#
# Inputs:  campaigns/<name>/slide{1..N}.html  (referencing ../../base.css)
# Outputs: ../../public/brand/linkedin-<name>/slide-{1..N}.png
#
# Why the unusual viewport: Chrome headless reserves ~160px even with
# --headless=new. We render at 1080x1240, then crop the top-left 1080x1080
# with PIL (sips with default centering crops from the wrong side).

set -e
CAMPAIGN="${1:?usage: render.sh <campaign-folder-name>}"
DIR="$(cd "$(dirname "$0")" && pwd)"
SRC="$DIR/campaigns/$CAMPAIGN"
OUT="$DIR/../../public/brand/linkedin-$CAMPAIGN"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -d "$SRC" ]; then
  echo "campaign folder not found: $SRC" >&2
  exit 1
fi

mkdir -p "$OUT"
SLIDES=("$SRC"/slide*.html)
N="${#SLIDES[@]}"
echo "rendering $N slides from $CAMPAIGN to $OUT"

for slide in "${SLIDES[@]}"; do
  name="$(basename "$slide" .html)"   # slide1, slide2, ...
  i="${name#slide}"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --no-default-browser-check --no-first-run \
    --virtual-time-budget=2000 \
    --window-size=1080,1240 \
    --force-device-scale-factor=1 \
    --screenshot="$OUT/raw-$i.png" \
    "file://$slide" 2>/dev/null
done

# Crop top-left 1080x1080 with Python (predictable, unlike sips default)
python3 - "$OUT" "$N" <<'PY'
import sys, os
from PIL import Image
out, n = sys.argv[1], int(sys.argv[2])
for i in range(1, n + 1):
    src = os.path.join(out, f"raw-{i}.png")
    if not os.path.exists(src):
        continue
    dst = os.path.join(out, f"slide-{i}.png")
    img = Image.open(src)
    img.crop((0, 0, 1080, 1080)).save(dst, "PNG", optimize=True)
    os.remove(src)
    print(f"  slide-{i}.png  ({os.path.getsize(dst)} bytes)")
PY
