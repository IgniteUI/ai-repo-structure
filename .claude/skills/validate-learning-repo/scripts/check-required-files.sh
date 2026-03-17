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

agents_file="AGENTS.md"
required_agents_patterns=(
  '^## Commands$'
  '^- Install:'
  '^- Dev:'
  '^- Test:'
  '^- Lint:'
)
required_agents_labels=(
  "AGENTS.md section: Commands"
  "AGENTS.md command: Install"
  "AGENTS.md command: Dev"
  "AGENTS.md command: Test"
  "AGENTS.md command: Lint"
)

for i in "${!required_agents_patterns[@]}"; do
  pattern="${required_agents_patterns[$i]}"
  label="${required_agents_labels[$i]}"

  if grep -Eq "$pattern" "$agents_file"; then
    echo "OK: $label"
  else
    echo "MISSING: $label"
    missing=1
  fi
done

exit "$missing"
