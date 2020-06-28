// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from "next";

export default (_, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
