import { useState } from 'react';
import vendors from './data/vendors.js';
import Header from './components/Header.jsx';
import VendorCard from './components/VendorCard.jsx';
import MenuList from './components/MenuList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0].id);
  const [cart, setCart] = useState([]); //[cite: 10]

  const selectedVendor = vendors.find((v) => v.id === selectedVendorId); //[cite: 10]

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]); //[cite: 10]
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <main className="container">
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
      </main>
      <Footer />
    </>
  ); //[cite: 10]
}
export default App;