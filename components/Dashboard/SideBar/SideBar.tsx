import { Flower } from "lucide-react";
import Link from "next/link";
import React from "react";

import { SideBarList, listNames } from "@/lib/Data";
import ImportantLinks from "./ImportantLinks";
import { SideBarItems } from "./SideBarItems";
import ThemeToggle from "@/components/elements/themeToggle";
import NotificationButton from "@/components/elements/NotificationButton";

export default function SideBar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Flower className="h-6 w-6" />
            TaskFlow
          </Link>

          <NotificationButton />
          <ThemeToggle />
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* // all sidebar items */}
            <SideBarItems SideBarList={SideBarList} listNames={listNames} />
          </nav>
        </div>

        {/* // Important Links card section */}
        <ImportantLinks />
      </div>
    </div>
  );
}
