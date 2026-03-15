#!/usr/bin/env bash
set -euo pipefail

cat <<'EOF'
{
  "hookSpecificOutput": {
    "hookEventName": "SessionStart",
    "additionalContext": "Repository orientation: start with README.md for the repo walkthrough and course, AGENTS.md for shared agent instructions, CLAUDE.md for Claude-specific guidance, .claude/rules/repo-learning.md for the Claude learning rule, .claude/agents/learning-repo-maintainer.md for the Claude maintainer agent, .claude/skills/validate-learning-repo/SKILL.md for the Claude validation skill, .github/copilot-instructions.md for repo-wide Copilot guidance, .github/instructions/learning-content.instructions.md for path-specific Copilot guidance, .github/agents/learning-repo-maintainer.agent.md for the GitHub maintainer agent, .github/skills/review-learning-repo-pr/SKILL.md for the GitHub PR review skill, and skills/use-this-repo/SKILL.md for the external shared skill. Use the real files as the source of truth."
  }
}
EOF