// ====== example of class generics
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(idx: number): number {
    return this.collection[idx];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(idx: number): string {
    return this.collection[idx];
  }
}

// make the above into a generic
class ArrayOfSomething<T> {
  constructor(public collection: T[]) {}

  get(idx: number): T {
    return this.collection[idx];
  }
}

// dont need to specify the type
const stuff = new ArrayOfSomething(["abc", "def"]);

// ====== example of function generics
function printStirngs(arr: string[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printNumbers(arr: number[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printSomethings<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

printSomethings(["a", "b", 1]);

// ====== example of constrains generics
class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface IPrintable {
  print(): void;
}

// IPrintable constrains the passed in types need to have a print method
function printHousesOrCars<T extends IPrintable>(arr: T[]): void {
  for (let item of arr) {
    item.print();
  }
}

printHousesOrCars([new House(), new House()]); // works
// printHousesOrCars([1,2,3]); // not working, because number doesn't have print method
