import { Project, tool, link } from "@/lib/types";

// Reusable tool entries (tech stack badges) so icon paths are only defined once.
const nextjs: tool = {
  name: "Next.js",
  url: "https://nextjs.org/",
  icon: "/icons/nextjs.svg",
  hoverIcon: "/icons/nextjs-hover.svg",
};

const react: tool = {
  name: "React",
  url: "https://react.dev/",
  icon: "/icons/react.svg",
  hoverIcon: "/icons/react-hover.svg",
};

const vitejs: tool = {
  name: "Vite.js",
  url: "https://vite.dev/",
  icon: "/icons/vitejs.svg",
  hoverIcon: "/icons/vitejs-hover.svg",
};

const tailwindcss: tool = {
  name: "TailwindCSS",
  url: "https://tailwindcss.com/",
  icon: "/icons/tailwindcss.svg",
  hoverIcon: "/icons/tailwindcss-hover.svg",
};

const typescript: tool = {
  name: "TypeScript",
  url: "https://www.typescriptlang.org/",
  icon: "/icons/typescript.svg",
  hoverIcon: "/icons/typescript-hover.svg",
};

const shadcn: tool = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com/",
  icon: "/icons/shadcn.svg",
  hoverIcon: "/icons/shadcn-hover.svg",
};

const lucide: tool = {
  name: "Lucide",
  url: "https://lucide.dev/",
  icon: "/icons/lucide.svg",
  hoverIcon: "/icons/lucide-hover.svg",
};

function githubLink(url: string): link {
  return {
    name: "GitHub",
    url,
    icon: "/icons/github.svg",
    hoverIcon: "/icons/github-hover.svg",
  };
}

export const projects: Project[] = [
  {
    name: "Current Portfolio (V2)",
    timeFrame: "Oct 2025 · Completed",
    description: "You're looking at it!",
    images: [],
    tools: [nextjs, react, tailwindcss, typescript, shadcn],
    links: [githubLink("https://github.com/a-szlapa/portfolio_site_v2")],
  },
  {
    name: "Old Portfolio Website",
    timeFrame: "Aug 2025 · Completed",
    description:
      "An earlier version of my portfolio. Couldn't be updated due to framework changes, but it served as the foundation for V2.",
    images: [
      "https://i.imgur.com/a6FFhcp.png",
      "https://i.imgur.com/DdzESu0.png",
      "https://i.imgur.com/ACFaXwi.png",
    ],
    tools: [react, vitejs, tailwindcss, typescript, shadcn, lucide],
    links: [githubLink("https://github.com/a-szlapa/portfolio_site")],
  },
];
