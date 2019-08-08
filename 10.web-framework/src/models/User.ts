import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  private API_END_POINT: string = "http://localhost:3000/users";
  // we kind of hard code the Eventing class because it's unlikely to change
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(key: string): string | number {
    return this.data[key];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
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
