import { NavLink, useNavigate } from 'react-router'
import { useCart } from '../hooks/useCart.js'
import { useAuth } from '../hooks/useAuth.js'

function Header() {
  const cartContext = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const list = cartContext.cart || cartContext.items || []
  const totalCount =
    cartContext.itemCount ??
    list.reduce((sum, item) => sum + (item.qty ?? item.quantity ?? 1), 0)

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">CampusEats</NavLink>
        <nav className="nav">
          <NavLink to="/">Vendors</NavLink>
          <NavLink to="/orders">My Orders</NavLink>
          <NavLink to="/cart">
            Cart <span className="badge">{totalCount}</span>
          </NavLink>
          {user ? (
            <>
              <span className="user-name">Hi, {user.displayName || user.email}</span>
              <button type="button" className="link" onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header