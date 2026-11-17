---
title: AI repo structure
description: A practical explanation of how to structure an AI-enabled repository using AGENTS.md, CLAUDE.md, internal Claude Code, GitHub Copilot, and OpenAI Codex layers, cross-agent skills, and shared external skills.
permalink: /repo-structure/
---

This page explains the structure used by `ai-repo-structure`.

## The core idea

The repository is split into clear layers:

- **Root files** for shared and high-level guidance
- **`.claude/`** for internal Claude maintainer workflows
- **`.github/`** for internal GitHub Copilot maintainer workflows
- **`.codex/`** for internal OpenAI Codex maintainer workflows
- **`.agents/skills/`** for cross-agent skills that Codex and Copilot discover automatically
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
Optional GitHub Copilot hook.

## Internal OpenAI Codex layer

### `.codex/agents/`
Codex custom agents, written as TOML files.

### `.codex/hooks.json`
Codex hooks, such as a session-start check.

## Cross-agent layer

### `.agents/skills/`
Maintainer skills that Codex and GitHub Copilot discover automatically. Claude Code does not scan this folder.

## External/shared layer

### `skills/`
External/shared skills for users of the repo and outside agents. Agents do not load this folder automatically; copy a skill or point an agent at its `SKILL.md`.

## Application source and published site

### `src/`
The application source: the landing page, standing in for a real project's code. Changes start here.

### `docs/`
The published GitHub Pages site. It holds identical copies of `src/index.html`, `src/styles.css`, and `src/app.js`, plus the Markdown pages and search files.

## Why this structure works

This structure keeps responsibilities separate:

- shared guidance stays shared
- Claude-specific logic stays in Claude files
- GitHub/Copilot-specific logic stays in GitHub files
- Codex-specific logic stays in `.codex/`
- user-facing shared workflows stay separate from maintainer workflows

## Who this structure is for

This repo structure is useful for:

- developers creating AI-enabled repos
- teams standardizing their repo layout
- people learning what AI-related repo files are for
- maintainers who want clear separation of concerns

## Next page

Read [Claude vs GitHub Copilot vs OpenAI Codex structure]({{ '/claude-vs-copilot/' | relative_url }}).
