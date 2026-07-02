import "./cart.css";
import CartItem from "./CartItem";

export default function CartList({ cart, addToCart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul className="cartList">
        {cart.map((item) => {
          return (
            <CartItem
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
