import Header from './components/Header.jsx';
import VendorCard from './components/VendorCard.jsx';
import MenuItemCard from './components/MenuItemCard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2>Today's vendors</h2>
          <VendorCard />
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>Popular items</h2>
          <div className="grid">
            <MenuItemCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  ); //[cite: 4]
}
export default App;