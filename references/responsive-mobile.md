# Responsive and Mobile Engineering

Responsive design is not desktop layout scaled down. It is deliberate rearrangement of information and controls for viewport, input, and attention constraints.

## Test widths as content pressure points

Inspect around 360, 390, 430, 768, 1024, 1280, and 1440 CSS px, plus a short landscape viewport where relevant. These are test points, not mandatory CSS breakpoints. Choose breakpoints when content stops fitting well.

## Mobile browser details

- Prefer `min-height: 100dvh` with a fallback over assuming `100vh` equals the visible viewport.
- Respect `env(safe-area-inset-*)` for edge-to-edge layouts.
- Prevent sticky hover styles on touch devices.
- Keep tap targets comfortably large; aim for roughly 44×44 CSS px where practical and meet applicable WCAG target-size requirements.
- Use correct input types, `autocomplete`, and `inputmode` to request useful keyboards.
- Avoid fixed bottom bars covering content or keyboard controls.
- Do not hijack normal page scroll for carousels or pull-to-refresh gestures.
- Test actual touch behavior, not only device emulation.

## Navigation

Choose drawer, bottom navigation, or compact top navigation based on destination count and task frequency. Preserve current location and a clear route back.

## Content and layout

- Reflow columns into a meaningful reading order.
- Keep text columns readable.
- Let controls wrap or stack rather than overflow.
- Keep primary actions reachable without precision tapping.
- Give dense tables a prioritized row/detail pattern or deliberate scroll region.
- Ensure dialogs/sheets fit short screens and actions remain visible.
- Do not hide critical information just to make a screenshot clean.
- Test long labels, localization, zoom, and text enlargement.

## Responsive media

Use correct `srcset`/`sizes` or framework image components. Reserve dimensions/aspect ratios to prevent layout shift. Art-direct crops when the mobile crop changes the subject or focal point. Lazy-load below-the-fold images; do not lazy-load the likely LCP hero image.

## PWA / installed behavior

If installable, inspect status bar theme, safe areas, standalone navigation, offline behavior, update behavior, and back navigation. Do not claim offline support without tested caching and recovery.

## Mobile acceptance

Test at least one real iOS or Android device where available. Verify tap, long press, scroll, keyboard open/close, orientation, browser chrome changes, safe areas, focus, and text scaling. Responsive screenshots are necessary but not sufficient.
