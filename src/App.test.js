//import axios from 'axios';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App";
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';
import { unmountComponentAtNode } from "react-dom";
//import { act } from "react-dom/test-utils";
import NutrientCount from "./components/NutrientCount";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// describe('App', () => {
//   test('renders App component', async () => {
//     render(<App />, container);
//     expect(await screen.findByText("NutriTracker")).toBeInTheDocument();
//     expect(await screen.getByTestId('calorieCount')).toBeInTheDocument();
//     screen.debug();
//   });
// });

// describe('Button', () => {
//   test('Button click', async () => {
//     render(<App />, container);
//     const {getByTestId} = render(<SearchBar />)
//     fireEvent.click(getByTestId('select'))
//     expect(await screen.getByTestId('search-bar')).
//     screen.debug();
//   });
// });
describe('Button', () => {
  const data = [
    {
      "name": "Beef liver",
      "usda_id": "13326",
      "fat": 53000,
      "calories": 1.91,
      "proteins": 291000,
      "carbohydrates": 51000,
      "serving": 100,
      "nutrients": {
        "Calcium": 60,
        "Iron": 65,
        "Potassium": 3520,
        "Magnesium": 210,
        "Phosphorus": 4970,
        "Sodium": 790,
        "Zinc": 53,
        "Copper": 143,
        "Manganese": 4,
        "Selenium": 0.36,
        "Vitamin C": 19,
        "Vitamin B12": 0.71,
        "Vitamin B1": 2,
        "Vitamin B2": 34,
        "Vitamin B3": 175,
        "Vitamin B5": 71,
        "Vitamin B6": 10,
        "Vitamin B7": 0.36,
        "Vitamin B9": 2.53,
        "Choline": 4260,
        "Vitamin A": 94.42,
        "Vitamin E": 5,
        "Vitamin K": 0.03,
        "Linoleic acid": 6590,
        "α-Linolenic acid": 170,
        "Tryptophan": 3680,
        "Threonine": 12150,
        "Isoleucine": 13520,
        "Leucine": 26700,
        "Lysine": 22470,
        "Methionine": 7590,
        "Phenylalanine": 15150,
        "Valine": 17610,
        "Histidine": 8790
      }}
  ]

  const foods = [];
  const setFoods = (newList) => foods = newList;

it('button click', async () => {
  const {getByTestId } = render(<SearchBar data={data} foods={foods} setFoods={setFoods}/>);
  const button = getByTestId('select');

  fireEvent.click(button);
  expect(
    getByTestId('search-bar')
  )
});




//   test('Button click', async () => {
//     const {getByTestId} = render(<SearchBar data={data} foods={foods} setFoods={setFoods}/>)
//     await fireEvent.click(getByTestId('select'))
//     let options = getAllByTestId('selecr-item')
//     expect(options[0].selecte).
//     screen.debug();
//   });
// });

// it("renders with or without a name", async () => {
//   await act(async () => {
//     //render(<App />, container);
//     render(<NutrientCount foods={[]}/>, container);
//   });
//   //expect(await screen.findByText("NutriTracker")).toBeInTheDocument();
//   //screen.debug();
//   console.log(container.NutrientCount);
//   expect(await container.querySelector("[data-testid='calorieCount']").textContent).toContain("Total Calories Consumed:");
 });

describe('Select Food Item', () => {
  test ('successfully displays selected food item', async () => {
    render(<App />);
    const searchDropdown = await screen.findByTestId('select');
    fireEvent.click(searchDropdown);
    const dropdownList = await screen.findAllByTestId('select-item')
    fireEvent.click(dropdownList[0]);
    const foodList = await screen.findByTestId('food-list');
    expect(foodList.textContent).toContain(dropdownList[0].textContent);
  })
})