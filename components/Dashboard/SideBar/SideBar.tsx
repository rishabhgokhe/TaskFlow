import { Bell, CirclePlus, Flower } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import ThemeToggle from "../../ui/themeToggle";
import { SideBarList, customListItems } from "@/lib/Data";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import ImportantLinks from "./ImportantLinks";
import { SideBarItems } from "./SideBarItems";

export default function SideBar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Flower className="h-6 w-6" />
            <span className="">TaskFlow</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <ThemeToggle />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* // all sidebar items */}
            <SideBarItems
              SideBarList={SideBarList}
              CustomListItems={customListItems}
            />
          </nav>
        </div>

        {/* // Important Links card section */}
        <ImportantLinks />
      </div>
    </div>
  );
}
