# Microsoft 365 Copilot First-Party Agents

Static GitHub Pages site for the `mfg-365` account covering Microsoft 365 Copilot first-party agents, Agent Builder, templates, documentation, blogs, and roadmap caveats.

## Refresh workflow

The source data lives in `data/site-data.js`. Rebuild pages with:

```powershell
npm run build
```

The GitHub Actions workflow in `.github/workflows/refresh-monitor.yml` runs on a schedule and checks tracked Learn, Support, Microsoft blog, and roadmap URLs for availability and metadata changes. It opens an issue if monitored source metadata changes so the site can be refreshed deliberately.
