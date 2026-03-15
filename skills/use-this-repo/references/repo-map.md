# Repo map

This repository teaches how to structure an AI-enabled project.

## Root files

### `README.md`
The human entry point.
Use it to explain the repository, the structure, and how to start.

### `AGENTS.md`
The shared, open instruction file for coding agents.
Use it for setup commands, testing steps, conventions, and workflow guidance.

### `CLAUDE.md`
The Claude-specific always-on project guidance.
Use it for core Claude behavior, structure rules, and boundaries.

## Internal Claude layer

### `.claude/`
This folder is for internal Claude setup used by maintainers.

Typical contents:
- `rules/` for modular Claude guidance
- `agents/` for Claude subagents
- `skills/` for Claude workflows
- `settings.json` for shared Claude settings

## Internal GitHub/Copilot layer

### `.github/`
This folder is for internal GitHub/Copilot setup used by maintainers.

Typical contents:
- `copilot-instructions.md` for repo-wide Copilot guidance
- `instructions/` for path-specific Copilot guidance
- `agents/` for custom GitHub Copilot agents
- `skills/` for GitHub Copilot workflows
- `workflows/` for CI and automation

## External/shared layer

### `skills/`
This folder contains external/shared skills for users and outside agents.

Use this layer for:
- onboarding to the repo
- learning how to adopt the structure
- user-facing tasks
- portable shared skills

## Best mental model

- `AGENTS.md` explains how agents should work in the repo
- `CLAUDE.md` explains how Claude should work in the repo
- `.claude/` contains internal Claude building blocks
- `.github/` contains internal GitHub/Copilot building blocks
- `skills/` contains external/shared skills for consumers of the repo