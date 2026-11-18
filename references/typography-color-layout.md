# Typography, Color, and Layout Foundations

Use these foundations to build a coherent system. Values below are starting structures, not universal brand prescriptions.

## Typography

### Define roles before sizes

Use roles such as display, page-title, section-title, body, body-small, label, caption, code, and numeric. For each role define family, weight, size, line-height, letter spacing, and responsive behavior.

### A practical type scale

A compact scale might use a base of 16px with supporting sizes near 12, 14, 16, 18, 20, 24, 30, 36, 48, and 64px. Do not use every step on every page. Choose a small subset that creates clear hierarchy. Large display sizes must wrap gracefully at 320–390px widths.

### Readability rules

- Body copy commonly sits around 16–18px on web; smaller text needs a clear reason and sufficient contrast.
- Long-form reading needs comfortable line length; avoid full-width paragraphs on large screens.
- Use line-height that supports the font and content; dense data labels may need tighter leading than prose.
- Avoid long passages in all caps.
- Use tabular numerals for prices, metrics, timestamps, and aligned columns.
- Load only required font weights and subsets. Use robust fallback stacks.
- Do not pair fonts by trend. Pair for contrast and legibility, then verify real text.

## Color

### Semantic roles

Define canvas, surface, raised surface, text-primary, text-secondary, muted text, border, divider, action, action-foreground, focus, success, warning, danger, and info. Add chart/category colors only when data requires them.

### Palette construction

Choose a brand anchor based on product and audience. Build supporting neutrals and status colors around it. Check hue, chroma, and lightness relationships; perceptually uniform spaces such as OKLCH can make ramps easier to reason about. Do not assume a mathematically regular ramp will automatically meet contrast.

### State matrix

Validate each semantic role in light and dark themes and for default, hover, active, disabled, selected, focus, error, and high-contrast contexts. Check text, icons, boundaries, focus rings, chart marks, and overlays. Color must not be the only signal.

## Layout

### Grid and measure

- Set a maximum reading width for prose.
- Use a responsive page container and consistent gutters.
- Align page title, body, tables, and section edges intentionally.
- Use CSS Grid for two-dimensional structure and Flexbox for one-dimensional alignment.
- Use intrinsic sizing and `minmax(0, 1fr)` to prevent content-driven overflow.
- Use container queries when a component's own width determines its layout.
- Use logical properties when supporting RTL or localization.

### Spacing

Use a compact base spacing scale and repeat it. Larger gaps should be multiples or deliberate semantic steps. Avoid arbitrary margins on every component. Space related items closer than unrelated groups.

### Density

Choose density based on user expertise and task frequency. Dense admin screens need alignment, scanability, and keyboard support—not tiny text. Consumer flows need comfortable touch spacing. Do not make all pages equally sparse or equally dense.

### Geometry and elevation

Keep radii consistent and nested. Use borders and tonal surfaces before adding multiple shadows. Avoid stacking translucent panels and blur effects. Keep z-index levels documented by purpose.

## Design token review

- [ ] Every token has a semantic purpose.
- [ ] Components consume semantic tokens rather than raw palette values.
- [ ] Typography roles cover actual product needs.
- [ ] Text measure and line wrapping are checked at narrow and wide widths.
- [ ] Contrast is validated across themes and states.
- [ ] Spacing and radii are consistent.
- [ ] No unused or duplicate token families remain.
