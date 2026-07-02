import "./plants.css";
import Plant from "./Plant";

export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plants">
      <h2>Plants</h2>
      <ul className="plantList">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
}
