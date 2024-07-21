import { NextApiRequest, NextApiResponse } from "next";
import { catchAsyncError } from "@/middleware/catchAsyncError";
import { handleRes } from "@/middleware/resHandler";
import { saveCookie } from "@/lib/saveCookies";

const logOut = catchAsyncError(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") return handleRes(res, 400, false, "Only POST requests are allowed");

    saveCookie(res, null, false);
    handleRes(res, 200, true, "Logged Out Successfully");
  }
);

export default logOut;