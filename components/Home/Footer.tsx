import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { iconLinkData } from "@/lib/Data";

export default function Footer() {
  return (
    <div className="mt-5 border rounded-lg w-full flex flex-col-reverse sm:flex-row justify-between items-center p-2">
      <p className="text-2xl font-bold">Developed by Rishabh</p>

      <ul className="flex gap-4">
        {iconLinkData.map((item, id) => (
          <IconLink key={id} name={item.name} link={item.link} icon={item.icon} />
        ))}
      </ul>

      <Link href={"https://portfolio-rishabhgokhe.vercel.app/"}>
        <Button
          size={"sm"}
          className="top-4 right-3 portfolio-button"
          variant={"outline"}
        >
          My Portfolio
        </Button>
      </Link>
    </div>
  );
}

interface IconLinkProps {
  name: string;
  link: string;
  icon: JSX.Element;
}

export function IconLink({ name, link, icon }: IconLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <li>
            <a
              href={link}
              className="text-gray-700 hover:text-gray-900"
            >
              {icon}
            </a>
          </li>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
