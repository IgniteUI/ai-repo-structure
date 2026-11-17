# Contributing

Thanks for contributing to `ai-repo-structure`.

This repository is both:

- a template repo
- a reference implementation
- a learning repo

That means a good contribution should improve the real repository and keep the teaching accurate.

It demonstrates:
- `AGENTS.md` for shared agent instructions
- `CLAUDE.md` for Claude-specific guidance
- `.claude/` for internal Claude rules, agents, skills, and hooks
- `.github/` for internal GitHub Copilot instructions, agents, skills, and hooks
- `.codex/` for internal Codex agents and hooks
- `.agents/skills/` for cross-agent skills that Codex and Copilot discover automatically
- `skills/` for external/shared user-facing skills

## Start here

Before making changes, read:

1. `README.md`
2. `LEARN.md`
3. `AGENTS.md`
4. `CLAUDE.md`

If your change touches AI-related files, make sure the examples and the real file structure stay aligned.

## What good contributions look like

- Keep changes small and focused.
- Prefer practical examples over placeholder content.
- Keep file names and folder names predictable.
- Update docs when behavior or structure changes.
- Keep examples aligned with the real repository.

## What to avoid

- unrelated refactors
- made-up folders, tools, or conventions
- long theoretical explanations when a simple example is enough
- mixing Claude-only, Copilot-only, and shared concepts without saying which is which

## If you change the structure

When adding, renaming, or removing files or folders:

- update the matching docs and examples
- keep `.claude/`, `.github/`, `.codex/`, `.agents/skills/`, and `skills/` clearly separated
- make sure the repo still teaches the same structure it actually contains

## If you change the landing page

Edit the application source in `src/`. GitHub Pages publishes `docs/`, so copy `index.html`, `styles.css`, and `app.js` from `src/` into `docs/` unchanged. The two copies must stay identical.

## If you add or update a skill

Use this structure. Only `SKILL.md` is required; add `scripts/`, `references/`, and `assets/` when the skill needs them:

```text
<skill-name>/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

Keep the skill:

- practical
- focused on one workflow
- easy to scan
- based on real use, not filler

## If you change hooks or hook-related scripts

Keep hooks:

- deterministic
- low-risk
- small
- easy to inspect

Do not use hooks for long reasoning or fuzzy decisions.

## Validation checklist

Before opening a pull request:

- check that referenced files and links still exist
- make sure examples still match the real repo
- make sure new folders follow the documented structure
- run `bash .claude/skills/validate-learning-repo/scripts/check-required-files.sh`

If hook-related files changed, also check:

- `bash scripts/hooks/session-start-context.sh`
- `bash scripts/hooks/github-session-start-check.sh`

## Pull request checklist

In your pull request, explain:

- what changed
- why it changed
- whether it affects Claude, Copilot, shared skills, or root instruction files

## Large changes

Open an issue first if the change is large, structural, or likely to affect multiple AI layers.
