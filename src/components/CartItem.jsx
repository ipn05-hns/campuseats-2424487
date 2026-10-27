function CartItem({ line, onChangeQty, onRemove, onUpdateNote }) {
  const { item, qty } = line

  return (
    <li className="cart-line">
      <div>
        <p className="cart-name">{item.name}</p>
        <p className="muted">RM {item.price.toFixed(2)} each</p>
        <textarea
          placeholder="Special instructions (optional)..."
          value={line.note || ''}
          onChange={(e) => onUpdateNote(item.id, e.target.value)}
          rows={2}
          style={{ width: '100%', marginTop: '0.4rem', resize: 'vertical' }}
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
  )
}

export default CartItem