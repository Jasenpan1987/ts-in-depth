// creates a type that defines the field names and field types
interface IReportable {
  summary(): string;
}

interface IVehicle extends IReportable {
  name: string;
  year: Date;
  broken: boolean;
}

interface IDrink extends IReportable {
  name: string;
  color: string;
  carbonated: boolean;
  sugar: number;
}

const oldCivic = {
  name: "Civic",
  year: new Date("2000-02-18"),
  broken: true,
  summary() {
    return `${this.name} from ${this.year} ${
      this.broken ? "is broken" : "is working fine"
    }`;
  }
};

const drink = {
  name: "Coke",
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return `${this.name} (${this.color}) has ${this.sugar}`;
  }
};

// more generic and more reusable
const printSummary = ({ summary }: IReportable): void => {
  console.log(summary());
};

printSummary(oldCivic);
