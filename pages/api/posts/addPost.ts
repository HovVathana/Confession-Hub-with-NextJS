// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, username } = req.body.data;

    if (!title.length || !username.length)
      return res
        .status(403)
        .json({ message: "Please do not leave this empty." });

    try {
      const result = await prisma.post.create({
        data: {
          title,
          username,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ error: error });
    }
  }
}
