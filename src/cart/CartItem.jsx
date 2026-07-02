import "./cart.css";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li key={item.id} className="cartItem">
      <p>
        {item.image} {item.name}
      </p>
      <div className="itemQuantity">
        <button
          onClick={() => {
            removeFromCart(item);
          }}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          +
        </button>
      </div>
    </li>
  );
}
