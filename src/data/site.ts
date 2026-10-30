/**
 * Single source of truth for all DT Solutions business content.
 * Every string here is taken from https://dtsolutions.pk (captured 2026-10-30).
 * Do not add invented achievements, statistics, clients, or testimonials.
 */

export const site = {
  name: "DT Solutions",
  legalName: "DT SOLUTIONS (PRIVATE) LIMITED",
  url: "https://dtsolutions.pk",
  title: "Premium software, websites, and automation for global enterprises",
  description:
    "DT Solutions builds websites, custom software, dashboards, and AI automation systems for enterprises that want practical digital growth.",
  keywords: [
    "software engineering company",
    "enterprise web development",
    "business automation",
    "AI automation",
    "custom software development",
    "dashboards and portals",
    "DT Solutions",
    "dtsolutions.pk",
  ],
  blurb:
    "DT Solutions helps enterprises and forward-thinking businesses build practical digital systems that reduce manual work, improve operations, and support growth globally.",
  email: "info@dtsolutions.pk",
  location: "Pakistan",
  replyTime: "We reply within 24 hours",
  linkedin: "https://www.linkedin.com/company/dtsolutionspk",
  hours: { days: "Monday to Saturday", time: "10:00 AM to 7:00 PM PKT" },
  formEndpoint: "https://formspree.io/f/mojbnzro",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const bookCallHref = "/contact#enquiry";

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  title: "Digital systems built for businesses",
  description:
    "We design modern websites, business software, AI workflows, and automation systems that help teams work faster, serve better, and scale with confidence.",
  trust: [
    "Built by a remarkable engineering team",
    "Dedicated support for our partners",
    "Software you can operate and own",
  ],
};

