import jwt from "jsonwebtoken";

export default function generateJWTToken(_id: string): string {
    return jwt.sign({ _id }, process.env.JWT_SECRET as string, {
        expiresIn: "15d"
    });
}
