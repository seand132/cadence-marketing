# Cadence LinkedIn Carousel Production

Scaffold for producing brand-aligned LinkedIn carousel ads. Each campaign is a folder of HTML slides plus a post-copy file. `render.sh` rasterises them to 1080×1080 PNGs ready to upload to LinkedIn Campaign Manager.

## Folder structure

```
marketing/scripts/carousel/
├── README.md                 ← this file
├── base.css                  ← reusable brand stylesheet (fonts, tokens, layout primitives)
├── render.sh                 ← reusable headless-Chrome render script
├── fonts/                    ← DM Sans + Source Sans 3 TTFs (referenced by base.css)
└── campaigns/
    └── <yyyy-mm-dd-slug>/
        ├── slide1.html       ← references ../../base.css
        ├── slide2.html
        ├── ...
        └── post-copy.md      ← LinkedIn body text + story-arc table
```

Renders land at `marketing/public/brand/linkedin-<yyyy-mm-dd-slug>/slide-{1..N}.png`.

## To render an existing campaign

```bash
cd marketing/scripts/carousel
./render.sh 2026-04-25-tuesday-247
```

## To start a new campaign

1. Create a new campaign folder named `<yyyy-mm-dd>-<slug>/` under `campaigns/`.
2. Copy slides from a prior campaign as a starting scaffold and edit copy/layout.
3. Each slide HTML must reference `../../base.css` and follow the layout primitives below.
4. Run `./render.sh <campaign-folder-name>` to produce the PNGs.
5. Write `post-copy.md` alongside the slides — body text, hashtags, story-arc table.

## Brand discipline (non-negotiable, from `cadence-brand-guidelines.pdf` v2.0)

- **Surfaces:** Cadence Cream `#F5F0E8` for light slides, Cadence Charcoal `#2C2C2C` for dark.
- **Accent:** Cadence Amber `#C8782A`. Used for the eyebrow tag, the bars motif, accented headline phrases, and the top/bottom 12px stripes that frame every slide.
- **Type:** DM Sans (UI/headings) + Source Sans 3 (body/long-form). Never Inter, Roboto, Arial, system-ui.
- **Logomark:** four amber bars in the canonical short/tall/medium/short-medium pattern (rect coords in `slide{1,4,8}.html`). Never recolour individual bars; never stretch, skew, or rotate.
- **Surface rhythm:** alternate cream and charcoal slides for visual cadence. Typical 8-slide arc opens cream, flips dark on the diagnosis beat, returns cream for product slides, closes dark.
- **Spacing:** 80–96 px outer padding, generous breathing room. The brand guideline literally says "padding and margins are larger than you think they need to be."

## Layout primitives in `base.css`

| Class | Purpose |
|---|---|
| `.slide` / `.slide.dark` | 1080×1080 frame; sets surface colour |
| `.stripe-top` / `.stripe-bot` | Absolute-positioned 12px amber stripes (top/bottom of every slide) |
| `.body` | Inset content area with `position: absolute` framing |
| `.eyebrow` | All-caps amber tag, DM Sans Semibold, letter-spacing 4px |
| `.top-row` | Flex row (`align-items: center`) for eyebrow + bars-motif row |
| `.headline` | Hero text — extend with slide-specific font-size in slide CSS |
| `.screenshot-frame` | White rounded card with soft shadow for product screenshots |

Slide-specific styling (font sizes, layout grid, special components like the calendar mockup) lives inline in each `slide<N>.html` `<style>` block. Keep `base.css` for shared primitives only.

## Story patterns that work

Pattern from the Tuesday-247 campaign — generalisable:

```
moment  →  setup  →  tension  →  diagnosis  →  product (×3)  →  close
 cream     cream     cream      CHARCOAL      cream            CHARCOAL
```

The light/dark flip on the diagnosis slide is a tactile rhythm change — the carousel itself enacts the brand promise.

Voice constraints (from `marketing/CLAUDE.md`):
- No em dashes anywhere.
- No exclamation points (max 1 per post).
- No "we're excited to announce", no "leverage / synergy / unlock / game-changing / disruptive."
- Narrator: warm mentor, not cheerful, not corporate.

## Real product screenshots

Use real captures from `marketing/public/screenshots/`, not CSS mockups. Existing captures (1280×800) refresh by running:

```bash
cd marketing && node scripts/capture-screenshots.mjs
```

The script logs into the demo account at `app.cadencehq.co` (creds in the script) and captures all primary screens.

In a slide, frame the screenshot in a rounded white card with a soft shadow:

```html
<div class="screenshot-frame">
  <img src="../../../../public/screenshots/one-on-one-detail.png">
</div>
```

## Headless Chrome gotcha (don't lose hours to this)

Chrome's `--headless=new --window-size=1080,1080` reserves about 160 px for browser chrome internally — your viewport ends up at ~1080×920 and the bottom of every slide gets clipped. Render at `1080,1240` and crop the top-left 1080×1080. Use Python PIL to crop, not `sips` (`sips -c` centers by default and crops from the wrong side).

`render.sh` handles this. Don't change the window size unless you also change the crop.

## LinkedIn upload checklist

- [ ] Each slide is exactly 1080×1080 PNG, under 10 MB.
- [ ] First slide hook reads on mobile before "see more" (≤ 140 chars equivalent in visual hook).
- [ ] CTA button configured separately in Campaign Manager — never put the URL in the post body.
- [ ] Destination URL has UTM parameters for attribution.
- [ ] Audience targeting set: small-team managers (1–10 reports), service operations, no enterprise filters.

## Past campaigns

| Date | Slug | Theme |
|---|---|---|
| 2026-04-25 | `tuesday-247` | "Tuesday 2:47pm" — day-in-the-life tension piece, sponsored debut |
