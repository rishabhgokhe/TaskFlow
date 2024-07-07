"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import toast from "react-hot-toast";
import { Task } from "@/types";
import { Skeleton } from "../ui/skeleton";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";

import TickDouble03Icon from "@/public/svg/icons/TickDouble03Icon";
import PencilEdit02Icon from "@/public/svg/icons/PencilEdit02Icon";
import { AddTaskButton } from "./Add Task Button/AddTaskButton";
import { Button } from "../ui/button";
import { EditTaskDialogContent } from "./Add Task Button/EditTaskDialog";

// --------------------------------------------------------------------------------------
export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    async function getAllTasks() {
      try {
        const response = await axios.get("/api/getalltasks");
        const tasks = response.data[0];
        setTasks(tasks);
        toast.success(response.data.message);
      } catch (err) {
        console.log(err);
        toast.error("Failed fetching tasks. Try refreshing the page.");
      } finally {
        setLoading(false);
      }
    }
    getAllTasks();
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">All Tasks</h1>
        <Button
          onClick={() => setEdit(!edit)}
          size="sm"
          variant={edit ? "outline" : "default"}
        >
          {edit ? "Done" : "Edit"}
        </Button>
      </div>

      {/* // Incompleted Tasks */}
      <div className="flex flex-col py-4 px-2 border rounded-lg border-dashed shadow-sm">
        {loading ? (
          <TaskItemsSkeleton task={tasks} />
        ) : (
          <>
            {tasks.length > 0 ? (
              tasks.map((task, id) => (
                <div className="flex" key={id}>
                  <TaskItem key={id} task={task} edit={edit} />
                </div>
              ))
            ) : (
              <p>No tasks available</p>
            )}
          </>
        )}
        <div className="px-1 mt-1">
          <AddTaskButton />
        </div>
      </div>

      {/* // Completed Tasks */}
      <h6 className="font-semibold mb-0">Completed Tasks</h6>
      <div className="flex flex-col py-4 px-2 border rounded-lg border-dashed shadow-sm">
        {loading ? (
          <TaskItemsSkeleton task={tasks} />
        ) : (
          <>
            {tasks.length > 0 ? (
              tasks.map((task, id ) => (
                <TaskItem key={id} task={task} edit={false} />
              ))
            ) : (
              <p>No tasks available</p>
            )}
          </>
        )}
      </div>

      <div className="flex">
        <TickDouble03Icon />
        <p>+3 Completed Tasks</p>
      </div>
    </main>
  );
}

// --------------------------------------------------------------------------------------

function TaskItem({ task, edit }: { task: Task; edit: boolean }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex px-2 items-center justify-between space-x-2 w-full hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition duration-300 ease-in-out">
      <div className="flex items-center">
        <Checkbox
          id={task.id}
          checked={checked}
          onCheckedChange={handleCheckboxChange}
        />
        <label
          htmlFor={task.title}
          className="text-sm font-medium p-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {task.title}
        </label>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          {edit ? (
            <button>
              <PencilEdit02Icon />
            </button>
          ) : null}
        </DialogTrigger>
        <EditTaskDialogContent task={task} />
      </Dialog>
    </div>
  );
}

// --------------------------------------------------------------------------------------

type TaskItemsSkeletonProps = {
  task: { id: string }[];
};

function TaskItemsSkeleton({ task }: TaskItemsSkeletonProps) {
  return (
    <>
      {task.length > 0 ? (
        task.map((item) => <Skeleton key={item.id} className="h-4 w-[200px]" />)
      ) : (
        <>
          <Skeleton className="h-4 mb-2 w-[250px]" />
          <Skeleton className="h-4 mb-2 w-[200px]" />
          <Skeleton className="h-4 mb-2 w-[250px]" />
          <Skeleton className="h-4 mb-2 w-[200px]" />
        </>
      )}
    </>
  );
}
