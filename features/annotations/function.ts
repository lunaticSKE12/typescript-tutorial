const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multipy = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return 'adsawd'
  // return null;
  // return undefined;
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };

logWeather(todaysWeather);
