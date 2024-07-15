import React, { useState } from "react";
import { SelectSingleEventHandler } from "react-day-picker";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { listNames } from "@/lib/Data";
import { Task } from "@/types";
import { cn } from "@/lib/cn";
import { format } from "date-fns";

import SearchList02Icon from "@/public/svg/icons/SearchList02Icon";
import Calendar02Icon from "@/public/svg/icons/Calendar02Icon";
import CalendarUpload01Icon from "@/public/svg/icons/CalendarUpload01Icon";

export function EditTaskDialogContent({ task }: { task: Task }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(task.date)
  );

  const handleDateSelected: SelectSingleEventHandler = (date) => {
    if (date instanceof Date && !isNaN(date.getTime())) {
      setSelectedDate(date);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit task</DialogTitle>
        <DialogDescription>Make changes to your tasks here.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Edit Title */}
        <div className="items-center gap-4">
          <Label htmlFor="title" className="pl-1 text-right">
            Title
          </Label>
          <Input id="title" defaultValue={task.title} className="ring-inset" />
        </div>

        {/* Edit Description */}
        <div className="items-center gap-4">
          <Label htmlFor="description" className="pl-1 text-right">
            Description
          </Label>
          <Input
            id="description"
            defaultValue={task.description}
            className="line-clamp-3 ring-inset"
          />
        </div>

        {/* List Changer */}
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center gap-1">
            <SearchList02Icon />
            <Label htmlFor="list" className="text-right">
              List
            </Label>
          </div>
          <Select>
            <SelectTrigger className="ring-inset min-w-[150px]">
              <SelectValue placeholder={task.list} />
            </SelectTrigger>
            <SelectContent>
              {listNames.map((item, id) => (
                <SelectItem key={id} value={item.name}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Changer */}
        <div className="flex items-center gap-4">
          <div className="flex justify-center items-center gap-1">
            <Calendar02Icon />
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "min-w-[150px] pl-3 text-left font-normal text-muted-foreground"
                )}
              >
                {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                <CalendarUpload01Icon className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelected}
                disabled={(date) =>
                  date < new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}
