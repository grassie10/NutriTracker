import React from 'react';

const FoodList = ({foods}) => {


    return (
        <ul>
            {foods.map((food,index) => (
            <li key={index}>
                {food.name}
            </li>
            ))}

        </ul>

    );
  };

export default FoodList;