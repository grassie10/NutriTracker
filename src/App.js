import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";
import NutrientCount from "./components/NutrientCount";
import { useData } from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "./icon.png";
import InputDetails from "./components/InputDetails";

function App() {
  const [data, loading, error] = useData("/");
  const [foods, setFoods] = useState([]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  console.log(foods);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img width="70px" height="70px" src={icon} alt="logo_image" />
        <h1>NutriTracker</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SearchBar data={data} foods={foods} setFoods={setFoods} />
        <FoodList foods={foods} />
        <InputDetails />
        <NutrientCount foods={foods} />
      </div>
    </div>
  );
}

export default App;
