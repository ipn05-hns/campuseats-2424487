import { Outlet } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  ); //[cite: 28]
}
export default Layout;