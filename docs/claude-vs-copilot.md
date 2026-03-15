---
title: Claude vs GitHub Copilot repo structure
description: Understand the difference between Claude-specific repo files and GitHub Copilot-specific repo files, and how to combine them in one clean project structure.
permalink: /claude-vs-copilot/
---

# Claude vs GitHub Copilot repo structure

A common question is:

**What belongs in Claude files, and what belongs in GitHub Copilot files?**

## Claude side

Claude-specific repo files usually include:

- `CLAUDE.md`
- `.claude/rules/`
- `.claude/agents/`
- `.claude/skills/`
- `.claude/settings.json`

Use these for Claude-specific instructions, specialist roles, reusable workflows, and hooks.

## GitHub Copilot side

GitHub Copilot repo files usually include:

- `.github/copilot-instructions.md`
- `.github/instructions/`
- `.github/agents/`
- `.github/skills/`
- `.github/hooks/`

Use these for Copilot-specific instructions, scoped guidance, agents, skills, and workspace hooks.

## Shared layer

Some things should stay outside both vendor-specific layers:

- `README.md`
- `AGENTS.md`
- external/shared `skills/`

These help keep the repo understandable across tools.

## The simplest mapping

Think of it like this:

- `CLAUDE.md` ↔ `.github/copilot-instructions.md`
- `.claude/rules/` ↔ `.github/instructions/`
- `.claude/agents/` ↔ `.github/agents/`
- `.claude/skills/` ↔ `.github/skills/`

They are not always identical features, but they play similar structural roles.

## Why combining both is useful

Using both sides in one repo helps teams:

- keep tool-specific behavior organized
- avoid mixing unrelated instructions together
- make the repo easier to maintain
- teach others with a real example

## Next page

Read [Getting started](./getting-started.html).