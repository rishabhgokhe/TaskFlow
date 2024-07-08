import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";
import { Separator } from "../ui/separator";

import NotificationSnooze01Icon from "@/public/svg/icons/NotificationSnooze01Icon";

export default function NotificationButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="min-h-[40vh]">
          <h1>Notifications</h1>
          <Separator />
          <div className="flex items-center">
            <p className="text-muted-foreground text-sm p-1">
              No new notification
            </p>
            <NotificationSnooze01Icon />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
