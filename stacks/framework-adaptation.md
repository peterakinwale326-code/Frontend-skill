# Framework Adaptation Guide

The master skill is framework-agnostic. Follow the architecture and idioms of the project that actually exists. Do not transplant React patterns into other frameworks without adapting state, lifecycle, routing, and rendering.

## React / Next.js

See `stacks/react-nextjs.md`. Keep server rendering as the default where supported, use narrow client boundaries, preserve route/data contracts, and verify production behavior.

## Vue

- Use the existing Composition API or Options API convention consistently.
- Keep reactive state scoped to the feature that owns it.
- Avoid deep watchers when computed values or explicit events are clearer.
- Use semantic templates and accessible native controls.
- Preserve route guards and server-side authorization; client route guards are not a security boundary.
- Test transitions and lifecycle cleanup so subscriptions and requests do not leak.

## Svelte / SvelteKit

- Use the project's current Svelte version and syntax; do not mix version-specific examples.
- Keep server-only data and secrets out of browser code.
- Use form actions/load functions according to the established SvelteKit architecture.
- Model pending, invalid, success, and failure states explicitly.
- Clean up subscriptions and browser event listeners.
- Keep transitions purposeful and respect reduced motion.

## Astro

- Prefer static/server-rendered content for pages that do not need client interaction.
- Add islands only for genuinely interactive regions.
- Keep hydration scope small and choose the correct client directive based on when interaction is needed.
- Avoid hydrating a whole marketing page to support one menu.
- Verify server endpoints and secrets remain server-side.

## Static HTML / CSS / JavaScript

- Use semantic HTML first.
- Keep scripts small and scoped; avoid global event handlers and DOM queries that depend on fragile structure.
- Use progressive enhancement where feasible.
- Provide functional behavior without relying on animation.
- Validate with keyboard and real browser interaction.

## React Native / native mobile

Do not assume web CSS, DOM semantics, or browser focus behavior applies. Use native platform components and accessibility APIs. Respect platform navigation, keyboard, safe areas, touch target expectations, and system reduced-motion settings. Test on physical devices. For gesture/animation-heavy work use platform-appropriate libraries and preserve interruption and accessibility.

## Cross-framework rule

Inspect the installed versions, routing/data model, styling system, and test setup. Follow current official docs for version-specific APIs. Preserve existing project conventions and dependencies. Never add a second framework or design system to solve a local visual issue.
