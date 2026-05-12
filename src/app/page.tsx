"use client";
import Sidebar from "@/components/layout/Sidebar";
import ProjectItem from "@/components/custom/ProjectItem";
import Image from "next/image";
import {useRef} from "react";
type LinkType =
  | string
  | {
      url: string;
      display_name: string;
    };
export interface Project {
  timeFrame: string;
  name: string;
  images: string[];
  description: string;
  links: LinkType[];
  tags: string[];
}

export default function Home() {
  const projects: Project[] = [
    {
      timeFrame: "Apr 2026 · In Progress",
      name: "GW color picker",
      images: [
        "https://i.imgur.com/mAJU9Em.png",
        "https://i.imgur.com/X2hwhL9.png",
      ],
      description:
        'A small web tool for maching hex colors to material colors in a roblox game called"Gear Works"',
      links: ["https://gearworks-color-picker.vercel.app/"],
      tags: [
        "https://nextjs.org/",
        "https://react.dev/",
        "https://tailwindcss.com/",
        "https://www.typescriptlang.org/",
        "https://ui.shadcn.com/",
      ],
    },
    {
      timeFrame: "Apr 2026 · In Progress",
      name: "Regium",
      images: [],
      description:
        "A web platform where users can browse psychologists, view their professions, diplomas, clinic locations, and available appointment hours.",
      links: [],
      tags: [
        "https://nextjs.org/",
        "https://react.dev/",
        "https://tailwindcss.com/",
        "https://www.typescriptlang.org/",
        "https://ui.shadcn.com/",
      ],
    },
    {
      timeFrame: "Jan 2026 · Completed",
      name: "Phimetric and PhiEntrance landing pages",
      images: [
        "https://i.imgur.com/AvJRzDb.png",
        "https://i.imgur.com/Fb5pZFI.png",
        "https://i.imgur.com/KyVB9y9.png",
        "https://i.imgur.com/EGoa5B2.png",
        "https://i.imgur.com/BPb4HDs.png",
      ],
      description:
        "Landing pages for Phimetric and PhiEntrance - an entrance management system for schools with adult students. The tool allows students to quickly and securely log when they leave the school premises for breaks or other temporary exits.",
      links: [
        {
          url: "https://phimetric.com/",
          display_name: "Visit Phimetric",
        },
        {
          url: "https://entrance.phimetric.com/",
          display_name: "Visit PhiEntrance",
        },
      ],
      tags: [
        "https://nextjs.org/",
        "https://react.dev/",
        "https://tailwindcss.com/",
        "https://www.typescriptlang.org/",
        "https://ui.shadcn.com/",
        "https://vite.dev/",
      ],
    },
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
        <div className="max-w-4xl p-8" id="projects" ref={projectsRef}>
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
        <div className="max-w-4xl p-8" id="contact" ref={contactRef}>
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
