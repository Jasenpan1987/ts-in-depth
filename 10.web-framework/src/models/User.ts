import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";

export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const API_END_POINT = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static createUserCollection = () => {
    return new Collection<User, UserProps>(
      new Eventing(),
      API_END_POINT,
      (data: UserProps) => User.createUser(data)
    );
  };

  static createUser = (attrs: UserProps): User => {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(API_END_POINT)
    );
  };

  // users own methods
  isAdminUser(): boolean {
    return this.get("id") === 1;
  }

  setRandomAge(): void {
    this.set({ age: Math.ceil(Math.random() * 100) });
  }

  setName(name: string): void {
    this.set({ name });
  }
}
