import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';
import NutrientCount from './components/NutrientCount';
import { useData } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './icon.png';

function App() {
  const [data, loading, error] = useData('/');
  const [foods, setFoods] = useState([]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  console.log(foods);

  return (
    <div className='App'>
      <img src={icon} />
      <h1>NutriTracker</h1>
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
      <button type="button" className="btn btn-outline-secondary" onClick = {()=> {setFoods([])}}> clear </button>
      <FoodList foods={foods} />
      <NutrientCount foods={foods}/>
    </div>
  );
}

export default App;
