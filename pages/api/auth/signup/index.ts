import connectMongo from "../../../../database/conn";
import { hash } from "bcryptjs";
import Users from "../../../../model/Schema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch((err) => err.json({ error: "Connection Failed..." }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data..." });
    const { email, password }: any = req.body;

    // Check duplicated users
    const checkExisting = await Users.findOne({ email });
    if (checkExisting)
      return res.status(422).json({ error: "User Already Exist" });

    // Hash password
    const data = await Users.create({
      email,
      password: await hash(password, 12),
    });

    if (!data) return res.status(404).json({ data });
    return res.status(201).json({ status: true, user: data });
  } else {
    return res
      .status(500)
      .json({ error: "HTTP method not valid only POST accepted" });
  }
}
