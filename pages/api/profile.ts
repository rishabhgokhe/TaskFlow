import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/connectDB";
import { handleRes } from "@/middleware/resHandler";
import { catchAsyncError } from "@/middleware/catchAsyncError";
import isAuthenticated from "@/middleware/isAuthenticated";


const Profile = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") return handleRes(res, 400, false, "Only get request is allowed");
    await connectDB();

    const user = await isAuthenticated(req, res);
    if (!user) return handleRes(res, 401, false, "no account is logged in");
    
    res.status(200).json({
        success: true,
        message: "My Profile",
        user
    })
});

export default Profile;