export const growth = {
  title: "Built for growth",
  description:
    "High-performance software, automation, and web systems for teams that want to move faster.",
  stats: [
    { kind: "count", value: 15, suffix: "+", label: "Projects delivered" },
    { kind: "count", value: 90, suffix: "%+", label: "Client satisfaction" },
    { kind: "text", prefix: "Typically within", value: "24 hrs", label: "Response time" },
    { kind: "text", value: "Across the globe", label: "provide service" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type ServiceIcon =
  | "web"
  | "software"
  | "ai"
  | "dashboard"
  | "api"
  | "payment"
  | "support";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  summary: string;
  description: string;
  audience: string;
  deliverables: string[];
  outcomes: string[];
  /** Matches an option in the enquiry form's "Project type" select. */
  projectType: string;
  scope?: { title: string; body: string }[];
}

export const servicesIntro = {
  eyebrow: "Services",
  title: "Digital delivery that feels polished, practical, and ready for business use",
  description:
    "From public-facing websites to internal software and automation systems, we help global enterprises replace friction with clarity.",
};

export const services: Service[] = [
  {
    slug: "web-design-development",
    icon: "web",
    title: "Web Design & Development",
    summary:
      "Business websites that present services clearly and make it easy for customers to act.",
    description:
      "We build websites and landing pages that match how global enterprises look for services — clear pages, straightforward contact paths, and easy editing for your team.",
    audience:
      "SMEs, service firms, consultants, and founders who need a sharper digital presence.",
    deliverables: [
      "Design templates and mobile-first pages",
      "Next.js or CMS implementation with simple editing",
      "Basic on-page SEO and performance tuning",
      "Contact forms, analytics, and handover notes",
    ],
    outcomes: [
      "Clearer presentation of services and pricing",
      "Higher-quality enquiries that save sales time",
      "Simple content updates anyone on the team can make",
    ],
    projectType: "Website",
  },
  {
    slug: "custom-software-development",
    icon: "software",
    title: "Custom Software Development",
    summary: "Internal tools that reduce repetitive tasks and keep teams coordinated.",
    description:
      "We deliver web applications for approvals, order processing, inventory notes, and other routine work so teams stop relying on email chains and spreadsheets.",
    audience:
      "Growing businesses whose processes have outgrown email, spreadsheets, or off-the-shelf tools.",
    deliverables: [
      "Discovery sessions and practical requirements mapping",
      "Role-based web apps and admin interfaces",
      "Workflow automation and reporting modules",
      "Deployment, training, and handover documentation",
    ],
    outcomes: [
      "Fewer repetitive tasks and fewer missed actions",
      "Reliable operational visibility for managers",
      "Software that fits your daily processes, not the other way around",
    ],
    projectType: "Custom software",
  },
  {
    slug: "ai-automation-workflows",
    icon: "ai",
    title: "AI Automation & Workflows",
    summary: "Automations that cut repetitive steps while keeping human control.",
    description:
      "We map routine tasks — from intake to categorisation and notifications — then automate the parts that save time while keeping checks where they matter.",
    audience:
      "Teams handling repetitive enquiries, document flow, onboarding, or internal handoffs.",
    deliverables: [
      "Workflow mapping and sensible automation design",
      "Text extraction, routing, and summarisation where useful",
      "API, email, and internal tool integration",
      "Monitoring, alerts, and safe fallback paths",
    ],
    outcomes: [
      "Faster responses on common enquiries",
      "Reduced time spent on manual processing",
      "Consistent handling of routine cases",
    ],
    projectType: "AI automation",
  },
  {
    slug: "business-dashboards-portals",
    icon: "dashboard",
    title: "Business Dashboards & Portals",
    summary: "A single view for the numbers and approvals your team needs each day.",
    description:
      "We turn dispersed data into focused dashboards and portals so owners and managers can check performance quickly and act without hunting for reports.",
    audience:
      "Leadership teams that need reliable numbers without chasing updates across tools.",
    deliverables: [
      "Executive dashboards and operational views",
      "Customer or department portals with role controls",
      "Custom metrics, filters, and data export",
      "Scheduled refresh and access management",
    ],
    outcomes: [
      "Faster, evidence-based decisions",
      "Clearer communication between teams",
      "Less time spent compiling reports",
    ],
    projectType: "Dashboard or portal",
  },
  {
    slug: "api-integrations",
    icon: "api",
    title: "API Integrations",
    summary: "Make your existing tools share data reliably and reduce double entry.",
    description:
      "We connect CRMs, payment gateways, shipping partners, and internal systems so the same information flows without manual copy-paste or fragile spreadsheets.",
    audience:
      "Businesses juggling multiple systems and duplicate entries between departments.",
    deliverables: [
      "Integration architecture and data mapping",
      "Third-party connector and custom adapters",
      "Webhook handling and sync monitoring",
      "Retry and error logging for reliability",
    ],
    outcomes: [
      "Fewer data mismatches and manual fixes",
      "Faster handoffs between teams and systems",
      "Less time lost to reconciliation",
    ],
    projectType: "API integration",
  },
  {
    slug: "payment-gateway-integrations",
    icon: "payment",
    title: "Payment Gateway Integrations",
    summary:
      "Payment integrations that reduce failed payments and manual reconciliation.",
    description:
      "We connect local and international payment gateways to your website or portal, handle payment callbacks, and provide logging so your team can reconcile transactions with confidence.",
    audience:
      "Businesses selling online, collecting deposits, managing subscriptions, or needing secure digital payment collection globally.",
    deliverables: [
      "Checkout and payment flow design",
      "Integration with JazzCash, Easypaisa, Stripe, banks, and other providers",
      "Payment callbacks, webhooks, and transaction logs",
      "Order confirmation and reconciliation support",
    ],
    outcomes: [
      "Fewer abandoned payments and clearer transaction records",
      "Quicker confirmation of paid orders and bookings",
      "Less manual reconciliation work for your finance team",
    ],
    projectType: "Payment gateway integration",
    scope: [
      {
        title: "What we can integrate",
        body: "Hosted checkout pages, embedded checkout flows, payment links, subscription billing, invoice payments, and portal-based collections.",
      },
      {
        title: "Business use cases",
        body: "Ecommerce orders, service retainers, school or institute fees, membership payments, booking deposits, and recurring client billing.",
      },
      {
        title: "Controls we include",
        body: "Secure redirect handling, callback verification, failed-payment recovery logic, payment status syncing, and basic reconciliation visibility.",
      },
    ],
  },
  {
    slug: "maintenance-support",
    icon: "support",
    title: "Maintenance & Support",
    summary: "Ongoing support so your website or system keeps working for your team.",
    description:
      "After launch we handle bug fixes, performance checks, small improvements, and practical advice so your systems remain reliable as usage grows.",
    audience:
      "Businesses that want dependable support instead of chasing freelancers for every change.",
    deliverables: [
      "Bug fixes and small improvement cycles",
      "Uptime, security, and performance checks",
      "Content and system updates",
      "Monthly support reports and guidance",
    ],
    outcomes: [
      "Reduced downtime and faster issue resolution",
      "Confidence that the system can be relied upon",
      "A single technical partner for ongoing needs",
    ],
    projectType: "Support and maintenance",
  },
];

export const servicesPage = {
  eyebrow: "Services",
  title: "Services designed for businesses that want clear digital progress",
  description:
    "Every service is shaped around real workflows, business constraints, and the need for dependable communication from first call to launch.",
  offerEyebrow: "What we offer",
  // The live site's heading says "Six" while listing seven services; the
  // count is omitted here so the heading stays accurate.
  offerTitle: "Focused service lines with practical business outcomes",
  offerDescription:
    "Each engagement is tailored, but the goal stays the same: help your team work better, respond faster, and look more credible.",
};

/* ------------------------------------------------------------------ */
/* Why choose                                                          */
/* ------------------------------------------------------------------ */

export const whyChoose = {
  eyebrow: "Why DT Solutions",
  title: "A modern technical partner with local context and business discipline",
  description:
    "We work in a way that suits decision-makers: practical scope discussions, clean delivery, and systems designed for global teams.",
  items: [
    {
      icon: "map",
      title: "Local market understanding",
      body: "We know how decisions are made in local teams and what helps projects move forward.",
    },
    {
      icon: "chat",
      title: "Clear communication",
      body: "Plain timelines, honest scope discussions, and concise updates for decision-makers.",
    },
    {
      icon: "shield",
      title: "Production-ready delivery",
      body: "Careful engineering, tested interfaces, and launch support built for daily use.",
    },
    {
      icon: "support",
      title: "Long-term support",
      body: "Available after launch to help you refine features, fix issues, and scale responsibly.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const activeProjects = {
  eyebrow: "Active Projects",
  title: "Significant ongoing engagements and enterprise implementations",
  description:
    "A look at the scale and technical depth of the platforms currently in active development or rollout phases.",
  items: [
    {
      id: "epay-balochistan",
      title: "Digital Payment Systems (ePay)",
      body: "End-to-end ePay platforms for governments — tax portals, fee collection, and citizen payment systems built for provincial scale.",
      href: "/portfolio#epay-balochistan",
    },
    {
      id: "government-digitization",
      title: "Government Digitization",
      body: "Modernising public-sector operations via digital workflows, e-filing, and citizen portals.",
      href: "/portfolio#government-digitization",
    },
  ],
};

export const portfolioPage = {
  eyebrow: "Portfolio",
  title: "Case studies presented with clarity, business context, and visible outcomes",
  description:
    "We keep the presentation clean and lightweight while showing the challenge, thinking, and result behind each type of project.",
  feature: {
    status: "Active Development",
    category: "Government Digitization",
    title: "Building the ePay Balochistan platform",
    body: "DT Solutions is currently developing the ePay Balochistan digital payment platform, a government-commissioned initiative to replace manual cash-based systems with a modern, scalable electronic payment infrastructure for the province.",
    pillars: [
      {
        icon: "receipt",
        title: "Electronic Tax & Fee Collection",
        body: "Building digital channels for provincial taxes, vehicle tokens, and government fees, replacing manual cash counters with online and mobile options.",
      },
      {
        icon: "users",
        title: "Citizen Self-Service Portal",
        body: "A web and mobile portal so citizens can pay, track, and manage government transactions without visiting a physical office.",
      },
      {
        icon: "chart",
        title: "Revenue Dashboards & Reconciliation",
        body: "Real-time dashboards for department heads to track collections and reconciliation, replacing manual end-of-day tallies.",
      },
      {
        icon: "bank",
        title: "Secure Multi-Bank Integrations",
        body: "Integrating with 1-Link and banking partners for reliable, auditable transaction processing at provincial scale.",
      },
    ],
    card: {
      title: "ePay Balochistan",
      subtitle: "Under Development by DT Solutions",
      facts: [
        { value: "Govt", detail: "Provincial", label: "Client" },
        { value: "Multi", detail: "Dept", label: "Coverage" },
        { value: "ePay", detail: "Platform", label: "Type" },
        { value: "In", detail: "Development", label: "Current Status" },
      ],
      features: [
        "Online tax payment portal",
        "Vehicle token tax digital collection",
        "Revenue authority e-filing system",
        "1-Link and bank payment switch integration",
        "Department-level reconciliation dashboards",
        "Citizen self-service mobile interface",
      ],
    },
  },
  engagements: {
    eyebrow: "Selected engagements",
    title: "Filter by project type and explore how the solutions were structured",
    description:
      "Each case study focuses on the business challenge, the solution approach, and the outcome it was built to support.",
    filters: ["All", "Integrations", "Web Systems"] as const,
    items: [
      {
        id: "digital-payment-systems",
        filter: "Integrations",
        tag: "Government Integrations",
        title: "Digital Payment Systems (ePay)",
        problem:
          "Manual cash-based systems and fragmented tax collection lacked central visibility and citizen convenience.",
        solution:
          "End-to-end ePay platforms for governments — tax portals, fee collection, and citizen payment systems built for provincial scale.",
        result:
          "Modernized public-sector operations with secure multi-bank integrations, real-time revenue dashboards, and digital channels.",
      },
      {
        id: "government-digitization",
        filter: "Web Systems",
        tag: "Public Sector Web Systems",
        title: "Government Digitization",
        problem:
          "Legacy workflows and paper-based tracking delayed approvals and hindered operational scaling.",
        solution:
          "Modernising public-sector operations via digital workflows, e-filing, and citizen portals.",
        result:
          "Streamlined inter-departmental communication and faster processing times for citizen requests.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps = {
  eyebrow: "Process",
  title: "A delivery process that keeps business goals visible from day one",
  description:
    "We balance design quality and technical depth with the kind of structure that helps teams stay aligned and confident.",
  steps: [
    {
      title: "Discover",
      body: "We map your workflows, pain points, and business priorities before proposing a solution.",
    },
    {
      title: "Plan",
      body: "A clear implementation path, milestones, and practical delivery roadmap you can review.",
    },
    {
      title: "Build",
      body: "Design, development, QA, and iteration with regular checkpoints and demo reviews.",
    },
    {
      title: "Launch & Support",
      body: "We help you go live, guide adoption, and stay available for support and continuous improvement.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const testimonials = {
  eyebrow: "Testimonials",
  title: "Professional delivery that feels responsive, steady, and easy to work with",
  description:
    "We aim to make every engagement clear, practical, and dependable for busy teams and decision-makers.",
  items: [
    {
      quote:
        "DT Solutions understood our workflow quickly and built something practical instead of overcomplicating it. Communication stayed clear from start to finish.",
      name: "Faraz Ahmed",
      role: "Operations Lead",
    },
    {
      quote:
        "The team set realistic expectations and trained our staff so the system was adopted quickly. Their technical understanding helped a lot.",
      name: "Hina Raza",
      role: "Director, SME",
    },
    {
      quote:
        "After the redesign and some workflow automations, our enquiries are clearer and follow-ups happen faster. It made a visible difference.",
      name: "Usman Tariq",
      role: "Founder, Tech Startup",
    },
  ],
};

export const contactCta = {
  eyebrow: "Let's talk",
  title: "Looking to improve a process, website, or internal system?",
  description:
    "Tell us what you need and which tools you use. We will suggest a clear, practical next step.",
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutPage = {
  eyebrow: "About",
  title: "We build practical digital systems for real business workflows globally",
  description:
    "DT Solutions combines premium digital execution with the kind of business understanding that keeps projects useful, manageable, and ready for adoption.",
  mission: {
    eyebrow: "Mission",
    title: "Build digital systems that help teams work with less friction and more confidence.",
    paragraphs: [
      "We believe strong delivery is not only about clean code or good visuals. It is about understanding how decisions get made, how teams communicate, and where manual work quietly slows the business down.",
      "We focus on practical outcomes: websites that build trust, internal tools that cut wasted time, and automations that remove routine work without adding oversight headaches.",
    ],
    specialisesTitle: "What we specialise in",
    specialises: [
      "Business websites with strong credibility and conversion structure",
      "Internal software for operations, approvals, and reporting",
      "Automation systems that reduce repetitive admin work",
      "Dashboards and portals for leadership, teams, and customers",
    ],
  },
  story: {
    eyebrow: "Story",
    title: "A company story shaped by business realities, not trends",
    description:
      "Our work has grown around the same idea from the start: use technology to make operations clearer, customer journeys smoother, and delivery more dependable.",
    stages: [
      {
        label: "Foundation",
        title: "Built around operational clarity",
        body: "DT Solutions started with a focus on solving day-to-day workflow problems, not just building demos.",
      },
      {
        label: "Growth",
        title: "Expanding across websites, portals, and automation",
        body: "Client needs extended our work from websites to custom software, integrations, and sensible automation.",
      },
      {
        label: "Today",
        title: "A long-term technical partner",
        body: "We now help enterprises modernise customer journeys, reduce manual work, and launch systems with confidence.",
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "A lean team focused on clarity, execution, and support",
    body: "The people behind DT Solutions combine strategy, design, engineering, and post-launch support so clients can move from idea to rollout with one partner.",
    disciplines: ["Strategy", "Design", "Engineering", "Post-launch support"],
  },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contactPage = {
  eyebrow: "Contact",
  title: "Looking to improve a process, website, or internal system?",
  description:
    "Tell us what you need, which tools you use today, and where your team gets stuck. We will reply with a clear, practical next step.",
  formEyebrow: "Project enquiry",
  formTitle: "Start with a clear conversation",
  formDescription:
    "Use the form for structured project details to help us prepare a thoughtful first response.",
  projectTypes: [
    "Website",
    "Custom software",
    "AI automation",
    "Dashboard or portal",
    "API integration",
    "Payment gateway integration",
    "Support and maintenance",
  ],
  budgets: ["Under PKR 300k", "PKR 300k - 800k", "PKR 800k - 1.5M", "PKR 1.5M+"],
  messagePlaceholder:
    "Tell us what you need, what stage you're at, and any timeline or business constraints we should know.",
};

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export const blogPage = {
  eyebrow: "Blog",
  title: "Editorial insights for teams improving systems, operations, and digital credibility",
  description:
    "Short, practical writing on software, automation, websites, AI workflows, and digital tools that matter to global enterprises.",
  topics: ["Software", "Automation", "Business Growth", "AI", "Digital Tools"],
  featured: {
    category: "Software",
    title: "When an enterprise actually needs custom software",
    excerpt:
      "A practical way to judge whether you need a custom system, a better workflow, or simply tighter use of your current tools.",
    readTime: "6 min read",
  },
  posts: [
    {
      category: "Automation",
      title: "How structured workflows can reduce response delays",
      excerpt:
        "Why customer-facing teams are moving repetitive updates into structured flows instead of managing everything manually.",
      readTime: "5 min read",
    },
    {
      category: "Digital Tools",
      title: "Dashboards that owners will actually keep checking",
      excerpt:
        "The difference between decorative reporting and dashboards that support real weekly decisions.",
      readTime: "4 min read",
    },
    {
      category: "AI",
      title: "AI for operations teams: where it helps and where it doesn't",
      excerpt:
        "A grounded look at AI use cases that save time without breaking oversight or creating new confusion.",
      readTime: "7 min read",
    },
    {
      category: "Business Growth",
      title: "Website credibility fixes that matter for B2B buyers",
      excerpt:
        "Small improvements in structure, copy, and contact experience that can strengthen trust before the first call.",
      readTime: "5 min read",
    },
  ],
};

