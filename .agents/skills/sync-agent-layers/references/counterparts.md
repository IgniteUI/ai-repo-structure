# Counterparts

Files in the same row do the same job for a different tool.

| Job | Claude Code | GitHub Copilot | Codex |
| --- | --- | --- | --- |
| Always-on instructions | `CLAUDE.md` (imports `AGENTS.md`) | `.github/copilot-instructions.md` | `AGENTS.md` (read directly) |
| Scoped guidance | `.claude/rules/repo-learning.md` | `.github/instructions/learning-content.instructions.md` | none (Codex scopes with nested `AGENTS.md`) |
| Maintainer agent | `.claude/agents/learning-repo-maintainer.md` | `.github/agents/learning-repo-maintainer.agent.md` | `.codex/agents/learning_repo_maintainer.toml` |
| Maintainer skill | `.claude/skills/validate-learning-repo/` | `.github/skills/review-learning-repo-pr/` | none (uses `.agents/skills/`) |
| Cross-agent skill | not discovered (read `SKILL.md` directly) | `.agents/skills/sync-agent-layers/` | `.agents/skills/sync-agent-layers/` |
| Session-start hook | `.claude/settings.json` | `.github/hooks/session-start-check.json` | `.codex/hooks.json` |
| Hook script | `scripts/hooks/session-start-context.sh` | `scripts/hooks/github-session-start-check.sh` | `scripts/hooks/session-start-context.sh` |

## Intentional differences

- The Claude and Codex hooks add a one-line check result to the context. The Copilot hook only checks files, because Copilot reads `sessionStart` output only as JSON `additionalContext`.
- The Claude hook runs on every session source (empty matcher). The Codex hook runs only on `startup`, so it does not repeat the check after a resume, clear, or compact.
- The Codex agent name uses underscores, as in the official Codex examples. The Claude and Copilot agents use hyphens.
- Claude and Copilot agents list allowed tools. Codex agents have no tool list.
- `validate-learning-repo` audits the repo against what it teaches. `review-learning-repo-pr` reviews pull requests. They share a purpose, not a workflow.
