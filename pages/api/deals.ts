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
    {
      id: 3,
      accountName: 'MICROSOFT CORPORATION',
      relationshipManager: 'BILL GATES',
      principal: 3456756.98,
      balance: 1234789.26,
      dateCreated: new Date(1985, 1, 10),
    },
  ];

  res.status(200).json({ success: true, deals: deals });
}
