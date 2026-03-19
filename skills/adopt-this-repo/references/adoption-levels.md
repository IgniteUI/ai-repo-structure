# Adoption levels

Use the smallest level that solves the real problem.

## Minimal

Use this for most repos first.

- Must-have:
  - `README.md`
  - `AGENTS.md`
  - one tool-specific always-on file that matches the tool in use:
    - `CLAUDE.md`, or
    - `.github/copilot-instructions.md`
- Good-to-have:
  - one scoped instruction file if one part of the repo needs special guidance
- Optional:
  - `skills/` only if there is one repeated user-facing workflow

Choose `minimal` when the target repo mostly needs clear broad rules, not an AI subsystem.

## Practical

Use this when the team already relies on AI tooling and wants a reusable setup without adopting every advanced layer.

- Must-have:
  - everything in `minimal`
  - both always-on tool-specific files if the team uses both Claude and Copilot
- Good-to-have:
  - one or two scoped instruction files
  - one shared skill in `skills/`
  - one internal skill for the tool the team actively uses
- Optional:
  - one custom agent for a real repeated role such as review, docs, or maintenance
  - hook support scripts
  - optional hook configs

Choose `practical` when the target repo has real repeated workflows and more than one contributor or tool path. Agents are useful here, but they should usually come after the broad instructions and first useful skills are already working.

## Full

Use this only when the target repo is intentionally building a full internal AI maintainer layer.

- Must-have:
  - the `practical` level
  - `.claude/` and `.github/` internals that match active workflows
- Good-to-have:
  - dedicated agents for review, docs, maintenance, or handoffs
  - multiple internal skills with references and scripts
- Optional:
  - hook configs and support scripts for supported runtimes

Choose `full` when the target repo is mature enough to maintain specialist agents, workflow packs, and optional automation over time.
