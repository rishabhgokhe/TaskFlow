import connectDB from "@/lib/connectDB";
import { catchAsyncError } from "@/middleware/catchAsyncError";
import { handleRes } from "@/middleware/resHandler";
import User from "@/models/userModel";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { saveCookie } from "@/lib/saveCookies";
import generateJWTToken from "@/lib/generateJwtToken";


const logIn = catchAsyncError(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") return handleRes(res, 400, false, "Only post request is allowed");

    const {email, password} = req.body;
    if (!email || !password) return handleRes(res, 400, false, "All fields required!!!");

    await connectDB();

    const user = await User.findOne({email}).select("+password");
    if (!user) return handleRes(res, 400, false, "Invalid email or password");

    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) return handleRes(res, 400, false, "Invalid email or password");

    const token = generateJWTToken(user._id);
    saveCookie(res, token, true);
    res.status(200).json({
      success: true,
      message: `Welcome back ${user.name}`,
      user
    })
  }
);
export default logIn;