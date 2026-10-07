import { useCart } from "../context/CartContext";

const Navbar = ({ setShowCart }) => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <h1 className="logo">ShopCart</h1>

      <button
        className="cart-button"
        onClick={() => setShowCart(true)}
      >
        🛒 Cart
        <span className="cart-count">{totalItems}</span>
      </button>
    </nav>
  );
};

export default Navbar;