import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template = () => `
    <div>
      <h2>User details</h2>
      <h4>${this.model.get("name")}</h4>
      <p>${this.model.get("age")}</p>
    </div>
  `;
}
