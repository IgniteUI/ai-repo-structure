#!/usr/bin/env bash
set -euo pipefail

# CLAUDE.md and AGENTS.md already load every session, so only add the live check result.
cd "${CLAUDE_PROJECT_DIR:-.}"

if result="$(bash .claude/skills/validate-learning-repo/scripts/check-required-files.sh)"; then
  echo "Session-start check passed: required repo files and AGENTS.md commands are present."
else
  echo "Session-start check failed:"
  echo "$result" | grep '^MISSING' || true
  echo "Fix these before relying on the repo guidance."
fi
