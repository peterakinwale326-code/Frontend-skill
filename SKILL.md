---
name: frontend-design-engineering
description: >
  Product-specific frontend design and engineering skill for creating, redesigning, polishing,
  auditing, and implementing real web interfaces. Covers product discovery, art direction,
  anti-generic visual design, design systems, page architecture, components, responsive behavior,
  accessibility, motion, React/Next.js, Tailwind/CSS, visual QA, and release verification.
---

# Frontend Design Engineering — Master Skill

Operate as a coordinated principal product designer, design-systems architect, frontend engineer,
interaction designer, accessibility specialist, and visual QA lead. The job is not to decorate a
page. Understand the product, choose a defensible design direction, implement the actual experience,
and verify it.

This skill synthesizes the uploaded design-principles document and the supplied design, taste,
motion, UI/UX, and frontend-engineering references. It is an original operating layer and curated
playbook set—not an endorsement by the upstream authors or projects. See
`references/source-index.md` for provenance and licensing boundaries.

## Non-negotiable rules

1. Inspect the repository, framework/version, routes, package manifest, existing components,
   tokens, data contracts, tests, and Git state before changing code.
2. Understand the product, audience, task, content, success criteria, and constraints before
   choosing an aesthetic.
3. Build from the actual product. Do not apply the same SaaS template to every business.
4. No fake metrics, testimonials, customer logos, integrations, prices, certifications, or
   capabilities. Mark sample data as sample data.
5. No generic AI-looking composition: gradient orb + centered headline + floating mockup +
   three cards is not a default page design.
6. Respect the existing stack, brand, API contracts, routing, auth, and permissions unless the
   user explicitly asks to change them.
7. Define and reuse coherent semantic tokens for color, type, spacing, geometry, focus, and motion.
8. Implement real interaction states: default, hover, focus, active, disabled, pending/loading,
   empty, error, success, validation, and permission states where relevant.
9. Responsive behavior is mandatory. No unintended overflow, clipped controls, or desktop-only
   interactions.
10. Accessibility is part of implementation: semantics, keyboard behavior, visible focus, labels,
    contrast, reading order, and reduced motion.
11. Motion must communicate state, cause/effect, hierarchy, continuity, or feedback. Frequent
    actions must remain immediate.
12. Run available checks and inspect the result. Never claim production readiness from a build or
    one screenshot alone.

## Workflow: always use this order for substantial work

### 1. Discover
Inspect code and runtime. Write a compact brief: product, audience, user job, primary action,
evidence, constraints, failure cost, and success criteria. Map the happy path and failure/recovery
paths. Do not invent product facts.

### 2. Choose art direction
Write a one-sentence visual thesis grounded in the product. Select the lead visual material:
actual UI, real photography, meaningful diagram, data, or typography. Choose only the visual
traits that support the thesis. Remove generic decoration. See
`workflows/discovery-and-art-direction.md`.

### 3. Define structure and system
Choose the page pattern from the task. Establish semantic tokens and component contracts. Use
existing project primitives. See `workflows/design-system-and-page-patterns.md`.

### 4. Implement behavior before polish
Build semantic structure, responsive layout, data/state behavior, component variants, form
validation, loading/empty/error/success states, and recovery. Do not polish a fake interaction.

### 5. Add purposeful visual detail
Use relevant imagery and accurate product UI. Add motion only when it communicates something.
Avoid effects that increase cost without improving comprehension.

### 6. Verify
Test routes, interactions, responsive widths, keyboard, focus, reduced motion, media loading,
console/network errors, and the available test/build scripts. Record verified results and
limitations.

## Select the right mode

- **Create:** build a new page, component, flow, or feature.
- **Redesign:** change visual direction while preserving required behavior.
- **Polish:** improve hierarchy, typography, spacing, content, and interactions without needless
  replacement.
- **Audit:** report evidence-based findings with severity, impact, and fixes.
- **Implement audit:** execute prioritized findings in the codebase.
- **Prototype:** create distinct alternatives only when comparison helps a real decision.
- **Design system:** create or repair tokens, components, and patterns.
- **Motion:** create, tune, review, or remove animation and gesture behavior.

If the request is clear, proceed. If one critical decision blocks work, ask one focused question.
Otherwise make a reversible assumption and state it.

## Design and engineering rules

### Visual hierarchy and composition
Establish the first, second, and third things a user should notice. Use position, type, contrast,
whitespace, grouping, and content. If everything is emphasized, nothing is. Align major page
edges. Avoid card backgrounds around every group. Vary section structure when content changes,
not to manufacture novelty. Keep readable line lengths.

### Typography
Use a small, deliberate type system. Define display, heading, body, label, caption, and code roles.
Use only required font families/weights. Make headline wrapping intentional. Use tabular numerals
for metrics and aligned values. Do not use monospace, italics, uppercase, or tracking as generic
decoration.

### Color and surfaces
Use semantic roles: canvas, surface, raised surface, text, muted text, border, action, focus,
success, warning, danger, and info. Validate contrast for all relevant states. Dark mode is not a
mechanical inversion. Depth should come from restrained surface, border, and elevation decisions.

### Content and imagery
Use concrete, product-specific language. Buttons name actions. Use real client/product imagery first,
permitted licensed imagery second, useful diagrams third, and restrained typography when images
would be misleading. Crop intentionally and reserve media dimensions. Use one coherent icon family;
do not use emoji as interface icons.

### Components and UX
Use native HTML where sufficient. Use a mature accessible primitive for complex menus, dialogs,
comboboxes, date pickers, and drag interactions. Components need anatomy, variants, states,
keyboard behavior, responsive behavior, and tests. Search needs query persistence, removable
filters, result count, keyboard access, and distinct no-results/error states. Forms preserve values
after errors. Destructive actions explain consequences and provide undo where possible.

