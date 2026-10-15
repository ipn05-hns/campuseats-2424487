function VendorCard({ vendor, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(vendor.id)}
      style={{ textAlign: 'left', cursor: 'pointer', width: '100%' }}
    >
      <div className="thumb">{vendor.name.charAt(0)}</div>
      <h3>{vendor.name}</h3>
      <p className="muted">{vendor.location}</p>
      <p className="muted">Open: {vendor.openHours}</p>
      <p className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
        {vendor.isOpen ? 'Open now' : 'Closed'}
      </p>
    </button>
  ); //
}
export default VendorCard;