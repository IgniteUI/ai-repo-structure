---
name: sync-agent-layers
description: Carries a relevant change across the Claude Code, GitHub Copilot, and Codex layers of this repository without making them identical. Use when an agent, skill, rule, instruction, or hook changes in .claude/, .github/, .codex/, or .agents/.
---

# Sync agent layers

This repo shows one maintainer setup in three tools. When one layer changes, decide which counterparts need the same change, and apply it in each tool's own format.

## Workflow

1. Read `references/counterparts.md` and find the counterparts of the changed file.
2. For each counterpart, decide whether the change is relevant:
   - shared intent, such as the role, focus areas, covered paths, or validation steps: sync it
   - tool-specific behavior, such as frontmatter fields, tool lists, hook output format, or trust rules: leave it, or adapt it only if that tool supports it
3. Apply relevant changes in each tool's own format. Never copy one tool's syntax into another.
4. If a file was added, renamed, or removed, update `references/counterparts.md` and the README tree.
5. Run `bash .claude/skills/validate-learning-repo/scripts/check-required-files.sh`.

## Output

- counterparts updated, with one line per file on what changed
- counterparts intentionally left different, and why
