import { NextApiRequest, NextApiResponse } from "next";
import { handleRes } from "./resHandler";

type AsyncFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const catchAsyncError = (asyncFunction: AsyncFunction) => (req: NextApiRequest, res: NextApiResponse) => {
  Promise.resolve(asyncFunction(req, res).catch((err) => {
    return handleRes(res, 500, false, err.message);
  }))
};