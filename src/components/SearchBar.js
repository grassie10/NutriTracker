import React from "react";

const SearchBar = ({ setSearchFilter }) => {
  const handleChange = (event) => {
    setSearchFilter(event.target.value);
  };

  return (
    <form action="/" method="get">
      <input
        onChange={handleChange}
        type="text"
        id="header-search"
        placeholder="Search Food Items"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
