# Design Decision Engine

Use this guide to choose a pattern instead of defaulting to a fashionable component.

## Should this be a card?

Use a card when content is a distinct object users compare, select, or act on. Use a plain section, list, or table when that is clearer. If every element is in a card, remove some backgrounds and check whether hierarchy improves.

## Should this be a modal?

Use a modal for a focused decision/task that must interrupt the current context. Prefer inline editing, a dedicated route, or a side panel for long forms, complex workflows, or content users need to compare with the underlying page.

## Should this be a chart?

Use a chart when trend, distribution, or comparison is easier to understand visually. Use a table for exact values. Use a single metric only when definition, unit, and timeframe are clear.

## Should this animate?

Animate when movement communicates state, relationship, cause/effect, or feedback. Keep routine interactions short. Remove motion that delays input, distracts from content, or cannot be interrupted.

## Should this be sticky?

Use sticky positioning when persistent context/actions materially help a long task. Ensure it does not obscure content, keyboard focus, mobile browser chrome, or virtual keyboard.

## Should this be custom?

Use native HTML when sufficient. Use a tested accessible primitive when custom interaction is genuinely necessary. Do not build a custom combobox, date picker, menu, or drag interaction from scratch without a compelling reason and complete test coverage.

## Should this be dark?

Choose theme from brand, environment, content, and user preference. Dark is not a synonym for premium or developer-focused. If both themes exist, test the complete token/component state matrix.

## Should this use 3D/WebGL/shaders?

Only when the subject benefits from spatial visualization or the user explicitly requests it. Consider load cost, device support, reduced motion, battery, accessibility, fallback content, and whether a static diagram communicates better. GPU effects are not a substitute for a visual idea.

## Should this add a dependency?

Only when it solves a real need better than existing primitives. Compare accessibility, maintenance, license, bundle cost, customization, and team familiarity. Add the smallest useful dependency surface.

## Should this add a token?

Only for a repeated semantic need or a documented design decision. Prefer existing semantic roles. Do not tokenize one-off values with no shared meaning.
