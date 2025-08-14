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
  
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}


