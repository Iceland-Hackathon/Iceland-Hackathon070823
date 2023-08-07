import './App.css';
import Header from './components/Header';
import React, {useState} from 'react';
import Filters from './components/Filters';
import ProductList from './components/ProductList';


function App() {
const [diet, setDiet] = useState("")
const [allergies, setAllergies] = useState([])



  return (
    <div>
    <Header />
    <Filters allergies={allergies} diet={diet} setAllergies={setAllergies} setDiet={setDiet}/>
    <ProductList allergies={allergies} diet={diet} />
    </div>
  );
}

export default App;
