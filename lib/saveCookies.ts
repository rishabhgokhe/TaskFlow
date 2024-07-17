import { NextApiResponse } from "next";
import cookie from "cookie";

export function saveCookie(res: NextApiResponse, token: string | null, set: boolean) {
    console.log("Setting cookie with token:", token);
    res.setHeader('Set-Cookie', cookie.serialize("token", set && token ? token : "", {
        httpOnly: true,
        path: "/",
        maxAge: set ? 60 * 60 * 24 * 10 : 0 // 10 Days
    }));
}