import React from 'react';

const NutrientCount = ({ data, foods, calories, vitaminA, carbs }) => {
  const calorieCount = Object.keys(foods).reduce(
    (totalCalories, currentFoodIndex) =>
      totalCalories +
      (data[currentFoodIndex].calories / data[currentFoodIndex].serving) *
        foods[currentFoodIndex],
    0
  );
  var vitACount = 0;
  const foodKeys = Object.keys(foods);
  for (let i = 0; i < foodKeys.length; i++) {
    if (data[foodKeys[i]].nutrients['Vitamin A']) {
      console.log('i am not supposed to be here');
      console.log(vitACount);
      vitACount +=
        (data[foodKeys[i]].nutrients['Vitamin A'] / data[foodKeys[i]].serving) *
        foods[foodKeys[i]];
    }
  }

  const carbCount = Object.keys(foods).reduce(
    (totalCarbs, currentFoodIndex) =>
      totalCarbs +
      (data[currentFoodIndex].carbohydrates / data[currentFoodIndex].serving) *
        foods[currentFoodIndex],
    0
  );

  return (
    <div
      style={{ textAlign: 'left', padding: '30px', justifyContent: 'flex-end' }}
    >
      <div>
        <p>Total Calories Consumed: {Math.round(calorieCount * 1000)} cal</p>
      </div>
      <div>
        <p>Average Calories: {calories} cal</p>
      </div>
      <div>
        <p data-testid='vita-count'>
          Total Vitamin A Consumed: {Math.round(vitACount * 10000)} μg
        </p>
      </div>
      <div>
        <p>Average Vitamin A: {vitaminA} μg</p>
      </div>
      <div>
        <p data-testid='carb-count'>Total Carbohydrates Consumed: {Math.round(carbCount / 1000)} g</p>
      </div>
      <div>
        <p>Average Carbohydrates: {Math.round(carbs)} g </p>
      </div>
    </div>
  );
};

export default NutrientCount;
