/**
 * Single source of truth for every fact rendered on this site.
 *
 * Everything here is drawn from `public/Prasam-Pradhan-CV.pdf`. Nothing is
 * inferred, rounded up, or embellished — if a claim is not in the CV, it does
 * not belong in this file.
 */

export const SITE_URL = "https://www.prasampradhan.name.np";

export const person = {
  name: "Prasam Pradhan",
  role: "Project Manager",
  discipline: "Engineering Leadership & Delivery Ownership",
  location: "Lalitpur, Nepal",
  email: "mailprasam7@gmail.com",
  phone: "+977 9845766662",
  phoneHref: "+9779845766662",
  linkedin: "https://www.linkedin.com/in/prasam-pradhan-65b181252/",
  github: "https://github.com/PRASAMMM",
  cv: "/Prasam-Pradhan-CV.pdf",
  cvFileName: "Prasam-Pradhan-CV.pdf",
  currentCompany: "Revvlow Tech Pvt. Ltd.",
} as const;

export const hero = {
  eyebrow: `${person.role} · ${person.location}`,
  headline: "I own delivery end to end —",
  headlineAccent: "from strategy to shipped product.",
  lede:
    "Project manager with a Computer Science Engineering foundation. I lead and develop engineering teams, build the processes that let them do their best work, and stay accountable for outcomes rather than tasks.",
  supporting:
    "Currently owning a consumer mobile product for the Nepalese market — scope, timeline, quality and the calls in between.",
} as const;

export type Metric = {
  value: string;
  unit?: string;
  label: string;
  context: string;
};

/** Every figure below appears verbatim in the CV. */
export const metrics: Metric[] = [
  {
    value: "NPR 5L+",
    label: "Operational cost eliminated",
    context:
      "Independently led digital transformation at Ncell — roughly USD 3,700 removed from annual OPEX.",
  },
  {
    value: "100",
    unit: "%",
    label: "SLA adherence",
    context:
      "Across all project phases at Revvlow, held through sprint planning and backlog prioritisation.",
  },
  {
    value: "30",
    label: "Largest team led",
    context:
      "International Relations Committee at graVITas, VIT's flagship international technical festival.",
  },
  {
    value: "Zero",
    label: "Missed deadlines",
    context:
      "Across a full mobile product lifecycle — ideation and stakeholder alignment through to milestone delivery.",
  },
];

