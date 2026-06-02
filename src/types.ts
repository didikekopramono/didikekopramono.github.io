export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  category: 'system' | 'mobile' | 'licensing';
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  duration: string;
  projectTitle: string;
  projectSubtitle: string;
  description: string;
  yearRange: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "DIDIK EKO PRAMONO",
    roles: [
      "Document Engineer",
      "System Analyst",
      "IT Business Analyst"
    ],
    location: "Jakarta",
    email: "didikeko1997@gmail.com",
    phone: "+62-823-2413-1079",
    linkedin: "https://linkedin.com/in/didikpram",
    github: "https://github.com",
    summary: "Document Engineer or System Analyst with over 5 years of experience engineering high-availability. Expert in orchestrating complex ecosystems where intricate business logic meets technical precision. Proven track record in transforming ambiguous requirements into high-fidelity and deterministic technical documentation / blueprints."
  },
  skills: [
    {
      category: "Architecture & System Design",
      items: ["Microservices", "Event-Driven Architecture", "RESTful APIs", "System Orchestration", "BPMN 2.0"],
      icon: "Cpu"
    },
    {
      category: "Security & Identity",
      items: ["OAuth 2.0", "Multi-Factor Authentication (MFA)", "Identity Verification Frameworks"],
      icon: "ShieldAlert"
    },
    {
      category: "Infrastructure & Data",
      items: [
        "Kafka", "Redis", "MongoDB", "PostgreSQL",
        "API Gateway", "Docker", "Google Cloud", "AWS",
        "Windows Subsystem for Linux (WSL2/Ubuntu)"
      ],
      icon: "Database"
    },
    {
      category: "Documentation & Requirements",
      items: [
        "Technical Requirements Document (TRD)", "Functional Specifications (FSD)",
        "Use Case Modeling", "Diagram Modeling",
        "User Stories", "API Documentation (OpenAPI/Swagger)",
        "Notion & Confluence"
      ],
      icon: "FileCode"
    },
    {
      category: "Methodology",
      items: ["SDLC (Agile/Scrum & Waterfall)"],
      icon: "GitBranch"
    }
  ],
  experience: [
    {
      company: "Telkom Indonesia",
      location: "Jakarta, Indonesia",
      role: "Document Engineer or IT Business Analyst",
      duration: "September 2019 - Present",
      yearRange: "2019 – 2023",
      projectTitle: "Payment & Loyalty Ecosystem Orchestration",
      projectSubtitle: "MyPertamina",
      description: "Create technical integration document flows for MyPertamina ecosystem. Orchestrated complex transaction routing for multi-channel payments (e-Wallets, Credit/Debit cards) and synchronized loyalty/voucher engines across distributed systems processing millions of active users."
    },
    {
      company: "Telkom Indonesia",
      location: "Jakarta, Indonesia",
      role: "Document Engineer or IT Business Analyst",
      duration: "September 2019 - Present",
      yearRange: "2023 - 2023",
      projectTitle: "National Business licensing system integration",
      projectSubtitle: "Online Single Submission (OSS RBA)",
      description: "Conducted technical documentation aligned with national licensing regulations."
    },
    {
      company: "Telkom Indonesia",
      location: "Jakarta, Indonesia",
      role: "Document Engineer or IT Business Analyst",
      duration: "September 2019 - Present",
      yearRange: "2023 – 2026",
      projectTitle: "Registration, Quota System & Dashboard Console",
      projectSubtitle: "Subsidi Tepat LPG",
      description: "Conducted technical documentation for Core Map System."
    },
    {
      company: "Telkom Indonesia",
      location: "Jakarta, Indonesia",
      role: "Document Engineer or IT Business Analyst",
      duration: "September 2019 - Present",
      yearRange: "2025 – 2026",
      projectTitle: "Digital Identity & KYC (POC)",
      projectSubtitle: "Subsidi Tepat LPG",
      description: "Customer Identity Verification Proof of Concept (POC) for LPG Subsidy System. Developed a robust framework integrating Active Liveness and Face Recognition biometrics with the national registry (Dukcapil)."
    }
  ] as ExperienceItem[],
  featuredApps: [
    {
      id: "subsidi-tepat-lpg",
      title: "Subsidi Tepat LPG",
      subtitle: "Merchant App",
      description: "National LPG subsidy distribution platform for merchant management, quota tracking, and compliance monitoring.",
      tags: ["Merchant App", "Quota Tracking", "Compliance Monitoring", "Subsidy Management"],
      links: [
        { label: "Merchant Login", url: "https://subsiditepatlpg.mypertamina.id/merchant-login" }
      ],
      category: "system"
    },
    {
      id: "mypertamina-mobile",
      title: "MyPertamina",
      subtitle: "Mobile Application",
      description: "A digital financial services application that functions to make non-cash fuel payments at gas stations, fuel purchase, and access various services and customer loyalty programs.",
      tags: ["Mobile App", "Payment Integration", "Loyalty Programs", "Fuel Ordering"],
      links: [
        { label: "Google Play Store", url: "https://play.google.com/store/apps/details?id=com.dafturn.mypertamina&hl=id" },
        { label: "Apple App Store", url: "https://apps.apple.com/id/app/mypertamina/id1295039064" }
      ],
      category: "mobile"
    }
  ] as Project[],
  education: {
    institution: "UIN (State Islamic University) Sunan Kalijaga Yogyakarta",
    degree: "Bachelor of Computer Science in Informatic Engineering",
    gpa: "3.57 / 4.00",
    certLink: "#"
  },
  certifications: [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "March 2025",
      link: "https://www.coursera.org/account/accomplishments/specialization/EWHDSB65Q2D6"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "June 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/GJAPPF25C474"
    }
  ] as Certification[]
};
