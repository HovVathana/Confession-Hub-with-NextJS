// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { title, postId, username } = req.body.data;

      if (!title.length || !username.length)
        return res
          .status(403)
          .json({ message: "Please do not leave this empty." });

      const result = await prisma.comment.create({
        data: {
          message: title,
          username,
          postId,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ error: "Error has occured while add a comment." });
    }
  }
}
