function VendorCard() {
  const vendor = {
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true
  }; //

  return (
    <div className="card">
      <div className="thumb">{vendor.name.charAt(0)}</div>
      <h3>{vendor.name}</h3>
      <p className="muted">{vendor.location}</p>
      <p className="muted">Open: {vendor.openHours}</p>
      <p className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
        {vendor.isOpen ? 'Open now' : 'Closed'}
      </p>
    </div>
  ); //
}
export default VendorCard;