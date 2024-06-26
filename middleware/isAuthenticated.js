import { NextApiRequest, NextApiResponse } from "next";
import { handleRes } from "./resHandler";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

export default async function isAuthenticated(req, res) {
    const Token = req.headers.cookie?.split("=")[1];
    if (!Token) return handleRes(res, 404, false, "Authentication token not found")

    const decodedData = jwt.verify(Token, process.env.JWT_SECRET);
    return await User.findById(decodedData._id);
}