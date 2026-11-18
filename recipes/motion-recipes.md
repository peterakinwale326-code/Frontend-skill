# Motion Recipes for Common UI Interactions

These are implementation starting points. Use the project's existing motion system and tune against actual content, frequency, device performance, and reduced-motion preferences.

## CSS timing tokens

```css
:root {
  --motion-fast: 120ms;
  --motion-standard: 180ms;
  --motion-slow: 260ms;
  --ease-enter: cubic-bezier(.16, 1, .3, 1);
  --ease-exit: cubic-bezier(.7, 0, .84, 0);
}

.button {
  transition:
    background-color var(--motion-fast) ease,
    border-color var(--motion-fast) ease,
    transform var(--motion-fast) ease;
}

.button:active {
  transform: translateY(1px);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

The global reduced-motion rule above is a broad fallback; prefer component-level alternatives when the project has complex animation or needs to preserve essential transitions.

## Disclosure / accordion

Animate opacity and a bounded height only when it does not create layout jank. Keep the content in the accessibility tree according to the component's open state. Use a real button with `aria-expanded` and `aria-controls`. Respect reduced motion.

## Popover

Use a short opacity/scale entrance from the trigger origin. Position with an established popover primitive so it can flip or shift near viewport edges. Do not hand-code collision handling for a production menu.

## Dialog

Use a restrained backdrop fade and a small transform from the trigger/center. Focus management, Escape behavior, background inertness, and focus restoration are more important than the animation. Close immediately for reduced-motion users.

## Route/view transition

Use only when continuity helps users understand where content went. Do not animate the entire page on every navigation. Avoid delaying interactive readiness until a transition finishes.

## Drag and sheet gestures

Use pointer/touch-aware primitives or a well-tested gesture library. Track actual gesture position, allow interruption, use velocity/threshold rules that feel predictable, and provide non-drag controls. Ensure the sheet can be operated by keyboard and screen reader.

## Staggered lists

Stagger only a small number of meaningful items and only when the list is short and newly introduced. Do not stagger every row in a large data table or every route render. The content should remain visible if animation is disabled.

## Loading

Use skeletons when the final layout is known and the wait is meaningful. Use a spinner for short indeterminate waits. Use progress only when progress can be measured. Never animate fake percentages.

## Review

Test normal/reduced motion, keyboard, touch, rapid repeat, interruption, slow device, and route changes mid-animation. Remove motion that competes with reading or delays common actions.
