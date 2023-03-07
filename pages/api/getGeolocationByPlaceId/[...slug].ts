import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    try {
      const data = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${
          req?.query?.slug?.[0]
        }&key=${process.env.G_MAP_API_KEY as string}`
      );
      const dataJson = await data.json();
      res.status(201).json(dataJson.result.geometry.location);
    } catch (error) {}
  } else {
    // Not Signed in
    res.status(500).json({ error: "You have no permission" });
  }
  res.end();
}
