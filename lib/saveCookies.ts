import { NextApiResponse } from "next";
import cookie from "cookie";

export function saveCookie(res: NextApiResponse, token: string | null, set: boolean) {
    res.setHeader('Set-Cookie', cookie.serialize("Token", set && token ? token : "", {
        httpOnly: true,
        path: "/",
        maxAge: set ? 60 * 60 * 24 * 10 : 0 // 10 Days
    }));
}
