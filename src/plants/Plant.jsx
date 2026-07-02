import "./plants.css";

export default function Plant({ plant, addToCart }) {
  //console.log(plant);
  return (
    <li key={plant.id} className="plant">
      <p className="plantImage">{plant.image}</p>
      <p>{plant.name}</p>
      <button
        onClick={() => {
          addToCart(plant);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
