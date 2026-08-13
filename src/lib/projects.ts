import {Project, tool, link} from "@/lib/types";

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

const reactrouter: tool = {
  name: "React Router",
  url: "https://reactrouter.com/",
  icon: "/icons/lucide.svg",
  hoverIcon: "/icons/lucide-hover.svg",
};

const javascript: tool = {
  name: "JavaScript",
  url: "https://en.wikipedia.org/wiki/JavaScript#:~:text=JavaScript%20(JS)%20is%20a%20programming,maintained%20by%20W3C%20and%20WHATWG.",
  icon: "/icons/java-script.svg",
  hoverIcon: "/icons/java-script-hover.svg",
};

function githubLink(url: string): link {
  return {
    name: "GitHub",
    url,
    icon: "/icons/github.svg",
    hoverIcon: "/icons/github-hover.svg",
  };
}

function websiteLink(url: string): link {
  return {
    name: "Visit Site",
    url,
    icon: "/icons/external.svg",
    hoverIcon: "/icons/external-hover.svg",
  };
}

export const projects: Project[] = [
  {
    name: "Phimetric Landing Page",
    timeFrame: "Nov 2025 · In Development",
    description:
      "The landing page for Phimetric, a project created with friends as a foundation for future products and projects.",
    images: ["https://i.imgur.com/AvJRzDb.png"],
    tools: [nextjs, react, typescript, tailwindcss],
    links: [websiteLink("https://phimetric.com/")],
  },
  {
    name: "Phi Entrance",
    timeFrame: "Nov 2025 · In Development",
    description:
      "The landing page for school access system developed under Phimetric for schools in Poland. It allows students over 18 to legally sign themselves out of school grounds, with their entry and exit tracked through a wall-mounted tablet and QR code system. The system is currently deployed across two technical schools.",
    images: ["https://i.imgur.com/Fb5pZFI.png", "https://i.imgur.com/KyVB9y9.png", "https://i.imgur.com/EGoa5B2.png", "https://i.imgur.com/BPb4HDs.png"],
    tools: [react, reactrouter, typescript, tailwindcss],
    links: [websiteLink("https://entrance.phimetric.com/")],
  },
  {
    name: "Oto Robotics Landing Page",
    timeFrame: "Jan 2025 · Jul 2026",
    description:
      "A landing page and visual identity developed for Oto Robotics, a robotics company. I worked on both the website and the company's logo throughout the development process.",
    images: ["https://i.imgur.com/H4UKP3B.png", "https://i.imgur.com/kBQesqa.png", "https://i.imgur.com/FiclLBP.png"],
    tools: [react, typescript, tailwindcss],
    links: [websiteLink("https://otorobotics.io/")],
  },
  {
    name: "ReadItForMe (RIFM)",
    timeFrame: "May 2026 · Completed",
    description:
      "A simple JavaScript plugin that reads text aloud, built as a lightweight tool for making written content accessible through speech.",
    images: ["https://i.imgur.com/5WOiLbL.png"],
    tools: [javascript],
    links: [githubLink("https://github.com/a-szlapa/ReadItForMe-RIFM")],
  },
  {
    name: "Backend Studio",
    timeFrame: "Apr 2026 · May 2026",
    description:
      "An open-source developer tool combining the capabilities of API clients such as Postman and Bruno, Docker log viewers, and database query tools. I worked on the frontend and user interface.",
    images: ["https://i.imgur.com/8KAQIMK.png", "https://i.imgur.com/l82HjFG.png", "https://i.imgur.com/U1uTMdN.png"],
    tools: [react, typescript, tailwindcss],
    links: [
      githubLink(
        "https://github.com/local-development-tools/backend-studio"
      ),
    ],
  },
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