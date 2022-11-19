import { NextApiRequest, NextApiResponse } from 'next';
import { Deal } from '../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const deals: Deal[] = [
    {
      id: 1,
      accountName: 'WILMINGTON TRUST NA',
      relationshipManager: 'DAVIN REID',
      principal: 1590872.34,
      balance: 569892.76,
      dateCreated: new Date(2021, 5, 15),
    },
    {
      id: 2,
      accountName: 'PREMIER DERMATOLOGY LLC',
      relationshipManager: 'NINA GOLDFARB',
      principal: 463947.33,
      balance: 124578.29,
      dateCreated: new Date(2020, 7, 29),
    },
  ];

  res.status(200).json({ success: true, deals: deals });
}
