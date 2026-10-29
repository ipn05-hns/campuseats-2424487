import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { CartContext } from './cart-context.js';

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('campuseats-cart', []);
  const [orders, setOrders] = useLocalStorage('campuseats-orders', []); //

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id);
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
        );
      }
      return [...prev, { item, qty: 1, note: item.note || '' }];
    });
  }; //[cite: 18, 28]

  const changeQty = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((line) => line.item.id === itemId ? { ...line, qty: line.qty + delta } : line)
        .filter((line) => line.qty > 0)
    );
  }; //[cite: 18, 28]

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId));
  }; //[cite: 18, 28]

  const updateNote = (itemId, note) => {
    setCart((prev) =>
      prev.map((line) => line.item.id === itemId ? { ...line, note } : line)
    );
  }; //[cite: 23, 28]

  const placeOrder = (details) => {
    const total = cart.reduce((acc, l) => acc + l.item.price * l.qty, 0);
    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...details,
      items: [...cart],
      total
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    return newOrder;
  }; //[cite: 21, 28]

  const count = cart.reduce((acc, l) => acc + l.qty, 0);
  const total = cart.reduce((acc, l) => acc + l.item.price * l.qty, 0); //[cite: 18, 20, 28]

  const value = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    removeFromCart,
    updateNote,
    placeOrder
  }; //

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}