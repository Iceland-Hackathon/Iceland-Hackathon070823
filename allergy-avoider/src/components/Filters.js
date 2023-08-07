

function Filters({diet, allergies, setDiet, setAllergies}) {



function handleDietChange(e) {
  setDiet(e.target.value)
}



console.log(diet)
  return (
    <>
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
      <label >
      <input type="checkbox" value="Peanuts" /> Peanuts
      </label>
      <label >
      <input type="checkbox" value="Eggs" /> Eggs
      </label>
      <label >
      <input type="checkbox" value="Dairy" /> Dairy
      </label>
    
    </>
  );
}

export default Filters;
