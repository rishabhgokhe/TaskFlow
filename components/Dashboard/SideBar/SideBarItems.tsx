import Link from "next/link";
import React from "react";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { SideBarDataType } from "@/types";
import { CirclePlus } from "lucide-react";
import { TagsAccordian } from "./TagsAccordian";

export const SideBarItems = ({
  SideBarList,
  listNames,
}: {
  SideBarList: SideBarDataType[];
  listNames: SideBarDataType[];
}) => {
  return (
    <>
      {/* list of inbox, today, scheduled, filter & label */}
      {SideBarList.map(({ name, icon }, id) => (
        <Link
          key={id}
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
        >
          {icon} {name}
          {name === "Today" || name === "Scheduled" ? (
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              10
            </Badge>
          ) : null}
        </Link>
      ))}
      <Separator />

      {/* List: Default Section */}
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary border my-2"
      >
        {listNames[0].icon} {listNames[0].name}
      </Link>

      <Separator />

      {/* Custom List Section */}
      <h2 className="px-2 pt-2 text-xl">Custom List</h2>
      {listNames
        .filter((_, id) => id !== 0)
        .map(({ name, icon }, id) => (
          <Link
            key={id}
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
          >
            {icon} {name}
            {name === "Today" || name === "Scheduled" ? (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                10
              </Badge>
            ) : null}
          </Link>
        ))}

      <Button className="mb-2 py-2" variant={"outline"}>
        Create Custom list <CirclePlus className="mx-2 w-5 h-5" />
      </Button>
      <Separator />

      {/* Tags Section */}
      <TagsAccordian />
    </>
  );
};
