import "./index.css";
import PlantList from "./plants/PlantList";
import CartList from "./cart/CartList";
import { PLANTS } from "./data";
import { useState } from "react";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const cartItem = cart.find((item) => {
      return item.id === plant.id;
    });

    if (!cartItem) {
      //if not in cart, add new entry
      setCart([...cart, { ...plant, quantity: 1 }]);
    } else {
      //if in cart, increase quantity
      const newCart = cart.map((item) => {
        return item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCart(newCart);
    }
  }

  function removeFromCart(cartItem) {
    if (cartItem.quantity === 1) {
      //if quantity is 1, remove entry in cart
      const newCart = cart.filter((item) => {
        return item.id !== cartItem.id;
      });
      setCart(newCart);
    } else {
      //if quantity is greater than 1, reduce quantity
      const newCart = cart.map((item) => {
        return item.id === cartItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      setCart(newCart);
    }
  }

  return (
    <div className="app">
      <h1>Proper Plants</h1>
      <main>
        <PlantList plants={plants} addToCart={addToCart} />
        <CartList
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </div>
  );
}
