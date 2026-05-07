import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface LinkTypes {
  domain: string;
  name: string;
  icon: string;       // path to the default SVG
  hoverIcon: string;  // path to the hover SVG
}

interface LinkItemProps {
  link: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const known_link_layouts: LinkTypes[] = [
    {
      domain: "github.com",
      name: "GitHub",
      icon: "/icons/github.svg",
      hoverIcon: "/icons/github-hover.svg",
    },
    {
      domain: "react.dev",
      name: "React",
      icon: "/icons/react.svg",
      hoverIcon: "/icons/react-hover.svg",
    },
    {
      domain: "nextjs.org",
      name: "Next.js",
      icon: "/icons/nextjs.svg",
      hoverIcon: "/icons/nextjs-hover.svg",
    },
    {
      domain: "vite.dev",
      name: "Vite.js",
      icon: "/icons/vitejs.svg",
      hoverIcon: "/icons/vitejs-hover.svg",
    },
    {
      domain: "tailwindcss.com",
      name: "TailwindCSS",
      icon: "/icons/tailwindcss.svg",
      hoverIcon: "/icons/tailwindcss-hover.svg",
    },
    {
      domain: "typescriptlang.org",
      name: "TypeScript",
      icon: "/icons/typescript.svg",
      hoverIcon: "/icons/typescript-hover.svg",
    },
    {
      domain: "shadcn.com",
      name: "Shadcn",
      icon: "/icons/shadcn.svg",
      hoverIcon: "/icons/shadcn-hover.svg",
    },
    {
      domain: "lucide.dev/",
      name: "Lucide",
      icon: "/icons/lucide.svg",
      hoverIcon: "/icons/lucide-hover.svg",
    },
  ];

  const item =
    known_link_layouts.find((l) => link.includes(l.domain)) ??
    ({
      domain: "",
      name: "Visit Website",
      icon: "/icons/external.svg",
      hoverIcon: "/icons/external-hover.svg",
    } as LinkTypes);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row items-center gap-4 border-2 rounded-2xl border-border hover:border-accent px-4 py-2 w-fit h-fit text-lg text-primary hover:text-foreground"
    >
      {/* Show one image by default, swap on hover */}
      <span className="relative w-7 h-7 flex items-center justify-center">
        <Image
          src={item.icon}
          alt={`${item.name} icon`}
          width={28}
          height={28}
          className="absolute opacity-100 group-hover:opacity-0"
        />
        <Image
          src={item.hoverIcon}
          alt={`${item.name} hover icon`}
          width={28}
          height={28}
          className="absolute opacity-0 group-hover:opacity-100"
        />
      </span>
      <span className="capitalize">{item.name}</span>
    </Link>
  );
};

export default LinkItem;
