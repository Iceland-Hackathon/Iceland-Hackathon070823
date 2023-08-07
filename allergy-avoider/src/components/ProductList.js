import ProductCard from "./ProductCard";
import dummyData from "../lib/dummyData.js";

function ProductList() {
  return (
    <div>
      {/* Map through each item in list that matches filters */}
      <ul>
        {dummyData.map((food) => (
            <li>
              <ProductCard key={food.id} name={food.name} />{" "}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
