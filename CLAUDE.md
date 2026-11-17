# CLAUDE.md

@AGENTS.md

## Purpose
`AGENTS.md`, imported above, holds the shared rules every coding agent follows. This file adds only what is specific to Claude Code: how to use the `.claude/` layer and how to manage Claude's context in this repo.

Claude Code reads the import first, then the sections below. Without a `CLAUDE.md`, Claude Code would read `AGENTS.md` directly. This file exists to add Claude-only guidance on top of it.

## Working rules
- Check the session-start result first. If it reports missing files, fix them before other work.
- When you change a file in `.claude/`, check its counterpart in `.github/` (rules and instructions, agents, skills). Keep them aligned without forcing them to be identical.
- For changes that touch more than one layer, use plan mode to outline the change before editing.

## Rules (`.claude/rules/`)
- Use a rule for guidance that applies only to some files. Scope it with `paths` frontmatter.
- A rule with `paths` loads when Claude reads or edits a matching file. A rule without `paths` loads in every session, like this file.
- Example: `.claude/rules/repo-learning.md` applies only to teaching content such as `README.md`, `LEARN.md`, and `docs/**/*.md`.

## Subagents (`.claude/agents/`)
- `learning-repo-maintainer` keeps teaching content aligned with the real files. Delegate to it for changes to `README.md`, `AGENTS.md`, `CLAUDE.md`, `.claude/`, `.github/`, or `skills/`.
- It runs in its own context with its own tool list, and preloads the `validate-learning-repo` skill through its `skills` field.
- Add a new subagent only for a repeated role with a clearly different focus or tool set.

## Skills (`.claude/skills/`)
- `validate-learning-repo` audits whether the repo still matches what it teaches. Use it after structure or documentation changes.
- Only a skill's `name` and `description` load at startup. The `SKILL.md` body loads when the skill is used, and files in `references/` load only when needed.
- Claude Code does not load the shared skills in `skills/` automatically. When a user asks about them, read the relevant `SKILL.md` directly.

## Hooks and settings
- `.claude/settings.json` is shared and committed. Its `SessionStart` hook runs `scripts/hooks/claude-session-context.sh`, which adds a one-line repo check result to the context.
- Hook commands start with `bash`, so they work even when a script is not executable.
- Keep hooks deterministic and fast. Judgment calls belong in rules, subagents, or skills.
- Personal settings go in `.claude/settings.local.json`, which is gitignored.

## Context management
- This file and `AGENTS.md` load in every session, so keep both short. Imports do not reduce context cost.
- `LEARN.md` is long. Search for the module heading you need instead of reading the whole file.
- Delegate broad audits to `learning-repo-maintainer` so the main conversation keeps only its summary.

## Boundaries
- Do not copy shared rules from `AGENTS.md` into this file; change `AGENTS.md` instead.
- Do not turn `CLAUDE.md` into a long reference manual; keep detailed task content in rules or skills.
- Do not add hooks for subjective or long-running work.
