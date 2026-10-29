import { useVendors } from '../hooks/useVendors.js';
import VendorCard from '../components/VendorCard.jsx';
import { Loading, ErrorMessage } from '../components/Status.jsx';

export default function HomePage() {
  const { vendors, loading, error, reload } = useVendors(); //[cite: 28]

  if (loading) return <Loading />; //[cite: 19]
  if (error) return <ErrorMessage message={error} onRetry={reload} />; //[cite: 19]

  return (
    <>
      <h2>Choose a vendor</h2>
      <div className="grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </>
  ); //[cite: 10, 28]
}