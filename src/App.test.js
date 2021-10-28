import { screen } from "@testing-library/react";
import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NutrientCount from "./components/NutrientCount";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

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

it("renders with or without a name", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Loading...");

  // act(() => {
  //   render(<NutrientCount />, container);
  // });
  // expect(container.textContent).toBe("Average Calories: 2250 cal");

  // act(() => {
  //   render(<App />, container);
  // });
  // expect(container.textContent).toContainElement("Nutritracker");
  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});
