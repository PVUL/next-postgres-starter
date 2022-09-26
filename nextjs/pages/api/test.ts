// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { test } from '../../models'
import { Test } from '../../models/test'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Test>
) {
  if (req.method === 'POST') {
    // Creating a test
    const resp = await test.create();
    if (resp === null) {
      return res.status(500);
    }

    return res.status(201).json(resp);
  } else {
    // We are getting the model
    const id = req.query.id as string;
    const resp = await test.findOne({
      where: { id },
    });
    if (resp === null) {
      return res.status(404);
    }
    return res.status(200).json(resp);
  }
}
