import ProductCard from "./ProductCard";
import dummyData from "../lib/dummyData.js";

// Function that filters the array and renders only the products that meet that criteria
// useState to save the renderedList
// checks the array (dietaryPreference) if same as diet, then show it
// Update setProductList depending on the filter

// filter through dummydata
// Set a new variable newData
// Set productsList to newData

// GO through allergies array
// For each entry in the allergies array, does it match any of the items in the dummyData

function ProductList({ allergies, diet }) {
  // const [productList, setProductList] = useState(dummyData);

  const filteredArray = dummyData.filter((item) => {
    let dietaryPreference = diet === "" || item.dietaryPreference === diet;
    let allergy = !item.allergens.some((allergen) =>
      allergies.includes(allergen)
    );
    return dietaryPreference && allergy;
  });

  // const filteredArray2 = dummyData.filter((item) => {
  //   // 'allergies' are the chosen checkboxes on the page
  //   // 'allergens' is from the dummyData
  //   return !item.allergens.some((allergen) => allergies.includes(allergen))
  //   // let allergy = allergies === [] || item.allergens.includes(allergies)
  //   // return allergy;
  // });

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
