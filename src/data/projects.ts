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
}

export const projects: Project[] = [
  {
    id: "meridian-rebrand",
    title: "Meridian Rebrand",
    category: "Brand Identity",
    summary: "A complete visual identity overhaul for a luxury hospitality group, redefining their presence across digital and physical touchpoints.",
    cover: project1,
    year: "2025",
    overview: "Meridian Hotels needed a rebrand that reflected their evolution from a regional chain to an internationally recognized luxury brand. The challenge was to honor heritage while signaling a bold new chapter.",
    problem: "The existing brand felt dated and inconsistent across properties. There was no unified design language, and the digital experience lagged behind competitors.",
    process: "We began with extensive stakeholder interviews and competitive analysis. From there, we developed a new visual system rooted in architectural geometry and natural textures — a nod to the environments each property inhabits.",
    outcome: "The rebrand launched across 12 properties simultaneously. Within six months, brand recognition increased 40% and direct bookings rose 28%.",
    tools: ["Figma", "After Effects", "Blender", "Webflow"],
    galleryImages: [project1, project2, project3],
  },
  {
    id: "noir-beauty",
    title: "Noir Beauty",
    category: "Product Design",
    summary: "Designing a premium skincare e-commerce experience that feels as refined as the product itself.",
    cover: project2,
    year: "2024",
    overview: "Noir Beauty is a direct-to-consumer skincare brand targeting a discerning audience. They needed an e-commerce platform that matched the tactile luxury of their packaging.",
    problem: "Their existing Shopify store felt generic and failed to communicate the brand's premium positioning. Conversion rates were below industry average.",
    process: "We designed a bespoke shopping experience with immersive product storytelling, cinematic imagery, and a streamlined checkout. Every interaction was crafted to feel intentional.",
    outcome: "Post-launch conversion rate improved by 65%. Average session duration increased by 3 minutes. The site was featured on Awwwards.",
    tools: ["Figma", "React", "Three.js", "Shopify Plus"],
    galleryImages: [project2, project4, project5],
  },
  {
    id: "atlas-wayfinding",
    title: "Atlas Wayfinding",
    category: "UX / Spatial Design",
    summary: "A digital wayfinding system for a contemporary art museum, bridging physical space and digital interface.",
    cover: project3,
    year: "2024",
    overview: "The Atlas Museum of Contemporary Art commissioned a wayfinding system that would work seamlessly across mobile devices and physical installations within the space.",
    problem: "Visitors frequently got lost in the non-linear gallery layout. The existing signage system was minimal to the point of being unhelpful, and there was no digital solution.",
    process: "We mapped the entire space in 3D and developed an AR-assisted wayfinding app alongside redesigned physical signage. The design language drew from the museum's own curatorial aesthetic.",
    outcome: "Visitor satisfaction scores increased by 35%. The system was adopted as a case study by two design publications.",
    tools: ["Unity", "ARKit", "Figma", "Swift"],
    galleryImages: [project3, project1, project4],
  },
  {
    id: "terra-editorial",
    title: "Terra Editorial",
    category: "Editorial Design",
    summary: "Art direction and design for an independent publication exploring architecture and the natural world.",
    cover: project4,
    year: "2023",
    overview: "Terra is a biannual publication that sits at the intersection of architecture, ecology, and philosophy. We were brought on to define the visual identity and design the first three issues.",
    problem: "The founders had rich content but no visual framework. They wanted something that felt simultaneously academic and accessible, printed and digital-native.",
    process: "We developed a typographic system using Cormorant Garamond and a monospace companion, with a grid flexible enough for long-form essays and full-bleed photography.",
    outcome: "The first issue sold out within two weeks. Terra was nominated for a Lead Award in Editorial Design.",
    tools: ["InDesign", "Lightroom", "Figma", "Risograph"],
    galleryImages: [project4, project5, project2],
  },
  {
    id: "silent-studio",
    title: "Silent Studio",
    category: "Web Design",
    summary: "A portfolio and booking platform for a high-end recording studio, designed for discretion and atmosphere.",
    cover: project5,
    year: "2023",
    overview: "Silent Studio is a by-appointment recording space used by established musicians. They needed a web presence that communicated exclusivity without pretension.",
    problem: "They had no website — all bookings were word-of-mouth. As demand grew, they needed a digital presence that maintained their intimate, curated feel.",
    process: "We designed a dark, atmospheric site with ambient audio integration, minimal copy, and a private booking flow. The design evokes the feeling of stepping into the studio itself.",
    outcome: "Booking requests increased 200% in the first quarter. The site won a CSS Design Award for Best UI.",
    tools: ["Next.js", "GSAP", "Figma", "Sanity CMS"],
    galleryImages: [project5, project1, project3],
  },
];
