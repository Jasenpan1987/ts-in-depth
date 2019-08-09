import { AxiosResponse } from "axios";
import {
  IMaybeIdentifyable,
  IAttributes,
  IEvents,
  ISync
} from "../interfaceAndType/interface";

export class Model<T extends IMaybeIdentifyable> {
  constructor(
    private attributes: IAttributes<T>,
    private events: IEvents,
    private sync: ISync<T>
  ) {}

  // be careful!!!!
  // if we want to initialize the events, attributes instance
  // in side the constructor rather than what we have above,
  // passing the instance directly into the constructor, we
  // cannot use the on = xxx syntax below, it will give error
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set = (props: T) => {
    this.attributes.set(props);
    this.events.trigger("change");
  };

  fetch = () => {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("cannot fetch without id");
    }

    this.sync.fetch(id).then(({ data }) => {
      if (data) {
        this.set(data);
      }
    });
  };

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch(error => {
        this.trigger("error");
      });
  }
}
