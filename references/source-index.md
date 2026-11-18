# Source Inventory & Provenance

The uploaded archive was inspected (approximately 2,450 non-Git files across several source
projects, plus nested Git metadata). This branch consolidates their shared design and engineering
principles into one master skill and focused reference guides. It does **not** vendor every
original source file, dataset, font, image, demo, or nested Git history. The archive contained
large duplicated assets and third-party materials; importing all of them blindly would bloat the
skill and risk violating source-specific license/attribution requirements.

## Source groups reviewed
- `Design_Principles_and_UI_UX_Reference.docx`: study references, motion suggestions, UX
  principles, feature ideas, mobile checks, and anti-generic-design guidance.
- `design-motion-principles`: create/audit motion workflows, accessibility, performance, and
  recipes.
- `skills`: focused animation and interface-engineering skills for animation creation/review,
  gestures, mobile-native behavior, prototyping, library selection, and platform guidance.
- `taste-skill`: frontend art direction, anti-generic design, page composition, visual assets,
  interaction patterns, and browser quality gates.
- `ui-ux-pro-max-skill`: design intelligence, design-system generation, searchable styles,
  typography, color, components, charts, and supporting datasets.

## License and attribution
The uploaded archive includes third-party projects. Their license files and notices remain
authoritative. Before copying any original code, dataset, image, font, demo, or asset into this
repository, inspect that source project's license and preserve its required notices and credits.
The master skill is an original synthesis/routing layer and is not an endorsement by any
referenced author or project.

## How to use
Use the root `SKILL.md` as the single entry point. The `references/` folder provides focused
playbooks for visual systems, motion, quality gates, and provenance. Consult the upstream
projects for their full specialist instructions when a task requires detail beyond this
synthesis.
