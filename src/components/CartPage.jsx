import CartItem from './CartItem.jsx';
import CheckoutForm from './CheckoutForm.jsx';

function CartPage({ cart, onChangeQty, onRemove, onPlaceOrder, onUpdateNote }) {
  if (cart.length === 0) {
    return <p className="muted">Your cart is empty. Pick something from a menu first.</p>;
  } //[cite: 20]

  const total = cart.reduce((acc, line) => acc + line.item.price * line.qty, 0); //[cite: 20]

  return (
    <div className="cart-layout">
      <div className="card">
        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={onChangeQty}
              onRemove={onRemove}
              onUpdateNote={onUpdateNote}
            />
          ))}
        </ul>
        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>
      <CheckoutForm onPlaceOrder={onPlaceOrder} />
    </div>
  ); //[cite: 20]
}
export default CartPage;