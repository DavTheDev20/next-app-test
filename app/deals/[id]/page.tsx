import { Deal } from '../../../interfaces';
import Link from 'next/link';

const getData = async (dealId: string) => {
  const res = await fetch(`http://localhost:3000/api/deal/${dealId}`);
  const data = res.json();

  return data;
};

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const deal: Deal = data.deal;

  return (
    <div>
      <h1>{deal.accountName}</h1>
      <h2>Relationship Manager: {deal.relationshipManager}</h2>
      <h3>Created: {new Date(deal.dateCreated).toLocaleDateString()}</h3>
      <h3>Principal: ${deal.principal.toLocaleString()}</h3>
      <Link href="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
