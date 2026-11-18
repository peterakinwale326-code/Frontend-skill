# Design System and Page Patterns

Build the smallest coherent system that can express the product. A token system maps design intent to implementation; it is not a warehouse of arbitrary variables.

## Three token layers

1. **Primitive:** raw color ramps, spacing units, font families, radii, shadows, durations.
2. **Semantic:** purpose such as `surface`, `text-primary`, `border-subtle`, `action-primary`, `status-danger`.
3. **Component:** component-specific roles only when semantic tokens are insufficient, such as `dialog-shadow` or `table-row-selected-bg`.

Do not expose raw palette names throughout component code. Semantic tokens allow theme changes without rewriting every component.

## Token rules

- Start with a compact spacing and type scale; extend only for real needs.
- Use semantic color roles, not color names, inside components.
- Define focus, disabled, error, and status colors explicitly.
- Map dark mode independently; do not invert every color.
- Keep nested radii coherent.
- Express depth through tonal surfaces, borders, and restrained shadows.
- Document token purpose; remove unused tokens.
- Add a token only for a repeated semantic need or a deliberate documented decision.

Example structure (not a universal palette):

```css
:root {
  --gray-0: oklch(100% 0 0);
  --gray-900: oklch(22% 0.015 260);
  --blue-600: oklch(54% 0.18 255);
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --radius-sm: .375rem;
  --radius-md: .625rem;

  --color-canvas: var(--gray-0);
  --color-surface: white;
  --color-text: var(--gray-900);
  --color-text-muted: oklch(48% 0.02 260);
  --color-border: oklch(90% 0.01 260);
  --color-action: var(--blue-600);
}

[data-theme="dark"] {
  --color-canvas: oklch(16% 0.012 260);
  --color-surface: oklch(19% 0.014 260);
  --color-text: oklch(96% 0.005 260);
  --color-text-muted: oklch(72% 0.015 260);
  --color-border: oklch(31% 0.015 260);
}
```

Validate actual foreground/background pairs in all themes and states. This sample requires brand and contrast tuning.

## Typography

Define display, page title, section title, body, supporting text, label, caption, and code roles. Specify size, line-height, weight, letter spacing, and responsive behavior. Limit families and load only needed weights/subsets. Use tabular numerals for metrics and aligned data. Do not use monospace, italics, uppercase, or letter spacing as generic decoration.

## Page patterns should follow the job

### Marketing/product
Answer: what is it, who is it for, what problem does it solve, how does it work, what evidence supports it, what should I do next? This is a sequence of questions, not a mandatory template. Remove sections that do not answer a real buyer question. Show the actual product or service when possible.

### Application shell
Define navigation hierarchy, workspace/account context, global actions, page title, breadcrumbs where useful, and a stable content region. Do not duplicate navigation in the page body. On mobile choose drawer, bottom navigation, or compact top navigation based on destination count and task frequency.

### Dashboard
Prioritize current state and scope, exceptions requiring action, trends that change a decision, then supporting detail. Answer “what changed?”, “what needs attention?”, and “what can I do next?” Avoid vanity metric walls. Every chart needs a title, unit, time range, labels, and useful empty state.

### Data table / operations
Include object name, useful filters, search where needed, result count, sort state, row actions, and a no-results recovery path. Align columns by data type. Do not make every cell a badge. On narrow screens use prioritized row summaries and detail views or a deliberate scroll region.

### Settings
Group by user mental model: account, workspace, security, notifications, billing, integrations. Show current value and scope. Explain consequential settings. Distinguish auto-save from explicit save.

### Forms and multi-step flows
Collect only necessary information. Group fields by task. Preserve values after errors. Explain requirements before submission. Use progress indicators only when steps are real and stable. Allow back navigation without losing work.

### Learning/content
Orient users to where they are, what they will do, what is required, and how to resume. Prioritize readable content, examples, practice, and meaningful progress rules over decorative rings.

## Composition

Establish a focal point and reading path. Align major edges. Use whitespace to group information; do not turn every sentence into a card. Give each decision area one dominant action. Vary section composition when the content changes, not just to create motion. A page must remain understandable if images fail to load.

## Component contract

For every reusable component document purpose, anatomy, variants, states, keyboard behavior, responsive behavior, and content constraints. Prefer composition over dozens of boolean props. A component is not done when its default screenshot looks right; its states and interactions must also be predictable and tested.
