import axios, { AxiosResponse } from "axios";

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

type Callback = () => void;

export class User {
  private listeners: { [key: string]: Callback[] } = {};
  private API_END_POINT: string = "http://localhost:3000/users";
  constructor(private data: UserProps) {}

  get(key: string): string | number {
    return this.data[key];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }

  on(eventName: string, callback: Callback) {
    this.listeners[eventName] = [
      ...(this.listeners[eventName] || []),
      callback
    ];
  }

  trigger(eventName: string) {
    const handlers = this.listeners[eventName] || [];
    for (let handler of handlers) {
      handler();
    }
  }

  fetch(): void {
    axios.get(`${this.API_END_POINT}/${this.get("id")}`).then(
      (response: AxiosResponse<UserProps>): void => {
        console.log(response.data);
        this.set(response.data);
      }
    );
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      axios.put(`${this.API_END_POINT}/${id}`, this.data);
    } else {
      axios.post(`${this.API_END_POINT}`, this.data);
    }
  }
}
