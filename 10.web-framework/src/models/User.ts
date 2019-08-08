import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

type Callback = () => void;

export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const API_END_POINT = "http://localhost:3000/users";
export class User {
  // we kind of hard code these class because they are unlikely to change
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(API_END_POINT);
  public attributes: Attributes<UserProps>;

  constructor(userProps: UserProps) {
    this.attributes = new Attributes(userProps);
  }

  // bad example of deligation, because we need to lookup and
  // use the same signature. Andlater we need to change in two places
  // on(eventName: string, callback: Callback): void {
  //   this.events.on(eventName, callback);
  // }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set = (props: UserProps) => {
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
        // we referenced this.set,
        // because we want to trigger
        // the change event
        this.set(data);
      }
    });
  };

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then(response => {
        this.trigger("save");
      })
      .catch(error => {
        this.trigger("error");
      });
  }
}
