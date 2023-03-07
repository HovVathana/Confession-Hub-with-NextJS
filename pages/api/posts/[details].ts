// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // const prisma: any = new PrismaClient();
      const data = await prisma.post.findUnique({
        where: {
          id: req.query.details,
        },
        include: {
          Comment: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(403).json({ error: error });
    }
  }
}
