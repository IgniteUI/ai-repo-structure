# Contributing

Thanks for contributing to `ai-repo-structure`.

## What this repo is
This repository is a practical learning and template repo for AI-enabled project structure.

It demonstrates:
- `AGENTS.md` for shared agent instructions
- `CLAUDE.md` for Claude-specific guidance
- `.claude/` for internal Claude rules, agents, skills, and hooks
- `.github/` for internal GitHub Copilot instructions, agents, skills, and hooks
- `skills/` for external/shared user-facing skills

## Before you change anything
Please:
1. Read `README.md`
2. Read `AGENTS.md`
3. Read `CLAUDE.md`

If your change touches AI-related files, make sure the examples and the real file structure stay aligned.

## Contribution rules
- Keep changes small and focused.
- Do not make unrelated refactors.
- Prefer real, working examples over placeholder content.
- Keep naming consistent across files, folders, agents, and skills.
- Update explanations when structure changes.

## If you add a skill
Use this structure:

```
<skill-name>/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

## If you change the repo structure
When renaming, adding, or removing files or folders:
- update the relevant examples
- update the explanations
- keep Claude-side and GitHub-side concepts clearly separated

## Validation
Before opening a pull request:
- check that referenced files still exist
- make sure the repo still teaches the same structure it actually contains

## Pull requests
In your pull request, explain:
- what changed
- why it changed
- whether it affects `.claude/`, `.github/`, `skills/`, or root instruction files

## Questions
If something is unclear, open an issue first before making a large structural change.