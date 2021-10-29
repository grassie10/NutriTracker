//import axios from 'axios';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App";
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

describe('App', () => {
  test('renders App component', async () => {
    render(<App />, container);
    expect(await screen.findByText("NutriTracker")).toBeInTheDocument();
    expect(await screen.getByTestId('calorieCount')).toBeInTheDocument();
    screen.debug();
  });
});

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
// });
