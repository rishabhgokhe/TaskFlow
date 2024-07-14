"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { AddTaskInlineModal } from "./AddTaskInlineModal";
import AddCircleIcon from "@/public/svg/icons/AddCircleIcon";

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
        className="mb-0 dark:text-[#CACACA]"
        variant={"outline"}
        onClick={onClickHandler}
      >
        <p className="mr-1">Add Task</p>
        <AddCircleIcon />
      </Button>
    </div>
  );
};
