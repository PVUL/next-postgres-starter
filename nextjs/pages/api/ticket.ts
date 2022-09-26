// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Ticket } from '../../models/ticket';
import { Op } from 'sequelize';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { title, description, assignee, statusId } = req.body;

    const ticket = Ticket.build({
      title,
      description,
      assignee,
      statusId,
    });

    const resp = await ticket.save();
    if (resp === null) {
      res.status(500);
    }

    res.status(201).json({
      ticket,
    });
  } else {
    const assignee = req.query.assignee as string;
    const statusId = req.query.statusId as string;

    const queryObject = {};

    if (assignee !== undefined) {
      queryObject.assignee = {
        [Op.iLike]: assignee,
      };
    }

    if (statusId) {
      queryObject.statusId = {
        [Op.or]: statusId.split(','),
      };
    }

    const tickets = await Ticket.findAll({
      where: queryObject,
    });

    res.status(200).json({ matchingTickets: tickets });
  }
}
