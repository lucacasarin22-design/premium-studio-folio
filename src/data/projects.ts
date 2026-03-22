import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  cover: string;
  year: string;
  overview: string;
  problem: string;
  process: string;
  outcome: string;
  tools: string[];
  galleryImages: string[];
  fullNarrative?: string;
  pdfUrl?: string;
  slidesUrl?: string;
  externalProjectUrl?: string;
}

export const projects: Project[] = [
  {
    id: "celya-platform",
    title: "CELYA platform",
    year: "2025",
    category: "Digital Transformation",
    summary: "Digital Transformation – Digital Business Strategy & Business Models",
    overview:
      "CELYA is a digital platform concept designed to bring transparency, regulation and trust to the medicinal mushrooms market.",
    problem:
      "The medicinal mushrooms market is rapidly expanding but remains fragmented, poorly regulated and difficult for consumers to understand.",
    process:
      "The project focused on designing a multi-sided platform capable of connecting users, trusted brands and scientific validation.",
    outcome:
      "The resulting concept defines a scalable digital platform combining marketplace logic, personalized wellness recommendations and verified scientific evidence.",
    tools: [
      "Platform Strategy",
      "Business Models",
      "Growth Strategy",
      "Digital Transformation",
    ],
    cover: project1,
    galleryImages: [project1, project2],
    fullNarrative: `
CELYA is a digital platform designed to make the medicinal mushrooms market more transparent, regulated and understandable.

The project started from the observation that demand for personalized wellness solutions is rising, while trust and scientific validation remain fragmented.

From a strategic perspective, the core challenge was to define a platform model able to create value for both users and ecosystem stakeholders.

The proposed solution integrates platform logic, data-driven personalization and trust-building mechanisms through scientific evidence and curated user experience.
    `,
    pdfUrl: "/projects/celya.pdf",
  },
  {
    id: "lifesum-sustainabowl",
    title: "Lifesum – SustainaBowl",
    year: "2025",
    category: "Service Innovation Sprint",
    summary:
      "Team-based sprint reimagining Lifesum’s healthy eating service through user insights, problem reframing, rapid prototyping, and experimentation, resulting in a community-driven service concept.",
    overview:
      "A rapid team-based innovation sprint focused on rethinking healthy eating as a more collaborative and engaging service experience.",
    problem:
      "The challenge was to move beyond individual food tracking and explore how shared habits, motivation, and behavioral triggers could improve user engagement.",
    process:
      "The project combined user insights, problem reframing, ideation, rapid prototyping, and experimentation to shape a more community-driven product direction.",
    outcome:
      "The final concept, SustainaBowl, reimagined Lifesum as a service that supports healthier eating through social interaction, accountability, and shared progress.",
    tools: ["User Insights", "Problem Reframing", "Rapid Prototyping", "Experimentation"],
    cover: project2,
    galleryImages: [project2, project3],
    pdfUrl: "/projects/lifesum-sustainabowl.pdf",
  },
  {
    id: "subito-dpm",
    title: "Subito.it - Digital Product Management",
    year: "2025",
    category: "Digital Product Management",
    summary:
      "Strategic product roadmap for Italy's leading re-commerce platform. Defined North Star Metric (Logged-in DAU), prioritised features using RICE framework, and designed AI-powered tools including a negotiation copilot and listing optimizer.",
    overview:
      "A product strategy project built around growth, engagement and prioritization for one of Italy’s leading digital marketplaces.",
    problem:
      "The challenge was to define a coherent roadmap linking user value, business goals and feature prioritization in a mature platform context.",
    process:
      "The project defined a North Star Metric, applied RICE prioritization, and explored AI-enabled product features to improve user efficiency and marketplace quality.",
    outcome:
      "The resulting roadmap combined strategic prioritization with concrete product opportunities such as an AI negotiation copilot and listing optimizer.",
    tools: ["HEART framework", "North Star Metric", "RICE", "AI Copilot"],
    cover: project3,
    galleryImages: [project3, project1],
    pdfUrl: "/projects/subito-dpm.pdf",
  },
  {
    id: "concherts",
    title: "concHERts",
    year: "2025",
    category: "Service Design",
    summary:
      "concHERts is a mobile platform designed to help young women experience concerts and festivals with greater safety and confidence.",
    overview:
      "A service design and UX project addressing a clear need for safer, more confident concert and festival experiences for young women.",
    problem:
      "Field interviews highlighted that for female concert-goers, safety is not an optional feature but a prerequisite for fully enjoying the event experience.",
    process:
      "The project followed the full UX design process, from user research and journey mapping to information architecture and Figma prototyping.",
    outcome:
      "The final solution combined verified identity access, event-based group coordination, real-time safety actions, and an interactive venue map into a community-driven service spanning the full concert journey.",
    tools: ["User Research", "Journey Mapping", "Information Architecture", "Figma Prototyping"],
    cover: project4,
    galleryImages: [project4, project5],
    pdfUrl: "/projects/concherts.pdf",
  },
  {
    id: "polibridge",
    title: "Bridge - Shaping Purposeful Futures Hackathon",
    year: "2025",
    category: "Hackathon / Platform Concept",
    summary:
      "PoliBridge is a platform concept developed during a one-day hackathon at Polimi GSOM, designed as a digital and AI-powered solution for collaborative learning and societal impact.",
    overview:
      "A one-day hackathon project focused on collaborative learning, AI matching, and societal impact in Milan’s fragmented university ecosystem.",
    problem:
      "Despite over 200,000 students across 9 universities in Milan, there is no shared infrastructure to connect students across institutional boundaries for project collaboration.",
    process:
      "The concept was built around cross-institutional matching, AI-powered team assembly, structured mentorship, faculty credit integration, and real-world project sourcing.",
    outcome:
      "PoliBridge proposed a shared platform where students can form interdisciplinary teams, complete projects, and generate verifiable portfolio entries and skill badges with GSOM as trust anchor.",
    tools: ["Platform Design", "AI Matching", "Collaborative Learning", "Societal Impact"],
    cover: project5,
    galleryImages: [project5, project2],
    pdfUrl: "/projects/polibridge.pdf",
  },
  {
    id: "fratelli-green",
    title: "Fratelli Green - Green Jobs Startup Project",
    year: "2023",
    category: "Startup Project",
    summary:
      "Co-founded an early-stage startup developing an educational product for children focused on environmental awareness.",
    overview:
      "An entrepreneurial project centered on sustainability education for children through story-based products.",
    problem:
      "The challenge was to turn an educational sustainability idea into a viable product and business concept with clear market positioning and financial structure.",
    process:
      "The work included business planning, product and marketing contribution, go-to-market thinking, financial structuring, budgeting, and coordination with sales and operations.",
    outcome:
      "The project won 1st prize at the Lombardy regional competition and received the Creativity Award by Disney Italy at the national Biz Factory competition.",
    tools: ["Business Planning", "Go-to-Market", "Budgeting", "Product Strategy"],
    cover: project2,
    galleryImages: [project2, project4],
    pdfUrl: "/projects/fratelli-green.pdf",
  },
];
