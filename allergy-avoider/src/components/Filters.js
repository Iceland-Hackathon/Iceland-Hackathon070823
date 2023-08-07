import "./Filter.css";

function Filters({ diet, allergies, setDiet, setAllergies }) {
  function handleDietChange(e) {
    setDiet(e.target.value);
  }

  console.log(diet);
  return (
    <div className="filters">
      {/* dietary requirements dropown */}
      <select onChange={handleDietChange}>
        <option value="">Dietary Preferences</option>
        <option value="Halal">Halal</option>
        <option value="Kosher">Kosher</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
      </select>
      {/* allergies checkbox */}
      <div className="allergies">
        <h3>Allergies</h3>
        <div className="allergyLabels">
          <label>
            <input type="checkbox" value="Peanuts" /> Peanuts
          </label>
          <label>
            <input type="checkbox" value="Eggs" /> Eggs
          </label>
          <label>
            <input type="checkbox" value="Dairy" /> Dairy
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
