const layers = [
  {
    className: 'root',
    label: 'Shared root layer',
    title: 'Start here',
    copy: 'These files explain the repo, guide contributors, and give the main shared context before tool-specific behavior begins.',
    files: ['README.md — main entry point', 'LEARN.md — guided course', 'AGENTS.md — shared agent rules', 'CLAUDE.md — Claude project context'],
  },
  {
    className: 'claude',
    label: 'Internal Claude layer',
    title: '.claude/',
    copy: 'Claude-specific rules, agents, skills, and settings live here. This layer supports structured Claude maintainer workflows.',
    files: ['rules/ — scoped guidance', 'agents/ — specialist roles', 'skills/ — repeatable workflows', 'settings.json — settings and hooks'],
  },
  {
    className: 'github',
    label: 'Internal GitHub/Copilot layer',
    title: '.github/',
    copy: 'GitHub/Copilot instructions, agents, skills, and hook configs live here. This layer is for GitHub-side behavior and review workflows.',
    files: ['copilot-instructions.md — repo-wide guidance', 'instructions/ — path-specific guidance', 'agents/ — specialist roles', 'skills/ and hooks/ — workflows and automation'],
  },
  {
    className: 'shared',
    label: 'Shared external layer',
    title: 'skills/',
    copy: 'This is the reusable public-facing workflow layer. It is meant for users of the repo and outside agents, not only maintainers.',
    files: ['SKILL.md — workflow definition', 'assets/ — templates', 'references/ — supporting docs', 'scripts/ — helpers'],
  },
];

const readingPath = [
  'README.md — understand the purpose and the main structure.',
  'LEARN.md — follow the guided course for how the pieces fit together.',
  'AGENTS.md — see the shared working rules for agents.',
  'CLAUDE.md — understand Claude-specific project context.',
  '.claude/ and .github/ — inspect the internal maintainer layers.',
  'skills/ — explore the reusable external workflows.',
  'scripts/hooks/ — see how session-start context support is implemented.',
];

const layerGrid = document.getElementById('layer-grid');
const pathList = document.getElementById('reading-path');

layers.forEach((layer) => {
  const article = document.createElement('article');
  article.className = `layer-card ${layer.className}`;

  article.innerHTML = `
    <div class="layer-label">${layer.label}</div>
    <h3>${layer.title}</h3>
    <p class="layer-copy">${layer.copy}</p>
    <ul class="file-list">
      ${layer.files.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;

  layerGrid.appendChild(article);
});

readingPath.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  pathList.appendChild(li);
});
