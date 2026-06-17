const fs = require("fs");
const path = require("path");
const site = require("../data/site-data");

const root = path.resolve(__dirname, "..");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function relPath(depth = 0) {
  return depth === 0 ? "." : Array(depth).fill("..").join("/");
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function cleanGenerated() {
  for (const dir of ["agents", "templates"]) {
    fs.rmSync(path.join(root, dir), { recursive: true, force: true });
  }
}

function linkList(items, emptyText = "No public source found yet.") {
  if (!items || items.length === 0) {
    return `<p class="muted">${escapeHtml(emptyText)}</p>`;
  }

  return `<ul class="source-list">${items
    .map((item) => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a></li>`)
    .join("")}</ul>`;
}

function pills(items, extraClass = "") {
  return `<div class="pills">${items.map((item) => `<span class="pill ${extraClass}">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function layout({ title, description, body, depth = 0 }) {
  const prefix = relPath(depth);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | ${escapeHtml(site.title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <script>
    (() => {
      const param = new URLSearchParams(window.location.search).get("scoutTheme");
      const theme =
        param || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", theme);
    })();
  </script>
  <link rel="stylesheet" href="${prefix}/styles.css">
</head>
<body>
  <div class="shell">
    <header class="hero">
      <div class="wrap">
        <nav class="nav" aria-label="Main navigation">
          <a class="brand" href="${prefix}/index.html"><span class="logo">A</span><span>${escapeHtml(site.title)}</span></a>
          <div class="nav-links">
            <a href="${prefix}/index.html#agents">Agents</a>
            <a href="${prefix}/templates/index.html">Agent Builder templates</a>
            <a href="${prefix}/sources.html">Sources & refresh</a>
          </div>
        </nav>
      </div>
    </header>
    ${body}
    <footer class="footer">
      <div class="wrap">
        <p>Last updated ${escapeHtml(site.lastUpdated)}. ${escapeHtml(site.sourceNote)}</p>
      </div>
    </footer>
  </div>
</body>
</html>`;
}

function cardForAgent(agent) {
  const slug = slugify(agent.name);
  return `<article class="card">
    <div class="pills"><span class="pill status">${escapeHtml(agent.status)}</span></div>
    <h3><a href="agents/${slug}/index.html">${escapeHtml(agent.name)}</a></h3>
    <p>${escapeHtml(agent.summary)}</p>
    ${pills(agent.surfaces)}
  </article>`;
}

function cardForTemplate(template, depth = 0) {
  const prefix = relPath(depth);
  const slug = slugify(template.name);
  return `<article class="card">
    <div class="pills"><span class="pill status">${escapeHtml(template.type)}</span></div>
    <h3><a href="${prefix}/templates/${slug}/index.html">${escapeHtml(template.name)}</a></h3>
    <p>${escapeHtml(template.summary)}</p>
  </article>`;
}

function homePage() {
  const stats = [
    ["25", "First-party agents"],
    [String(site.templates.length), "Template pages"],
    ["Scheduled", "Source monitoring"]
  ];

  const body = `<section class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">Microsoft 365 Copilot</p>
        <h1>${escapeHtml(site.title)}</h1>
        <p class="lede">${escapeHtml(site.subtitle)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#agents">Explore agents</a>
          <a class="button" href="templates/index.html">View templates</a>
        </div>
      </div>
      <aside class="orb-card" aria-label="Site summary">
        <div class="orb" aria-hidden="true"></div>
        <div class="stats">
          ${stats.map(([number, label]) => `<div class="stat"><strong>${number}</strong><span>${label}</span></div>`).join("")}
        </div>
      </aside>
    </div>
  </section>
  <main>
    <div class="wrap">
      <section class="section">
        <div class="callout">
          <strong>About this site</strong>
          <p>${escapeHtml(site.sourceNote)} Roadmap coverage is intentionally conservative because agent-specific roadmap details are not always published.</p>
        </div>
      </section>
      <section class="section" id="agents">
        <div class="section-head">
          <div>
            <p class="eyebrow">Inventory</p>
            <h2>First-party Copilot agents</h2>
          </div>
        </div>
        <div class="cards">${site.agents.map(cardForAgent).join("")}</div>
      </section>
      <section class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Agent Builder</p>
            <h2>Templates and tuned-agent starters</h2>
          </div>
          <a class="button" href="templates/index.html">Open templates</a>
        </div>
        <div class="cards">${site.templates.slice(0, 3).map((template) => cardForTemplate(template)).join("")}</div>
      </section>
    </div>
  </main>`;

  writeFile(path.join(root, "index.html"), layout({ title: "Home", description: site.subtitle, body }));
}

function agentPage(agent) {
  const body = `<main>
    <div class="wrap page-grid">
      <article class="prose">
        <div>
          <p class="eyebrow">First-party Copilot agent</p>
          <h1>${escapeHtml(agent.name)}</h1>
        </div>
        ${pills([agent.status], "status")}
        ${pills(agent.surfaces)}
        <p class="lede">${escapeHtml(agent.summary)}</p>
        <section class="section">
          <h2>What it does</h2>
          <p>${escapeHtml(agent.details)}</p>
        </section>
        ${agent.caveat ? `<section class="callout"><strong>Research caveat</strong><p>${escapeHtml(agent.caveat)}</p></section>` : ""}
        <section class="section">
          <h2>Roadmap signals</h2>
          ${linkList(agent.roadmap, "No agent-specific roadmap item was confirmed from public sources. Monitor the Microsoft 365 Roadmap and release notes for changes.")}
        </section>
      </article>
      <aside class="source-panel">
        <h3>Documentation</h3>
        ${linkList(agent.docs)}
        <h3>Microsoft blogs</h3>
        ${linkList(agent.blogs, "No dedicated Microsoft blog post found yet.")}
      </aside>
    </div>
  </main>`;
  writeFile(path.join(root, "agents", slugify(agent.name), "index.html"), layout({
    title: agent.name,
    description: agent.summary,
    body,
    depth: 2
  }));
}

function templatesIndex() {
  const body = `<main>
    <div class="wrap">
      <section class="section">
        <p class="eyebrow">Microsoft 365 Copilot</p>
        <h1>Agent Builder templates</h1>
        <p class="lede">${escapeHtml(site.agentBuilder.summary)}</p>
      </section>
      <section class="section callout">
        <strong>Roadmap note</strong>
        <p>${escapeHtml(site.roadmapNotes[0].note)}</p>
        <p><a href="${escapeHtml(site.roadmapNotes[0].url)}">${escapeHtml(site.roadmapNotes[0].title)}</a></p>
      </section>
      <section class="section">
        <h2>Supporting documentation</h2>
        ${linkList(site.agentBuilder.docs)}
      </section>
      <section class="section">
        <h2>Template catalog</h2>
        <div class="cards">${site.templates.map((template) => cardForTemplate(template, 1)).join("")}</div>
      </section>
    </div>
  </main>`;
  writeFile(path.join(root, "templates", "index.html"), layout({
    title: "Agent Builder templates",
    description: "Agent Builder overview and template catalog.",
    body,
    depth: 1
  }));
}

function templatePage(template) {
  const body = `<main>
    <div class="wrap page-grid">
      <article class="prose">
        <div>
          <p class="eyebrow">${escapeHtml(template.type)}</p>
          <h1>${escapeHtml(template.name)}</h1>
        </div>
        <p class="lede">${escapeHtml(template.summary)}</p>
        <section class="section">
          <h2>Details</h2>
          <p>${escapeHtml(template.details)}</p>
        </section>
        <section class="section">
          <h2>Roadmap signals</h2>
          ${linkList(template.roadmap, "No template-specific roadmap item was confirmed from public sources.")}
        </section>
      </article>
      <aside class="source-panel">
        <h3>Documentation</h3>
        ${linkList(template.docs)}
      </aside>
    </div>
  </main>`;
  writeFile(path.join(root, "templates", slugify(template.name), "index.html"), layout({
    title: template.name,
    description: template.summary,
    body,
    depth: 2
  }));
}

function sourcesPage() {
  const docs = new Map();
  for (const agent of site.agents) {
    for (const item of [...agent.docs, ...agent.blogs, ...agent.roadmap]) {
      docs.set(item.url, item.title);
    }
  }
  for (const template of site.templates) {
    for (const item of [...template.docs, ...template.roadmap]) {
      docs.set(item.url, item.title);
    }
  }
  for (const item of [...site.agentBuilder.docs, ...site.agentBuilder.blogs, ...site.roadmapNotes]) {
    docs.set(item.url, item.title);
  }

  const rows = [...docs.entries()]
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([url, title]) => `<tr><td>${escapeHtml(title)}</td><td><a href="${escapeHtml(url)}">${escapeHtml(url)}</a></td></tr>`)
    .join("");

  const body = `<main>
    <div class="wrap">
      <section class="section">
        <p class="eyebrow">Maintenance</p>
        <h1>Sources and refresh monitoring</h1>
        <p class="lede">The repo includes a scheduled GitHub Actions monitor that checks source URL availability and metadata so documentation and blog changes can become actionable update issues.</p>
      </section>
      <section class="section callout">
        <strong>Roadmap caveat</strong>
        <p>${escapeHtml(site.roadmapNotes[0].note)}</p>
      </section>
      <section class="section">
        <h2>Tracked public sources</h2>
        <table class="table">
          <thead><tr><th>Source</th><th>URL</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </section>
    </div>
  </main>`;
  writeFile(path.join(root, "sources.html"), layout({
    title: "Sources and refresh",
    description: "Tracked source links and refresh monitoring details.",
    body
  }));
}

cleanGenerated();
homePage();
for (const agent of site.agents) {
  agentPage(agent);
}
templatesIndex();
for (const template of site.templates) {
  templatePage(template);
}
sourcesPage();

console.log(`Built ${site.agents.length} agent pages and ${site.templates.length} template pages.`);
