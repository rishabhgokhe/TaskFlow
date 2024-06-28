import { NextApiResponse } from "next";

export function handleRes(
  res: NextApiResponse,
  status: number,
  success?: boolean,
  message?: string,
  ...props: Record<string, any>[]
) {
  const responseBody = {
    success: success ?? false,
    message: message ?? "Unknown error occurred",
    ...props
  };

  return res.status(status).json(responseBody);
}
