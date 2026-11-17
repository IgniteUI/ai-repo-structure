---
title: Claude Code vs Copilot vs Codex repo structure
description: Understand which repo files belong to Claude Code, GitHub Copilot, and OpenAI Codex, and how to combine them in one clean project structure.
permalink: /claude-vs-copilot/
---

A common question is:

**What belongs in Claude files, what belongs in GitHub Copilot files, and what belongs in Codex files?**

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

Use these for Copilot-specific instructions, scoped guidance, agents, skills, and optional Copilot hooks.

The `.github/hooks/` folder is specifically for GitHub Copilot hook configs, which run in Copilot CLI and Copilot cloud agent. It is not a generic GitHub repository feature and it is separate from GitHub Actions.

## OpenAI Codex side

OpenAI Codex repo files usually include:

- `.codex/agents/`
- `.codex/hooks.json`

Codex has no tool-specific instruction file: it reads `AGENTS.md` directly. It discovers skills in `.agents/skills/`, a cross-agent folder that GitHub Copilot also reads.

## Shared layer

Some things should stay outside the vendor-specific layers:

- `README.md`
- `AGENTS.md`
- external/shared `skills/`

These help keep the repo understandable across tools.

## The simplest mapping

Think of it like this:

- `CLAUDE.md` ↔ `.github/copilot-instructions.md`
- `.claude/rules/` ↔ `.github/instructions/`
- `.claude/agents/` ↔ `.github/agents/` ↔ `.codex/agents/`
- `.claude/skills/` ↔ `.github/skills/` ↔ `.agents/skills/` (Codex and Copilot)
- `.claude/settings.json` hooks ↔ `.github/hooks/` ↔ `.codex/hooks.json`

They are not always identical features, but they play similar structural roles.

## Why combining them is useful

Keeping each tool's files on its own side in one repo helps teams:

- keep tool-specific behavior organized
- avoid mixing unrelated instructions together
- make the repo easier to maintain
- teach others with a real example

## Next page

Read [Getting started]({{ '/getting-started/' | relative_url }}).
