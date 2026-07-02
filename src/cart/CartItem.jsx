import "./cart.css";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return;
  <li key={item.id} className="cartItem">
    <button
      onClick={() => {
        removeFromCart(item);
      }}
    >
      -
    </button>
    <p>
      {item.image} {item.name}
    </p>
    <button
      onClick={() => {
        addToCart(item);
      }}
    >
      +
    </button>
  </li>;
}
