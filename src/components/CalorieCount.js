import React from 'react';

const CalorieCount = ({foods}) => {
    const calorieCount = foods.reduce((totalCalories, currentFood) =>  totalCalories + (currentFood.calories/currentFood.serving) , 0 );
    return (
    <div>
<div>
<p>Total Calories Consumed: {Math.round((calorieCount*1000))} cal</p>
</div>
<div>
<p>Average Calories: 2250 cal </p>
</div>
<div>
<p>Total Calories Consumed: {Math.round((calorieCount*1000))} cal</p>
</div>
<div>
<p>Average Calories: 2250 cal </p>
</div>

    </div>
    
    );
  };

export default CalorieCount;