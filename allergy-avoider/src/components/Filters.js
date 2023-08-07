import "./Filter.css";


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
    <div className="filters">
      {/* dietary requirements dropown */}
      <select onChange={handleDietChange}>
        <option value="">Dietary Preferences</option>
        <option value="Halal">Halal</option>
        <option value="Kosher">Kosher</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescatarian">Pescatarian</option>
      </select>

      {/* allergies checkbox */}

      <div className="allergies">
        <h3>Allergies</h3>
        <div className="allergyLabels">
        <label >
      <input type="checkbox" value="Peanuts" onChange={handleAllergyChange}/> Peanuts
      </label>
      <label >
      <input type="checkbox" value="Eggs" onChange={handleAllergyChange}/> Eggs
      </label>
      <label >
      <input type="checkbox" value="Dairy" onChange={handleAllergyChange}/> Dairy
      </label>
        </div>
      </div>
    </div>

    
  


  );
}

export default Filters;
