#!/usr/bin/env bash
set -euo pipefail

# Consume hook input so the script behaves like a real sessionStart hook.
cat >/dev/null || true

required_files=(
  "README.md"
  "AGENTS.md"
  "CLAUDE.md"
  ".github/copilot-instructions.md"
)

missing=0

for file in "${required_files[@]}"; do
  if [ ! -e "$file" ]; then
    echo "Missing required repo guidance file: $file" >&2
    missing=1
  fi
done

if [ "$missing" -ne 0 ]; then
  exit 1
fi

echo "GitHub Copilot sessionStart hook verified core repo guidance files." >&2
