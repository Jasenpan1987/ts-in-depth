class Vehicle {
  constructor(
    public color: string,
    private model: string,
    private type: string
  ) {}

  private getModel(): string {
    return this.model;
  }

  protected getName(): string {
    return "hello";
  }

  drive(): void {
    console.log("drive.....");
    console.log(this.getModel());
  }

  honk(): void {
    console.log("beep....");
  }
}

const vehicle = new Vehicle("blue", "abc123", "Bycicle");
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
  constructor(color: string, model: string, public wheels: number) {
    super(color, model, "Car");
  }

  stop(): void {
    console.log("car is stopped....");
  }

  drive(): void {
    console.log("car is driving....");
  }

  saySomething(): void {
    console.log(this.getName());
  }
}

const myCar = new Car("green", "def123", 4);
myCar.drive();
console.log(myCar.color);
