---
name: use-this-repo
description: Explain this repository's AI structure, what each layer and file is for, and how the Claude, GitHub/Copilot, and shared skill layers fit together. Use when someone asks what this repo is, how its layers connect, or which file does which job. For copying or adapting the structure into another project, use adopt-this-repo instead.
---

# Use this repo

Use this skill when the user wants to:
- understand what this repository is for
- learn how the Claude, GitHub, and shared skill layers fit together

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
3. Explain the repository in this order:
   - root files
   - `.claude/`
   - `.github/`
   - `skills/`
4. If the user wants to copy or adapt the structure, hand off to the `adopt-this-repo` skill.

## Output requirements

Always:
- explain this repository using the real folders and files that exist
- separate internal maintainer AI from external/shared user-facing AI
- keep the explanation concrete and specific to this repository

## Important distinction

- `.claude/` = internal Claude setup for maintainers
- `.github/` = internal GitHub/Copilot setup for maintainers
- `skills/` = external/shared skills for users and outside agents

Do not mix those layers together.