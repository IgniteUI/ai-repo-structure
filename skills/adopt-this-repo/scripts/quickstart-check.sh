#!/usr/bin/env bash
set -euo pipefail

target="${1:-.}"

if [ ! -d "$target" ]; then
  echo "ERROR: target path does not exist: $target"
  exit 1
fi

must_have_paths=(
  "README.md"
  "AGENTS.md"
)

good_to_have_paths=(
  ".claude/rules"
  ".github/instructions"
)

optional_paths=(
  "skills"
)

missing_must_have=0

check_group() {
  local label="$1"
  shift

  echo "$label"
  for path in "$@"; do
    if [ -e "$target/$path" ]; then
      echo "OK: $path"
    else
      echo "MISSING: $path"
      if [ "$label" = "Must-have" ]; then
        missing_must_have=1
      fi
    fi
  done
  echo
}

echo "Checking target repo: $target"
echo

check_group "Must-have" "${must_have_paths[@]}"

# Minimal level needs one always-on file for the tool in use.
echo "Must-have (one of)"
if [ -e "$target/CLAUDE.md" ] || [ -e "$target/.github/copilot-instructions.md" ]; then
  echo "OK: CLAUDE.md or .github/copilot-instructions.md"
else
  echo "MISSING: CLAUDE.md or .github/copilot-instructions.md"
  missing_must_have=1
fi
echo

check_group "Good-to-have" "${good_to_have_paths[@]}"
check_group "Optional" "${optional_paths[@]}"

if [ "$missing_must_have" -eq 0 ]; then
  echo "Basic adoption check passed."
else
  echo "Basic adoption check found missing must-have items."
fi

exit "$missing_must_have"
