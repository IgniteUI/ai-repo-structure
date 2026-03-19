# Build an AI-Enabled Repository

**A short practical course for turning a normal repo into a clean AI-ready repo**

This guide is a companion to `ai-repo-structure`.

It does not just explain one repo.  
It teaches you how to build a similar setup in:

- a new repo
- an existing repo
- a team repo that uses multiple AI tools

This course is written to be simple:

1. understand the job of each file
2. write short and useful descriptions
3. use the right file for the right job
4. start with templates
5. replace templates with real examples

---

![structure](./public/assets/repo-structure.png)

---

## Quick navigation

- [What you are building](#what-you-are-building)
- [The simple rule before any AI file](#the-simple-rule-before-any-ai-file)
- [Decision table: when to use what](#decision-table-when-to-use-what)
- [Module 1 — README.md](#module-1--readmemd)
- [Module 2 — AGENTS.md](#module-2--agentsmd)
- [Module 3 — CLAUDE.md](#module-3--claudemd)
- [Module 4 — Claude rules](#module-4--claude-rules)
- [Module 5 — Claude agents](#module-5--claude-agents)
- [Module 6 — Claude skills](#module-6--claude-skills)
- [Module 7 — Claude settings and hooks](#module-7--claude-settings-and-hooks)
- [Module 8 — GitHub Copilot repo-wide instructions](#module-8--github-copilot-repo-wide-instructions)
- [Module 9 — GitHub path-specific instructions](#module-9--github-path-specific-instructions)
- [Module 10 — GitHub agents](#module-10--github-agents)
- [Module 11 — GitHub skills](#module-11--github-skills)
- [Module 12 — GitHub Copilot coding agent hooks](#module-12--github-copilot-coding-agent-hooks)
- [Module 13 — Shared skills](#module-13--shared-skills)
- [Module 14 — Hook support scripts](#module-14--hook-support-scripts)
- [A good rollout order](#a-good-rollout-order)
- [Common mistakes](#common-mistakes)
- [One-sentence summary](#one-sentence-summary)

---

## What you are building

By the end, you should be able to build a repo with:

- shared agent instructions in `AGENTS.md`
- Claude-specific project context in `CLAUDE.md`
- internal Claude rules, agents, skills, and hooks in `.claude/`
- internal GitHub Copilot instructions, agents, skills, and optional Copilot coding agent hooks in `.github/`
- external/shared skills in `skills/`

The main idea is simple:

- put **shared guidance** in the root
- put **tool-specific internals** in their own folders
- put **repeatable workflows** in skills
- put **optional deterministic automation** in hooks

---

## The simple rule before any AI file

Before you add any AI-related file, answer these four questions:

1. **Who is this for?**
   - humans
   - all agents
   - Claude only
   - GitHub/Copilot only
   - maintainers only
   - outside users

2. **When should it apply?**
   - always
   - only for some files
   - only for one workflow
   - only at session start

3. **What kind of thing is it?**
   - guidance
   - role
   - workflow
   - automation

4. **Can it stay short?**
   - if yes, keep it in one file
   - if no, split it by job

That one habit will keep the repo clean.

---

## Decision table: when to use what

If you only remember one thing from this repo, remember this split:

- use always-on instruction files for broad repo rules
- use file-based instructions for scoped rules
- use custom agents for specialist roles, handoffs, or tool restrictions
- use skills for reusable workflows with steps, scripts, or supporting resources
- use hooks only for small deterministic automation

| Use this | When to use it | Best for | Do not use it for |
| --- | --- | --- | --- |
| `AGENTS.md` | When a rule should apply to coding agents across the whole repo | shared repo commands, conventions, workflow rules, boundaries | Claude-only behavior, GitHub-only behavior, long step-by-step workflows |
| `CLAUDE.md` | When Claude needs always-on project guidance beyond the shared agent baseline | Claude priorities, Claude-specific structure, when Claude should use its rules, agents, skills, or hooks | general repo rules that already belong in `AGENTS.md`, GitHub/Copilot-only instructions |
| `.github/copilot-instructions.md` | When GitHub Copilot needs broad repo-wide instructions across most tasks | Copilot-wide editing behavior, shared patterns, test/lint expectations, approval boundaries | file-specific rules, one-off workflows, Claude-only guidance |
| `.instructions.md` | When guidance should apply only to specific files or folders | path-scoped writing rules, test-file rules, docs-only rules, language- or folder-specific conventions | repo-wide policy, specialist personas, reusable multi-step workflows |
| custom agents | When you want a persistent specialist role with a clear job, voice, tool set, or handoff target | review agents, maintainer agents, docs agents, constrained tool access, repeatable delegation | broad always-on repo rules, small one-file instructions, generic workflows that do not need a persona |
| skills | When a task is reusable, multi-step, and benefits from `SKILL.md`, scripts, references, or assets | onboarding flows, repo validation, PR review workflows, adoption guides | tiny universal rules, always-on behavior, pure persona definition |
| hooks | When a supported runtime should run a small deterministic action automatically at a known event | session-start checks, safe context injection, lightweight validation, formatting | subjective review, long reasoning, hidden non-deterministic behavior |

Short version:

- `AGENTS.md` = shared always-on rules for coding agents
- `CLAUDE.md` = Claude-only always-on rules
- `.github/copilot-instructions.md` = Copilot-only always-on rules
- `.instructions.md` = scoped rules for certain files
- custom agents = specialist roles
- skills = reusable workflows
- hooks = automatic deterministic actions

---

# Module 1 — README.md

## What this file is for

`README.md` is the human entry point.

Its job is to explain:

- what the repo is
- why it exists
- how it is organized
- where to start reading

## What the opening description is for

The opening description is the first 1–3 lines under the title.

Its job is to help a new reader answer this fast:

- what kind of repo is this?
- why should I care?
- what makes it different?

## Best practice

A good README description should be:

- short
- concrete
- easy to scan
- written for a first-time reader

Good pattern:

- line 1: what the repo is
- line 2: what it helps with
- line 3: what makes it special

Avoid:

- vague marketing language
- internal jargon
- long history
- giant setup details at the top

## Template

```md
# Repository Name

Short explanation of what this repository is.

Second line explaining what it helps people do.

Third line explaining what makes it useful or different.

## Quick navigation
- Overview
- Structure
- How to use it

## Overview
Brief explanation of the repository.

## Structure
Brief explanation of the main layers.

## How to use it
Suggested reading order.
```

## Real example

```md
# AI-Enabled Web App Repo

A practical repository that shows how to organize a real product codebase for human contributors and AI tools.

It combines shared agent guidance, Claude-specific context, GitHub/Copilot-specific configuration, reusable skills, and safe automation.

Use this repo as both a working setup and a learning reference for building a clean AI-ready repository.

## Quick navigation
- Overview
- Project structure
- Agent guidance
- Claude internals
- GitHub/Copilot internals
- Shared skills

## Overview
This repository contains a web application and the AI-related files that help contributors work consistently.

## Project structure
The root explains the repo, `.claude/` contains Claude-specific maintainer pieces, `.github/` contains GitHub/Copilot-specific pieces, and `skills/` contains shared workflows.

## How to use it
Start with README.md, then AGENTS.md, then CLAUDE.md, then the tool-specific folders.
```

---

# Module 2 — AGENTS.md

## What this file is for

`AGENTS.md` is the shared instruction file for coding agents in general.

Think of it as a README for agents.

It should tell agents:

- how to run the repo
- how to test changes
- which conventions matter
- what to avoid

## What the description is for

The description in `AGENTS.md` is not usually a special field.

It is the short opening section that tells an agent:

- what kind of repo this is
- where the main code lives
- what “good work” looks like here

## Best practice

A good `AGENTS.md` should be:

- direct
- practical
- short
- action-oriented

Include:

- install/dev/test/lint commands
- paths that matter
- coding conventions
- review expectations
- boundaries

Avoid:

- product marketing
- long architecture essays
- tool-specific private details
- workflows that belong in skills

## Template

```md
# AGENTS.md

## Repo summary
This is a <type of repo>.
Main application code lives in <path>.
Main tests live in <path>.

## Commands
- Install: <command>
- Dev: <command>
- Test: <command>
- Lint: <command>

## Working rules
- Keep changes small.
- Reuse existing patterns.
- Run tests for the changed area.
- Do not change unrelated files.

## Conventions
- Use <language/framework>.
- Prefer existing helpers and utilities.
- Add tests when behavior changes.

## Boundaries
- Do not add large dependencies without need.
- Do not rewrite broad areas unless asked.
```

## Real example

```md
# AGENTS.md

## Repo summary
This is a TypeScript web application repository.
Main application code lives in `src/`.
Main tests live in `tests/`.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Test: `npm test`
- Lint: `npm run lint`

## Working rules
- Keep diffs focused and easy to review.
- Reuse existing patterns before adding new abstractions.
- Run tests for the changed area before finishing.
- If you touch public behavior, update or add tests.

## Conventions
- Use TypeScript strict mode patterns already present in the repo.
- Keep UI components small and composable.
- Prefer feature-level helpers over global utility sprawl.

## Boundaries
- Do not rename folders or move files unless necessary.
- Do not add heavy dependencies for simple problems.
- Do not change build or CI behavior unless the task requires it.
```

---

# Module 3 — CLAUDE.md

## What this file is for

`CLAUDE.md` is the Claude-specific guide for the project.

Its job is to tell Claude:

- what kind of repo this is
- what to optimize for
- what conventions must stay stable
- where Claude-specific extensions live

## What the description is for

The opening description in `CLAUDE.md` should give Claude the minimum orientation it needs before doing work.

It should answer:

- what repo is this?
- what matters most here?
- what should Claude avoid?

## Best practice

A good `CLAUDE.md` should:

- stay focused on Claude
- explain priorities clearly
- name important paths
- tell Claude when to use rules, agents, skills, or hooks

Avoid:

- copying the whole README
- GitHub-only instructions
- long workflow definitions that belong in skills

## Template

```md
# CLAUDE.md

## Repo identity
This is a <type of repo>.

## Priorities
- Keep changes small
- Preserve structure
- Prefer consistency over novelty

## Important paths
- Source: <path>
- Tests: <path>
- Docs: <path>
- Claude internals: .claude/

## Claude-specific guidance
- Use rules for scoped guidance.
- Use agents for specialist roles.
- Use skills for repeatable workflows.
- Use hooks only for deterministic automation.
```

## Real example

```md
# CLAUDE.md

## Repo identity
This is a product application repository with a small documentation layer and an internal AI-maintainer layer.

## Priorities
- Keep changes easy to review.
- Preserve established structure and naming.
- Prefer small corrections over broad rewrites.
- Keep teaching examples aligned with real files.

## Important paths
- Source: `src/`
- Tests: `tests/`
- Docs: `docs/`
- Claude internals: `.claude/`
- GitHub/Copilot internals: `.github/`

## Claude-specific guidance
- Use `.claude/rules/` for scoped project behavior.
- Use `.claude/agents/` for specialist roles such as review or documentation maintenance.
- Use `.claude/skills/` for repeatable multi-step workflows.
- Use hooks only for deterministic actions such as context injection or simple validation.
```

---

# Module 4 — Claude rules

## What this file is for

Claude rules are for scoped Claude guidance.

Use a rule when some guidance should be:

- narrower than `CLAUDE.md`
- easier to maintain separately
- applied to one concern only

## What the description is for

The rule description should make the rule’s job obvious.

A good rule description answers:

- what does this rule protect?
- when does it matter?
- what should Claude do differently because of it?

## Best practice

A good rule should have:

- one clear topic
- one clear scope
- a few clear behaviors
- easy do/don’t language

Avoid:

- broad repo policy copied from `CLAUDE.md`
- unrelated rules mixed together
- vague wording like “be smart”

## Template

```md
# <rule-name>

## Purpose
Explain what this rule protects.

## Apply this when
Explain the scope.

## Do
- clear action
- clear action

## Do not
- clear anti-pattern
- clear anti-pattern
```

## Real example

```md
# review-quality

## Purpose
Keep review-oriented output precise, useful, and easy to act on.

## Apply this when
Use this guidance when reviewing docs, examples, structure changes, or maintainability issues.

## Do
- Identify concrete problems before suggesting improvements.
- Prefer specific file- or section-level feedback.
- Point out mismatches between examples and the actual repository structure.
- Keep recommendations small and practical.

## Do not
- Give vague praise without useful feedback.
- Invent conventions that are not present in the repo.
- Suggest large rewrites when a small fix is enough.
```

---

# Module 5 — Claude agents

## What this file is for

Claude agents are specialist roles.

Use an agent when you want Claude to handle a repeated kind of task with a different focus.

## What the description is for

For Claude agents, the `description` is very important.

It is the routing hint.

Its job is to help Claude know:

- when to use this agent
- what this agent is good at
- what kind of task should be delegated to it

## Best practice

A good agent description should be:

- specific
- short
- task-oriented
- different from other agents

Good pattern:

- say the specialty
- say when to use it
- say the expected outcome

Avoid:

- generic descriptions like “helps with code”
- overlapping too much with other agents
- stuffing the whole prompt into the description

## Template

```md
---
name: <agent-name>
description: <specialty>. Use when <situation>. Focus on <result>.
tools: <optional tool list>
model: <optional model>
---

You are a specialist for <job>.

Your job is to:
- action
- action
- action

Success looks like:
- outcome
- outcome

Do not:
- anti-pattern
- anti-pattern
```

## Real example

```md
---
name: change-reviewer
description: Reviews changed files for clarity, consistency, and maintainability. Use after edits that need a careful review summary.
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a focused review specialist.

Your job is to:
- inspect the changed files first
- identify concrete issues in clarity, naming, structure, and maintainability
- keep feedback actionable and small
- flag missing tests or missing documentation when relevant

Success looks like:
- a short review with real findings
- clear priorities
- no invented problems

Do not:
- rewrite files directly unless asked
- give long generic advice with no concrete evidence
```

---

# Module 6 — Claude skills

## What this file is for

Claude skills are repeatable workflows.

Use a skill when the work is:

- multi-step
- reusable
- easier to define once and reuse many times

## What the description is for

The skill description should help someone understand:

- what this workflow does
- when to use it
- what output to expect

In practice, the most important description often lives at the top of `SKILL.md`.

## Best practice

A good skill should have:

- one workflow only
- clear inputs
- clear steps
- clear outputs

A good skill folder often contains:

- `SKILL.md` — workflow definition
- `assets/` — reusable output templates
- `references/` — checklists or short supporting docs
- `scripts/` — helper scripts

## Template

```md
# <skill-name>

## Purpose
One short sentence about the workflow.

## Use this when
- case
- case

## Inputs
- input
- input

## Steps
1. first step
2. second step
3. third step

## Output
Describe the final output.

## Resources
- assets/<file>
- references/<file>
- scripts/<file>
```

## Real example

```md
# review-doc-and-structure

## Purpose
Review documentation and structure changes for clarity, consistency, and alignment with the real repository.

## Use this when
- documentation was added or changed
- file trees or setup examples were updated
- structure explanations may be outdated

## Inputs
- changed markdown files
- current repository tree
- relevant checklist

## Steps
1. Read the changed files.
2. Compare examples and explanations against the real repository.
3. Identify mismatches, vague wording, or missing guidance.
4. Summarize findings in a short review.

## Output
A concise review with:
- confirmed strengths
- concrete problems
- recommended fixes

## Resources
- assets/review-template.md
- references/doc-checklist.md
- scripts/list-doc-files.sh
```

### Supporting files for the skill

#### Template for `assets/review-template.md`

```md
# Review summary

## What looks good
- item
- item

## Problems found
- item
- item

## Recommended fixes
- item
- item
```

#### Real example for `assets/review-template.md`

```md
# Review summary

## What looks good
- The folder explanations match the current repo layout.
- The top-level navigation is easy to follow.

## Problems found
- The example tree is missing `scripts/hooks/`.
- The README says hooks exist, but the hook purpose is not explained.

## Recommended fixes
- Update the example tree to include `scripts/hooks/`.
- Add one short section explaining what the session-start hooks do.
```

---

# Module 7 — Claude settings and hooks

## What this file is for

`.claude/settings.json` is where project settings live.

It becomes especially important when you use hooks.

## What the description is for

The description around a hook should explain:

- which event triggers it
- what it does
- why it is safe

## Best practice

Hooks should be:

- deterministic
- small
- easy to inspect
- low-risk

Good uses:

- inject context at session start
- run a formatter
- run a safe validation command

Bad uses:

- fuzzy architecture review
- subjective writing decisions
- long reasoning tasks

## Template

```json
{
  "hooks": {
    "<EventName>": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "<safe shell command>"
          }
        ]
      }
    ]
  }
}
```

## Real example

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/scripts/hooks/claude-session-context.sh"
          }
        ]
      }
    ]
  }
}
```

---

# Module 8 — GitHub Copilot repo-wide instructions

## What this file is for

`.github/copilot-instructions.md` is for broad repo-wide GitHub/Copilot guidance.

Use it for things that apply to almost every task.

Unlike `CLAUDE.md`, this file is mainly about repo-wide editing behavior inside GitHub's instruction system, not about defining one central tool identity for the whole project.

## What the description is for

The opening description should quickly tell Copilot:

- what kind of repo this is
- how to build and test it
- what patterns to prefer

## Best practice

A good repo-wide instruction file should be:

- short
- general
- stable
- useful across many tasks
- clearly different from path-scoped instructions and workflow-specific skills

Put in:

- build/test/lint basics
- shared conventions
- approval boundaries
- a few strong patterns

Keep out:

- narrow file-specific rules
- giant examples
- one-off workflows

## Template

```md
This repository is a <type of repo>.

Before completing code changes:
- Run `<test command>`
- Run `<lint command>`

When editing code:
- Follow existing patterns
- Keep changes small
- Add or update tests when behavior changes

Do not:
- change unrelated files
- add heavy dependencies without need
```

## Real example

```md
This repository is a TypeScript web application with automated tests.

Before completing code changes:
- Run `npm test`
- Run `npm run lint`

When editing code:
- Reuse existing feature and service patterns.
- Keep public interfaces stable unless the task requires change.
- Add or update tests when behavior changes.
- Prefer focused fixes over broad refactors.

Do not:
- change unrelated files
- weaken test coverage without reason
- add heavy dependencies for small utility needs
```

---

# Module 9 — GitHub path-specific instructions

## What this file is for

Path-specific instructions are for rules that only apply to certain files or folders.

Use them when repo-wide instructions would be too broad.

This is one of the clearest GitHub-side differences from the Claude model: GitHub has a built-in path-targeting pattern here, so you can scope guidance by file glob instead of pushing everything into one always-on file.

## What the description is for

The description should explain:

- which files this instruction is for
- what is special about those files
- what good output looks like there

## Best practice

Good path-specific instructions should be:

- narrow
- file-aware
- easy to test
- clearly different from repo-wide guidance

## Template

```md
---
applyTo: "<glob pattern>"
---

When editing files in this path:
- do this
- do this

Avoid:
- this
- this
```

## Real example

```md
---
applyTo: "tests/**/*.ts"
---

When editing test files:
- prefer clear test names that describe behavior
- keep one main behavior per test case
- reuse shared test helpers before creating new ones
- update snapshots only when the behavior change is intentional

Avoid:
- broad end-to-end style logic in unit test files
- brittle timing-based assertions when a deterministic assertion is possible
- test names like "works correctly" that hide the actual behavior
```

---

# Module 10 — GitHub agents

## What this file is for

GitHub agents are specialist Copilot profiles.

Use one when you want a repeatable role for a specific class of work.

Compared with Claude-side agents, these are often most useful for clearly named GitHub workflows such as test review, docs review, or PR-oriented maintenance.

## What the description is for

For GitHub agents, the `description` is the routing summary.

It should clearly say:

- what this agent specializes in
- when it should be used
- what type of result it should produce

## Best practice

A good agent description should:

- name the specialty clearly
- include a use case
- avoid broad generic wording

A good agent body should:

- define scope
- define how the agent thinks
- define what success looks like

## Template

```md
---
name: <agent-name>
description: <specialty>. Use when <situation>. Focus on <result>.
tools: ["read", "search", "edit"]
---

You are a specialist for <job>.

Focus on:
- point
- point

Do:
- action
- action

Do not:
- anti-pattern
- anti-pattern
```

## Real example

```md
---
name: test-reviewer
description: Reviews test changes for coverage, clarity, and maintainability. Use when a pull request changes or adds tests.
tools: ["read", "search", "execute"]
---

You are a test review specialist.

Focus on:
- whether the changed tests cover the intended behavior
- whether the test names clearly describe the scenario
- whether the tests are deterministic and easy to maintain

Do:
- inspect changed test files first
- check for missing assertions or weak assertions
- flag flaky or overly coupled test patterns
- suggest small improvements when needed

Do not:
- rewrite production code unless the task explicitly includes it
- recommend broad framework changes for a local test problem
```

---

# Module 11 — GitHub skills

## What this file is for

GitHub skills are repeatable GitHub/Copilot workflows.

Use them when the task is detailed enough that it should not live in repo-wide instructions.

The GitHub side differs from the Claude side less in structure than in emphasis: skills are where you can keep richer reusable workflow packs without turning repo-wide instructions into a long manual.

## What the description is for

At the top of `SKILL.md`, the description should explain:

- what the workflow does
- when it should load
- what output it creates

## Best practice

A good skill should:

- solve one real workflow
- stay focused
- include reusable resources
- be easy to update

Use a skill instead of repo-wide instructions when the workflow is:

- multi-step
- narrow
- not needed for every task

## Template

```md
# <skill-name>

## Purpose
What this workflow does.

## Use this when
- case
- case

## Inputs
- input
- input

## Steps
1. step
2. step
3. step

## Output
What the result should look like.
```

## Real example

```md
# review-test-changes

## Purpose
Review changed test files for coverage, clarity, and maintainability.

## Use this when
- a pull request adds tests
- a pull request changes existing tests
- test failures suggest weak or outdated coverage

## Inputs
- changed test files
- related source files
- current test command output

## Steps
1. Read the changed test files.
2. Identify the behavior each test is trying to verify.
3. Check whether the assertions are strong and clear.
4. Flag flaky patterns, duplicated setup, or missing coverage.
5. Summarize findings in a short review.

## Output
A short review containing:
- what looks good
- risks or weak points
- recommended improvements
```

### Supporting file template for `assets/review-template.md`

```md
# Test review

## Strong points
- item

## Risks
- item

## Suggested improvements
- item
```

### Supporting file real example for `assets/review-template.md`

```md
# Test review

## Strong points
- The new tests cover the validation error path and the success path.
- Test names clearly describe the expected behavior.

## Risks
- One test relies on a fixed timeout and may become flaky.
- Two files duplicate setup logic that could move to a shared helper.

## Suggested improvements
- Replace the timeout-based assertion with a direct state assertion.
- Extract the repeated setup into `tests/helpers/createMockRequest.ts`.
```

---

# Module 12 — GitHub Copilot coding agent hooks

## What this file is for

GitHub Copilot coding agent hooks are for optional automatic actions at known events.

This is not a general GitHub repository feature and it is not the same thing as GitHub Actions.

In this repo, `.github/hooks/*.json` is used only for the official Copilot coding agent and GitHub Copilot CLI hook format.

Use them for safe, deterministic automation.

## What the description is for

The description around a hook should make it easy to see:

- what event it belongs to
- what it triggers
- why it is safe to automate

## Best practice

Use hooks for:

- safe formatting
- simple validation
- consistent startup behavior

When you document them, say clearly that they are:

- optional and advanced
- specific to GitHub Copilot coding agent and GitHub Copilot CLI
- different from repo-wide instructions, agents, skills, and GitHub Actions

Do not use hooks for:

- subjective review
- long reasoning
- fuzzy architecture advice

## Template

```json
{
  "version": "<version>",
  "hooks": {
    "sessionStart": [
      {
        "type": "<command>",
        "bash": "<path to the hook>",
        "cwd": "<.>",
        "timeoutSec": "<number in sec>"
      }
    ]
  }
}
```

## Real example

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "command",
        "bash": "./scripts/hooks/github-session-start-check.sh",
        "cwd": ".",
        "timeoutSec": 10
      }
    ]
  }
}
```

This repo uses `sessionStart` for a small project-state check. It validates that core guidance files such as `README.md`, `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md` still exist. That is safer than pretending GitHub hooks inject hidden repository context.

---

# Module 13 — Shared skills

## What this file is for

The top-level `skills/` folder is the external/shared layer.

Use it for workflows that are useful to:

- repo users
- teammates
- outside agents
- people adopting the structure

## What the description is for

The shared skill description should explain:

- what the workflow helps someone do
- what kind of repo it fits
- what output they will get

## Best practice

Start with one or two real shared skills.

Good first shared skills are:

- understanding the repo
- adding the AI foundation to another repo
- summarizing a repeatable product or documentation workflow

Do not create many fake skills just to fill the tree.

## Template

```md
# <shared-skill-name>

## Purpose
Short explanation.

## Use this when
- case
- case

## Output
What the user gets.

## Resources
- assets/<file>
- references/<file>
- scripts/<file>
```

## Real example

```md
# add-ai-foundation

## Purpose
Help a team add the basic AI-ready file structure to an existing repository without making it messy.

## Use this when
- a repo has no shared agent instructions yet
- a repo wants to add Claude and GitHub/Copilot structure gradually
- a team wants a simple adoption plan

## Output
A short adoption plan that says:
- which files to add first
- what should go in each file
- what can wait until later

## Resources
- assets/adoption-plan-template.md
- references/layer-map.md
- scripts/check-current-structure.sh
```

### Template for `assets/adoption-plan-template.md`

```md
# Adoption plan

## Start now
- item

## Add next
- item

## Add later
- item

## Risks to avoid
- item
```

### Real example for `assets/adoption-plan-template.md`

```md
# Adoption plan

## Start now
- Add `README.md`, `AGENTS.md`, and `CLAUDE.md`.
- Add `.github/copilot-instructions.md`.

## Add next
- Add one path-specific instruction for tests or docs.
- Add one Claude review agent.
- Add one GitHub test-review skill.

## Add later
- Add optional session-start hooks for supported runtimes.
- Add one shared skill for onboarding or adoption.

## Risks to avoid
- Do not add five agents before you have one useful instruction file.
- Do not create skills for workflows nobody actually uses.
```

---

# Module 14 — Hook support scripts

## What this file is for

`scripts/hooks/` contains the helper scripts used by hooks.

These scripts support automation, but they are not the main lesson.

## What the description is for

The script description should explain:

- what event calls this script
- what it prints or returns
- why the output is safe and useful

## Best practice

Good hook support scripts should be:

- tiny
- deterministic
- readable
- easy to debug

Avoid:

- long logic
- hidden side effects
- destructive commands

## Template

```bash
#!/usr/bin/env bash

echo "Short safe context goes here"
```

## Real example

```bash
#!/usr/bin/env bash

echo "Repository orientation:"
echo "- Source code: src/"
echo "- Tests: tests/"
echo "- Docs: docs/"
echo "- Claude internals: .claude/"
echo "- GitHub/Copilot internals: .github/"
echo "- Shared skills: skills/"
```

---

# A good rollout order

If you are adding this to a real repo, use this order:

1. `README.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. `.github/copilot-instructions.md`
5. one path-specific `.github/instructions/*.instructions.md`
6. one Claude rule
7. one Claude agent
8. one Claude skill
9. one GitHub agent
10. one GitHub skill
11. one optional hook on each side
12. one shared skill

This order works because it moves from:

- explanation
- to shared guidance
- to tool-specific guidance
- to specialist roles
- to workflows
- to automation

---

# Common mistakes

## 1. Everything goes into one file
Fix: split by job.

## 2. The description is too vague
Fix: say who it is for, when to use it, and what result it should produce.

## 3. The template is longer than the real workflow
Fix: keep templates small and practical.

## 4. Agents overlap too much
Fix: give each agent one clear specialty.

## 5. Skills are fake
Fix: create skills only for real repeated workflows.

## 6. Hooks do too much
Fix: keep hooks deterministic and small.

## 7. Examples do not match the real repo
Fix: keep all examples aligned with actual files and actual workflows.

---

# One-sentence summary

A strong AI-enabled repo is not a pile of AI files it is a clear system where shared instructions guide general work, tool-specific files handle specialist behavior, skills capture repeatable workflows, hooks provide optional deterministic automation for supported runtimes, and every file has one easy-to-understand job.