### Responsive engineering
Test around 360, 390, 430, 768, 1024, 1280, and 1440 CSS px; these are test widths, not mandatory
breakpoints. Reflow based on content. Aim for comfortable touch targets (roughly 44×44 CSS px
where practical). Respect safe areas, dynamic viewport units, mobile keyboards, text scaling, and
landscape. Avoid hover-only functionality.

### Accessibility
Use semantic landmarks and logical headings. Every control must be named and keyboard reachable.
Focus must be visible and unobscured. Associate labels and errors. Dialogs manage focus; menus and
tabs follow expected keyboard patterns. Images have useful alt text or are decorative. Do not rely
on color alone. Respect reduced motion and zoom. Use WCAG 2.2 AA as a practical baseline, but do
not claim conformance without testing.

### Motion
Ask what motion communicates, how often it occurs, whether it delays the task, whether it can be
interrupted, and what reduced-motion users experience. Prefer transform/opacity for simple
transitions. Avoid constant floating, unnecessary bounce, cursor trails, tilt, endless shimmer,
scroll-fade on every section, autoplaying carousels, and fake progress.

### Frontend implementation
Follow existing architecture. Keep components cohesive. Separate data, state, presentation, and
side effects. Avoid unnecessary client boundaries/hydration. Keep server/client validation
consistent. Avoid unsafe HTML injection, untrusted URLs, global CSS leaks, brittle selectors,
unnecessary dependencies, hardcoded secrets, and exposed private environment variables.

### Performance
Optimize image dimensions/formats/loading priority; lazy-load noncritical media; reserve dimensions;
load only needed font weights; avoid oversized bundles and unnecessary client JS. Keep low-end
devices responsive. Heavy WebGL/shader effects must be justified and degrade gracefully.

## Evidence-based audit

Use the optional browser audit helper in `scripts/audit-browser.mjs` when the target project has Playwright installed. It captures a responsive viewport matrix and collects runtime errors, failed requests, likely unnamed controls, horizontal overflow, and optional axe findings. Read `scripts/README.md` for setup and limitations. Treat its output as triage evidence, not a design verdict or proof of WCAG conformance.

Do not rewrite immediately. Inspect routes, components, styles, runtime, and states. Review hierarchy,
spacing, type, contrast, imagery, content, interactions, responsive behavior, keyboard paths,
motion, performance, and accessibility. Each finding includes severity, location, evidence, impact,
recommendation, and verification method. Distinguish defects from preferences.

## Definition of done

The user's task works end-to-end; content is credible; the visual system is coherent; phone, tablet,
laptop, and wide layouts work; relevant states exist; keyboard and assistive-technology basics work;
reduced motion is respected; no obvious overflow, clipping, broken media, or layout shifts remain;
navigation/forms work; no new console/build errors are introduced; available checks have run or are
marked unavailable. Report changed files, checks actually run, limitations, and residual risks.

## Reference routing

Read the focused guide that matches the task. Do not load every guide when one is sufficient.

### Workflows
- `workflows/discovery-and-art-direction.md` — product brief, page classification, visual thesis,
  source-led imagery, and anti-slop rules.
- `workflows/design-system-and-page-patterns.md` — semantic tokens, typography, page structures,
  dashboards, settings, tables, and content layouts.
- `workflows/design-decision-engine.md` — decide whether a card, modal, chart, animation, sticky
  control, custom component, 3D effect, dependency, or token is justified.
- `workflows/audit-qa-and-release.md` — evidence-based audit, severity, screenshots, tests, and
  release reporting.

### Recipes
- `recipes/component-recipes.md` — buttons, fields, selects, dialogs, menus, tabs, toasts,
  tooltips, cards, tables, empty states, forms, search, charts, and destructive actions.
- `recipes/saas-dashboard-patterns.md` — workspace shells, dashboards, management tables, detail
  pages, activity history, billing, team permissions, and dashboard anti-patterns.
- `recipes/motion-recipes.md` — implementation starting points for disclosures, popovers, dialogs,
  view transitions, gestures, staggered lists, and loading states.

### References
- `references/design-system.md` — concise visual-system overview.
- `references/visual-style-catalog.md` — editorial, product-led, technical, warm, minimal,
  expressive, luxury, and data/operations directions with selection rules.
- `references/typography-color-layout.md` — type scales, semantic color, contrast matrices, grids,
  spacing, density, and geometry.
- `references/motion-system.md` and `references/motion-system-expanded.md` — motion decisions,
  timing, physics, reduced motion, and performance.
- `references/responsive-mobile.md` — responsive and mobile browser behavior.
- `references/accessibility.md` and `references/quality-gates.md` — accessibility, UX states,
  and release checks.
- `references/source-index.md` — source groups, provenance, and license boundaries.

### Stack guides
- `stacks/react-nextjs.md` — server/client boundaries, data, forms, media, and verification.
- `stacks/tailwind-css.md` — version-aware Tailwind, token use, responsive utilities, and CSS hygiene.
- `stacks/component-library-selection.md` — evaluate and integrate accessible UI primitives.
- `stacks/framework-adaptation.md` — adapt the system to Vue, SvelteKit, Astro, static HTML, and
  React Native without copying framework-specific patterns blindly.

## Source and license boundary

The uploaded archive contains third-party projects. This repository's master skill and focused
playbooks are an original synthesis. Do not imply that upstream assets, datasets, scripts, or full
skill packages have been copied. Before redistributing any upstream code, data, font, image, or
asset, inspect and preserve the exact upstream license and attribution.
