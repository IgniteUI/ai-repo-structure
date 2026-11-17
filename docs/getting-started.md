---
title: Getting started with ai-repo-structure
description: Learn how to use ai-repo-structure as a starter, reference, and learning repo for your own AI-enabled project.
permalink: /getting-started/
---

This repo can be used in three ways:

## 1. As a learning repo
Read the structure and understand what each layer is for.

Recommended reading order:

1. `README.md`
2. `LEARN.md`
3. `AGENTS.md`
4. `CLAUDE.md`
5. `.claude/`, `.github/`, and `.codex/`
6. `.agents/skills/`
7. `skills/`

## 2. As a starter template
Copy the smallest useful structure into your own repo first.

A good minimal adoption path is:

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.claude/`
- `.github/`

For a Codex-only repo, `README.md` and `AGENTS.md` are enough to start; add `.codex/` when you need agents or hooks.

Then add shared external `skills/` only when they are useful.

## 3. As a reference implementation
Use this repo to compare your own structure against a working example.

## Best advice

Start simple.

Do not copy every possible file at once.

Instead:
- copy the core files first
- add only the layers you really need
- keep naming and structure consistent
- expand gradually as your repo grows

## Useful pages

- [Home]({{ '/' | relative_url }})
- [Overview]({{ '/overview/' | relative_url }})
- [Repo structure]({{ '/repo-structure/' | relative_url }})
- [Claude vs GitHub Copilot vs OpenAI Codex]({{ '/claude-vs-copilot/' | relative_url }})