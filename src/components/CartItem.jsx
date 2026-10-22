function CartItem({ line, onChangeQty, onRemove, onUpdateNote }) {
  const { item, qty, note = '' } = line; //

  return (
    <li className="cart-line">
      <div>
        <p className="cart-name">{item.name}</p>
        <p className="muted">RM {item.price.toFixed(2)} each</p>
        {/* Matric Feature 7: Editable note per cart item */}
        <input
          type="text"
          value={note}
          placeholder="Add order note..."
          onChange={(e) => onUpdateNote(item.id, e.target.value)}
          style={{ width: '90%', fontSize: '0.85rem', marginTop: '0.25rem' }}
        />
      </div>
      <div className="qty">
        <button type="button" onClick={() => onChangeQty(item.id, -1)}>-</button>
        <span>{qty}</span>
        <button type="button" onClick={() => onChangeQty(item.id, 1)}>+</button>
      </div>
      <p className="line-total">RM {(item.price * qty).toFixed(2)}</p>
      <button type="button" className="link danger" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  ); //
}
export default CartItem;