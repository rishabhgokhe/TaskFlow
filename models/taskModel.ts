import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: [100, "Description cannot exceed 100 Characters"],
  },
  list: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  scheduledAt: {
    type: Date,
    default: null,
  },
});

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
export default Task;
