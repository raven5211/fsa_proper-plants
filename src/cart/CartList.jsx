import "./cart.css";
import CartItem from "./CartItem";

export default function CartList({ cart, addToCart, removeFromCart }) {
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul className="cartList">
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </ul>
    </div>
  );
}
