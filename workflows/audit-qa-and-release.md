# Design Audit, Visual QA, and Release

An audit must produce evidence, not taste-only opinions. Separate observed defects from recommendations, and verified fixes from untested assumptions.

## Audit scope

Inspect each requested route and important state for:
- hierarchy, typography, spacing, alignment, density, consistency;
- real content, product imagery, diagrams, and data credibility;
- navigation, actions, form behavior, loading/empty/error/success states;
- responsive reflow, overflow, safe areas, touch behavior;
- keyboard operation, focus, labels, contrast, screen-reader output;
- motion purpose, interruption, reduced motion, performance;
- runtime errors, network failures, console warnings, production build.

## Finding format

Each finding includes severity, location (route/component/viewport/state), evidence (screenshot/reproduction/code/test), user impact, concrete recommendation, and verification method.

Severity:
- **Critical:** core task blocked, sensitive data exposed, data loss, serious accessibility/security failure.
- **High:** major journey broken, primary action inaccessible, severe mobile failure, serious state ambiguity.
- **Medium:** meaningful friction, inconsistent behavior, poor hierarchy, missing recovery, moderate accessibility/performance issue.
- **Low:** polish, minor alignment, subtle inconsistency, low-impact motion issue.

Do not label a preference as a bug. Categorize findings as functional, accessibility, content, visual, performance, or maintainability.

## Screenshot protocol

Capture consistent routes/states at agreed viewport sizes. Keep browser zoom, device scale, theme, data fixture, and scroll position the same for before/after comparisons. Capture full page and key interaction states. One hero screenshot cannot validate an application.

## Browser inspection

Exercise click, keyboard, focus, type, submit, cancel, open/close, filter, sort, navigate, refresh, and failure recovery. Inspect console and network failures. Screenshots do not replace behavior tests.

## Implementation sequence

1. Inspect Git state and preserve unrelated changes.
2. Read project conventions and run baseline checks.
3. Identify the smallest file set and plan dependencies/API changes.
4. Correct semantic structure and content hierarchy.
5. Reuse or establish tokens.
6. Implement responsive layout and component states.
7. Connect real data and behavior.
8. Add relevant media/diagrams and purposeful motion.
9. Add recovery paths.
10. Run lint, typecheck, tests, and production build where available.
11. Inspect desktop/mobile, keyboard, focus, and reduced motion.
12. Report changed files, checks, limitations, and residual risks.

## Definition of done

The user task works end-to-end; content is credible; tokens are coherent; phone/tablet/laptop/wide layouts work; relevant states exist; keyboard and assistive-technology basics work; reduced motion is respected; no obvious overflow, clipping, broken media, or layout shifts remain; navigation/forms work; no new console/build errors are introduced; available checks have run or are explicitly marked unavailable.

Never claim “fully accessible”, “pixel perfect”, or “production ready” without a defined test scope and evidence. A passing build is one signal only.
