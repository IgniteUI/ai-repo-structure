#!/usr/bin/env bash
set -euo pipefail

required_paths=(
  "README.md"
  "AGENTS.md"
  "CLAUDE.md"
  ".claude"
  ".github"
  "skills"
)

echo "Checking ai-repo-structure starter structure..."
echo

missing=0

for path in "${required_paths[@]}"; do
  if [ -e "$path" ]; then
    echo "OK: $path"
  else
    echo "MISSING: $path"
    missing=1
  fi
done

echo
if [ "$missing" -eq 0 ]; then
  echo "Starter structure looks complete."
else
  echo "Starter structure is incomplete."
fi

exit "$missing"