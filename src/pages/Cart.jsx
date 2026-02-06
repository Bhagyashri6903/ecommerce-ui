import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.qty} × ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}
