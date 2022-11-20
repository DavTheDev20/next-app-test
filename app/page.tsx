import { Deal } from '../interfaces';
import Link from 'next/link';

const API_URL = 'http://localhost:3000/api/deals';

const getData = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export default async function Page() {
  const data = await getData();
  const deals = data.deals;

  const dealsPrincipalTotal = () => {
    let total = 0;
    deals.map((deal: Deal) => {
      total += deal.principal;
    });
    return total;
  };

  const dealsBalanceTotal = () => {
    let total = 0;
    deals.map((deal: Deal) => {
      total += deal.balance;
    });
    return total;
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2%' }}>All Deals</h1>
      <table>
        <thead style={{ borderBottom: '1px solid black' }}>
          <tr>
            <th>id</th>
            <th>Account Name</th>
            <th>Relationship Manager</th>
            <th>Principal</th>
            <th>Balance</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal: Deal) => {
            return (
              <tr key={deal.id}>
                <td>{deal.id}</td>
                <td>
                  <Link href={`/deals/${deal.id}`}>{deal.accountName}</Link>
                </td>
                <td>{deal.relationshipManager}</td>
                <td>$ {deal.principal.toLocaleString()}</td>
                <td>$ {deal.balance.toLocaleString()}</td>
                <td>{new Date(deal.dateCreated).toDateString()}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td> </td>
            <td> </td>
            <td>
              <strong>$ {dealsPrincipalTotal().toLocaleString()}</strong>
            </td>
            <td>
              <strong>$ {dealsBalanceTotal().toLocaleString()}</strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
