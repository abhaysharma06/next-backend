import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  // extract the body
  const body = await req.body.json();
  return Response.json({
    message: "done",
  });
}
