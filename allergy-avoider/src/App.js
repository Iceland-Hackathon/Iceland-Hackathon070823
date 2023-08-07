import './App.css';
import Header from './components/Header';
import React from 'react';
import Filters from './components/Filters';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
    <Header />
    <Filters />
    <ProductList />
    </div>
  );
}

export default App;
