import faker from "faker";
import { ILocation } from "./ILocation";
import { IMappable } from "./CustomMap";

// in typescript we don't use default export by convension
export class User implements IMappable {
  name: string;
  // the location field is an object, if we dont assign an object value here or
  // in the constructor the value of this field will be UNDEFINED!!!
  location: ILocation;
  markerColor: string = "green";

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  getMarkerContent(): string {
    return `<div>
      <h5>Username: ${this.name}</h5>
    </div>`;
  }
}
