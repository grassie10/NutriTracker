import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { useData } from "./firebase";

function App() {
  const [data, loading, error] = useData("/");
  const [searchFilter, setSearchFilter] = useState("");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;

  const filteredFoods = data.filter((item) =>
    item.name.toLowerCase().startsWith(searchFilter.toLowerCase())
  );
  return (
    <div className="App">
      <SearchBar setSearchFilter={setSearchFilter} />

      <ul>
        {filteredFoods.map((item) => (
          <li key={item}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
