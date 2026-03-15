# CLAUDE.md

## Purpose
This repository is a template for AI-enabled projects.

It shows how to combine:
- shared agent instructions in `AGENTS.md`
- Claude-specific configuration in `.claude/`
- external/shared user-facing skills in `skills/`

@AGENTS.md

## Repository map
- `.claude/` = internal Claude setup for maintainers
- `skills/` = external/shared skills for users and outside agents

## Core working rules
- Prefer small, focused changes.
- Do not make unrelated refactors.
- Keep the template structure predictable and easy to scan.
- When changing folder structure, keep naming consistent across Claude, GitHub, and shared skills.
- Prefer editing existing files over inventing new patterns unless the change clearly improves the template.

## Structure conventions
### Claude-side files
- Put always-on Claude guidance in `CLAUDE.md`.
- Put scoped Claude rules in `.claude/rules/`.
- Put Claude subagents in `.claude/agents/`.
- Put Claude skills in `.claude/skills/<skill-name>/`.

### Shared external skills
- Put user-facing or portable skills in `skills/<skill-name>/`.

## Skill layout
Every skill should use this structure:

```
<skill-name>/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

## Skill naming guidance
- Internal maintainer skills should use workflow-oriented names:
  - `pr-review`
  - `release-checklist`
  - `repo-reviewer`
- External/shared skills should use user-oriented names:
  - `use-product`
  - `install-product`
  - `configure-project`

## Change expectations
When adding or updating AI-related files:
- keep examples short and realistic
- keep file names predictable
- keep internal and external layers clearly separated
- update related instructions when behavior changes

## Validation
Before finishing meaningful changes:
- verify that referenced files and folders exist
- verify that new skills follow the standard structure

## Boundaries
- Do not edit secrets, tokens, or environment files.
- Do not invent folders or tools that are not part of the repository structure.
- Do not remove AI-related conventions without replacing them with a clear alternative.
- Do not turn `CLAUDE.md` into a long reference manual; keep detailed task content in rules or skills.

## Decision rule
Use:
- `CLAUDE.md` for always-on project guidance
- `.claude/rules/` for scoped Claude guidance
- `.claude/skills/` for Claude workflows
- `skills/` for external/shared user-facing skills