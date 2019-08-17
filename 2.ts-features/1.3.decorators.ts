class Boat {
  color: string = "red";
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }
  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}
// decorator arguments:
// 1. the prototype of the Object
// 2. property / method / accessor (get) that attaches this decorator
// 3. property descriptor

// the decorator will apply when the class is run, not when
// the instance of the class is created, and it only runs once

function testDecorator(target: any, key: string): void {
  console.log("Target:: ", target, "Key:: ", key);
}

// // how does decorator implemented?
// var __decorate = function(decorators, target, key, desc) {
//   var desc = Object.getOwnPropertyDescriptor(target, key);

//   for (let decorator of decorators) {
//     decorator(target, key, desc);
//   }
// };

// why use decorator?
class Boat2 {
  color: string = "red";
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error("Not working");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;
  desc.value = function() {
    try {
      method();
    } catch {
      console.log("Oops, boat is sunk");
    }
  };
}

new Boat2().pilot();
// PropertyDecorator is the configuration of the object
// writable: boolean -> whether this property can be changed
// enumerable: boolean -> whether this property can be for...in looped
// value: any -> current value of this property
// configurable: boolean -> property defination can be changed or deleted

const car = {
  make: "Honda",
  year: 2002
};

Object.getOwnPropertyDescriptor(car, "make");
// { value: "Honda", writable: true, enumerable: true, configurable: true }
Object.defineProperty(car, "make", { writable: false });
// car.make = "BMW";
// console.log(car.make) // still "Honda"

// decorator in factory
class Boat3 {
  color: string = "red";
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }

  @logError2("Nooooooooooooo!!!")
  pilot(): void {
    throw new Error("Not working");
  }
}

// decorator factory
function logError2(errorMsg: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch {
        console.log(errorMsg);
      }
    };
  };
}

new Boat3().pilot();

// advanced decorators
@classDecorator
class Boat4 {
  @testDecorator2
  color: string = "red";
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }

  pilot(
    @paramDecorator speed: string,
    @paramDecorator weight: number,
    @paramDecorator something: string
  ): void {
    if (speed === "fast") {
      console.log("FAST!!!", weight);
    } else {
      console.log("stopped", something);
    }
  }
}

function testDecorator2(target: any, key: string) {
  console.log(target);
  console.log(key);
  console.log(target[key]); // undefined, target is the PROTOTYPE of the instance
}

function paramDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(consturctor: typeof Boat4) {
  console.log(consturctor);
}
