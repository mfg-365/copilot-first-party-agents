const commonBlogs = {
  researcherAnalystIntro: {
    title: "Introducing Researcher and Analyst in Microsoft 365 Copilot",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/03/25/introducing-researcher-and-analyst-in-microsoft-365-copilot/"
  },
  researcherAnalystGa: {
    title: "Researcher and Analyst are now generally available",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/06/02/researcher-and-analyst-are-now-generally-available-in-microsoft-365-copilot/"
  },
  humanAgentTeams: {
    title: "Microsoft 365 Copilot: enabling human-agent teams",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/18/microsoft-365-copilot-enabling-human-agent-teams/"
  },
  wave3: {
    title: "Powering Frontier transformation with Copilot and agents",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/powering-frontier-transformation-with-copilot-and-agents/"
  },
  build2025: {
    title: "Copilot Tuning, multi-agent orchestration, and more from Build 2025",
    url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/05/19/introducing-microsoft-365-copilot-tuning-multi-agent-orchestration-and-more-from-microsoft-build-2025/"
  }
};

const agents = [
  {
    name: "Researcher",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Performs in-depth research and content synthesis across web and work data, returning cited, structured findings for complex questions.",
    details: "Researcher is built into Microsoft 365 Copilot Chat for multi-step research tasks. It can search, reason over, and synthesize information while preserving source citations.",
    docs: [
      { title: "Researcher agent overview and setup", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/researcher-agent" },
      { title: "Researcher FAQ", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/faq-researcher" },
      { title: "Get started with Researcher", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/get-started-with-researcher-in-microsoft-365-copilot" }
    ],
    blogs: [commonBlogs.researcherAnalystIntro, commonBlogs.researcherAnalystGa],
    roadmap: []
  },
  {
    name: "Analyst",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Turns complex datasets into insights, forecasts, and visualizations.",
    details: "Analyst is the data reasoning counterpart to Researcher. It helps transform raw data into digestible analysis for business decisions.",
    docs: [
      { title: "Get started with Analyst", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/get-started-with-analyst-in-microsoft-365-copilot" },
      { title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }
    ],
    blogs: [commonBlogs.researcherAnalystIntro, commonBlogs.researcherAnalystGa],
    roadmap: []
  },
  {
    name: "Facilitator",
    status: "Public Preview",
    surfaces: ["Teams"],
    summary: "Takes notes, captures decisions, tracks action items, and supports Teams meeting moderation.",
    details: "Facilitator joins Teams meetings as a shared agent. It produces collaborative notes, timelines, Q&A, and follow-up artifacts visible to participants.",
    docs: [
      { title: "Facilitator in Teams", url: "https://learn.microsoft.com/en-us/microsoftteams/facilitator-teams" },
      { title: "Facilitator in Teams Rooms", url: "https://learn.microsoft.com/en-us/microsoftteams/rooms/facilitator-teams-rooms" },
      { title: "Purview compliance for Facilitator", url: "https://learn.microsoft.com/en-us/purview/ai-teams-facilitator" }
    ],
    blogs: [commonBlogs.humanAgentTeams],
    roadmap: [],
    caveat: "Some public docs describe core Facilitator capabilities as generally available while other capabilities remain in preview; the slide inventory marks the agent Public Preview."
  },
  {
    name: "Interpreter",
    status: "Public Preview",
    surfaces: ["Teams"],
    summary: "Provides real-time speech interpretation for Teams meetings across supported languages.",
    details: "Interpreter lets meeting participants listen in a selected language using real-time speech-to-speech translation, including voice simulation options governed by Teams policy.",
    docs: [
      { title: "Interpreter agent in Teams", url: "https://learn.microsoft.com/en-us/microsoftteams/interpreter-agent-teams" },
      { title: "Interpreter in Microsoft Teams meetings", url: "https://support.microsoft.com/office/interpreter-in-microsoft-teams-meetings-c7efe2bb-535d-42ab-a5c4-d2d91619b46d" }
    ],
    blogs: [],
    roadmap: []
  },
  {
    name: "Sales Agent",
    status: "Frontier",
    surfaces: ["Copilot Chat", "Outlook", "Teams", "Microsoft 365"],
    summary: "Prepares sellers with CRM-driven insights and can assist with lead research, outreach, and sales follow-up.",
    details: "Sales Agent connects sales workflows with CRM, Microsoft 365, and web context to help sellers prepare for customer work and pursue pipeline.",
    docs: [],
    blogs: [
      { title: "New sales agents accessible in Microsoft 365 Copilot", url: "https://www.microsoft.com/en-us/microsoft-365/blog/2025/03/05/new-sales-agents-accessible-in-microsoft-365-copilot-help-teams-close-more-deals-faster/" }
    ],
    roadmap: [],
    caveat: "No dedicated Learn or Support documentation page was found during the research pass."
  },
  {
    name: "Finance Agent",
    status: "Frontier",
    surfaces: ["Excel", "Outlook"],
    summary: "Surfaces finance insights and reduces manual work in finance workflows.",
    details: "The slide inventory places Finance Agent in Excel and Outlook for finance analysis and workflow assistance.",
    docs: [],
    blogs: [commonBlogs.wave3],
    roadmap: [],
    caveat: "No dedicated public documentation or dedicated Microsoft blog post was found."
  },
  {
    name: "Word Agent",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Drafts and refines long-form Word documents from Copilot Chat prompts.",
    details: "Word Agent creates and revises documents from natural language and saves generated content to Microsoft 365 storage.",
    docs: [
      { title: "Word, Excel, and PowerPoint agents", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents" },
      { title: "Word, Excel, and PowerPoint agents FAQ", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/faq-wordexcelppt-agents" }
    ],
    blogs: [commonBlogs.wave3],
    roadmap: []
  },
  {
    name: "Excel Agent",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Builds and analyzes spreadsheets from prompts.",
    details: "Excel Agent creates spreadsheets with formulas and helps analyze data from Copilot Chat.",
    docs: [
      { title: "Word, Excel, and PowerPoint agents", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents" },
      { title: "Word, Excel, and PowerPoint agents FAQ", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/faq-wordexcelppt-agents" }
    ],
    blogs: [commonBlogs.wave3],
    roadmap: []
  },
  {
    name: "PowerPoint Agent",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Turns prompts into complete presentations.",
    details: "PowerPoint Agent helps produce presentation decks from prompts, including slides aligned to organizational presentation patterns.",
    docs: [
      { title: "Word, Excel, and PowerPoint agents", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/wordexcelppt-agents" },
      { title: "Word, Excel, and PowerPoint agents FAQ", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/faq-wordexcelppt-agents" }
    ],
    blogs: [commonBlogs.wave3],
    roadmap: []
  },
  {
    name: "Surveys Agent",
    status: "Public Preview",
    surfaces: ["Copilot Chat", "Forms"],
    summary: "Creates, sends, and analyzes surveys.",
    details: "The slide inventory positions Surveys Agent across Copilot Chat and Forms for survey creation and analysis.",
    docs: [],
    blogs: [],
    roadmap: [],
    caveat: "No dedicated public documentation or Microsoft blog post was found."
  },
  {
    name: "M365 Admin Agent",
    status: "Public Preview",
    surfaces: ["Copilot Chat", "Admin Center"],
    summary: "Simplifies Microsoft 365 administration through Copilot and admin center experiences.",
    details: "M365 Admin Agent is referenced in Microsoft 365 admin documentation as part of the built-in agent management surface.",
    docs: [
      { title: "Manage Copilot agents in Integrated Apps", url: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?view=o365-worldwide" },
      { title: "Agent settings", url: "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/agent-settings?view=o365-worldwide" }
    ],
    blogs: [],
    roadmap: [],
    caveat: "Public documentation is contextual rather than a dedicated agent page."
  },
  {
    name: "Writing Coach",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Improves writing clarity, tone, grammar, and effectiveness.",
    details: "Writing Coach appears in the Microsoft-built agents list and provides AI-powered feedback for writing quality.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Learning Coach",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Breaks complex topics into clear summaries and supports learning plans.",
    details: "Learning Coach is a general learning assistant listed in Microsoft-built agents, distinct from the Viva Learning-integrated Learning Agent.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Career Coach",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Provides personalized career growth guidance.",
    details: "Career Coach helps with career planning, skill development, and goal setting.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Prompt Coach",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Helps users craft clearer and more effective prompts.",
    details: "Prompt Coach teaches prompt structure and refinement for better Copilot and agent responses.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Ideas Coach",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Helps brainstorm, expand, and refine ideas.",
    details: "Ideas Coach, listed as Idea Coach in Microsoft Support, provides structured creative guidance from concept to actionable plan.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Employee Self-Service",
    status: "Public Preview",
    surfaces: ["Teams", "Copilot Chat"],
    summary: "Provides a one-stop HR and IT self-service experience.",
    details: "Employee Self-Service is built on Copilot Studio and includes starter HR and IT scenarios for benefits, policies, account help, device setup, and escalation.",
    docs: [{ title: "Employee Self-Service overview", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/employee-self-service/overview" }],
    blogs: [commonBlogs.wave3],
    roadmap: []
  },
  {
    name: "Workflows Agent",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Automates emails, reminders, approvals, updates, and other routine work.",
    details: "Workflows Agent is powered by Power Platform and Power Automate. It enables natural-language automation from Copilot Chat.",
    docs: [
      { title: "Workflows environment and admin configuration", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/workflows-environment-workflows-agents" },
      { title: "Flow builder responsible AI FAQ", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/responsible-ai/flow-builder-responsible-ai-faq" }
    ],
    blogs: [commonBlogs.wave3],
    roadmap: []
  },
  {
    name: "Workforce Insights Agent",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Provides real-time organizational views for leaders.",
    details: "Workforce Insights Agent uses organizational data and People Skills signals to support leadership views and workforce insight scenarios.",
    docs: [{ title: "Workforce Insights Agent", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/workforce-insights-agent" }],
    blogs: [{ title: "Announcing the new Work IQ APIs", url: "https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/announcing-the-new-work-iq-apis/" }],
    roadmap: []
  },
  {
    name: "Planner Agent",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Manages tasks and builds plans in chat.",
    details: "Planner Agent helps create plans, coordinate work, and connect planning workflows with Copilot conversations.",
    docs: [],
    blogs: [commonBlogs.humanAgentTeams],
    roadmap: [],
    caveat: "The September 2025 Microsoft blog refers to a Project Manager Agent integrated with Planner; no dedicated public Planner Agent documentation was found."
  },
  {
    name: "Legal Agent",
    status: "Frontier",
    surfaces: ["Word"],
    summary: "Reviews and redlines contracts in Word.",
    details: "The slide inventory identifies Legal Agent as a Word-based contract review and redlining agent.",
    docs: [],
    blogs: [commonBlogs.build2025],
    roadmap: [],
    caveat: "Public references found were adjacent legal-agent examples in Copilot Tuning context, not a dedicated first-party Legal Agent page."
  },
  {
    name: "Frontline Agent",
    status: "Public Preview",
    surfaces: ["Copilot Chat", "Teams"],
    summary: "Provides task help and information for frontline workers.",
    details: "Frontline Agent is listed in the slide inventory for frontline worker assistance in Copilot Chat and Teams.",
    docs: [],
    blogs: [],
    roadmap: [],
    caveat: "No dedicated public documentation or Microsoft blog post was found."
  },
  {
    name: "Agents in Channels",
    status: "Generally Available",
    surfaces: ["Teams"],
    summary: "Summarizes and acts within Teams channels.",
    details: "Channel agents use channel context to answer questions, flag deadlines, draft updates, and assist with channel-specific project knowledge.",
    docs: [
      { title: "Set up channel agents in Teams", url: "https://learn.microsoft.com/en-us/microsoftteams/set-up-channel-agent-teams" },
      { title: "Purview compliance for channel agents", url: "https://learn.microsoft.com/en-us/purview/ai-teams-channel-agent" }
    ],
    blogs: [commonBlogs.humanAgentTeams],
    roadmap: [],
    caveat: "Some docs still carry preview language; the provided slide marks this generally available as of June 2, 2026."
  },
  {
    name: "Agents in Communities",
    status: "Generally Available",
    surfaces: ["Viva Engage", "Copilot Chat"],
    summary: "Shares knowledge across Viva Engage communities.",
    details: "Community agents answer community questions from prior conversations and connected SharePoint knowledge, with admin review options.",
    docs: [{ title: "Agents in Viva Engage communities", url: "https://learn.microsoft.com/en-us/viva/engage/ai-technology-with-viva-engage/agents-community-network-deployment-config" }],
    blogs: [commonBlogs.humanAgentTeams],
    roadmap: [],
    caveat: "The current Learn page still includes preview wording; the provided slide marks this generally available as of June 2, 2026."
  },
  {
    name: "Learning Agent",
    status: "Frontier",
    surfaces: ["Copilot Chat"],
    summary: "Provides personalized Copilot tips and learning paths.",
    details: "Learning Agent is a Viva Learning-integrated agent for Microsoft 365 Copilot tips and organizational learning paths. It is distinct from Learning Coach.",
    docs: [{ title: "Learning Agent overview and deployment", url: "https://learn.microsoft.com/en-us/viva/learning/learning-agent-overview-deployment-steps" }],
    blogs: [],
    roadmap: []
  }
];

const templates = [
  {
    name: "Agent Builder templates",
    type: "No-code Agent Builder",
    summary: "Templates in Agent Builder give users a fast starting point for declarative agents in Microsoft 365 Copilot.",
    details: "Public documentation explains how to start from templates but does not enumerate the full in-product template catalog. The site tracks this as a monitored gap.",
    docs: [
      { title: "Templates for agents for Microsoft 365 Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-templates-overview" },
      { title: "Agent Builder in Microsoft 365 Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder" }
    ],
    roadmap: []
  },
  {
    name: "Document Writing",
    type: "Copilot Tuning template",
    summary: "Creates long-form documents using organizational examples and style patterns.",
    details: "A pro-level tuned-agent template for document generation scenarios, separate from no-code Agent Builder templates.",
    docs: [{ title: "Document Writing agent template", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-document-writing-template" }],
    roadmap: []
  },
  {
    name: "Document Validation",
    type: "Copilot Tuning template",
    summary: "Checks documents against requirements, source material, or expected structure.",
    details: "A tuned-agent template for validation workflows that need consistent review patterns.",
    docs: [{ title: "Document Validation agent template", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-document-validation-template" }],
    roadmap: []
  },
  {
    name: "Expert Answers",
    type: "Copilot Tuning template",
    summary: "Answers expert questions using domain-specific examples and knowledge.",
    details: "A tuned-agent template for expert Q&A scenarios that require organization-specific expertise.",
    docs: [{ title: "Expert Answers agent template", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-expert-answers-template" }],
    roadmap: []
  },
  {
    name: "Optimization",
    type: "Copilot Tuning template",
    summary: "Optimizes plans, outputs, or recommendations against business criteria.",
    details: "A tuned-agent template for improving outputs according to scenario-specific goals.",
    docs: [{ title: "Optimization agent template", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-optimization-template" }],
    roadmap: []
  },
  {
    name: "Style Editing",
    type: "Copilot Tuning template",
    summary: "Edits content to match a preferred voice, tone, or house style.",
    details: "A tuned-agent template for style transformation and editing based on examples.",
    docs: [{ title: "Style Editing agent template", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-style-editing-template" }],
    roadmap: []
  },
  {
    name: "Document Summary",
    type: "Copilot Tuning template",
    summary: "Summarizes documents into consistent, scenario-specific formats.",
    details: "A tuned-agent template for summarization workflows that benefit from repeatable outputs.",
    docs: [{ title: "Document Summary agent template", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-tuning-document-summary-template" }],
    roadmap: []
  }
];

const roadmapNotes = [
  {
    title: "Microsoft 365 Roadmap",
    url: "https://www.microsoft.com/en-us/microsoft-365/roadmap",
    note: "The roadmap is a JavaScript application and often provides limited detail for agent-specific items. The site monitors this URL and known source pages, but agent pages intentionally distinguish confirmed roadmap IDs from broad roadmap caveats."
  }
];

const site = {
  title: "Microsoft 365 Copilot First-Party Agents",
  subtitle: "Out-of-box agents, Agent Builder, templates, documentation, blogs, and roadmap signals.",
  lastUpdated: "June 16, 2026",
  sourceNote: "Agent inventory seeded from the provided Microsoft 365 Copilot first-party agents slide, availability last updated June 2, 2026. Public links were researched on June 16, 2026.",
  agents,
  templates,
  roadmapNotes,
  agentBuilder: {
    summary: "Agent Builder in Microsoft 365 Copilot is a no-code/low-code authoring experience for creating declarative agents from Copilot Chat. Users can define a name, description, instructions, knowledge sources, and sharing model, then test and publish the agent.",
    docs: [
      { title: "Agent Builder in Microsoft 365 Copilot", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder" },
      { title: "Build Agent Builder agents", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents" },
      { title: "Share and manage Agent Builder agents", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents" },
      { title: "Build your own agent with Microsoft 365 Copilot", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/build-your-own-agent-with-microsoft-365-copilot" }
    ],
    blogs: [commonBlogs.wave3, commonBlogs.build2025]
  }
};

module.exports = site;
