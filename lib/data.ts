export const contact = {
  name: "Ahaan Singh",
  email: "singhahaan17@gmail.com",
  location: "New Delhi, India",
  linkedin: "https://www.linkedin.com/in/ahaan-singh-07b7a9255/",
  github: "https://github.com/ahaansingh17",
};

export const pillars = [
  "AI & Data Professional",
  "Builder & Community Leader",
  "Researcher & Problem Solver",
];

export const heroTagline =
  "I build AI systems, lead communities, and turn ideas into impact.";

export const heroSupport =
  "Early-career AI & data professional. I've shipped production GenAI at PwC, built real-time computer vision systems, co-founded a platform serving 5,000+ users, and published research on AI fairness.";

export const metrics = [
  { value: 30, suffix: "%", label: "faster AI pipelines at PwC" },
  { value: 95, suffix: "%", label: "fraud detection rate in production" },
  { value: 5000, suffix: "+", label: "users on NALUM, the platform I co-founded" },
  { value: 5, suffix: "", label: "citations in legal & regulatory literature" },
  { value: 3, suffix: "%", prefix: "Top ", label: "of global applicants — Harvard HPAIR delegate" },
];

export const about = {
  paragraphs: [
    "I'm an engineer who found his lane at the intersection of data, AI, and the people those systems serve. After graduating from NSUT in 2026, I'd already spent my final years shipping real systems — RAG pipelines and LLM tooling at PwC, a real-time fraud detection system for Americana Foods, and generative AI products in production.",
    "Alongside the technical work, I build communities. I co-founded NALUM, NSUT's official alumni platform, and led sponsorship, finance, and mentorship across some of the largest campus organizations in India — raising partnerships with brands like Coca-Cola, Myntra, and Hero MotoCorp, and mentoring 120+ people along the way.",
    "I'm also a researcher at heart. My published work on fairness in real-money gaming — cited in 3 legal journals and 2 regulatory white papers — taught me to treat AI as an interdisciplinary problem: part engineering, part ethics, part strategy. As a Harvard HPAIR delegate, I've explored those questions with leaders from around the world.",
  ],
  currently:
    "Currently: open to roles in AI engineering, data, and consulting.",
  quickFacts: [
    "New Delhi, India",
    "NSUT, Class of 2026",
    "IIT Madras Data Science certified",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  featured: boolean;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "PwC",
    role: "Data Analyst & Cloud Intern",
    period: "May – Jul 2025",
    featured: true,
    bullets: [
      "Built scalable RAG workflows with LangChain and OpenAI APIs, deployed across 4 internal tools — improving average response efficiency by 30%.",
      "Led the client-facing Nokia Project: improved LLM pipeline performance by 40% using LLaMA and Mistral, cutting latency 20% while raising response accuracy in production tests.",
    ],
    tags: ["LangChain", "OpenAI APIs", "LLaMA", "Mistral", "Python", "SQL", "Cloud"],
  },
  {
    company: "Americana Foods",
    role: "Junior Developer",
    period: "May – Aug 2024",
    featured: true,
    bullets: [
      "Built an integrated real-time fraud detection system with OpenCV and APIs, blocking 95% of fraudulent transactions across 50+ POS endpoints.",
      "Engineered algorithms mapping transaction data to surveillance feeds — boosting fraud traceability 30% and cutting review time 40%.",
    ],
    tags: ["OpenCV", "Computer Vision", "APIs", "Python", "System Integration"],
  },
  {
    company: "Digiiq IT Solutions",
    role: "Digital Solutions Analyst",
    period: "Dec 2024 – Feb 2025",
    featured: false,
    bullets: [
      "Automated 80% of creative production workload with fine-tuned Stable Diffusion image generation, and built a 40K+ entry prompt dataset to fine-tune LLaMA for original, high-quality content.",
    ],
    tags: ["Stable Diffusion", "LLaMA", "Fine-tuning", "Python"],
  },
  {
    company: "Honda Motorcycle & Scooter India",
    role: "Summer Trainee",
    period: "Jun – Jul 2024",
    featured: false,
    bullets: [
      "Ran time-motion studies across 2 production lines, cutting cycle-time deviation 7% and improving real-time reporting accuracy 15% with the IT team.",
    ],
    tags: ["Process Optimization", "Cycle Time Analysis"],
  },
];

