const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const site = require("../data/site-data");

const root = path.resolve(__dirname, "..");
const statePath = path.join(root, "data", "source-state.json");

function collectSources() {
  const sources = new Map();
  const add = (item) => {
    if (item && item.url) {
      sources.set(item.url, item.title || item.url);
    }
  };

  for (const agent of site.agents) {
    [...agent.docs, ...agent.blogs, ...agent.roadmap].forEach(add);
  }
  for (const template of site.templates) {
    [...template.docs, ...template.roadmap].forEach(add);
  }
  [...site.agentBuilder.docs, ...site.agentBuilder.blogs, ...site.roadmapNotes].forEach(add);

  return [...sources.entries()].map(([url, title]) => ({ url, title }));
}

function request(url, redirectCount = 0) {
  return new Promise((resolve) => {
    const client = url.startsWith("https:") ? https : http;
    const req = client.request(url, { method: "GET", timeout: 20000 }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirectCount < 5) {
        res.resume();
        const nextUrl = new URL(res.headers.location, url).toString();
        request(nextUrl, redirectCount + 1).then(resolve);
        return;
      }

      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        if (body.length < 120000) {
          body += chunk;
        }
      });
      res.on("end", () => {
        const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
        const updatedMatch = body.match(/(?:ms\.date|updated_at|datePublished|dateModified)[^0-9]*(20[0-9]{2}[-/][0-9]{2}[-/][0-9]{2})/i);
        resolve({
          status: res.statusCode,
          finalUrl: url,
          title: titleMatch ? titleMatch[1].trim().replace(/\s+/g, " ") : "",
          updated: updatedMatch ? updatedMatch[1] : "",
          checkedAt: new Date().toISOString()
        });
      });
    });

    req.on("timeout", () => {
      req.destroy(new Error("timeout"));
    });
    req.on("error", (error) => {
      resolve({
        status: 0,
        finalUrl: url,
        title: "",
        updated: "",
        error: error.message,
        checkedAt: new Date().toISOString()
      });
    });
    req.end();
  });
}

async function main() {
  const previous = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, "utf8")) : {};
  const next = {};
  const changes = [];

  for (const source of collectSources()) {
    const result = await request(source.url);
    next[source.url] = { ...source, ...result };
    const prior = previous[source.url];
    if (prior) {
      const changed =
        prior.status !== result.status ||
        prior.title !== result.title ||
        prior.updated !== result.updated;
      if (changed) {
        changes.push({ source, prior, result });
      }
    }
  }

  fs.writeFileSync(statePath, `${JSON.stringify(next, null, 2)}\n`, "utf8");

  if (changes.length > 0) {
    console.log("Source changes detected:");
    for (const change of changes) {
      console.log(`- ${change.source.title}: ${change.source.url}`);
      console.log(`  status: ${change.prior.status} -> ${change.result.status}`);
      console.log(`  updated: ${change.prior.updated || "none"} -> ${change.result.updated || "none"}`);
      console.log(`  title: ${change.prior.title || "none"} -> ${change.result.title || "none"}`);
    }
  } else {
    console.log("No monitored source metadata changes detected.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
