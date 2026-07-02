import "./index.css";
import PlantList from "./plants/PlantList";
import CartList from "./cart/CartList";
import { PLANTS } from "./data";
import { useState } from "react";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    //if not in cart, add new entry
    //if in cart, increase quantity
  }

  function removeFromCart(plant) {
    //if not in cart, do nothing
    //if in cart, but only quantity of 1, remove entry in cart
    //if in cart, and a quantity larger than 1, reduce quantity
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
