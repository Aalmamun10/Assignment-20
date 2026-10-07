import { useCart } from "../context/CartContext";

const Cart = ({ setShowCart }) => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice
  } = useCart();

  return (
    <div className="cart-overlay">

      <div className="cart">

        <div className="cart-header">

          <h2>Your Cart</h2>

          <button
            className="close-btn"
            onClick={() => setShowCart(false)}
          >
            ✕
          </button>

        </div>

        {cart.length === 0 ? (

          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some products to your cart.</p>
          </div>

        ) : (

          <>
            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="cart-item-info">

                    <h4>{item.title}</h4>

                    <p>
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="quantity">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <div>
                <span>Total</span>

                <strong>
                  ${totalPrice.toFixed(2)}
                </strong>
              </div>

              <button className="checkout-btn">
                Checkout
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
};

export default Cart;