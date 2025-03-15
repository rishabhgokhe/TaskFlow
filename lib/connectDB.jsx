import mongoose from "mongoose";

export default async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("database connected");
}