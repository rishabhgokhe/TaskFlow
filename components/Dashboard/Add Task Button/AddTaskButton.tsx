"use client";
import React, { useState } from "react";
import NoteAddIcon from "@/public/svg/icons/NoteAddIcon";
import { Button } from "../../ui/button";
import { AddTaskInlineModal } from "./AddTaskInlineModal";

export function AddTaskButton() {
  const [showTaskButton, setShowTaskButton] = useState(false);

  return showTaskButton ? (
    <AddTaskInlineModal handleCloseModal={() => setShowTaskButton(false)} />
  ) : (
    <AddTaskButtonComponent onClickHandler={() => setShowTaskButton(true)} />
  );
}

// --------------------------------------------------------------------------------------

type AddTaskButtonComponentProps = {
  onClickHandler: () => void;
};

export const AddTaskButtonComponent = ({
  onClickHandler,
}: AddTaskButtonComponentProps) => {
  return (
    <div className="flex">
      <Button
        size={"sm"}
        className="mb-0 text-foreground/70"
        variant={"outline"}
        onClick={onClickHandler}
      >
        <NoteAddIcon />
        <p className="ml-1 text-base text-foreground/70">Add Task</p>
      </Button>
    </div>
  );
};
