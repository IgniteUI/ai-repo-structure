---
name: validate-learning-repo
description: Audits this repository's teaching content against the real file structure. Use when checking README examples, AGENTS.md, CLAUDE.md, .claude/, .github/, or shared skills for accuracy and consistency.
---

# Validate learning repo

Use this skill when the task is to verify that the repository still teaches the right thing and that examples still match reality.

## Workflow

1. Read `references/checklist.md`.
2. Run `scripts/check-required-files.sh`.
3. Compare:
   - `README.md`
   - `AGENTS.md`
   - `CLAUDE.md`
   - `.claude/`
   - `.github/`
   - `skills/`
4. Look for:
   - missing referenced files
   - example trees that no longer match the repository
   - invalid agent or skill naming
   - duplicated guidance in the wrong layer
   - unsupported or invented conventions
5. Format findings with `assets/report-template.md`.

## Output requirements

- Group findings into:
  - broken or misleading
  - should improve
  - already good
- Prefer exact file paths.
- Be concrete.
- Do not suggest abstract "best practices" unless they clearly apply to this repo.