import { catchAsyncError } from "@/middleware/catchAsyncError";
import { NextApiRequest, NextApiResponse } from "next";

const logIn = catchAsyncError(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {email, password} = req.body;

  }
);

export default logIn;