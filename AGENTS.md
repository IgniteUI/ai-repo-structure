# AGENTS.md

## Project overview
This repository is a template for AI-enabled software projects.

It demonstrates how to organize:
- shared agent instructions in `AGENTS.md`
- Claude-specific instructions in `CLAUDE.md`
- Claude internal agents and skills in `.claude/`
- GitHub Copilot instructions, agents, and skills in `.github/`
- Codex agents and hooks in `.codex/`
- cross-agent skills that Codex and Copilot discover automatically in `.agents/skills/`
- external/shared user-facing skills in `skills/`

## Working rules
- `README.md` explains the repository purpose. `LEARN.md` is the course; read the relevant module when editing teaching content.
- Prefer small, focused changes.
- Prefer editing existing files over inventing new patterns unless the change clearly improves the template.
- Do not make unrelated refactors.
- Keep internal (`.claude/`, `.github/`, `.codex/`, `.agents/skills/`) and external (`skills/`) layers clearly separated.
- When changing folder structure, keep naming consistent across Claude, GitHub, Codex, and shared skills.
- Update docs when behavior or structure changes.

## Commands
This repo is currently a documentation-first template repo.

- Install: no install step is required yet
- Dev: no local app/dev server is configured yet
- Test: `bash .claude/skills/validate-learning-repo/scripts/check-required-files.sh`
- Lint: no dedicated lint command is configured yet

## Project structure
- `.claude/` contains internal Claude configuration for maintainers.
- `.github/` contains internal GitHub/Copilot configuration for maintainers.
- `.codex/` contains internal Codex configuration for maintainers.
- `.agents/skills/` contains cross-agent maintainer skills that Codex and Copilot discover automatically.
- `skills/` contains external/shared skills for users and outside agents. Agents do not load it automatically.

## Code and docs conventions
- Keep examples short and practical.
- Prefer clear folder names and predictable file names.
- When adding a skill, use this structure. Only `SKILL.md` is required; add `scripts/`, `references/`, and `assets/` when needed:

```
<skill-name>/
├── SKILL.md
├── scripts/
├── references/
└── assets/
```

- Name internal maintainer skills after the workflow (`pr-review`, `release-checklist`) and external/shared skills after the user goal (`use-product`, `configure-project`).
- Keep instructions easy to scan.
- Use Markdown for guidance files.

## Testing and validation
Before finishing work:
- run `bash .claude/skills/validate-learning-repo/scripts/check-required-files.sh`
- check that links and referenced files still exist
- make sure any new folder follows the documented template structure
- make sure examples and file references still match the real repo
- if hook-related files changed, check:
  - `bash scripts/hooks/session-start-context.sh`
  - `bash scripts/hooks/github-session-start-check.sh`

## Pull request guidance
- Explain what changed and why.
- Mention whether the change affects Claude, Copilot, or external skills.
- Include doc updates when repo structure changes.

## Boundaries
- Do not edit secrets, tokens, or environment files.
- Do not invent tools or folders that are not present in the repo.
- Do not remove existing AI conventions without updating the documentation.
- Ask for clarification only when a missing decision blocks safe progress.
