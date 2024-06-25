import connectDB from "@/lib/connectDB";
import { catchAsyncError } from "@/middleware/catchAsyncError";
import { handleRes } from "@/middleware/resHandler";
import User from "@/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";

const registerUser = catchAsyncError(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) return handleRes(res, 400, false, "All fields required!!!");

    const user = await User.findOne({email});
    await connectDB();
    if (user) return handleRes(res, 400, false, "Email already Registered Try Login..");

    await User.create({name, email, password});

    return handleRes(res, 200, true, "Registered Successfully");
  }
);

export default registerUser;