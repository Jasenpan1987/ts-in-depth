import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";

export type UserProps = {
  id?: number;
  name?: string;
  age?: number;
};

const API_END_POINT = "http://localhost:3000/users";

export class User extends Model<UserProps> {
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
}
