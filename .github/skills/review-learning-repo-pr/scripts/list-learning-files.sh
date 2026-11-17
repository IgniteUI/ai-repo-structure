#!/usr/bin/env bash
set -euo pipefail

base="${1:-origin/main}"

git diff --name-only "$base"...HEAD 2>/dev/null | grep -E '^(README\.md|LEARN\.md|AGENTS\.md|CLAUDE\.md|CONTRIBUTING\.md|\.claude/|\.github/|skills/|docs/)' || true