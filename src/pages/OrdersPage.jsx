import { useCart } from '../hooks/useCart.js';
import { Link } from 'react-router';

export default function OrdersPage() {
  const { orders } = useCart(); //[cite: 28]

  if (!orders || orders.length === 0) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>No orders yet</h2>
        <p className="muted">Your placed orders will appear here.</p>
        <Link to="/" className="btn" style={{ display: 'inline-block', width: 'auto' }}>
          Browse vendors
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>My Orders</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {orders.map((order) => (
          <div key={order.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
              <strong>Order #{order.id.slice(-4)}</strong>
              <span className="muted">Ready by: {order.pickupTime} ({order.mahallah})</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0' }}>
              {order.items.map((line) => (
                <li key={line.item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span>
                    {line.qty}x {line.item.name}
                    {/* Matric Feature 7: Showing preserved order notes */}
                    {line.note && <em style={{ display: 'block', color: '#64748b', fontSize: '0.85rem' }}>Note: "{line.note}"</em>}
                  </span>
                  <span>RM {(line.item.price * line.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
              Total Paid: RM {order.total.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  ); //
}