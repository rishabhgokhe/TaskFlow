import { NextApiResponse } from "next";

export function handleRes(
  res: NextApiResponse,
  status: number,
  success?: boolean,
  message?: string,
  ...props: Record<string, any>[]
) {
  res.status(status).json({
    success: success,
    message: message,
    ...props
  });
}