import ProductCard from "./ProductCard";
import dummyData from "../lib/dummyData.js";
import { useState } from "react";

// Function that filters the array and renders only the products that meet that criteria
// useState to save the renderedList
// checks the array (dietaryPreference) if same as diet, then show it
// Update setProductList depending on the filter

// filter through dummydata
// Set a new variable newData
// Set productsList to newData

function ProductList({ allergies, diet }) {
  // const [productList, setProductList] = useState(dummyData);

  const filteredArray = dummyData.filter((item) => {
    let dietaryPreference = diet === "" || item.dietaryPreference === diet;
    return dietaryPreference;
  });

  // function filterDietryRequirements (dietaryPreference) {
  //   if (dietaryPreference === diet)
  //   setProductList(filteredArray)

  // // const x = dummyData.filter(() =>
  // //
  // //);
  // }

  return (
    <div>
      {/* Map through each item in list that matches filters */}
      <ul>
        {filteredArray.map((food) => (
          <li>
            <ProductCard key={food.id} name={food.name} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
