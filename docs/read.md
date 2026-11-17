---
title: Overview
description: Learn how to structure a real AI-enabled repository using AGENTS.md, CLAUDE.md, and Claude Code, GitHub Copilot, and OpenAI Codex agents, skills, and hooks.
permalink: /overview/
---

`ai-repo-structure` is a practical learning repository that shows how to structure a modern AI-enabled repo in a clean, understandable, and reusable way.

This project demonstrates how to combine:

- `AGENTS.md` for shared instructions for coding agents
- `CLAUDE.md` for Claude-specific project guidance
- `.claude/` for internal Claude rules, agents, skills, and hooks
- `.github/` for internal GitHub Copilot instructions, agents, skills, and hooks
- `.codex/` for internal OpenAI Codex agents and hooks
- `.agents/skills/` for cross-agent skills that Codex and Copilot discover automatically
- `skills/` for external/shared user-facing skills

## Why this repo exists

A lot of repositories add AI-related files without a clear structure.

This repo exists to help people understand:

- what each AI-related file is for
- why the layers are separated
- how Claude, GitHub Copilot, and OpenAI Codex fit into one repo
- how to build a template repo that is both educational and practical

## What makes this repo useful

This is not just a fake demo tree.

It is a structured demonstration repo that tries to stay:

- real
- readable
- specific
- easy to copy
- easy to adapt

## Start here

If you are new to the repo, read these pages:

- [Repo structure]({{ '/repo-structure/' | relative_url }})
- [Claude vs GitHub Copilot vs OpenAI Codex structure]({{ '/claude-vs-copilot/' | relative_url }})
- [Getting started]({{ '/getting-started/' | relative_url }})

## Repository

View the [GitHub repository](https://github.com/IgniteUI/ai-repo-structure) and copy the structure into your own project.

If you use this repo and find it useful, consider starring it so more people can discover it.