export type Project = {
  slug: string | null;
  category: string;
  title: string;
  description: string;
  metric: string;
  hero?: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "nalum",
    category: "Product · Community",
    title: "NALUM — NSUT Alumni Platform",
    description:
      "Co-founded NSUT's official alumni platform, leading product, design, and outreach to connect a 5,000+ member community.",
    metric: "5,000+ registrations in six months",
    hero: true,
  },
  {
    slug: "llm-systems",
    category: "AI / LLM Systems",
    title: "Production GenAI & RAG Pipelines",
    description:
      "RAG workflows, LLM pipeline optimization, and fine-tuned generative models shipped to production at PwC and Digiiq.",
    metric: "+40% LLM pipeline performance",
  },
  {
    slug: "fraud-detection",
    category: "ML System · Computer Vision",
    title: "Real-Time Fraud Detection",
    description:
      "Computer-vision fraud detection deployed across 50+ POS endpoints at Americana Foods, blocking fraud as it happens.",
    metric: "95% fraud blocked in real time",
  },
  {
    slug: null,
    category: "Strategy · Finance",
    title: "Bain & Company BrAINWARS Case",
    description:
      "10-year cash flow projections, NPV and sensitivity analysis for a ₹2,500 Cr EV-policy-linked investment mandate across three cities.",
    metric: "₹150 Cr in savings identified",
  },
];

export const earlierWork = {
  title: "Ocean Cleaning — UN SDG #14",
  description:
    "Designed a low-cost mechanical oil separation device, supported by NITI Aayog under the Atal Innovation framework. Top-10 recognition at the 2022 Global Empathy Summit, Australia.",
};

export const research = {
  label: "Published Research",
  title: "Fairness in Real-Money Online Gaming",
  summary:
    "Co-authored research developing neural-network-based fairness metrics for gaming platforms with real-currency stakes — a responsible AI framework built with guidance from leading domain experts.",
  badges: ["Cited in 3 legal journals", "Cited in 2 regulatory white papers"],
  closing:
    "Good research doesn't stay in a paper — it changes how real systems get built.",
};

export const hpair = {
  org: "Harvard Project for Asian and International Relations",
  role: "International Delegate · HPAIR 2024",
  highlight: "Selected from the top 2–3% of global applicants",
  description:
    "Represented India at one of Asia's premier international conferences — engaging in dialogues with Nobel Laureates, government officials, and global industry leaders on public-private partnerships and international development.",
};

export const leadership = [
  {
    org: "Moksha-Innovision'25",
    role: "Co-Convener — NSUT's flagship cultural-technical fest",
    headline: "3x sponsorship growth",
    bullets: [
      "Secured 50+ sponsorship deals with brands including Coca-Cola, Myntra, Hero MotoCorp, Vision IAS, and Delhi Tourism.",
      "Owned complete financial operations — budgeting, allocation, and vendor payments across 30+ event categories — with a 500+ company CRM pipeline.",
    ],
  },
  {
    org: "eCell NSUT",
    role: "General Secretary",
    headline: "120+ members mentored",
    bullets: [
      "Led InnovateX'24, a 48-hour flagship ideation competition backed by 15+ brand sponsors.",
      "Drove NSUT to Top 10 nationally in IIT Bombay's National Entrepreneurship Challenge.",
    ],
  },
  {
    org: "Resonanz'24",
    role: "Joint General Secretary — NSUT intra-college fest",
    headline: "25+ brand partners onboarded",
    bullets: [
      "Led sponsorship and collaborations, securing title and co-title sponsors across 20+ cultural events.",
    ],
  },
];

export const skills = [
  {
    group: "AI & Data",
    items: [
      "Python", "LangChain", "OpenAI APIs", "LLaMA", "Stable Diffusion",
      "OpenCV", "SQL", "PySpark", "PowerBI", "Pandas", "NumPy", "Streamlit",
    ],
  },
  {
    group: "Product & Strategy",
    items: [
      "Financial Modeling", "NPV Analysis", "Agile", "Product Roadmapping",
      "Feature Prioritization", "Stakeholder Management", "Jira", "Figma",
    ],
  },
  {
    group: "Leadership & Communication",
    items: [
      "Sponsorship", "Event Operations", "Mentoring",
      "Public Speaking", "Debating", "Negotiation",
    ],
  },
];

export const recognition = [
  { title: "3rd place, 'Bid n Build' — IIT Bombay E-Summit 2024", detail: "100+ teams nationally" },
  { title: "Top 20 of 900+ colleges — National Entrepreneurship Challenge '24", detail: "IIT Bombay" },
  { title: "McKinsey Forward Learning Program", detail: "Selected participant" },
  { title: "Data Science Certification — IIT Madras", detail: "Foundation + Advanced" },
  { title: "Top 10, ATL Marathon", detail: "IoT project, Atal Tinkering Lab" },
];

export const education = {
  degree: "B.Tech, Mechanical Engineering",
  school: "Netaji Subhas University of Technology (NSUT)",
  period: "2022–2026",
};
