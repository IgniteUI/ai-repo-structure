# Copy vs adapt

Use this file to decide what should move over directly and what should change for the target repo.

## Usually copy as-is

- the idea of separate root instruction files for shared and tool-specific guidance
- the standard skill folder shape:
  - `SKILL.md`
  - `assets/`
  - `references/`
  - `scripts/`
- official or conventional file locations such as:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `.github/copilot-instructions.md`
  - `.github/instructions/*.instructions.md`

## Usually adapt

- repo summaries and opening descriptions
- install, dev, test, and lint commands
- file paths such as `src/`, `docs/`, or app-specific folders
- examples, checklists, and workflow steps
- validation scripts so they match the target repo's real files
- custom agent prompts so they match the target repo's real roles, boundaries, and tools

## Usually rename

- custom agent names to match the target repo's real roles
- skill names to match the target repo's real workflows
- scoped instruction file names when they should describe a different folder or concern

Keep official filenames when the path itself is the convention.

## Agents are usually later additions

Custom agents are usually not part of a minimal adoption.

Add them later when:

- the repo has a repeated specialist role such as review, docs, maintenance, or handoff work
- the team wants a persistent persona, tool restriction, or delegation target
- the broad instruction files and first useful skills are already in place

If there is no clear repeated role yet, skip agents for now.

## Usually skip

- repo-specific demo content that teaches this repository rather than the target repo
- public assets and diagrams that only explain this repository
- internal maintainer layers for tools the target repo does not use
- hooks when the runtime does not support them or the automation is not clearly deterministic
- extra agents or skills with no repeated workflow behind them
