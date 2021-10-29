//import axios from 'axios';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App";
import SearchBar  from './components/SearchBar';
import { unmountComponentAtNode } from "react-dom";
//import { act } from "react-dom/test-utils";
import NutrientCount from "./components/NutrientCount";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//jest.mock('axios');

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

//   /* const salmon = [
//     {
//       "name": "Salmon",
//       "usda_id": "15076",
//       "fat": 134000,
//       "calories": 2.31,
//       "proteins": 257000,
//       "carbohydrates": 0,
//       "serving": 150,
//       "nutrients": {
//         "Calcium": 280,
//         "Iron": 9,
//         "Potassium": 5050,
//         "Magnesium": 1220,
//         "Phosphorus": 3710,
//         "Sodium": 600,
//         "Iodine": 0.3,
//         "Zinc": 6,
//         "Copper": 1,
//         "Selenium": 0.47,
//         "Vitamin C": 41,
//         "Vitamin B12": 0.03,
//         "Vitamin B2": 2,
//         "Vitamin B3": 100,
//         "Vitamin B5": 9,
//         "Vitamin B6": 5,
//         "Vitamin B7": 0.05,
//         "Vitamin B9": 0.35,
//         "Vitamin A": 1.49,
//         "Tryptophan": 2880,
//         "Threonine": 11270,
//         "Isoleucine": 11850,
//         "Leucine": 20900,
//         "Lysine": 23620,
//         "Methionine": 7610,
//         "Phenylalanine": 10040,
//         "Valine": 13250,
//         "Histidine": 7570
//       }
//     }
//   ];

//   const promise = Promise.resolve({ foods: salmon });

//   axios.get.mockImplementationOnce(() => promise);

//   await act(async () => {
//     render(<App />, container);
//   });

//   await userEvent.click(screen.getByRole('Dropdown.Item'));

//   await act(() => promise);

//   expect(screen.getByRole('FoodList')).to; */

//   // act(() => {
//   //   render(<NutrientCount />, container);
//   // });
//   // expect(container.textContent).toBe("Average Calories: 2250 cal");

//   // act(() => {
//   //   render(<App />, container);
//   // });
//   // expect(container.textContent).toContainElement("Nutritracker");
//   // act(() => {
//   //   render(<Hello name="Jenny" />, container);
//   // });
//   // expect(container.textContent).toBe("Hello, Jenny!");

//   // act(() => {
//   //   render(<Hello name="Margaret" />, container);
//   // });
//   // expect(container.textContent).toBe("Hello, Margaret!");
 });