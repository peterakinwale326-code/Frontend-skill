# Tailwind CSS and CSS Engineering

## Match the installed version

Tailwind directives and configuration differ by major version. Inspect package.json, CSS entry points, and config before copying snippets. Do not mix v3 config assumptions with v4 CSS-first setup.

## Token-first styling

Map semantic project tokens into the existing theme system. Avoid arbitrary hex values and unrelated spacing values throughout components. A deliberate one-off can be valid; a page full of unrelated one-offs is not a system.

## Responsive utilities

Use mobile-first rules where they fit the project. Break at content pressure points. Prefer grid/flex and intrinsic sizing over absolute positioning for primary layout. Use container queries when a component depends on its own available width rather than viewport width.

## Class composition

- Keep classes readable and grouped by layout, spacing, type, color, state, and responsive behavior.
- Use the project's established variant utility for true variants.
- Do not create a generic abstraction for a single use.
- Do not build class names dynamically if the compiler cannot discover them; use explicit maps.
- Avoid contradictory utilities whose winner depends on source order.

## CSS fundamentals

- Use logical properties where useful for RTL/localization.
- Use `minmax(0, 1fr)` in grids where long content could force overflow.
- Use `min-width: 0` on flex/grid children that must shrink.
- Use `aspect-ratio` and intrinsic dimensions to reserve media space.
- Use `clamp()` for fluid type only with sensible bounds and readable line length.
- Use `:focus-visible` without removing focus indication.
- Use reduced-motion media queries.
- Treat hover as enhancement; provide focus and active equivalents.

## Dark mode

Use semantic tokens and test all states in both themes. Do not invert colors mechanically. Check borders, muted text, focus, disabled states, charts, shadows, overlays, and imagery.

## CSS hygiene

Avoid global overrides that affect embedded widgets and third-party components. Scope styles. Keep stacking contexts intentional. Audit z-index rather than continually increasing it. Remove unused declarations after visual changes.
