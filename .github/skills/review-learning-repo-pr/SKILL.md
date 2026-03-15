---
name: review-learning-repo-pr
description: Reviews pull requests that change the teaching structure of this repository. Use when PRs affect README.md, AGENTS.md, CLAUDE.md, .claude/, .github/, or skills/.
---

# Review learning repo PR

Use this skill for pull requests that change the repository’s AI structure, instructions, agents, skills, or teaching content.

## Review workflow

1. Read `references/review-checklist.md`.
2. Run `scripts/list-learning-files.sh`.
3. Review changed files in:
   - `README.md`
   - `AGENTS.md`
   - `CLAUDE.md`
   - `.claude/`
   - `.github/`
   - `skills/`
4. Check for:
   - incorrect or stale file paths
   - examples that do not match the repo
   - invalid or weak frontmatter
   - mixed-up responsibilities between Claude, GitHub, and shared layers
   - missing updates to related examples
5. Write the result using `assets/review-template.md`.

## Review style

- Be concrete.
- Use exact file paths.
- Prefer actionable comments.
- Focus on instructional accuracy and structural consistency.