#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "README.md"
  "CLAUDE.md"
  "AGENTS.md"
  ".github/copilot-instructions.md"
  ".claude/settings.json"
)

missing=0

for file in "${required_files[@]}"; do
  if [ ! -e "$file" ]; then
    echo "MISSING: $file"
    missing=1
  else
    echo "OK: $file"
  fi
done

exit "$missing"