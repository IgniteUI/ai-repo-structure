#!/usr/bin/env bash
set -euo pipefail

git diff --name-only HEAD~1..HEAD 2>/dev/null | grep -E '^(README\.md|AGENTS\.md|CLAUDE\.md|\.claude/|\.github/|skills/)' || true