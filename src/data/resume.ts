export type Job = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  note?: string;
  featured?: boolean;
  teaching?: boolean;
  // Details may contain [text](url) links.
  details: string[];
};

export type School = {
  school: string;
  location: string;
  note?: string;
  degrees: { degree: string; detail?: string; graduated?: string }[];
};

export type Project = {
  title: string;
  tagline: string;
  url?: string;
  image: string;
  stack: string[];
  details: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const social = [
  { name: "Email", url: "mailto:me@jairedjawed.com" },
  { name: "GitHub", url: "https://github.com/jaireddjawed" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jaired/" },
  { name: "Resume", url: "/JairedJawed_Resume.pdf" },
];

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Go", "TypeScript/JavaScript", "Python", "C++", "SQL"] },
  { label: "Frontend", items: ["React", "React Native", "Next.js"] },
  { label: "Backend", items: ["Node.js", "GraphQL", "gRPC", "REST APIs", "WebSockets"] },
  {
    label: "Infrastructure/Cloud",
    items: ["Kubernetes", "Terraform", "Vault", "Docker", "AWS", "Azure"],
  },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Neo4j"] },
  { label: "Developer Tooling", items: ["AI Agents", "GitHub Actions", "CI/CD", "Datadog"] },
  { label: "Spoken Languages", items: ["English", "Spanish"] },
];

export const experience: Job[] = [
  {
    company: "HashiCorp",
    title: "Software Engineer, Vault Ecosystem",
    featured: true,
    dates: "Nov 2024 – Present",
    location: "Remote",
    note: "HashiCorp is [now an IBM company](https://newsroom.ibm.com/2025-02-27-ibm-completes-acquisition-of-hashicorp,-creates-comprehensive,-end-to-end-hybrid-cloud-platform).",
    details: [
      "Led development of [real-time secret synchronization](https://github.com/hashicorp/vault-secrets-operator/pull/1159) in the Vault Secrets Operator, enabling Kubernetes workloads to receive updated secrets without restarts through WebSocket-based updates.",
      "Developed [PKI External CA integration](https://developer.hashicorp.com/vault/docs/agent-and-proxy/agent/pki-external-ca) for Vault Agent, automating certificate issuance and renewal through ACME and enabling applications to consume externally signed certificates without manual lifecycle management.",
      "Developed [Azure Static Roles support](https://developer.hashicorp.com/vault/docs/secrets/azure#static-roles) in Vault, enabling secure management of long-lived Azure credentials for enterprise environments.",
      "Built [orphaned secret cleanup workflows](https://github.com/hashicorp/vault-secrets-operator/pull/980) in the Vault Secrets Operator, reducing stale secret accumulation and improving Kubernetes operational hygiene.",
      "Mentored a junior developer and two interns through onboarding, accelerating ramp-up and enabling them to contribute independently to production projects.",
    ],
  },
  {
    company: "Woooly.ai",
    title: "Founding Engineer",
    featured: true,
    dates: "Feb 2026 – Sep 2026",
    location: "Remote",
    details: [
      "Led development of the entire full-stack application, a hiring platform that lets companies evaluate candidates based on their skills and how effectively they use AI in the workplace.",
    ],
  },
  {
    company: "HashiCorp",
    title: "Software Engineer, Vault Dedicated",
    featured: true,
    dates: "Aug 2023 – Nov 2024",
    location: "Remote",
    details: [
      "Led development of validation and synchronization systems for Vault Dedicated, enabling secure [Secret Sync](https://developer.hashicorp.com/vault/docs/sync) replication across Vercel, Google Cloud, and Azure.",
      "Built [disaster recovery](https://developer.hashicorp.com/vault/cloud/what-is-hcp-vault/high-avail-disaster-recover) health checks and automated Route 53 failover workflows for highly available Vault infrastructure deployments.",
      "Participated in on-call rotations for production Vault infrastructure, troubleshooting outages and restoring service during critical incidents.",
    ],
  },
  {
    company: "University of California, Riverside",
    title: "Teaching Assistant",
    teaching: true,
    dates: "Jan 2023 – Jun 2023",
    location: "Riverside, CA",
    details: [
      "Taught introductory C++ and data structures to undergraduate students.",
      "Graded students' assignments and provided feedback.",
    ],
  },
  {
    company: "2U",
    title: "Software Development Tutor",
    teaching: true,
    dates: "Jan 2020 – Jun 2023",
    location: "Remote",
    details: [
      "Tutored coding boot camp students in full-stack web development and data visualization using React, Node.js, D3.js, Pandas, Matplotlib, Visual Basic, and SQL.",
      "Developed a Python program to automatically send session confirmation emails to all students.",
    ],
  },
  {
    company: "HashiCorp",
    title: "Software Engineer Intern, Vault Dedicated",
    featured: true,
    dates: "Jun 2022 – Sep 2022",
    location: "Remote",
    details: [
      "Developed cluster filtering functionality by creation date and tier in Vault Dedicated, improving operational efficiency for incident response workflows.",
    ],
  },
  {
    company: "University of California, Riverside",
    title: "Computer Science Transfer Mentor",
    dates: "Sep 2021 – Jun 2022",
    location: "Riverside, CA",
    details: [
      "Mentored fellow transfer students through their first year at the university, helping them establish connections and a community.",
    ],
  },
  {
    company: "Chegg",
    title: "Software Engineer Intern",
    featured: true,
    dates: "Jun 2021 – Aug 2021",
    location: "Remote",
    details: [
      "Developed secure CRUD APIs for internal student data management workflows, replacing direct SQL query processes and reducing operational risk.",
    ],
  },
  {
    company: "Base 11",
    title: "Software Engineer Intern",
    dates: "Jul 2020 – Aug 2020",
    location: "Remote",
    details: [
      "Produced 3D models of objects using OnShape and NX CAD software.",
      "Developed a Python program to control a Raspberry Pi-powered rover remotely by keyboard and voice through web sockets and the wit.ai API.",
    ],
  },
  {
    company: "Moreno Valley College",
    title: "Student Aide II",
    dates: "Aug 2019 – Aug 2020",
    location: "Moreno Valley, CA",
    details: [
      "Influenced K-12 students at local schools and colleges to choose STEM careers.",
      "Produced objects from 3D printers using CAD software.",
      "Developed C++ and Python programs for Raspberry Pi and Arduino microcontrollers.",
    ],
  },
  {
    company: "Crowdbotics",
    title: "Software Engineer (Contract)",
    dates: "Aug 2019 – Dec 2019",
    location: "Remote",
    details: [
      "Developed minimum viable iOS and Android apps for The Shoeshine Guild, a business that handles shoeshines and repairs.",
      "Implemented user authentication, payment processing, and push notifications using React Native, Expo, Stripe, and Firebase.",
      "Implemented delivery service using the Postmates API.",
    ],
  },
];

export const education: School[] = [
  {
    school: "University of California, Riverside",
    location: "Riverside, CA",
    note: "🐻 🍊 go highlanders",
    degrees: [
      {
        degree: "M.S. Computer Science",
        detail: "Concentration in theory, algorithms, and AI",
        graduated: "Jun 2023",
      },
      { degree: "B.S. Computer Science", graduated: "Aug 2022" },
    ],
  },
  {
    school: "Moreno Valley College",
    location: "Moreno Valley, CA",
    note: "🦁 go lions",
    degrees: [
      { degree: "A.S. Computer Science", graduated: "Aug 2020" },
      { degree: "A.S. Math and Science", graduated: "Jun 2020" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Angelic Ascensions Tarot",
    tagline: "Full-stack e-commerce and scheduling platform",
    url: "https://www.angelicascensionstarot.com/",
    image: "/portfolio/angelic-ascensions-tarot.png",
    stack: ["Laravel", "React"],
    details: [
      "Built and operate a production Laravel/React e-commerce and appointment scheduling platform processing $3K+ in transactions per month.",
      "Designed a concurrency-safe scheduling system using PostgreSQL transactions and database locking to prevent double bookings.",
      "Built checkout, payment processing, automated reminders, and account-based booking workflows, contributing to a 50% increase in sales.",
    ],
  },
  {
    title: "On Track Fitness",
    tagline: "Multi-trainer scheduling, payments, and 24/7 door access for a Philadelphia gym",
    url: "https://on-track-fitness.com/",
    image: "/portfolio/on-track-fitness.png",
    stack: ["Express.js", "React", "Stripe", "Kisi"],
    details: [
      "Built a scheduling platform for personal training that books across multiple trainers, each with their own availability.",
      "Integrated Stripe for payment processing.",
      "Integrated Kisi access control so members can get into the gym 24/7 and newcomers can buy a one-hour pass to try it out.",
    ],
  },
  {
    title: "Felisa Cafe",
    tagline: "Online storefront for a Filipino-American café concept in Fullerton, CA",
    url: "https://felisacafe.com/",
    image: "/portfolio/felisa-cafe.png",
    stack: ["Laravel", "Square"],
    details: ["Built the storefront: menu, cart, and order-ahead checkout with payments through Square."],
  },
  {
    title: "Law by Castillo",
    tagline: "Spanish-language website for a litigation and arbitration boutique in Lima, Peru",
    url: "https://lawbycastillo.com/",
    image: "/portfolio/law-by-castillo.png",
    stack: ["Next.js"],
    details: [],
  },
  {
    title: "Instituto de Derecho Indiano",
    tagline: "Spanish-language website for a legal history research institute in Lima, Peru",
    url: "https://www.institutodederechoindiano.com/",
    image: "/portfolio/instituto-de-derecho-indiano.png",
    stack: ["Nuxt"],
    details: [],
  },
  {
    title: "TTP Attendance",
    tagline: "Attendance app for the Transfer Student Center at UC Riverside",
    url: "https://github.com/jaireddjawed/TTP-Attendance",
    image: "/portfolio/ttp-attendance.png",
    stack: ["Python", "JavaScript", "Google Sheets API"],
    details: [
      "Built a desktop app that signs students in by form or by swiping their student ID card, and saves each visit to a Google Sheet.",
    ],
  },
];

export const tutoring = {
  calLink: "jairedjawed/tutoring-session",
  subjects: ["Full-stack development", "Data visualization"],
  topics: [
    { label: "Frontend", items: ["React", "Vue", "JavaScript/TypeScript", "HTML & CSS"] },
    { label: "Backend", items: ["Laravel", "Node.js", "Go", "SQL"] },
    {
      label: "Data & Visualization",
      items: ["Python", "Jupyter", "Pandas", "Matplotlib", "D3.js"],
    },
    { label: "CS Fundamentals", items: ["Data structures", "Algorithms", "C++"] },
  ] as SkillGroup[],
  price: "$65",
  priceUnit: "per one-hour session",
  guarantee: "If you're not satisfied with a session, you get your money back.",
};

export const interests = {
  hobbies: ["Hiking", "Traveling", "Distance running"],
  story:
    "I went to Ivalo, Finland in 2024 to catch the northern lights near the solar maximum, and liked it so much that I went back for more in Fairbanks, Alaska the following year. Finland bottomed out at -1°F but was windier. Alaska got as cold as -50°F some nights. Closer to home I hike and run, mostly 5Ks.",
  photos: [
    {
      src: "/interests/ivalo-finland.jpg",
      alt: "Standing on a snowy field under the northern lights in Ivalo, Finland",
      caption: "Ivalo, Finland · 2024",
    },
    {
      src: "/interests/fairbanks-alaska.jpg",
      alt: "A band of green northern lights over snow-covered trees near Fairbanks, Alaska",
      caption: "Fairbanks, Alaska · 2025",
    },
    {
      src: "/interests/yosemite.jpg",
      alt: "Yosemite Valley with El Capitan on the left",
      caption: "Yosemite",
    },
    {
      src: "/interests/lunar-module.jpg",
      alt: "An Apollo lunar module on display in a museum",
      caption: "Lunar module, up close",
    },
  ],
};

const person = {
  "@type": "Person",
  name: "Jaired Jawed",
  url: "https://jairedjawed.com",
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "HashiCorp" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of California, Riverside" },
    { "@type": "CollegeOrUniversity", name: "Moreno Valley College" },
  ],
  knowsLanguage: ["English", "Spanish"],
  sameAs: ["https://github.com/jaireddjawed", "https://www.linkedin.com/in/jaired/"],
};

export const personJsonLd = { "@context": "https://schema.org", ...person };

export const tutoringJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One-on-One Coding Tutoring",
  serviceType: "Coding tutoring",
  url: "https://jairedjawed.com/tutoring",
  provider: person,
  offers: {
    "@type": "Offer",
    price: "65",
    priceCurrency: "USD",
    description: "One-hour, one-on-one tutoring session",
  },
};
