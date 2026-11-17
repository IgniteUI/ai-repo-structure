const treeData = [
  { path: "ai-repo-structure/", desc: "# A practical learning repository for AI-enabled projects", accent: "accent-blue" },
  { path: "├─ .agents/", desc: "# Cross-agent layer discovered automatically by Codex and Copilot", accent: "accent-agents" },
  { path: "│  └─ skills/", desc: "" },
  { path: "│     └─ sync-agent-layers/", desc: "# Skill that carries relevant changes across the Claude, Copilot, and Codex layers" },
  { path: "│        ├─ references/", desc: "" },
  { path: "│        │  └─ counterparts.md", desc: "# Which file in each tool layer does the same job" },
  { path: "│        └─ SKILL.md", desc: "# Cross-agent skill definition and workflow" },
  { path: "│", desc: "" },
  { path: "├─ .claude/", desc: "# Internal Claude layer for repo maintainers", accent: "accent-claude" },
  { path: "│  ├─ agents/", desc: "# Claude subagents specialized for this repo" },
  { path: "│  │  └─ learning-repo-maintainer.md", desc: "# Claude agent that maintains repo structure and learning quality" },
  { path: "│  ├─ rules/", desc: "# Always-on or scoped Claude guidance for this repo" },
  { path: "│  │  └─ repo-learning.md", desc: "# Rule that keeps the repo accurate as a teaching/learning repo" },
  { path: "│  ├─ skills/", desc: "# Claude skills for repeatable internal maintainer workflows" },
  { path: "│  │  └─ validate-learning-repo/", desc: "# Claude skill that audits whether the repo still matches what it teaches" },
  { path: "│  │     ├─ assets/", desc: "# Reusable output resources for the skill" },
  { path: "│  │     │  └─ report-template.md", desc: "# Template for reporting validation results" },
  { path: "│  │     ├─ references/", desc: "# Supporting docs the skill reads while working" },
  { path: "│  │     │  └─ checklist.md", desc: "# Checklist for validating structure, naming, and teaching quality" },
  { path: "│  │     ├─ scripts/", desc: "# Helper scripts used by the skill" },
  { path: "│  │     │  └─ check-required-files.sh", desc: "# Script that checks required repo files and that docs/ matches src/" },
  { path: "│  │     └─ SKILL.md", desc: "# Main Claude skill definition and workflow instructions" },
  { path: "│  └─ settings.json", desc: "# Claude project settings; needed here because Claude project hooks live here" },
  { path: "│", desc: "" },
  { path: "├─ .codex/", desc: "# Internal Codex layer for repo maintainers", accent: "accent-codex" },
  { path: "│  ├─ agents/", desc: "# Codex custom agents for this repo" },
  { path: "│  │  └─ learning_repo_maintainer.toml", desc: "# Codex maintainer agent for repo structure and learning content" },
  { path: "│  └─ hooks.json", desc: "# Codex SessionStart hook that reports the repo check result" },
  { path: "│", desc: "" },
  { path: "├─ .github/", desc: "# Internal GitHub/Copilot layer for repo maintainers", accent: "accent-github" },
  { path: "│  ├─ agents/", desc: "# Custom GitHub Copilot agents for this repo" },
  { path: "│  │  └─ learning-repo-maintainer.agent.md", desc: "# GitHub-side maintainer agent for repo structure and learning content" },
  { path: "│  ├─ instructions/", desc: "# Path-specific Copilot instructions" },
  { path: "│  │  └─ learning-content.instructions.md", desc: "# Copilot guidance for README, AGENTS, CLAUDE, and other teaching content" },
  { path: "│  ├─ hooks/", desc: "# GitHub/Copilot workspace hook configs" },
  { path: "│  │  └─ session-start-check.json", desc: "# Official sessionStart hook config for validating core repo guidance" },
  { path: "│  ├─ skills/", desc: "# GitHub Copilot skills for repeatable maintainer workflows" },
  { path: "│  │  └─ review-learning-repo-pr/", desc: "# GitHub skill for reviewing PRs that change the repo's learning structure" },
  { path: "│  │     ├─ assets/", desc: "# Reusable review output resources" },
  { path: "│  │     │  └─ review-template.md", desc: "# Template for writing PR review findings" },
  { path: "│  │     ├─ references/", desc: "# Supporting docs for the review skill" },
  { path: "│  │     │  └─ review-checklist.md", desc: "# Checklist for reviewing structure, naming, and correctness" },
  { path: "│  │     ├─ scripts/", desc: "# Helper scripts used by the review skill" },
  { path: "│  │     │  └─ list-learning-files.sh", desc: "# Script that lists learning-related files changed in a PR" },
  { path: "│  │     └─ SKILL.md", desc: "# Main GitHub skill definition and PR review workflow" },
  { path: "│  └─ copilot-instructions.md", desc: "# Main repo-wide GitHub Copilot instructions" },
  { path: "│", desc: "" },
  { path: "├─ skills/", desc: "# External/shared skills for users of the repo and outside agents", accent: "accent-shared" },
  { path: "│  ├─ README.md", desc: "# Overview of the available shared skills" },
  { path: "│  ├─ use-this-repo/", desc: "# Shared skill for understanding the repo structure and layers" },
  { path: "│  │  ├─ references/", desc: "# Supporting docs for understanding the repo" },
  { path: "│  │  │  └─ repo-map.md", desc: "# Explanation of the repo layers and what each one is for" },
  { path: "│  │  ├─ scripts/", desc: "# Helper scripts for external/shared usage" },
  { path: "│  │  │  └─ quickstart-check.sh", desc: "# Script that checks whether the expected starter structure exists" },
  { path: "│  │  └─ SKILL.md", desc: "# Main shared skill definition for understanding the repo" },
  { path: "│  └─ adopt-this-repo/", desc: "# Shared skill for adopting this AI structure into another project" },
  { path: "│     ├─ assets/", desc: "# Reusable templates for adoption output" },
  { path: "│     │  └─ adoption-plan-template.md", desc: "# Template for producing a practical adoption plan" },
  { path: "│     ├─ references/", desc: "# Supporting docs for adoption decisions" },
  { path: "│     │  ├─ repo-map.md", desc: "# Summary of the repo layers and their jobs" },
  { path: "│     │  ├─ adoption-levels.md", desc: "# Minimal, practical, and full adoption levels" },
  { path: "│     │  └─ copy-vs-adapt.md", desc: "# What to copy, adapt, rename, or skip" },
  { path: "│     ├─ scripts/", desc: "# Helper scripts for adoption checks" },
  { path: "│     │  └─ quickstart-check.sh", desc: "# Optional script for checking a target repo's starter structure" },
  { path: "│     └─ SKILL.md", desc: "# Main shared skill definition for adoption planning" },
  { path: "│", desc: "" },
  { path: "├─ docs/", desc: "# Public documentation site for GitHub Pages and search indexing" },
  { path: "│  ├─ _config.yml", desc: "# GitHub Pages / Jekyll site configuration" },
  { path: "│  ├─ index.html", desc: "# Published copy of src/index.html for GitHub Pages" },
  { path: "│  ├─ styles.css", desc: "# Published copy of src/styles.css" },
  { path: "│  ├─ app.js", desc: "# Published copy of src/app.js" },
  { path: "│  ├─ read.md", desc: "# Markdown overview page, published at /overview/" },
  { path: "│  ├─ repo-structure.md", desc: "# Page explaining the repository structure and each main layer" },
  { path: "│  ├─ claude-vs-copilot.md", desc: "# Page comparing the Claude, GitHub Copilot, and Codex parts" },
  { path: "│  ├─ getting-started.md", desc: "# Page showing how to use this repo as a starter, reference, or learning repo" },
  { path: "│  ├─ googlecad1e2aef0d47fd8.html", desc: "# Google Search Console verification file" },
  { path: "│  ├─ robots.txt", desc: "# Search engine crawler instructions for the public docs site" },
  { path: "│  └─ sitemap.xml", desc: "# List of site pages to help search engines discover them" },
  { path: "│", desc: "" },
  { path: "├─ public/", desc: "# Static assets used by the README" },
  { path: "│  └─ assets/", desc: "" },
  { path: "│     └─ igniteui.svg", desc: "# Repository svg" },
  { path: "│", desc: "" },
  { path: "├─ scripts/", desc: "# Shared repo utility scripts" },
  { path: "│  └─ hooks/", desc: "# Helper scripts used by Claude, GitHub/Copilot, and Codex hooks" },
  { path: "│     ├─ github-session-start-check.sh", desc: "# Bash sessionStart check for GitHub Copilot hooks" },
  { path: "│     └─ session-start-context.sh", desc: "# Reports the repo check result to Claude and Codex at SessionStart" },
  { path: "│", desc: "" },
  { path: "├─ src/", desc: "# Application source: the AI Repo Map landing page; edit here" },
  { path: "│  ├─ index.html", desc: "# Landing page markup, metadata, and static content" },
  { path: "│  ├─ styles.css", desc: "# Landing page styles" },
  { path: "│  └─ app.js", desc: "# Script that renders the directory tree and page effects" },
  { path: "│", desc: "" },
  { path: "├─ AGENTS.md", desc: "# Shared agent-facing instructions for coding agents working in the repo" },
  { path: "├─ CLAUDE.md", desc: "# Main Claude-specific project guidance" },
  { path: "├─ CONTRIBUTING.md", desc: "# Contributor workflow guidance for keeping the repo accurate and aligned" },
  { path: "├─ LEARN.md", desc: "# Course for understanding and copying the system" },
  { path: "├─ LICENSE", desc: "# MIT license" },
  { path: "└─ README.md", desc: "# Main human entry point" }
];

document.addEventListener('DOMContentLoaded', () => {
  renderTree();
  initMouseTracker();
  initScrollAnimations();
});

function renderTree() {
  const treeContainer = document.getElementById('repo-tree');
  treeContainer.innerHTML = treeData.map(row => {
    const accentClass = row.accent ? row.accent : '';
    return `
      <div class="tree-row ${accentClass}">
        <span class="tree-path">${row.path}</span>
        <span class="tree-desc">${row.desc}</span>
      </div>
    `;
  }).join('');
}

function initMouseTracker() {
  const tracker = document.getElementById('coord-tracker');
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const x = String(e.clientX).padStart(4, '0');
        const y = String(e.clientY).padStart(4, '0');
        tracker.textContent = `X:${x} Y:${y}`;
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.stagger-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  // Hide sections only once the observer exists, so content stays visible if JavaScript is off or fails.
  document.documentElement.classList.add('js-anim');
  elements.forEach(el => observer.observe(el));
  
  setTimeout(() => {
    document.querySelector('.hero').classList.add('visible');
  }, 100);
}