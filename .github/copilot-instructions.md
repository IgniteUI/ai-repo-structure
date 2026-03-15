# GitHub Copilot repository instructions

This repository is a teaching repo for AI-enabled repository structure.

When working here:

- keep examples concrete and based on real files in this repository
- treat the real repository structure as the source of truth
- update examples when paths, file names, or folder names change
- prefer official supported locations and formats for Claude and GitHub Copilot features
- keep edits focused and avoid unrelated cleanup
- preserve the distinction between:
  - shared agent instructions in `AGENTS.md`
  - Claude-specific setup in `.claude/`
  - GitHub/Copilot-specific setup in `.github/`
  - external/shared user-facing skills in `skills/`

When editing agent or skill files:
- use clear names
- keep frontmatter valid
- keep descriptions specific enough to explain when the file should be used
- avoid placeholder text that does not teach anything