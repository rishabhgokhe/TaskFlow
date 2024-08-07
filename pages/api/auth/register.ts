import connectDB from "@/lib/connectDB";
import generateJWTToken from "@/lib/generateJwtToken";
import { saveCookie } from "@/lib/saveCookies";
import { catchAsyncError } from "@/middleware/catchAsyncError";
import { handleRes } from "@/middleware/resHandler";
import User from "@/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

const registerUser = catchAsyncError(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") return handleRes(res, 400, false, "Only POST request is allowed");

    const { name, email, password } = req.body;
    if (!name || !email || !password) return handleRes(res, 400, false, "All fields required!");

    await connectDB();
    let user = await User.findOne({ email });
    if (user) return handleRes(res, 200, true, "Email already registered. Try logging in.");

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });

    const token = generateJWTToken(user._id);
    saveCookie(res, token, true);
    user.password = undefined;

    return res.status(200).json({
      success: true,
      message: "Registered successfully",
      user
    });
  }
);

export default registerUser;
