const add = (a: number, b: number): number => a + b;

const subtruct = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (msg: string): void => {
  console.log(msg);
};

const throwErr = (msg: string): never => {
  // never means never reach the end of the function
  throw new Error(msg);
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date + " is " + weather);
};

logWeather(forecast);
