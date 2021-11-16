import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import InputDetails from "../components/InputDetails";

describe("age arrow changes input", () => {
  var foods = [];
  const setFoods = (newList) => (foods = newList);

  test("button click", async () => {
    const { getByTestId } = render(<InputDetails />);
    const ageInput = getByTestId("age-input");
    fireEvent.change(ageInput, { target: { value: 20 } });

    expect(ageInput.value).toContain("20");
  });
});

describe("activity level selection changes input", () => {
  test("select values", () => {
    const { getByTestId } = render(
      <select data-testid="activity-select">
        <option data-testid="val0" value="0" title="Little or no exercise">
          Sedentary
        </option>
        <option
          value="1"
          data-testid="val1"
          title="Light exercise/sports 1-3 days/week"
        >
          Lightly active
        </option>
        <option
          value="2"
          data-testid="val2"
          title="Moderate exercise/sports 3-5 days/week"
        >
          Moderately active
        </option>
        <option
          value="3"
          data-testid="val3"
          title="Hard exercise/sports 6-7 days a week"
        >
          Very active
        </option>
        <option
          data-testid="val4"
          value="4"
          title="Very hard exercise/sports, physical job or 2x training"
        >
          Extra active
        </option>
      </select>
    );

    userEvent.selectOptions(getByTestId("activity-select"), ["1"]);

    expect(getByTestId("val1").selected).toBe(true);
    expect(getByTestId("val2").selected).toBe(false);
  });
});
