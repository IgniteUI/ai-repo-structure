# Validation checklist

## Structure
- Do all paths mentioned in markdown files exist?
- Do example repo trees match actual folders and files?
- Are Claude files under `.claude/` and GitHub/Copilot files under `.github/`?

## Agent quality
- Does each agent have a clear purpose?
- Is the description specific enough to trigger the right usage?
- Are tool permissions appropriate for the role?

## Skill quality
- Does each skill have a clear `description` that says what it does and when to use it?
- Is `SKILL.md` focused, with heavier detail moved to supporting files?
- Do referenced files actually exist?

## Teaching quality
- Are examples concrete instead of generic?
- Are explanations tied to this repository’s actual structure?
- Are equivalent Claude and GitHub concepts clearly separated?