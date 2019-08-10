import { IEvents, ISync } from "../interfaceAndType/interface";
import Axios, { AxiosResponse } from "axios";

export class Collection<T, P> {
  public items: T[] = [];

  constructor(
    private event: IEvents,
    private endPoint: string,
    private deserialize: (data: P) => T
  ) {}

  fetch = (): void => {
    Axios.get(this.endPoint).then((response: AxiosResponse) => {
      response.data.forEach((record: P) => {
        this.items.push(this.deserialize(record));
      });
      this.event.trigger("change");
    });
  };

  get on() {
    return this.event.on;
  }

  get trigger() {
    return this.event.trigger;
  }
}
