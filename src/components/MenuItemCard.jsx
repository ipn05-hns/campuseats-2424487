import { useState } from 'react';

function MenuItemCard({ item, onAdd }) {
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState(''); //

  const handleAdd = () => {
    onAdd({ ...item, note });
    setNote('');
    setShowNote(false);
  }; //

  return (
    <div className="card">
      <div className="thumb">{item.name.charAt(0)}</div>
      <span className="muted" style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}>
        {item.category}
      </span>
      <h3>{item.name}</h3>
      <p className="muted">{item.description}</p>
      <p><strong>RM {item.price.toFixed(2)}</strong></p>

      {/* Matric Feature 7 Step: Add note button toggle */}
      <button
        type="button"
        className="link"
        style={{ color: '#00684a', margin: '0.5rem 0', display: 'block', fontSize: '0.85rem' }}
        onClick={() => setShowNote(!showNote)}
      >
        {showNote ? 'Cancel note' : '+ Add note'}
      </button>

      {showNote && (
        <textarea
          style={{ width: '100%', boxSizing: 'border-box', marginBottom: '0.5rem' }}
          placeholder="Special instructions (e.g. less sweet, no sambal)..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      )}

      <button className="btn" disabled={!item.available} onClick={handleAdd}>
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  ); //
}
export default MenuItemCard;