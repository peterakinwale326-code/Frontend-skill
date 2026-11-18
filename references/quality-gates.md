# Quality Gates: Accessibility, Responsive UX & Release

## Responsive matrix
Inspect around 360–390, 430, 768, 1024, 1280, and 1440 CSS px. Check landscape where relevant. Look for horizontal overflow, clipped labels, poor line wraps, inaccessible menus, undersized targets, and desktop layouts that merely shrink instead of reflow.

## Accessibility baseline
Use WCAG 2.2 AA as a practical target: semantic landmarks and logical headings; keyboard access and visible unobscured focus; accessible names and programmatic labels; associated error text; dialog focus management; expected menu/tab keyboard behavior; meaningful alt text; contrast for text, controls, focus, charts, and states; no color-only status communication; reduced motion, zoom, text resizing, and sensible screen-reader order. Do not claim conformance without testing.

## Required UI states
Consider default, hover, focus, active, disabled, loading, empty, error, success, validation, permission-denied, offline, and stale-data states. Preserve input on recoverable failures. Provide retry and undo paths where appropriate.

## UX patterns
Search needs query persistence, clear filters, result count, useful no-results state, and keyboard support. Forms need labels, validation, autofill, pending state, recovery, and confirmation. Tables need appropriate sorting/filtering/pagination, bulk actions, and responsive presentation. Destructive actions explain consequences; confirm deliberately when undo is impossible. Long operations need honest progress and cancellation where possible. Notifications are concise and actionable. Offline/slow network preserves user work.

## Performance
Optimize image sizes/formats, reserve media dimensions, lazy-load noncritical content, load only needed font weights, avoid unnecessary client JavaScript, and test lower-powered devices. Heavy effects must degrade gracefully.

## Release checklist
- [ ] Main user task works end-to-end.
- [ ] Design tokens and component patterns are consistent.
- [ ] Real content is used; no fake claims or placeholder copy remains.
- [ ] Phone, tablet, laptop, and wide layouts are checked.
- [ ] Keyboard, focus, labels, contrast, and reduced motion are checked.
- [ ] Empty/loading/error/success states are handled.
- [ ] Navigation and forms are exercised.
- [ ] Images load without layout shifts.
- [ ] No horizontal overflow or clipped controls.
- [ ] No newly introduced console errors.
- [ ] Lint, typecheck, tests, and build run where available.
- [ ] Unverified areas and limitations are reported honestly.
