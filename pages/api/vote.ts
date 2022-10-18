import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;

  const vote = await prisma.votes.findFirst({ where: { email: data.email } });

  if (vote) {
    return res
      .status(400)
      .json("There is already a vote registered with this email");
  }

  await prisma.votes.create({
    data: { email: data.email, [data.question]: 1 },
  });

  res.status(201).json("Success");
}
