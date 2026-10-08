function MenuItemCard() {
  const item = {
    name: 'Nasi Lemak Ayam',
    description: 'Coconut rice, fried chicken, sambal, egg and peanuts',
    price: 7.5,
    available: true
  }; //[cite: 4]

  return (
    <div className="card">
      <div className="thumb">{item.name.charAt(0)}</div>
      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      <p><strong>RM {item.price.toFixed(2)}</strong></p>
      <button className="btn" disabled={!item.available}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  ); //[cite: 4]
}
export default MenuItemCard;