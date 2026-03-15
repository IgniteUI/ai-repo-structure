---
name: use-this-repo
description: Help a user understand this repository, decide which AI structure pieces they need, and adapt the template to their own project.
---

# Use this repo

Use this skill when the user wants to:
- understand what this repository is for
- learn how the Claude, GitHub, and shared skill layers fit together
- decide which files and folders to copy into their own project
- adapt this repository structure to a real project
- create a small adoption plan from this repository

## What this repository is
This repository is a practical learning repo for AI-enabled project structure.

It demonstrates:
- shared agent instructions in `AGENTS.md`
- Claude-specific project guidance in `CLAUDE.md`
- internal Claude rules, agents, and skills in `.claude/`
- internal GitHub/Copilot instructions, agents, and skills in `.github/`
- external/shared user-facing skills in `skills/`

## Workflow

1. Read `references/repo-map.md`.
2. Run `scripts/quickstart-check.sh` to confirm the expected starter files are present.
3. Identify the user's goal:
   - learn the structure
   - copy the structure
   - simplify the structure
   - adapt the structure to an existing repo
4. Explain the repository in this order:
   - root files
   - `.claude/`
   - `.github/`
   - `skills/`
5. Use `assets/adoption-plan-template.md` to produce a practical recommendation.

## Output requirements

Always:
- explain this repository using the real folders and files that exist
- separate internal maintainer AI from external/shared user-facing AI
- recommend the smallest useful structure first
- keep the explanation concrete and specific to this repository

When suggesting adoption:
- tell the user what to copy first
- tell the user what can wait until later
- explain why each piece exists
- avoid suggesting extra folders unless they solve a real need

## Default recommendation order

For most users, recommend this adoption order:
1. `README.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. `.claude/`
5. `.github/`
6. `skills/`

## Important distinction

- `.claude/` = internal Claude setup for maintainers
- `.github/` = internal GitHub/Copilot setup for maintainers
- `skills/` = external/shared skills for users and outside agents

Do not mix those layers together.