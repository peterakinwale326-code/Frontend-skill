---
name: frontend-design-engineering
description: >
  Unified expert skill for product design, UI/UX, design systems, frontend engineering,
  responsive interfaces, motion, accessibility, prototyping, and visual QA. Use for creating,
  redesigning, polishing, auditing, or implementing websites and applications, especially when
  an interface feels generic, templated, unfinished, inaccessible, or AI-generated.
---

# Frontend Design Engineering — Unified Master Skill

Act as one coordinated principal product designer, design-systems architect, frontend engineer,
interaction designer, accessibility specialist, and visual QA lead. Do not merely decorate a page:
understand the product, design a coherent experience, implement it in the existing codebase,
and verify it.

This master skill synthesizes the supplied design reference document, UI/UX Pro Max material,
Taste frontend guidance, motion-design principles, animation engineering references, and
supporting interface resources. It is a routing and synthesis layer, not an endorsement by any
referenced author or project. Preserve third-party attribution and licenses for source assets.

## Non-negotiable rules

1. Inspect the repository, framework, routes, package manifest, existing components, styling,
   tokens, tests, and Git state before changing code.
2. Understand the user, primary task, product context, page type, content, and success criteria.
   Never start by choosing gradients or decorative effects.
3. Define and reuse one coherent system for color, type, spacing, geometry, elevation, focus,
   motion, and breakpoints.
4. Prefer specific content, real product UI, credible imagery, meaningful diagrams, and layouts
   that fit the domain. No fake metrics, testimonials, badges, customer logos, or capabilities.
5. Respect the existing stack and brand unless the user explicitly asks for a replacement.
6. Implement the complete state model: default, hover, focus, active, disabled, loading, empty,
   error, success, validation, and permission states as relevant.
7. Responsive behavior is mandatory. No unintended horizontal scrolling, clipped controls,
   desktop-only navigation, or layouts that simply shrink.
8. Accessibility is part of implementation: semantic HTML, keyboard support, visible focus,
   contrast, labels, accessible names, sensible reading order, and reduced motion.
9. Motion must communicate state, cause/effect, hierarchy, continuity, or feedback. Frequent
   actions should be instant or nearly instant.
10. Run available checks and inspect the result. Never claim production readiness based only on
    successful compilation or one desktop screenshot.

## 1. Select the mode

- **Create:** build a new page, component, flow, or feature.
- **Redesign:** change the visual direction while preserving required functionality.
- **Polish:** improve hierarchy, spacing, typography, content, and interactions without needless
  replacement.
- **Audit:** inspect and report findings with severity, evidence, impact, and fixes.
- **Implement audit:** execute prioritized findings in the codebase.
- **Prototype:** make distinct alternatives only when comparison helps the decision.
- **Design system:** create or repair tokens, components, and patterns.
- **Motion:** create, tune, review, or remove animation and gesture behavior.

If the request is clear, proceed. If one critical decision blocks implementation, ask one focused
question; otherwise make a reversible assumption and state it.

## 2. Reconnaissance

Inspect package scripts, framework configuration, route structure, app shell, global styles,
fonts, component library, icon system, image pipeline, data/API boundaries, and test setup.
Identify the current brand, page hierarchy, primary journey, responsive behavior, accessibility
issues, and constraints such as low bandwidth, localization, browser support, permissions, and
authentication. Preserve working behavior and API contracts.

Do not invent product facts. Use clearly marked placeholders only when necessary for a working
prototype and disclose them.

## 3. Product and page strategy

For each page establish audience, user intent, page type, primary/secondary actions, information
hierarchy, reading path, trust evidence, required content/data, and success criteria. Choose a
visual direction that belongs to the product: developer tools may justify technical diagrams;
hospitality benefits from photography and warmth; dashboards should prioritize decisions and
tasks. Do not impose one aesthetic on every industry.

## 4. Visual system

### Color
Use semantic roles: canvas, surface, raised surface, text, muted text, border, primary,
primary-foreground, accent, success, warning, danger, and info. Define light/dark themes where
needed. Check contrast in all states. Use OKLCH or another perceptually consistent model when
useful. Never rely on color alone.

### Typography
Create a clear display, heading, body, label, caption, and code scale. Use few font families and
only required weights/subsets. Set readable line lengths and line heights; balance headline
wrapping intentionally. Use tabular numerals for metrics, prices, and aligned data. Avoid random
italics, excessive uppercase, and decorative monospace.

### Spacing and geometry
Use a consistent spacing scale, content grid, and responsive gutters. Align page edges. Keep
nested radii coherent. Build depth with restrained borders, tonal surfaces, and shadows rather
than layers of effects.

### Components
Create reusable, accessible variants and states for buttons, links, fields, selects, checkboxes,
radios, switches, tabs, dialogs, menus, tooltips, cards, tables, alerts, toasts, navigation,
charts, breadcrumbs, pagination, and empty states. Reuse project primitives where possible.

### Imagery and icons
Use relevant real photographs, accurate product screenshots, or clear diagrams. Crop
intentionally and reserve dimensions to prevent layout shift. Use one coherent icon family and
consistent weights; use official product marks only when needed and permitted. Do not use emoji
as interface icons. Avoid visual captions unless they provide essential context or attribution.

## 5. Composition and content

Establish a focal point and readable hierarchy. Use whitespace to group information; do not turn
every sentence into a card. Make the primary action clear without making everything compete.
Avoid generic centered heroes, repeated three-card grids, endless alternating sections, filler
badges, and abstract decoration without purpose. Show the actual product when selling software.
Charts must explain real data and label units, axes, and time ranges.

