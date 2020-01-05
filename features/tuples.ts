const drink = {
  color: 'brown',
  carbonates: true,
  sugar: 40
};

//  typer alies
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';

const sprite: Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
