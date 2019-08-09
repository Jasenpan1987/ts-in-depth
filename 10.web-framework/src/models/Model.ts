import { AxiosPromise, AxiosResponse } from "axios";

interface IAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(props: T): void;
  getAll(): T;
}

interface ISync<T extends IMaybeIdentifyable> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

interface IMaybeIdentifyable {
  id?: number;
}

type Callback = () => void;

interface IEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends IMaybeIdentifyable> {
  constructor(
    private attributes: IAttributes<T>,
    private events: IEvents,
    private sync: ISync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

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
