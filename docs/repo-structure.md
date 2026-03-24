---
title: AI repo structure
description: A practical explanation of how to structure an AI-enabled repository using AGENTS.md, CLAUDE.md, internal Claude and GitHub Copilot layers, and shared external skills.
permalink: /repo-structure/
---

# AI repo structure

This page explains the structure used by `ai-repo-structure`.

## The core idea

The repository is split into clear layers:

- **Root files** for shared and high-level guidance
- **`.claude/`** for internal Claude maintainer workflows
- **`.github/`** for internal GitHub Copilot maintainer workflows
- **`skills/`** for external/shared user-facing skills

## Root files

### `README.md`
The main human entry point.

### `AGENTS.md`
A shared instruction file for coding agents.

### `CLAUDE.md`
Claude-specific project guidance.

### `CONTRIBUTING.md`
Contributor guidance for keeping the repo structure and teaching content aligned.

## Internal Claude layer

### `.claude/rules/`
Scoped Claude rules for the repo.

### `.claude/agents/`
Claude subagents specialized for this project.

### `.claude/skills/`
Reusable Claude workflows.

### `.claude/settings.json`
Claude project settings and hooks.

## Internal GitHub Copilot layer

### `.github/copilot-instructions.md`
Repo-wide Copilot instructions.

### `.github/instructions/`
Path-specific Copilot instructions.

### `.github/agents/`
Custom Copilot agents.

### `.github/skills/`
Reusable Copilot workflows.

### `.github/hooks/`
Optional GitHub Copilot coding agent hook.

## External/shared layer

### `skills/`
External/shared skills for users of the repo and outside agents.

## Why this structure works

This structure keeps responsibilities separate:

- shared guidance stays shared
- Claude-specific logic stays in Claude files
- GitHub/Copilot-specific logic stays in GitHub files
- user-facing shared workflows stay separate from maintainer workflows

## Who this structure is for

This repo structure is useful for:

- developers creating AI-enabled repos
- teams standardizing their repo layout
- people learning what AI-related repo files are for
- maintainers who want clear separation of concerns

## Next page

Read [Claude vs GitHub Copilot structure](./claude-vs-copilot.html).
