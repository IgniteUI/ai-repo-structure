# Repo map

This repository is split into a few layers that do different jobs.

## Shared root files

- `README.md`
  Human entry point for what the repo is and how to read it.
- `AGENTS.md`
  Shared always-on guidance for coding agents across the repo.
- `CLAUDE.md`
  Claude-specific always-on project guidance.

## Internal Claude layer

- `.claude/`
  Internal Claude maintainer setup.
- `.claude/rules/`
  Scoped Claude guidance.
- `.claude/agents/`
  Claude specialist roles.
- `.claude/skills/`
  Claude maintainer workflows.

## Internal GitHub/Copilot layer

- `.github/copilot-instructions.md`
  Repo-wide Copilot guidance.
- `.github/instructions/`
  Path-scoped Copilot instructions such as `*.instructions.md`.
- `.github/agents/`
  GitHub Copilot specialist roles.
- `.github/skills/`
  GitHub Copilot maintainer workflows.
- `.github/hooks/`
  Optional Copilot coding agent hook configs.

## Shared external layer

- `skills/`
  Shared user-facing skills for repo users and outside agents.

## Hooks and support scripts

- `scripts/hooks/`
  Small deterministic scripts used by Claude or Copilot hook configs.

## Adoption rule

Start with the root files.
Add tool-specific layers only for the tools the target project actually uses.
Add agents, skills, and hooks only after there is a real repeated need.
