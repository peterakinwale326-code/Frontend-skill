# React and Next.js Engineering Guide

This guide is version-aware, not version-assumptive. Inspect installed React/Next.js versions and current project conventions before using version-specific APIs.

## Architecture

- Follow the existing App Router or Pages Router convention; do not mix them casually.
- Keep server-rendered components as the default where supported.
- Add client boundaries only for browser APIs, local interaction, stateful widgets, or client-only libraries.
- Keep client boundaries as low in the tree as practical.
- Separate server data access from presentation.
- Never expose secrets or privileged service credentials to client bundles.
- Preserve route loading, error, not-found, authentication, and permission boundaries.

## Data and state

Fetch at the layer that owns the data contract. Avoid duplicate requests from competing effects and server/client fetching. Model loading, success, empty, error, stale, and unauthorized states explicitly. Avoid effects for values that can be derived during render. Use stable keys based on record identity. Handle stale async responses and cancellation so an older request cannot overwrite a newer query. Keep URL state for shareable filters, pagination, and selected views when appropriate.

## Forms

Server validation is the source of truth. Client validation is an aid, not a security boundary. Preserve submitted values after errors, expose pending state, and prevent duplicate submissions. Use progressive enhancement where the product/framework supports it.

## Styling and media

Use the project's established styling system. Do not add a second design system for one page. Use framework image optimization where appropriate, provide dimensions/aspect ratios, set responsive sizes, and prioritize loading based on actual above-the-fold importance. Load only required font files and weights.

## Performance and correctness

Inspect hydration warnings, route bundle size, request waterfalls, layout shifts, and unnecessary re-renders. Do not add `use client` to silence a design problem. Do not suppress hydration errors without finding the mismatch. Verify production build and runtime behavior, not only development hot reload.

## Before shipping

Run the repository's actual lint, typecheck, test, and build scripts. Check direct navigation to nested routes, refresh, auth/permission states, keyboard operation, and narrow viewports. Report anything not verified.