export type Role = {
  id: string;
  title: string;
  company: string;
  period: string;
  from: string;
  to: string;
  current?: boolean;
  summary: string;
  owned: string[];
  led: string[];
  delivered: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    id: "revvlow",
    title: "Project Manager",
    company: "Revvlow Tech Pvt. Ltd.",
    period: "Mar 2026 — Present",
    from: "2026-03",
    to: "",
    current: true,
    summary:
      "Full accountability for a consumer mobile application from concept through launch — the final point of decision for the product, the team and the timeline.",
    owned: [
      "End-to-end delivery of a consumer mobile application for the Nepalese market: scope, timeline and quality.",
      "Product and delivery strategy, including sprint planning and backlog prioritisation in Jira.",
      "Project documentation, risk registers and delivery trackers in Confluence — audit-ready at every stage of the SDLC.",
    ],
    led: [
      "A cross-functional engineering team, mentoring developers on technical decision-making, code quality and ownership habits.",
      "Weekly stakeholder reviews as the single point of accountability for capacity, risk and delivery status.",
    ],
    delivered: [
      "100% SLA adherence across all project phases.",
      "Team workflows and accountability structures built from the ground up, raising delivery velocity.",
      "An ambiguous requirement set turned into a lean, high-impact MVP roadmap driven by user research and stakeholder input.",
    ],
    stack: ["Jira", "Confluence", "Agile / Scrum", "Roadmapping", "SLA Management"],
  },
  {
    id: "pcs",
    title: "Software Development Intern",
    company: "Professional Computer Systems",
    period: "Dec 2025 — Mar 2026",
    from: "2025-12",
    to: "2026-03",
    summary:
      "Hands-on enterprise delivery on Java projects — the technical grounding behind how I now lead a team.",
    owned: [
      "Features across the full Software Development Lifecycle on Java-based enterprise projects, from requirements through deployment.",
      "Defect resolution ahead of release, driving QA testing and debugging rather than waiting on assignment.",
    ],
    led: [
      "The translation layer between client requirements and the development team, converting ambiguous asks into clear technical specifications.",
    ],
    delivered: [
      "Own workstreams held to defined timelines within an Agile team, contributing across sprint ceremonies.",
      "Enterprise delivery instincts built under the mentorship of a senior Java developer.",
    ],
    stack: ["Java", "SDLC", "Agile", "QA & Debugging", "Requirements Analysis"],
  },
  {
    id: "ncell",
    title: "Technical Business Analyst Intern",
    company: "Ncell",
    period: "May 2024 — Jul 2024",
    from: "2024-05",
    to: "2024-07",
    summary:
      "An independently owned digital transformation initiative inside one of Nepal's largest telecom operators.",
    owned: [
      "A digital transformation initiative end to end, from problem framing through to adoption by the operations team.",
    ],
    led: [
      "Workflow analysis and stakeholder interviews to document AS-IS processes, surface inefficiencies and design optimised TO-BE workflows.",
      "Coordination across technical and business units — gathering requirements, aligning priorities and driving execution to agreed timelines.",
    ],
    delivered: [
      "Over NPR 5 Lakhs (~USD 3,700) of operational expenditure removed.",
      "Business requirement documents and workflow optimisation reports adopted directly by the operations team.",
    ],
    stack: ["Business Analysis", "Process Design", "BRDs", "Stakeholder Interviews", "Data Analysis"],
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  org: string;
  year: string;
  kind: string;
  problem: string;
  approach: string[];
  outcome: string;
  outcomeMetric?: { value: string; label: string };
  tags: string[];
};

export const work: CaseStudy[] = [
  {
    id: "mobile-nepal",
    index: "01",
    title: "Consumer Mobile Application",
    org: "Revvlow Tech Pvt. Ltd.",
    year: "2026",
    kind: "Product ownership & delivery",
    problem:
      "A consumer mobile product for the Nepalese market, starting from an ambiguous requirement set and no established delivery process.",
    approach: [
      "Set product and delivery strategy, translating user research and stakeholder input into a lean MVP roadmap.",
      "Built the team's workflows and accountability structures from scratch, giving engineers clear ownership of their components instead of ticket-by-ticket work.",
      "Ran sprint planning and backlog prioritisation in Jira, and weekly stakeholder reviews covering capacity, risk and delivery status.",
      "Mentored developers on technical decision-making and code quality so they could operate independently.",
    ],
    outcome:
      "Roadmap milestones held with 100% SLA adherence across all project phases, with blockers resolved directly rather than escalated.",
    outcomeMetric: { value: "100%", label: "SLA adherence" },
    tags: ["Product Strategy", "Engineering Leadership", "Sprint Planning", "Stakeholder Management"],
  },
  {
    id: "ncell-transformation",
    index: "02",
    title: "Digital Operations Transformation",
    org: "Ncell",
    year: "2024",
    kind: "Business analysis & process redesign",
    problem:
      "Manual operational processes were absorbing time and budget across departments, with no documented view of where the cost actually sat.",
    approach: [
      "Ran stakeholder interviews and workflow analysis to document the AS-IS process and locate the inefficiencies.",
      "Designed optimised TO-BE workflows that removed manual steps rather than digitising them as-is.",
      "Coordinated technical and business units to align priorities and drive execution to agreed timelines.",
      "Produced business requirement documents and workflow optimisation reports for the operations team.",
    ],
    outcome:
      "Manual processes eliminated and workflow efficiency improved across departments. The documentation was adopted directly by operations, and the cost saving was recognised by operations leadership.",
    outcomeMetric: { value: "NPR 5L+", label: "OPEX removed" },
    tags: ["Digital Transformation", "AS-IS / TO-BE", "BRDs", "Cross-functional Alignment"],
  },
];

