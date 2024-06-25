import { catchAsyncError } from "@/middleware/catchAsyncError";
import { handleRes } from "@/middleware/resHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { saveCookie } from "@/lib/saveCookies";
import { LogOut } from "lucide-react";


const logOut = catchAsyncError(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") return handleRes(res, 400, false, "Only post request is allowed");

    saveCookie(res, null, false);
    handleRes(res, 200, true, "Logged Out Successfully");
  }
);
export default logOut;