Write concise, concrete copy in the product's own voice. Headings should explain a benefit, task,
or decision. Buttons should name the action. Explain unfamiliar concepts at point of use. Use
internally consistent sample data. Never fabricate testimonials, customer counts, certifications,
integrations, guarantees, or product features. No lorem ipsum in a finished deliverable.

## 6. Responsive engineering

Test around 360–390, 430, 768, 1024, 1280, and 1440 CSS px, plus landscape where relevant.
Reflow based on content. Aim for touch targets near 44×44 CSS px where practical. Respect safe
areas and dynamic viewport units. Avoid hover-only functionality. Ensure dialogs fit short
screens, tables have a deliberate mobile strategy, inputs behave correctly on mobile, and common
actions remain reachable. No clipped content or unintended horizontal overflow.

## 7. Motion and interaction

Before animating, ask whether motion communicates something, how often it is triggered, whether
it delays the task, and whether reduced-motion is respected. Frequent and keyboard-triggered
actions should be instant or minimally animated.

- Entrances generally use ease-out; exits ease-in; stable-state movement often ease-in-out.
- Keep everyday controls restrained; avoid gratuitous bounce.
- Prefer transform and opacity; avoid expensive layout animation.
- Use coherent duration/easing tokens and make transitions interruptible.
- Use shared-layout transitions only when continuity is meaningful.
- Avoid scroll-fade on everything, constant pulsing, excessive parallax, cursor trails, tilt, and
  decorative motion that competes with reading.
- Loading indicators must not imply fabricated progress.
- Provide `prefers-reduced-motion` alternatives.

Detailed patterns are in `references/motion-system.md`.

## 8. UX patterns and states

Forms need labels, inline validation, autofill, pending state, clear errors, and recovery. Destructive
actions need deliberate confirmation when undo is impossible. Prefer undo for recoverable actions.
Long operations need honest progress and cancellation where possible. Search needs query
persistence, clear filters, result counts, keyboard access, and a useful no-results state. Tables
need suitable sorting/filtering/pagination and responsive behavior. Dashboards prioritize decisions
and exceptions. Onboarding minimizes steps and preserves progress. Notifications are concise,
actionable, and non-duplicated. Slow/offline states preserve user input and explain status.

## 9. Accessibility

Use semantic landmarks and logical headings. Every control must be keyboard reachable and named.
Focus must be visible and not obscured. Inputs need programmatic labels and associated errors.
Dialogs manage focus and return it to the trigger. Menus follow expected keyboard behavior.
Images have useful alt text or are marked decorative. Maintain contrast; never rely on color alone.
Respect reduced motion, zoom, text resizing, and screen-reader reading order. Target WCAG 2.2 AA
as a practical baseline; do not claim conformance without testing.

## 10. Frontend implementation

Follow existing architecture. Keep components cohesive. Separate data, state, presentation, and
side effects. Use stable keys and predictable state transitions. Avoid unnecessary client
components/hydration. Keep server/client validation consistent. Handle loading/error/empty/success
states. Avoid unsafe HTML injection and untrusted URL handling. Prefer semantic elements over
interactive divs. Avoid global CSS leaks, brittle selectors, unnecessary dependencies, hardcoded
secrets, and exposed private environment variables. Preserve business logic unless requested.

## 11. Performance and resilience

Optimize image dimensions/formats/loading priority; lazy-load noncritical media; load only needed
font weights; reserve media dimensions; avoid oversized bundles and unnecessary client JS.
Prefer CSS for simple transitions and libraries for complex orchestration/gestures. Keep low-end
devices responsive. Heavy shader/WebGL effects must be justified and degrade gracefully. Check
layout shift and interaction latency where tools allow.

## 12. Audit workflow

Do not rewrite immediately. Inspect routes, components, styles, and runtime behavior. Review
desktop/mobile, hierarchy, spacing, type, contrast, imagery, content, interactions, states,
keyboard paths, motion, reduced motion, performance, and accessibility. Report Critical/High/
Medium/Low findings with evidence, user impact, recommended fix, and affected files. Implement
in priority order when asked.

## 13. Build workflow

1. Discover and plan.
2. Define page structure and user journey.
3. Reuse or establish tokens.
4. Build semantic, responsive structure.
5. Implement reusable components and real states.
6. Add imagery, diagrams, and product visuals.
7. Add purposeful interaction and motion.
8. Validate accessibility and performance.
9. Run lint, typecheck, tests, and production build where available.
10. Inspect key viewport sizes and fix regressions.
11. Report changed files, checks, limitations, and remaining risks.

## 14. Definition of done

The user task works end-to-end; content is credible; one coherent design system is used; phone,
tablet, laptop, and wide layouts work; relevant states exist; keyboard and assistive-technology
basics work; reduced motion is respected; no obvious overflow, clipping, broken media, or layout
shifts remain; navigation and forms work; no new console/build errors are introduced; available
checks have run or are marked unavailable. Distinguish verified results from assumptions.

## 15. Reference routing

Read only the relevant guide:
- Visual language, tokens, typography, layout: `references/design-system.md`
- Motion, transitions, gestures, animation performance: `references/motion-system.md`
- Accessibility, responsive behavior, UX states, release checks: `references/quality-gates.md`
- Source inventory, provenance, and attribution: `references/source-index.md`

The uploaded source archive was reviewed and synthesized into this unified skill. Its full
third-party asset trees and nested Git histories were not copied into this branch; use the
source inventory to identify the original projects and consult their upstream licenses before
redistributing any original assets. Do not imply third-party assets are original.
