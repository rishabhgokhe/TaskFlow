"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);

  if (!tasks) {
    return <div>Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div>
      {tasks.map(({ _id, text }) => (
        <div style={{color: "white"}} key={_id}>{text}</div>
      ))}
    </div>
  );
}
