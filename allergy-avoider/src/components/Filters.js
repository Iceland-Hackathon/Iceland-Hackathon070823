

function Filters({diet, allergies, setDiet, setAllergies}) {



function handleDietChange(e) {
  setDiet(e.target.value)
}

function handleAllergyChange(e) {
  const {checked, value} = e.target;
  if (checked) {
    setAllergies ((prevAllergies) => [...prevAllergies, value])
  }
  else {
    setAllergies ((prevAllergies) => 
    prevAllergies.filter((allergy) => allergy !==value))
  }
}

console.log(diet)
console.log(allergies)

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
      <input type="checkbox" value="Peanuts" onChange={handleAllergyChange}/> Peanuts
      </label>
      <label >
      <input type="checkbox" value="Eggs" onChange={handleAllergyChange}/> Eggs
      </label>
      <label >
      <input type="checkbox" value="Dairy" onChange={handleAllergyChange}/> Dairy
      </label>
  
    </>
  );
}

export default Filters;
