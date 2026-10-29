import { useNavigate } from 'react-router';
import { useCart } from '../hooks/useCart.js';
import CartItem from '../components/CartItem.jsx';
import CheckoutForm from '../components/CheckoutForm.jsx';

export default function CartPage() {
  const { cart, total, changeQty, removeFromCart, updateNote, placeOrder } = useCart();
  const navigate = useNavigate(); //[cite: 28]

  if (cart.length === 0) {
    return <p className="muted">Your cart is empty. Pick something from a menu first.</p>;
  } //[cite: 20]

  const handlePlaceOrder = (details) => {
    placeOrder(details);
    navigate('/orders'); //[cite: 28]
  };

  return (
    <div className="cart-layout">
      <div className="card">
        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={changeQty}
              onRemove={removeFromCart}
              onUpdateNote={updateNote}
            />
          ))}
        </ul>
        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>
      <CheckoutForm onPlaceOrder={handlePlaceOrder} />
    </div>
  ); //
}