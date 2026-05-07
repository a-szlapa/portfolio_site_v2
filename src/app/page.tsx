import Sidebar from "@/components/layout/Sidebar";
import ProjectItem from "@/components/custom/ProjectItem";
import Image from "next/image";

interface Project {
  timeFrame: string;
  name: string;
  images: string[];
  description: string;
  links: string[];
  tags: string[];
}

export default function Home() {
  const projects: Project[] = [
    {
      timeFrame: "Oct 2025 · Completed",
      name: "Current Portfolio (V2)",
      images: [],
      description: "You're looking at it!",
      links: ["https://github.com/a-szlapa/portfolio_site_v2"],
      tags: [
        "https://nextjs.org/",
        "https://react.dev/",
        "https://tailwindcss.com/",
        "https://www.typescriptlang.org/",
        "https://ui.shadcn.com/",
      ],
    },
    {
      timeFrame: "Aug 2025 · Completed",
      name: "Old Portfolio Website",
      images: [
        "https://i.imgur.com/a6FFhcp.png",
        "https://i.imgur.com/DdzESu0.png",
        "https://i.imgur.com/ACFaXwi.png",
      ],
      description:
        "An earlier version of my portfolio. Couldn't be updated due to framework changes, but it served as the foundation for V2.",
      links: ["https://github.com/a-szlapa/portfolio_site"],
      tags: [
        "https://react.dev/",
        "https://vite.dev/",
        "https://tailwindcss.com/",
        "https://www.typescriptlang.org/",
        "https://ui.shadcn.com/",
        "https://lucide.dev/",
      ],
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl p-8">
          <div>
            <div className="mb-8 ml-10">
              <p className="text-primary text-3xl font-semibold mb-5">
                Projects & Experience
              </p>
            </div>
          </div>

          <div className="">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
        <div className="max-w-4xl p-8">
          <div>
            <div className="mb-8 ml-10">
              <p className="text-primary text-3xl font-semibold mb-5">
                Contact
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
                {/* {line} */}
              <div className="relative border-border border-1 w-0 h-fill flex items-center mx-10 ml-10">
                <div className="absolute -translate-x-1/2 border-border border-3 rounded-full w-4 h-4 bg-background" />
              </div>
              <div className="my-10 w-full h-full">
                
                <span className="font-semibold text-2xl text-secondary">
                  e-mail
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
