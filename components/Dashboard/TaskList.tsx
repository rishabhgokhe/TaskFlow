"use client";
import React, { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import toast from "react-hot-toast";

interface Task {
  id: string;
  title: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getAllTasks() {
      try {
        const response = await axios.get("/api/getalltasks");
        const tasks = response.data[0];
        setTasks(tasks);
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
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">All Tasks</h1>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <p>Loading tasks...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-4 border rounded-lg border-dashed shadow-sm">
          {tasks.length > 0 ? (
            tasks.map(({ title, id }) => (
              <TaskItem key={id} taskTitle={title} />
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </div>
      )}
    </main>
  );
}

interface TaskItemProps {
  taskTitle: string;
}

function TaskItem({ taskTitle }: TaskItemProps) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center space-x-2 w-full">
      <Checkbox id={taskTitle} checked={checked} onChange={handleCheckboxChange} />
      <label
        htmlFor={taskTitle}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {taskTitle}
      </label>
    </div>
  );
}
