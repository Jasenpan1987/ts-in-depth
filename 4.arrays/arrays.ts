const carMakers: string[] = ["toyota", "ford", "chevy"]; // typed array

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // string[][]

const car = carsByMake[0];
const myCar = carsByMake.pop();

// carMakers.push(100);

// arrays with multiple types
const importantDates = [new Date(), "2012-10-11", 2012]; // (string | Date)[]
importantDates.push("1999-10-18");
// importantDates.push(false);