/**
 * Academic work carried over from the previous version of this site. Kept
 * deliberately factual — it is not on the CV and has no public artefact to
 * link to.
 */
export const academicProject = {
  title: "Multimodal Dementia Detection",
  context: "Academic project · Vellore Institute of Technology",
  description:
    "An application combining multiple data modalities to assess the type and severity of dementia in patients, with role-based user authentication.",
  tags: ["Python", "Next.js"],
} as const;

export type LeadershipRole = {
  id: string;
  event: string;
  role: string;
  committee: string;
  period: string;
  teamSize?: number;
  points: string[];
};

export const leadership: LeadershipRole[] = [
  {
    id: "gravitas-ir",
    event: "graVITas, VIT University",
    role: "Special Event Manager",
    committee: "International Relations Committee",
    period: "Aug — Oct 2025",
    teamSize: 30,
    points: [
      "Led a team of 30 for VIT's flagship international technical festival, owning coordination with partner universities globally.",
      "Managed stakeholder relationships across multiple institutions simultaneously — cross-cultural negotiation and partnership management.",
    ],
  },
  {
    id: "riviera",
    event: "Riviera, VIT University",
    role: "Special Event Manager",
    committee: "Special Guest Care Committee",
    period: "Jan — Mar 2025",
    teamSize: 25,
    points: [
      "Selected from 20+ candidates to lead a committee at VIT's flagship cultural festival, one of Asia's largest university events.",
      "Held a team of 25 accountable for logistics, scheduling and on-ground execution across multiple event days.",
    ],
  },
  {
    id: "gravitas-logistics",
    event: "graVITas, VIT University",
    role: "Special Event Coordinator",
    committee: "Transport & Logistics Committee",
    period: "Aug — Oct 2024",
    points: [
      "Coordinated event operations across planning, communication and on-site delivery for VIT's international technical symposium.",
      "Progressed to a managerial role the following year on consistent performance; recognised with a Certificate of Recognition.",
    ],
  },
];

export type CapabilityGroup = {
  id: string;
  title: string;
  caption: string;
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    id: "leadership",
    title: "Leadership",
    caption: "How teams get built and held",
    items: [
      "Team Leadership & Mentoring",
      "Engineering Talent Development",
      "Ownership & Accountability",
      "Delivery Strategy",
    ],
  },
  {
    id: "delivery",
    title: "Delivery",
    caption: "How work reaches production",
    items: [
      "Agile / Scrum",
      "Sprint Planning & Delivery",
      "SLA & Capacity Management",
      "Requirements Gathering",
      "Stakeholder Management",
    ],
  },
  {
    id: "business",
    title: "Tools & Business",
    caption: "How decisions get evidenced",
    items: [
      "Jira & Confluence",
      "Process Documentation",
      "Business Analysis",
      "Data Analysis (Excel / Sheets)",
    ],
  },
  {
    id: "technical",
    title: "Technical",
    caption: "How I stay credible with engineers",
    items: ["Java", "Python", "HTML / CSS", "Software Development Lifecycle"],
  },
];

export type Education = {
  id: string;
  institution: string;
  qualification: string;
  detail?: string;
  location: string;
  period: string;
  primary?: boolean;
};

export const education: Education[] = [
  {
    id: "vit",
    institution: "Vellore Institute of Technology",
    qualification: "Bachelor of Technology",
    detail: "Computer Science Engineering",
    location: "Vellore, India",
    period: "2022 — 2026",
    primary: true,
  },
  {
    id: "kws",
    institution: "Kathmandu World School",
    qualification: "Higher Secondary (NEB +2)",
    detail: "Science",
    location: "Nepal",
    period: "2019 — 2021",
  },
  {
    id: "gems",
    institution: "GEMS School",
    qualification: "Secondary Education Examination (SEE)",
    location: "Lalitpur, Nepal",
    period: "2019",
  },
];

export const languages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Proficient" },
] as const;

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "leadership", label: "Leadership" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];
