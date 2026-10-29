import { useParams, Link } from 'react-router';
import { useVendors } from '../hooks/useVendors.js';
import MenuList from '../components/MenuList.jsx';
import { Loading, ErrorMessage } from '../components/Status.jsx';

export default function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors(); //[cite: 28]

  if (loading) return <Loading />; //[cite: 19]
  if (error) return <ErrorMessage message={error} onRetry={reload} />; //[cite: 19]

  const vendor = vendors.find((v) => v.id === id); //[cite: 28]

  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">The requested stall does not exist.</p>
        <Link to="/" className="btn" style={{ display: 'inline-block', width: 'auto' }}>
          Back to vendors
        </Link>
      </div>
    ); //[cite: 28]
  }

  return (
    <section>
      <Link to="/" style={{ textDecoration: 'none', color: '#00684a', fontWeight: 'bold' }}>
        &larr; All vendors
      </Link>
      <h2 style={{ marginTop: '1rem' }}>Menu: {vendor.name}</h2>
      <p className="muted">{vendor.location} &bull; {vendor.openHours}</p>
      <MenuList items={vendor.menu} />
    </section>
  ); //[cite: 28]
}