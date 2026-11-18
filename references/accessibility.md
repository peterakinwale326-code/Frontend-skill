# Accessibility and Inclusive Interaction

Treat accessibility as product quality. Use WCAG 2.2 AA as a practical target, while being precise about what has and has not been tested.

## Semantics first

- Use landmarks (`header`, `nav`, `main`, `footer`) and logical heading structure.
- Use anchors for navigation and buttons for actions.
- Prefer native controls unless a custom control has a strong need and a complete interaction model.
- Give every control an accessible name. Associate labels, descriptions, and errors programmatically.
- Mark decorative imagery decorative; give informative imagery concise contextual alt text.
- Do not use ARIA to recreate semantics already provided by HTML.

## Keyboard behavior

Every interactive element must be keyboard reachable. Focus order follows visual/reading order. Provide visible, unobscured `:focus-visible` styling. Do not trap focus except in a true modal. Support Escape and focus restoration where expected. Avoid keyboard traps in custom menus, tabs, comboboxes, and drag interactions.

## Visual access

Check contrast for text, controls, icons, boundaries, focus indicators, and state changes. Do not communicate meaning by color alone. Support zoom and text resizing without clipping or loss of function. Prefer live text to text embedded in images.

## Motion and sensory needs

Respect `prefers-reduced-motion`. Reduce nonessential movement, parallax, large spatial transitions, and autoplay. Keep state feedback understandable through instant changes, borders, icons, or text. Avoid flashing content. Provide pause/stop controls for moving content when required.

## Dynamic updates

Use live regions sparingly. Announce meaningful save/error/status updates without reading every keystroke or render. Do not steal focus for background updates. Ensure validation errors are discoverable and linked to fields.

## Interaction contracts

- **Dialog:** name, description if needed, initial focus, modal containment, Escape, close control, focus restoration.
- **Menu:** trigger state, keyboard navigation, item semantics, Escape, restoration.
- **Tabs:** selected state, tab/panel relationship, arrow-key movement, mobile fallback.
- **Combobox:** input name, expanded state, active/selected option, loading and no-results announcements.
- **Toast:** concise status; critical errors must not disappear before users can read them.
- **Drag/drop:** provide a keyboard or non-drag alternative.

## Test sequence

1. Keyboard-only pass.
2. Screen-reader spot-check for core journeys.
3. Browser zoom and text enlargement.
4. Contrast checks for theme/state pairs.
5. Reduced-motion pass.
6. Automated checks such as axe where available.
7. Manual review of reading order, label usefulness, task clarity, and error recovery.

Automated green checks do not prove conformance. Record manual coverage and unresolved issues.
