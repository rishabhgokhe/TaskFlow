import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../lib/connectDB";
import { handleRes } from "@/middleware/resHandler";
import { catchAsyncError } from "@/middleware/catchAsyncError";
import Data from "@/models/dataModel";

const AboutMeData = catchAsyncError(async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return handleRes(res, 400, false, "Only GET request is allowed");
    }
    await connectDB();

    const resp = await Data.find({})
    const aboutData = Data.findById({_id : "669bbffaba00f08895e4cd3f"})

    return res.status(200).json({
        success: true,
        message: "Successfully fetched data",
        res
    });
});

export default AboutMeData;