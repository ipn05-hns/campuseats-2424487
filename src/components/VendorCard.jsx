import { Link } from 'react-router';

function VendorCard({ vendor }) {
  return (
    <Link to={`/vendor/${vendor.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <div className="thumb">{vendor.name.charAt(0)}</div>
        <h3>{vendor.name}</h3>
        <p className="muted">{vendor.location}</p>
        <p className="muted">Open: {vendor.openHours}</p>
        <p className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </p>
      </div>
    </Link>
  ); //[cite: 28]
}
export default VendorCard;