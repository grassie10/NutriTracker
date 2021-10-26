import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { useData } from './firebase';

function App() {
  const [data, loading, error] = useData('/');
  const [foods, setFoods] = useState([]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  console.log(foods);

  return (
    <div className='App'>
      <h1>NutriTracker</h1>
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    </div>
  );
}

export default App;
