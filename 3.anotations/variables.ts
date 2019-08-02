const apples: number = 5; // type anotation, try to tell ts the type of the variable
let speed: string = "fast";

let nothing: undefined = undefined;

// objects
const now: Date = new Date();

const colors: string[] = ["red", "green"];
let numbers: number[] = [1, 2, 3];

// classes
class Car {}

const car: Car = new Car();

// object literal
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20
};

// Function
type MyFuncType = (a: number, b: number) => number;
const myFunc: MyFuncType = (a, b) => a + b;

const myNumber = 2; // type inference, ts figure out the type of myNumber by itself

let myNumber2;
myNumber2 = 10; // ts can not figure out by itself

// where do we need type anotations
// 1. when a function returns any type
const json = "{'x': 10, 'y': 20}";
const cord: { x: number; y: number } = JSON.parse(json); // JSON.parse returns "any" type

// 2. when we declear variable in one line, and initialize it later
let words = ["red", "green", "blue"];
let fundWord: boolean | undefined;

for (let i = 0; i < words.length; i += 1) {
  if (words[i] === "blue") {
    fundWord = true;
  }
}

// 3. when a variable's type can not be inferred
const nums = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i += 1) {
  if (nums[i] > 0) {
    numAboveZero = nums[i];
  }
}
