import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import SearchBar from '../components/SearchBar';
import NutrientCount from '../components/NutrientCount';

const handleSetFoods = () =>
  setFoods((prevItem) => ({
    ...prevItem,
    [index]: item.serving,
  }));

describe('vitamin a tests', () => {
  const data = [
    {
      name: 'Beef liver',
      usda_id: '13326',
      fat: 53000,
      calories: 1.91,
      proteins: 291000,
      carbohydrates: 51000,
      serving: 100,
      nutrients: {
        Calcium: 60,
        Iron: 65,
        Potassium: 3520,
        Magnesium: 210,
        Phosphorus: 4970,
        Sodium: 790,
        Zinc: 53,
        Copper: 143,
        Manganese: 4,
        Selenium: 0.36,
        'Vitamin C': 19,
        'Vitamin B12': 0.71,
        'Vitamin B1': 2,
        'Vitamin B2': 34,
        'Vitamin B3': 175,
        'Vitamin B5': 71,
        'Vitamin B6': 10,
        'Vitamin B7': 0.36,
        'Vitamin B9': 2.53,
        Choline: 4260,
        'Vitamin A': 94.42,
        'Vitamin E': 5,
        'Vitamin K': 0.03,
        'Linoleic acid': 6590,
        'α-Linolenic acid': 170,
        Tryptophan: 3680,
        Threonine: 12150,
        Isoleucine: 13520,
        Leucine: 26700,
        Lysine: 22470,
        Methionine: 7590,
        Phenylalanine: 15150,
        Valine: 17610,
        Histidine: 8790,
      },
    },
  ];

  var foods = {};
  const setFoods = (newList) => (foods = newList);

  test('button click to open search bar', async () => {
    const { getByTestId } = render(
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    );
    const button = getByTestId('select');
    userEvent.click(button);

    expect(getByTestId('search-bar'));
  });

  test('beef liver gets added', async () => {
    const { getByTestId } = render(
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    );
    const button = getByTestId('select');
    userEvent.click(button);

    const button2 = getByTestId('select-item');
    userEvent.click(button2);

    expect(foods).toStrictEqual({0: 100});
  });

  test('vitamin a count increases after adding beef liver', async () => {
    const { getByTestId } = render(
      <div>
        <SearchBar data={data} foods={foods} setFoods={setFoods} />
        <NutrientCount data={data} foods={foods} />
      </div>
    );

    const vitACount = getByTestId('vita-count');

    expect(vitACount.textContent).toContain(
      Math.round(data[0]['nutrients']['Vitamin A'] * 10000).toString()
    );
  });

  //

});


describe('proteins tests', () => {
  const data = [
    {
      "name": "Chicken liver",
      "usda_id": "05027",
      "fat": 65000,
      "calories": 1.67,
      "proteins": 245000,
      "carbohydrates": 9000,
      "serving": 100,
      "nutrients": {
        "Calcium": 110,
        "Iron": 116,
        "Potassium": 2630,
        "Magnesium": 250,
        "Phosphorus": 4050,
        "Sodium": 760,
        "Zinc": 40,
        "Copper": 5,
        "Manganese": 4,
        "Selenium": 0.82,
        "Vitamin C": 279,
        "Vitamin B12": 0.17,
        "Vitamin B1": 3,
        "Vitamin B2": 20,
        "Vitamin B3": 110,
        "Vitamin B5": 67,
        "Vitamin B6": 8,
        "Vitamin B7": 1.3,
        "Vitamin B9": 5.78,
        "Choline": 2900,
        "Vitamin A": 39.81,
        "Vitamin E": 8,
        "Linoleic acid": 7190,
        "α-Linolenic acid": 120,
        "Tryptophan": 2480,
        "Threonine": 10210,
        "Isoleucine": 11440,
        "Leucine": 21280,
        "Lysine": 18750,
        "Methionine": 6080,
        "Phenylalanine": 11600,
        "Valine": 14050,
        "Histidine": 7140,
      },
    },
  ];

  var foods = {};
  const setFoods = (newList) => (foods = newList);

  test('button click to open search bar', async () => {
    const { getByTestId } = render(
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    );
    const button = getByTestId('select');
    userEvent.click(button);

    expect(getByTestId('search-bar'));
  });

  test('Chicken liver gets added', async () => {
    const { getByTestId } = render(
      <SearchBar data={data} foods={foods} setFoods={setFoods} />
    );
    const button = getByTestId('select');
    userEvent.click(button);

    const button2 = getByTestId('select-item');
    userEvent.click(button2);

    expect(foods).toStrictEqual({0: 100});
  });

  test('proteins count increases after adding beef liver', async () => {
    const { getByTestId } = render(
      <div>
        <SearchBar data={data} foods={foods} setFoods={setFoods} />
        <NutrientCount data={data} foods={foods} />
      </div>
    );

    const vitACount = getByTestId('carb-count');

    expect(vitACount.textContent).toContain(
      "Total Carbohydrates Consumed: 9 g"
    );
  });

  //
  
});

describe('update average vitamin A count', () => {
  var foods = [];
  const setFoods = (newList) => (foods = newList);
  test('vitamin A count changes', async () => {
    const { getByTestId } = render(
      <div>
      <NutrientCount           
          data={[]}
          foods={foods}
          calories={30}
          vitaminA={30}
          carbs={30}/>
      </div>
    );

    const AverageVitACount = getByTestId('average-vita-count');

    expect(AverageVitACount.textContent).toContain(
      "Average Vitamin A: 30 μg"
    );
  });
});
