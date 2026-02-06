import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px" }}>
      <img src={product.images[0]} alt={product.title} width="100%" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}
