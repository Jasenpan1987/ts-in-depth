import { ILocation } from "./ILocation";
import faker from "faker";
import { IMappable } from "./CustomMap";

export class Company implements IMappable {
  companyName: string;
  location: ILocation;
  catchPhrase: string;
  markerColor: string = "red";
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  getMarkerContent() {
    return `<div>
      <p><strong>${this.companyName}</strong></p>
      <p><i>${this.catchPhrase}</i></p>
    </div>`;
  }
}
