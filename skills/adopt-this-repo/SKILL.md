---
name: adopt-this-repo
description: Help a user or agent adopt this repository structure into another project by deciding what to copy, what to adapt, what to skip, and producing a simple adoption plan. Use when someone wants to reuse this repo's AI structure in a new or existing project, choose a minimal, practical, or full adoption level, or map this template onto their own folders and tools.
---

# Adopt this repo

Use this skill to turn this repository into a practical adoption recommendation for another project.

Keep the result concrete and biased toward the smallest useful setup.

## Workflow

1. Read `references/repo-map.md` for the layer overview.
2. Read `references/adoption-levels.md` and default to the smallest useful level.
3. Read `references/copy-vs-adapt.md` to sort items into copy as-is, adapt, rename, or skip.
4. If a target repository is available, inspect it and optionally run `scripts/quickstart-check.sh <target-path>`.
5. Produce the final answer with `assets/adoption-plan-template.md`.

## Output requirements

Always:
- recommend `minimal` unless the target repo clearly needs more
- separate recommendations into `must-have`, `good-to-have`, and `optional`
- say what to copy now, what to adapt later, and what to skip
- explain decisions using the real files and folders from this repository

Keep details in the supporting files instead of repeating them here.
