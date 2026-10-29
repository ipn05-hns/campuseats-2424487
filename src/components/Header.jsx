import { NavLink } from 'react-router';
import { useCart } from '../hooks/useCart.js';

function Header() {
  const { count } = useCart(); //[cite: 28]

  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <NavLink to="/" end>Vendors</NavLink>
        <NavLink to="/orders">My Orders</NavLink>
        <NavLink to="/cart">Cart <span className="badge">{count}</span></NavLink>
      </nav>
    </header>
  ); //[cite: 28]
}
export default Header;