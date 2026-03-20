const layers = [
  {
    className: 'root',
    label: 'Shared Root',
    title: 'THE CORE DIRECTORY',
    copy: 'These files explain the repo, guide contributors, and give the main shared context before tool-specific behavior begins.',
    files: ['README.md — Main entry point', 'LEARN.md — Guided course', 'AGENTS.md — Shared agent rules', 'CLAUDE.md — Claude context']
  },
  {
    className: 'claude',
    label: 'Internal / Claude',
    title: '.claude/',
    copy: 'Claude-specific rules, agents, skills, and settings live here. This layer supports structured Claude maintainer workflows.',
    files: ['rules/ — Scoped guidance', 'agents/ — Specialist roles', 'skills/ — Repeatable workflows', 'settings.json — Hooks config']
  },
  {
    className: 'github',
    label: 'Internal / Copilot',
    title: '.github/',
    copy: 'GitHub/Copilot instructions, agents, skills, and hook configs live here. Hand-crafted for GitHub-side behavior.',
    files: ['copilot-instructions.md — Repo guidance', 'instructions/ — Path-specific context', 'agents/ — Copilot roles', 'hooks/ — Automation']
  },
  {
    className: 'shared',
    label: 'External / Public',
    title: 'skills/',
    copy: 'This is the reusable public-facing workflow layer. It is meant for users of the repo and outside agents, not only maintainers.',
    files: ['SKILL.md — Workflow definition', 'assets/ — Templates', 'references/ — Supporting docs', 'scripts/ — Executables']
  }
];

const treeData = [
  { path: "ai-repo-structure/", desc: "# A practical learning repository for AI-enabled projects", accent: "accent-blue" },
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
  { path: "│  │     │  └─ check-required-files.sh", desc: "# Script that checks whether required repo files exist" },
  { path: "│  │     └─ SKILL.md", desc: "# Main Claude skill definition and workflow instructions" },
  { path: "│  └─ settings.json", desc: "# Claude project settings; needed here because hooks live here" },
  { path: "│", desc: "" },
  { path: "├─ .github/", desc: "# Internal GitHub/Copilot layer for repo maintainers", accent: "accent-github" },
  { path: "│  ├─ agents/", desc: "# Custom GitHub Copilot agents for this repo" },
  { path: "│  │  └─ learning-repo-maintainer.agent.md", desc: "# GitHub-side maintainer agent for repo structure" },
  { path: "│  ├─ instructions/", desc: "# Path-specific Copilot instructions" },
  { path: "│  │  └─ learning-content.instructions.md", desc: "# Copilot guidance for teaching content" },
  { path: "│  ├─ hooks/", desc: "# GitHub/Copilot workspace hook configs" },
  { path: "│  │  └─ session-start-check.json", desc: "# Official sessionStart hook config for core guidance" },
  { path: "│  ├─ skills/", desc: "# GitHub Copilot skills for repeatable maintainer workflows" },
  { path: "│  │  └─ review-learning-repo-pr/", desc: "# GitHub skill for reviewing structure PRs" },
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
  { path: "│  ├─ use-this-repo/", desc: "# Shared skill for understanding the repo structure and layers" },
  { path: "│  │  ├─ assets/", desc: "# Reusable templates for user-facing outputs" },
  { path: "│  │  │  └─ adoption-plan-template.md", desc: "# Template for suggesting how someone should adopt this repo" },
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
  { path: "├─ docs/", desc: "# Public documentation site for GitHub Pages and Google indexing" },
  { path: "│  ├─ _config.yml", desc: "# GitHub Pages / Jekyll site configuration" },
  { path: "│  ├─ index.md", desc: "# Main landing page of the docs site" },
  { path: "│  ├─ repo-structure.md", desc: "# Page explaining the repository structure and each main layer" },
  { path: "│  ├─ claude-vs-copilot.md", desc: "# Page comparing the Claude-specific and Copilot-specific parts" },
  { path: "│  ├─ getting-started.md", desc: "# Page showing how to use this repo as a starter/reference" },
  { path: "│  ├─ robots.txt", desc: "# Search engine crawler instructions for the public docs site" },
  { path: "│  └─ sitemap.xml", desc: "# List of site pages to help search engines discover them" },
  { path: "│", desc: "" },
  { path: "├─ scripts/", desc: "# Shared repo utility scripts" },
  { path: "│  └─ hooks/", desc: "# Helper scripts used by Claude and GitHub/Copilot hooks" },
  { path: "│     ├─ claude-session-context.sh", desc: "# Emits repo context for Claude SessionStart" },
  { path: "│     └─ github-session-start-check.sh", desc: "# Bash sessionStart check for GitHub Copilot hooks" },
  { path: "│", desc: "" },
  { path: "├─ src/", desc: "# Project source area; present as the code/application folder" },
  { path: "│  ├─ index.html", desc: "# Small HTML shell for the demo page" },
  { path: "│  ├─ styles.css", desc: "# Minimal styles for the AI Repo Map layout" },
  { path: "│  └─ app.js", desc: "# Small script that renders the repo map content" },
  { path: "│", desc: "" },
  { path: "├─ AGENTS.md", desc: "# Shared agent-facing instructions for coding agents working in the repo" },
  { path: "├─ CLAUDE.md", desc: "# Main Claude-specific project guidance" },
  { path: "├─ LEARN.md", desc: "# Course for understanding and copying the system" },
  { path: "└─ README.md", desc: "# Main human entry point; will become the learning guide for the repo" }
];

const readingPath = [
  'README.md — Understand the purpose and the main structure.',
  'LEARN.md — Follow the guided course for how the pieces fit together.',
  'AGENTS.md — See the shared working rules for agents.',
  'CLAUDE.md — Understand Claude-specific project context.',
  '.claude/ and .github/ — Inspect the internal maintainer layers.',
  'skills/ — Explore the reusable external workflows.',
  'scripts/hooks/ — See how session-start context support is implemented.'
];

document.addEventListener('DOMContentLoaded', () => {
  renderLayers();
  renderTree();
  renderPath();
  initMouseTracker();
  initScrollAnimations();
});

function renderLayers() {
  const grid = document.getElementById('layer-grid');
  grid.innerHTML = layers.map(layer => `
    <article class="layer-card ${layer.className}">
      <div class="layer-label">${layer.label}</div>
      <h3>${layer.title}</h3>
      <p class="layer-copy">${layer.copy}</p>
      <ul class="file-list">
        ${layer.files.map(file => `<li>${file}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

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

function renderPath() {
  const pathList = document.getElementById('reading-path');
  pathList.innerHTML = readingPath.map((step, index) => {
    const num = String(index + 1).padStart(2, '0');
    return `
      <li>
        <div class="path-num">${num}</div>
        <div class="path-text">${step}</div>
      </li>
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

  elements.forEach(el => observer.observe(el));
  
  setTimeout(() => {
    document.querySelector('.hero').classList.add('visible');
  }, 100);
}