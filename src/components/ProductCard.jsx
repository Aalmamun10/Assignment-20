import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h3>{product.title}</h3>

        <div className="product-bottom">

          <strong>
            ${product.price.toFixed(2)}
          </strong>

          <button
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;