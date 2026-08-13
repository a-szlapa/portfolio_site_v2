import Link from "next/link";
import IconSwap from "@/components/custom/IconSwap";
import { link } from "@/lib/types";

const githubProfile: link = {
  name: "a-szlapa",
  url: "https://github.com/a-szlapa",
  icon: "/icons/github.svg",
  hoverIcon: "/icons/github-hover.svg",
};

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-2/8 border-r-2 border-sidebar-border justify-between p-15">
      <div>
        <h1 className="text-6xl font-semibold my-2">Aleksy Szłapa</h1>
        <h2 className="text-3xl font-semibold text-primary">Web Developer | Graphic Designer</h2>
        <h2 className="text-3xl font-semibold text-card">Poland, Lublin</h2>
      </div>

      <div className="space-y-4 flex flex-col text-3xl">
        <a
          href="#projects"
          className="hover:text-primary text-card font-semibold transition-colors duration-100 w-fit"
        >
          * Projects <br />
          <div className="w-[1ch] h-px inline-block"></div>& Experience
        </a>

        <a
          href="#contact"
          className="hover:text-primary text-card font-semibold transition-colors duration-100 w-fit"
        >
          * Contact
        </a>
      </div>

      <div className="flex">
        <Link
          href={githubProfile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row items-end gap-4 hover:text-primary text-card transition-colors duration-100 text-3xl font-semibold"
        >
          <IconSwap
            icon={githubProfile.icon}
            hoverIcon={githubProfile.hoverIcon}
            alt="GitHub"
            size={32}
          />
          <span>{githubProfile.name}</span>
        </Link>
      </div>
    </div>
  );
}
