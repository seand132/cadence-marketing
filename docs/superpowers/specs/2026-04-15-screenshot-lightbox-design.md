# Screenshot lightbox design

**Date:** 2026-04-15
**Status:** Approved

## Summary

Add click-to-expand behavior to all 8 product screenshots on the features page. Clicking a screenshot opens it in a centered modal overlay at ~85% viewport width. Clicking anywhere or pressing Escape closes it. No third-party dependencies.

## Decisions

| Question | Decision |
|---|---|
| Navigation | Single image only — no arrows, no cycling |
| Size | 85% viewport width, max 90% viewport height |
| Close trigger | Click overlay, click image, or Escape key |
| Browser chrome | Preserved inside modal (dots + URL bar) |
| Approach | Custom React client component, no new packages |

## Component

**File:** `src/components/ScreenshotLightbox.tsx`

A `'use client'` component that wraps a single screenshot. Renders:

1. A clickable container around the screenshot with `cursor: pointer` and a subtle hover effect (slight brightness increase or scale)
2. A modal overlay (fixed, full-viewport, dark semi-transparent background) when the image is selected, containing:
   - The browser frame chrome (traffic light dots + URL bar) matching the existing style
   - The screenshot image at 85% viewport width, max 90% viewport height, `object-fit: contain`
   - A close button (×) in the top-right corner of the modal
3. Fade-in animation via CSS transition (~150ms opacity)

**Props:**
```ts
{
  src: string        // image path, e.g. "/screenshots/dashboard.png"
  alt: string        // image alt text
  url: string        // address bar text shown in the browser chrome
}
```

**Close behavior:**
- Click the overlay background → close
- Click the × button → close
- Press Escape → close (useEffect event listener, cleaned up on unmount)
- Click the image itself does NOT close (prevents accidental dismiss)

## Integration

The features page (`src/app/features/page.tsx`) is a server component. Each existing browser-frame block gets replaced with `<ScreenshotLightbox>` passing `src`, `alt`, and `url`. The page itself does not need `'use client'`.

There are 9 screenshot instances across the features page (8 unique images, with dashboard.png appearing twice — once in the feature section, once in a hero/preview area). All 9 get wrapped.

## What we are not adding

- Arrow navigation between screenshots
- Zoom controls
- Download button
- Caption or title text beyond the URL bar
- Any third-party lightbox library
