import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import VendorCard from './components/VendorCard.jsx';
import MenuList from './components/MenuList.jsx';
import CartPage from './components/CartPage.jsx';
import { Loading, ErrorMessage } from './components/Status.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [cart, setCart] = useState([]); // [{ item, qty, note }]
  const [view, setView] = useState('menu'); // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null); //[cite: 17, 18, 19, 23]

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setVendors(data);
        if (data.length > 0) setSelectedVendorId(data[0].id);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [reloadKey]); //[cite: 15, 17, 18]

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id);
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
        );
      }
      return [...prev, { item, qty: 1, note: item.note || '' }];
    });
  }; //[cite: 18]

  const handleChangeQty = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((line) => line.item.id === itemId ? { ...line, qty: line.qty + delta } : line)
        .filter((line) => line.qty > 0)
    );
  }; //[cite: 18]

  const handleRemove = (itemId) => {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId));
  }; //[cite: 18]

  const handleUpdateNote = (itemId, note) => {
    setCart((prev) =>
      prev.map((line) => line.item.id === itemId ? { ...line, note } : line)
    );
  }; //[cite: 23]

  const handlePlaceOrder = (details) => {
    const total = cart.reduce((acc, l) => acc + l.item.price * l.qty, 0);
    setLastOrder({ ...details, total, items: [...cart] });
    setCart([]);
    setView('done');
  }; //[cite: 21, 23]

  const cartCount = cart.reduce((acc, l) => acc + l.qty, 0); //[cite: 18, 19]
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId);

  let content;
  if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
        onUpdateNote={handleUpdateNote}
      />
    );
  } else if (view === 'done') {
    content = (
      <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Order Confirmed!</h2>
        <p>Thank you, {lastOrder?.name}. Your order will be ready at <strong>{lastOrder?.pickupTime}</strong>.</p>
        <p>Pickup Mahallah: {lastOrder?.mahallah}</p>
        <p><strong>Total: RM {lastOrder?.total.toFixed(2)}</strong></p>
        <button className="btn" style={{ maxWidth: '200px', margin: '1rem auto' }} onClick={() => setView('menu')}>
          Back to vendors
        </button>
      </div>
    );
  } else if (loading) {
    content = <Loading />;
  } else if (error) {
    content = <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />;
  } else {
    content = (
      <>
        <h2>Choose a vendor</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              isSelected={vendor.id === selectedVendorId}
              onSelect={setSelectedVendorId}
            />
          ))}
        </div>
        <section style={{ marginTop: '2.5rem' }}>
          <h2>Menu: {selectedVendor ? selectedVendor.name : ''}</h2>
          <MenuList items={selectedVendor ? selectedVendor.menu : []} onAdd={handleAddToCart} />
        </section>
      </>
    );
  } //[cite: 19]

  return (
    <>
      <Header cartCount={cartCount} onShowMenu={() => setView('menu')} onShowCart={() => setView('cart')} />
      <main className="container">{content}</main>
      <Footer />
    </>
  ); //[cite: 19]
}
export default App;