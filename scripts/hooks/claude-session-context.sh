#!/usr/bin/env bash
set -euo pipefail

cat <<'EOF'
Repository orientation:
- Start with README.md for the main repo walkthrough and course.
- Read AGENTS.md for shared agent instructions.
- Read CLAUDE.md for Claude-specific project guidance.
- Claude rule: .claude/rules/repo-learning.md
- Claude agent: .claude/agents/learning-repo-maintainer.md
- Claude internal skill: .claude/skills/validate-learning-repo/SKILL.md
- GitHub/Copilot repo instructions: .github/copilot-instructions.md
- GitHub path-specific instructions: .github/instructions/learning-content.instructions.md
- GitHub agent: .github/agents/learning-repo-maintainer.agent.md
- GitHub internal skill: .github/skills/review-learning-repo-pr/SKILL.md
- External/shared skill: skills/use-this-repo/SKILL.md

Use the real files above as the source of truth.
If an example tree changes, keep the repo files and the explanations aligned.
EOF