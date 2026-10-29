import MenuItemCard from './MenuItemCard.jsx';
import { useCart } from '../hooks/useCart.js';

function MenuList({ items }) {
  const { addToCart } = useCart(); //[cite: 28]

  if (!items || items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>;
  } //[cite: 10]

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
      ))}
    </div>
  ); //
}
export default MenuList;