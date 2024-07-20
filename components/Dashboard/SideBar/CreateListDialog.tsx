"use client";
import CustomButton from "@/components/elements/CustomButton";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { listNames } from "@/lib/Data";
import React, { useState } from "react";

export default function CreateListDialog() {
  const [list, setList] = useState("");

  function handleClick() {
      listNames.push({ name: list, link: `/${list}`, icon: <div>hii</div> });
      setList("");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setList(event.target.value);
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create List</DialogTitle>
        <DialogDescription>
          Create your own custom list for organizing tasks
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Edit Name */}
        <div className="items-center gap-4">
          <Label htmlFor="title" className="pl-1 text-right">
            Name
          </Label>
          <Input
            id="title"
            className="ring-inset"
            value={list}
            onChange={handleChange}
          />
        </div>

        {/* Edit Icon */}
        <div className="items-center gap-4">
          <Label htmlFor="description" className="pl-1 text-right">
            Icon
          </Label>
          <Input id="description" className="line-clamp-3 ring-inset" />
        </div>
      </div>
      <DialogFooter>
        <CustomButton type="button" className="w-full" onClick={handleClick}>
          Create Now
        </CustomButton>
      </DialogFooter>
    </DialogContent>
  );
}
