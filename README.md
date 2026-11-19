# Frontend Design Engineering Skill

A product-first frontend design and engineering skill for building interfaces that feel specific to the product—not generic templates. It combines product discovery, art direction, anti-slop rules, design systems, page architecture, component recipes, SaaS/dashboard patterns, motion, responsive behavior, accessibility, framework guidance, and evidence-based visual QA.

## Quick install with npx

Install into the current project for Codex (default):

```bash
npx pstack-frontend-design-skill
```

Select a coding agent:

```bash
npx pstack-frontend-design-skill install --agent codex
npx pstack-frontend-design-skill install --agent claude
npx pstack-frontend-design-skill install --agent cursor
npx pstack-frontend-design-skill install --agent windsurf
npx pstack-frontend-design-skill install --agent copilot
```

Install for all supported agents:

```bash
npx pstack-frontend-design-skill install --all
```

Update existing installs from the package version you're running:

```bash
npx pstack-frontend-design-skill update
npx pstack-frontend-design-skill update --agent cursor
npx pstack-frontend-design-skill update --all
```

Check installation status:

```bash
npx pstack-frontend-design-skill doctor
```

Use `--force` to overwrite skill files without an interactive confirmation. The installer only writes to the selected agent's skill directory in the current project; it does not modify application source code.

## Supported install locations

| Agent | Project skill directory |
|---|---|
| Codex | `.agents/skills/frontend-design-engineering/` |
| Claude Code | `.claude/skills/frontend-design-engineering/` |
| Cursor | `.cursor/skills/frontend-design-engineering/` |
| Windsurf | `.windsurf/skills/frontend-design-engineering/` |
| GitHub Copilot | `.github/skills/frontend-design-engineering/` |

## Manual installation

Copy `SKILL.md` and the referenced folders into your agent's supported skills directory. Keep the relative structure intact.

## Repository structure

```text
Frontend-skill/
├── SKILL.md
├── bin/cli.js
├── scripts/
├── recipes/
├── references/
├── stacks/
└── workflows/
```

## What makes it different

- Starts with the product, audience, user job, and real evidence.
- Explicitly rejects generic AI-looking patterns and fabricated product proof.
- Uses decision rules to choose components, charts, motion, dependencies, and visual effects.
- Includes visual directions, typography/color/layout foundations, SaaS/dashboard recipes, and framework adaptation guidance.
- Treats accessibility, mobile behavior, state coverage, and QA as implementation requirements.
- Requires honest reporting of tests, limitations, and what remains unverified.

## Development

```bash
npm test
npm run check
```

## Provenance

The uploaded archive was reviewed and synthesized. This repository does not claim to vendor every upstream file, dataset, font, image, demo, script, or nested Git history. See `references/source-index.md` before redistributing upstream materials.
