import React from "react";
import Link from "next/link";
import IconSwap from "./IconSwap";
import { tool, link as LinkData } from "@/lib/types";

interface LinkItemProps {
  item: tool | LinkData;
}

const LinkItem: React.FC<LinkItemProps> = ({ item }) => {
  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row items-center gap-4 border-2 rounded-2xl border-border hover:border-accent px-4 py-2 w-fit h-fit text-lg text-primary hover:text-foreground"
    >
      <IconSwap icon={item.icon} hoverIcon={item.hoverIcon} alt={item.name} />
      <span>{item.name}</span>
    </Link>
  );
};

export default LinkItem;
