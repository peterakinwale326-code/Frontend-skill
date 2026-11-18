# Motion System: Purpose, Timing, Physics, and Performance

Motion is interaction feedback and spatial explanation. It is not decoration applied uniformly to a page.

## Decide whether motion belongs

For every animation answer: what state/relationship does it communicate; what event starts it; how often users see it; can it be interrupted; does it delay a task; what happens under reduced motion? If there is no useful answer, remove it.

## Frequency budget

- **Very frequent:** focus, selection, typing, toggles, repeated list actions. Instant or extremely subtle.
- **Frequent:** opening menus, switching tabs, expanding disclosures. Short transitions that do not slow repeated work.
- **Occasional:** dialogs, route changes, task completion. A little spatial context may help.
- **Rare/expressive:** onboarding or brand moment. More deliberate motion may be justified if skippable and accessible.

The user should not wait for routine animation before continuing work.

## Motion vocabulary

Feedback, transition, continuity, hierarchy, spatial orientation, expression. A chart animating from zero can imply false data history; a spinner is not progress. Movement must communicate something.

## Timing and easing

Use a small project-specific scale. As a starting point, tiny feedback often belongs around 100–160ms, common surface transitions around 150–240ms, and larger view changes around 200–320ms. These are starting ranges, not universal rules. Test perceived latency and interaction frequency.

- Enter: often ease-out.
- Exit: often ease-in.
- Continuous movement: coherent curve or spring suited to the physical model.
- Avoid routine overshoot unless it communicates a physical response.
- Avoid long delays before motion begins.

## Implementation choices

- CSS transitions for simple state changes.
- Keyframes for finite, non-interactive sequences.
- Motion library for orchestration, layout continuity, gestures, or spring physics when justified.
- Prefer transform and opacity; animating layout dimensions may trigger costly reflow.
- Avoid forced synchronous layout from read/write interleaving.
- Keep motion interruptible and synchronized with application state.

## Interaction details

Press feedback should not move layout. Hover is supplemental. Popovers originate from triggers and reposition near viewport edges. Drag follows pointer/finger and has clear completion/cancel thresholds. Sheets respond to interruption and settle to a stable state. Do not animate disabled controls as if usable.

## Reduced motion

Use `prefers-reduced-motion: reduce` and library-level support. Remove nonessential parallax, loops, large transforms, and spatial travel. Preserve understandable state changes through instant changes, opacity, borders, icons, or text. Test this path.

## Anti-patterns

No constant floating, unnecessary bounce, cursor trails, tilt cards, autoplaying carousels, endless shimmer, scroll-fade on every section, or fake progress. Do not add a motion library for one opacity transition. Do not animate all content on every route change.

## Review

Inspect normal and reduced motion. Test keyboard, touch, rapid repeated actions, interruption, low-end devices, and route changes mid-animation. Confirm no layout shift, invisibility, focus loss, or input delay.
