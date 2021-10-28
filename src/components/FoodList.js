import React from "react";

const FoodList = ({ foods }) => {
  return (
    <div style={{ padding: "30px" }}>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
