export const projects = [
  {
    slug: "sprouthub",
    title: "sprouthub",
    hero: "/assets/projects/SproutHub.png",
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Supabase",
      "Tailwind CSS",
      "Playwright",
    ],
    overview:
      "sprouthub is a full-stack plant care application built with Vite, React, and TypeScript. The frontend delivers a responsive, mobile-first experience using Tailwind CSS and shadcn-ui components. Supabase provides robust authentication and real-time database services, ensuring secure user accounts and instant data synchronization.",
    details:
      "Users can create multiple betting notebooks to organize different strategies or sports, track individual wagers with custom fields, and analyze performance through detailed analytics and calendar views. The platform features advanced betting calculators for arbitrage opportunities, parlay calculations, and unit-based betting strategies. Interactive charts and profit/loss visualizations help users identify trends and optimize their betting approach.",
    links: { live: "https://sprout-hub.com/", repo: "https://github.com/nicogarbaccio/sprout-hub" },
  },
  {
    slug: "paperedge",
    title: "PaperEdge",
    hero: "/assets/projects/PaperEdge.png",
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Supabase",
      "MongoDB",
      "TailwindCSS",
      "Playwright",
    ],
    overview:
      "PaperEdge is a full-stack betting management application built with Vite, React, and TypeScript. The frontend delivers a responsive, mobile-first experience using Tailwind CSS and Radix UI components. Supabase provides robust authentication and real-time database services, ensuring secure user accounts and instant data synchronization.",
    details:
      "Users can create multiple betting notebooks to organize different strategies or sports, track individual wagers with custom fields, and analyze performance through detailed analytics and calendar views. The platform features advanced betting calculators for arbitrage opportunities, parlay calculations, and unit-based betting strategies. Interactive charts and profit/loss visualizations help users identify trends and optimize their betting approach.",
    links: { live: "https://paperedge.bet", repo: "https://github.com/nicogarbaccio/paperedge" },
  },
  {
    slug: "thinx",
    title: "Thinx",
    hero: "/assets/projects/Thinx.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Playwright",
      "Cypress",
      "BrowserStack",
      "Figma",
      "Shopify",
      "Contentful",
      "Jira",
      "Github Actions",
    ],
    overview:
      "Thinx manufactures feminine hygiene products, and envisions a healthier world through sustainable solutions to menstruation and incontinence. I joined Thinx in May 2023, as the company’s first QA engineer. I expanded the QA process by integrating automated testing into the CI/CD pipeline and led the development and implementation of a comprehensive end-to-end test suite.",
    details:
      "The site was built on Next.js and was written in JavaScript, though throughout my time at the company we gradually converted the site to TypeScript. In addition to test automation, I consistently conducted manual testing, creating and refining test plans in Jira and Zephyr Scale.",
  },
  {
    slug: "codenation",
    title: "Code Nation",
    hero: "/assets/projects/CodeNation.jpg",
    tech: [
      "Next.js",
      "TypeScript",
      "Playwright",
      "Cypress",
      "BrowserStack",
      "Figma",
      "Shopify",
      "Contentful",
      "Jira",
      "Github Actions",
    ],
    overview:
      "Code Nation is a non-profit that equips students in under-resourced high schools with the skills and experiences to access careers in technology. I joined in May 2021 as a Program Manager specializing in community engagement and curriculum development.",
    details:
      "After graduating from Flatiron School's full stack program, I rejoined Code Nation on a contract basis as the Senior Curriculum & Instruction Manager, refining curriculum and leading development of the advanced track.",
    links: { repo: "https://github.com/itscodenation" },
  },
  {
    slug: "funnelleasing",
    title: "Funnel Leasing",
    hero: "/assets/projects/FunnelLeasing.png",
    tech: [
      "Python",
      "Django",
      "OpenAI",
      "LangSmith",
      "LangChain",
      "Jira",
      "TestRail",
      "Figma",
      "BrowserStack",
    ],
    overview:
      "Funnel Leasing is a CRM, AI, and automation platform for renter interactions. As an Associate QA Engineer, I focus on automation across self-service tools and the AI leasing chatbot.",
    details:
      "Responsibilities include developing and executing test plans, testing APIs, documenting automation processes, collaborating with dev teams to resolve bugs, and evaluating chatbot performance with LangSmith.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}


