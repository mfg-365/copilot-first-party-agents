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
    status: "Generally Available",
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
    caveat: "Some public docs describe core Facilitator capabilities as generally available while other capabilities remain in preview."
  },
  {
    name: "Interpreter",
    status: "Generally Available",
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
    status: "Generally Available",
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
    status: "Generally Available",
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
    status: "Generally Available",
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
    status: "Generally Available",
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
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Improves writing clarity, tone, grammar, and effectiveness.",
    details: "Writing Coach appears in the Microsoft-built agents list and provides AI-powered feedback for writing quality.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Learning Coach",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Breaks complex topics into clear summaries and supports learning plans.",
    details: "Learning Coach is a general learning assistant listed in Microsoft-built agents, distinct from the Viva Learning-integrated Learning Agent.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Career Coach",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Provides personalized career growth guidance.",
    details: "Career Coach helps with career planning, skill development, and goal setting.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Prompt Coach",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Helps users craft clearer and more effective prompts.",
    details: "Prompt Coach teaches prompt structure and refinement for better Copilot and agent responses.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Ideas Coach",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Helps brainstorm, expand, and refine ideas.",
    details: "Ideas Coach, listed as Idea Coach in Microsoft Support, provides structured creative guidance from concept to actionable plan.",
    docs: [{ title: "Agents built by Microsoft", url: "https://support.microsoft.com/en-US/Microsoft-365-Copilot/agents-built-by-microsoft" }],
    blogs: [],
    roadmap: []
  },
  {
    name: "Employee Self-Service",
    status: "Generally Available",
    surfaces: ["Teams", "Copilot Chat"],
    summary: "Provides a one-stop HR and IT self-service experience.",
    details: "Employee Self-Service is built on Copilot Studio and includes starter HR and IT scenarios for benefits, policies, account help, device setup, and escalation.",
    docs: [{ title: "Employee Self-Service overview", url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/employee-self-service/overview" }],
    blogs: [commonBlogs.wave3],
    roadmap: []
  },
  {
    name: "Workflows Agent",
    status: "Frontier",
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
    status: "Public Preview",
    surfaces: ["Teams"],
    summary: "Summarizes and acts within Teams channels.",
    details: "Channel agents use channel context to answer questions, flag deadlines, draft updates, and assist with channel-specific project knowledge.",
    docs: [
      { title: "Set up channel agents in Teams", url: "https://learn.microsoft.com/en-us/microsoftteams/set-up-channel-agent-teams" },
      { title: "Purview compliance for channel agents", url: "https://learn.microsoft.com/en-us/purview/ai-teams-channel-agent" }
    ],
    blogs: [commonBlogs.humanAgentTeams],
    roadmap: [],
    caveat: "Some docs still carry preview language."
  },
  {
    name: "Agents in Communities",
    status: "Public Preview",
    surfaces: ["Viva Engage", "Copilot Chat"],
    summary: "Shares knowledge across Viva Engage communities.",
    details: "Community agents answer community questions from prior conversations and connected SharePoint knowledge, with admin review options.",
    docs: [{ title: "Agents in Viva Engage communities", url: "https://learn.microsoft.com/en-us/viva/engage/ai-technology-with-viva-engage/agents-community-network-deployment-config" }],
    blogs: [commonBlogs.humanAgentTeams],
    roadmap: [],
    caveat: "The current Learn page still includes preview wording."
  },
  {
    name: "Learning Agent",
    status: "Generally Available",
    surfaces: ["Copilot Chat"],
    summary: "Provides personalized Copilot tips and learning paths.",
    details: "Learning Agent is a Viva Learning-integrated agent for Microsoft 365 Copilot tips and organizational learning paths. It is distinct from Learning Coach.",
    docs: [{ title: "Learning Agent overview and deployment", url: "https://learn.microsoft.com/en-us/viva/learning/learning-agent-overview-deployment-steps" }],
    blogs: [],
    roadmap: []
  }
];

for (const agent of agents) {
  const slug = agent.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  agent.icon = `assets/agent-icons/${slug}.png`;
}

Object.assign(agents.find((agent) => agent.name === "Facilitator"), {
  iconText: "T",
  icon: ""
});
Object.assign(agents.find((agent) => agent.name === "Interpreter"), {
  iconText: "T",
  icon: ""
});
Object.assign(agents.find((agent) => agent.name === "Employee Self-Service"), {
  iconText: "ES",
  icon: ""
});
Object.assign(agents.find((agent) => agent.name === "Agents in Channels"), {
  iconText: "T",
  icon: ""
});
Object.assign(agents.find((agent) => agent.name === "Agents in Communities"), {
  iconText: "Co",
  icon: ""
});

const templates = [
  {
    name: "AI Learning Advisor",
    summary: "Teaches, troubleshoots, and guides users across Microsoft AI and low-code tools.",
    details: "Builds personalized learning plans, recommends whether to use Agent Builder, Copilot Studio, Power Apps, Power Automate, or AI Builder, and explains concepts in a friendly instructional tone.",
    docSlug: "agent-template-ai-learning-advisor",
    roadmap: []
  },
  {
    name: "Career Coach",
    summary: "Provides personalized career guidance, skill-gap analysis, and action plans.",
    details: "Helps users map career goals, identify skills to develop, find learning opportunities, prepare transitions, and improve performance.",
    docSlug: "agent-template-career-coach",
    roadmap: []
  },
  {
    name: "Corporate Communications Crafter",
    summary: "Drafts internal communications aligned to company tone and audience needs.",
    details: "Helps communications teams create announcements, updates, and messaging that stay consistent with organizational standards.",
    docSlug: "agent-template-corporate-communications",
    roadmap: []
  },
  {
    name: "Customer Insight Assistant",
    summary: "Builds customer profiles with industry, priorities, leadership, competitors, and trends.",
    details: "Helps account and customer-facing teams understand customers, initiatives, regional footprint, feedback, and support opportunities.",
    docSlug: "agent-template-customer-insight",
    roadmap: []
  },
  {
    name: "Executive Briefing Agent",
    summary: "Prepares concise executive briefings from business and customer context.",
    details: "Creates leadership-ready summaries that combine relevant context, priorities, risks, and recommended talking points.",
    docSlug: "agent-template-executive-briefing",
    roadmap: []
  },
  {
    name: "Idea Coach",
    summary: "Generates, expands, and structures ideas into actionable directions.",
    details: "Supports brainstorming, concept refinement, scenario planning, and turning rough ideas into next-step plans.",
    docSlug: "agent-template-idea-coach",
    roadmap: []
  },
  {
    name: "Interview Question Assistant",
    summary: "Creates interview questions tailored to roles, skills, and evaluation goals.",
    details: "Helps hiring teams prepare structured questions and prompts for role-specific interviews.",
    docSlug: "agent-template-interview-questions",
    roadmap: []
  },
  {
    name: "Learning Coach",
    summary: "Creates guided learning support for topics, skills, and study plans.",
    details: "Helps users learn complex topics by breaking them into clear explanations, practice activities, and study guidance.",
    docSlug: "agent-template-learning-coach",
    roadmap: []
  },
  {
    name: "Meeting Coach",
    summary: "Helps users prepare for meetings and improve meeting effectiveness.",
    details: "Supports agenda preparation, talking points, follow-up planning, and coaching for productive meetings.",
    docSlug: "agent-template-meeting-coach",
    roadmap: []
  },
  {
    name: "My Company Policy",
    summary: "Answers employee policy questions using organizational policy sources.",
    details: "Gives employees a guided policy assistant that can point to company rules, procedures, and next steps.",
    docSlug: "agent-template-my-company-policy",
    roadmap: []
  },
  {
    name: "Personal News Digest",
    summary: "Creates a personalized digest of relevant news and updates.",
    details: "Helps users stay current by summarizing news, trends, or updates around selected topics and roles.",
    docSlug: "agent-template-personal-news-digest",
    roadmap: []
  },
  {
    name: "Plan My Day",
    summary: "Turns priorities, meetings, and tasks into a practical day plan.",
    details: "Helps users organize work, prioritize tasks, and plan focused time around the day ahead.",
    docSlug: "agent-template-plan-my-day",
    roadmap: []
  },
  {
    name: "Project Delta Digest",
    summary: "Summarizes project context, progress, risks, and actions.",
    details: "Creates project-oriented digests that help teams understand what changed, what matters, and what needs attention.",
    docSlug: "agent-template-project-delta-digest",
    roadmap: []
  },
  {
    name: "Prompt Coach",
    summary: "Coaches users to write more effective prompts for Copilot and agents.",
    details: "Helps users clarify intent, add context, choose format, and iterate prompts for better outcomes.",
    docSlug: "agent-template-prompt-coach",
    roadmap: []
  },
  {
    name: "Request for Proposal Assistant",
    summary: "Generates tailored first drafts for RFP responses from existing proposal content.",
    details: "Uses organization proposal libraries and templates to speed RFP response drafting while staying aligned to standards and customer needs.",
    docSlug: "agent-template-rfp-assistant",
    roadmap: []
  },
  {
    name: "Quiz Tutor",
    summary: "Creates quiz-style tutoring experiences for learning and practice.",
    details: "Helps learners reinforce concepts with questions, feedback, and guided review.",
    docSlug: "agent-template-quiz-tutor",
    roadmap: []
  },
  {
    name: "Scrum Assistant",
    summary: "Supports agile ceremonies, backlog discussion, and team status updates.",
    details: "Helps scrum teams prepare standups, retrospectives, sprint reviews, and project follow-through.",
    docSlug: "agent-template-scrum-assistant",
    roadmap: []
  },
  {
    name: "SME Finder",
    summary: "Helps users identify subject-matter experts for a topic or project.",
    details: "Guides people toward likely experts, relevant teams, and knowledge owners based on available organizational context.",
    docSlug: "agent-template-sme-finder",
    roadmap: []
  },
  {
    name: "Status Update Agent",
    summary: "Drafts structured status updates from work context and project inputs.",
    details: "Helps users communicate progress, blockers, risks, next steps, and decisions in a repeatable format.",
    docSlug: "agent-template-status-update-agent",
    roadmap: []
  },
  {
    name: "Text Translator Assistant",
    summary: "Translates and adapts text for target languages and audiences.",
    details: "Supports translation workflows where users need clear, context-aware text adaptation.",
    docSlug: "agent-template-text-translator",
    roadmap: []
  },
  {
    name: "Writing Coach",
    summary: "Improves clarity, tone, structure, and effectiveness of written content.",
    details: "Provides writing feedback and rewrite guidance so emails, reports, and other content are easier to read and better aligned to intent.",
    docSlug: "agent-template-writing-coach",
    roadmap: []
  }
];

for (const template of templates) {
  template.type = "Agent Builder template";
  template.docs = [{
    title: `${template.name} template`,
    url: `https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/${template.docSlug}`
  }];
}

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
