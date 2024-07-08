import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { iconLinkData } from "@/lib/Data";
import { Separator } from "../ui/separator";

import CircleArrowUpRightIcon from "@/public/svg/icons/CircleArrowUpRightIcon";
import { ToolTipIcon } from "../elements/TootTipIcon";

export default function Footer() {
  return (
    <div className="mt-5 shadow-md space-y-1 border rounded-lg w-full flex flex-col-reverse sm:flex-row justify-between items-center p-2 bg-[rgb(249,250,251)] border-[#C8C8C8]">
      <p className="text-xl sm:text-2xl font-bold playwrite text-center sm:text-left">
        Developed by Rishabh Gokhe
      </p>

      <div className="flex flex-col-reverse sm:flex-row sm:space-x-4 items-center w-full sm:w-auto">
        <ul className="flex gap-4">
          {iconLinkData.map((item, id) => (
            <ToolTipIcon
              key={id}
              name={item.name}
              triggerJsxElement={
                <li>
                  <a
                    href={item.link}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {item.icon}
                  </a>
                </li>
              }
            />
          ))}
        </ul>

        <Separator className="sm:hidden my-1 bg-[#C8C8C8]" />
        <ToolTipIcon
          name="Visit My Portfolio"
          triggerJsxElement={
            <Link href={"https://portfolio-rishabhgokhe.vercel.app/"}>
              <Button
                size={"sm"}
                className="portfolio-button gap-1 shadow-lg"
                variant={"outline"}
              >
                <CircleArrowUpRightIcon />
                Portfolio
              </Button>
            </Link>
          }
        />
      </div>
    </div>
  );
}
