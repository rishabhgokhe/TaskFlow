import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/connectDB";
import Task from "@/models/taskModel";
import { handleRes } from "@/middleware/resHandler";
import { catchAsyncError } from "@/middleware/catchAsyncError";

const newTask = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return handleRes(res, 400, false, "Only post request is allowed");
    await connectDB();
    const { title, description } = req.body;

    if (!title) return handleRes(res, 400, false, "Title is required");

    await Task.create({
      title,
      description,
    });
    handleRes(res, 200, true, "Task created");
});

export default newTask;
