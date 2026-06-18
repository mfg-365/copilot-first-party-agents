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

function countLabel(count, singular, plural = `${singular}s`) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function pills(items, extraClass = "") {
  return `<div class="pills">${items.map((item) => `<span class="pill ${extraClass}">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function iconMarkup(item, prefix = ".") {
  const label = item.iconText || item.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2);
  if (item.icon) {
    return `<span class="agent-icon"><img src="${prefix}/${escapeHtml(item.icon)}" alt="" loading="lazy"></span>`;
  }

  return `<span class="agent-icon text-icon">${escapeHtml(label)}</span>`;
}

function layout({ title, description, body, depth = 0 }) {
  const prefix = relPath(depth);
  const templatesActive = title.includes("Agent Builder") || title.includes("Template");
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
  <link rel="icon" href="${prefix}/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${prefix}/styles.css">
</head>
<body>
  <div class="shell">
    <div class="ribbon" aria-hidden="true"></div>
    <header class="hero">
      <div class="wrap">
        <nav class="nav" aria-label="Main navigation">
          <a class="brand" href="${prefix}/index.html"><span class="logo">A</span><span class="brand-text"><strong>Microsoft 365 Copilot</strong><span>First-party agents & templates</span></span></a>
          <div class="nav-links">
            <a class="${templatesActive ? "" : "active"}" href="${prefix}/index.html#agents">Agents</a>
            <a class="${templatesActive ? "active" : ""}" href="${prefix}/templates/index.html">Agent Builder templates</a>
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
  return `<a class="card agent-card card-link" href="agents/${slug}/index.html">
    <div class="card-top">
      ${iconMarkup(agent)}
      <span class="pill status">${escapeHtml(agent.status)}</span>
    </div>
    <h3>${escapeHtml(agent.name)}</h3>
    <p>${escapeHtml(agent.summary)}</p>
    ${pills(agent.surfaces)}
  </a>`;
}

function cardForTemplate(template, depth = 0) {
  const prefix = relPath(depth);
  const slug = slugify(template.name);
  return `<a class="card card-link" href="${prefix}/templates/${slug}/index.html">
    <div class="pills"><span class="pill status">${escapeHtml(template.type)}</span></div>
    <h3>${escapeHtml(template.name)}</h3>
    <p>${escapeHtml(template.summary)}</p>
  </a>`;
}

function homePage() {
  const stats = [
    ["25", "First-party agents"],
    [String(site.templates.length), "Template pages"]
  ];
  const featuredAgents = site.agents.slice(0, 12);

  const body = `<section class="home-hero">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">Microsoft 365 Copilot</p>
        <h1>${escapeHtml(site.title)}</h1>
        <p class="lede">${escapeHtml(site.subtitle)}</p>
        <div class="hero-actions">
          <a class="button primary" href="#agents">Explore agents</a>
          <a class="button" href="templates/index.html">View templates</a>
        </div>
      </div>
      <aside class="hero-panel" aria-label="Site summary">
        <div class="hero-icon-grid" aria-hidden="true">
          ${featuredAgents.map((agent) => iconMarkup(agent)).join("")}
        </div>
        <div class="stats">
          ${stats.map(([number, label]) => `<div class="stat"><strong>${number}</strong><span>${label}</span></div>`).join("")}
        </div>
      </aside>
    </div>
  </section>
  <main>
    <div class="wrap">
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
            <h2>Agent Builder templates</h2>
          </div>
          <a class="button" href="templates/index.html">Open templates</a>
        </div>
        <div class="cards">${site.templates.slice(0, 6).map((template) => cardForTemplate(template)).join("")}</div>
      </section>
    </div>
  </main>`;

  writeFile(path.join(root, "index.html"), layout({ title: "Home", description: site.subtitle, body }));
}

function agentPage(agent) {
  const roadmapCard = agent.roadmap.length > 0
    ? `<article class="detail-card">
          <p class="eyebrow">Roadmap</p>
          <h2>Signals</h2>
          ${linkList(agent.roadmap)}
        </article>`
    : "";
  const body = `<main>
    <div class="wrap detail-wrap">
      <section class="detail-hero">
        <div class="detail-hero-main">
          <div class="page-title">
            ${iconMarkup(agent, "../..")}
            <div>
              <p class="eyebrow">First-party Copilot agent</p>
              <h1>${escapeHtml(agent.name)}</h1>
            </div>
          </div>
          <p class="lede">${escapeHtml(agent.summary)}</p>
          <div class="hero-actions">
            <a class="button primary" href="../../index.html#agents">All agents</a>
            ${agent.docs[0] ? `<a class="button" href="${escapeHtml(agent.docs[0].url)}">Primary doc</a>` : ""}
          </div>
        </div>
        <div class="detail-hero-side">
          ${iconMarkup(agent, "../..")}
          <div class="detail-stats">
            <div class="detail-stat"><span>Status</span><strong>${escapeHtml(agent.status)}</strong></div>
            <div class="detail-stat"><span>Surfaces</span><strong>${escapeHtml(countLabel(agent.surfaces.length, "surface"))}</strong></div>
            <div class="detail-stat"><span>Sources</span><strong>${escapeHtml(countLabel(agent.docs.length + agent.blogs.length, "link"))}</strong></div>
          </div>
        </div>
      </section>
      <div class="detail-grid">
        <article class="detail-card span-2">
          <p class="eyebrow">What it does</p>
          <h2>Agent profile</h2>
          <p>${escapeHtml(agent.details)}</p>
        </article>
        <article class="detail-card">
          <p class="eyebrow">Availability</p>
          <h2>${escapeHtml(agent.status)}</h2>
          ${pills(agent.surfaces)}
        </article>
        ${roadmapCard}
        ${agent.caveat ? `<article class="detail-card span-2 caveat-card"><p class="eyebrow">Research note</p><h2>Caveat</h2><p>${escapeHtml(agent.caveat)}</p></article>` : ""}
        <article class="detail-card source-card">
          <p class="eyebrow">Documentation</p>
          <h2>Learn & Support</h2>
          ${linkList(agent.docs)}
        </article>
        <article class="detail-card source-card">
          <p class="eyebrow">Blogs</p>
          <h2>Microsoft posts</h2>
          ${linkList(agent.blogs, "No dedicated Microsoft blog post found yet.")}
        </article>
      </div>
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
      <section class="detail-hero template-hero">
        <div class="detail-hero-main">
          <div class="page-title">
            <span class="template-mini-mark" aria-hidden="true">AB</span>
            <div>
              <p class="eyebrow">Microsoft 365 Copilot</p>
              <h1>Agent Builder templates</h1>
            </div>
          </div>
          <p class="lede">${escapeHtml(site.agentBuilder.summary)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#template-catalog">Browse templates</a>
            <a class="button" href="${escapeHtml(site.agentBuilder.docs[0].url)}">Agent Builder docs</a>
          </div>
        </div>
        <div class="detail-hero-side compact-side">
          <div class="detail-stats">
            <div class="detail-stat"><span>Templates</span><strong>${site.templates.length}</strong></div>
            <div class="detail-stat"><span>Build flow</span><strong>4 steps</strong></div>
            <div class="detail-stat"><span>Source</span><strong>Learn</strong></div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="template-process">
          <div><strong>1</strong><span>Select a template</span></div>
          <div><strong>2</strong><span>Describe your scenario</span></div>
          <div><strong>3</strong><span>Add knowledge and capabilities</span></div>
          <div><strong>4</strong><span>Create and chat</span></div>
        </div>
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
      <section class="section" id="template-catalog">
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
  const initials = template.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 3);
  const roadmapCard = template.roadmap.length > 0
    ? `<article class="detail-card">
          <p class="eyebrow">Roadmap</p>
          <h2>Signals</h2>
          ${linkList(template.roadmap)}
        </article>`
    : "";
  const body = `<main>
    <div class="wrap detail-wrap">
      <section class="detail-hero template-hero">
        <div class="detail-hero-main">
          <div class="page-title">
            <span class="template-mini-mark" aria-hidden="true">${escapeHtml(initials)}</span>
            <div>
              <p class="eyebrow">${escapeHtml(template.type)}</p>
              <h1>${escapeHtml(template.name)}</h1>
            </div>
          </div>
          <p class="lede">${escapeHtml(template.summary)}</p>
          <div class="hero-actions">
            <a class="button primary" href="../index.html">All templates</a>
            ${template.docs[0] ? `<a class="button" href="${escapeHtml(template.docs[0].url)}">Learn article</a>` : ""}
          </div>
        </div>
        <div class="detail-hero-side compact-side">
          <div class="detail-stats">
            <div class="detail-stat"><span>Type</span><strong>Template</strong></div>
            <div class="detail-stat"><span>Flow</span><strong>4 steps</strong></div>
            <div class="detail-stat"><span>Source</span><strong>Learn</strong></div>
          </div>
        </div>
      </section>
      <div class="detail-grid">
        <article class="detail-card span-2">
          <p class="eyebrow">Template blueprint</p>
          <h2>Scenario fit</h2>
          <p>${escapeHtml(template.details)}</p>
        </article>
        <article class="detail-card">
          <p class="eyebrow">Build flow</p>
          <h2>From template to agent</h2>
          <ol class="steps-list">
            <li><strong>Select</strong><span>Choose the template in Agent Builder.</span></li>
            <li><strong>Describe</strong><span>Tell Copilot the scenario and audience.</span></li>
            <li><strong>Ground</strong><span>Add knowledge sources and capabilities.</span></li>
            <li><strong>Create</strong><span>Test, publish, and share the agent.</span></li>
          </ol>
        </article>
        ${roadmapCard}
        <article class="detail-card source-card span-2">
          <p class="eyebrow">Documentation</p>
          <h2>Template source</h2>
          ${linkList(template.docs)}
        </article>
      </div>
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
