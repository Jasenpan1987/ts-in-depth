import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  template = (): string => `
    <div>
      <h1>User form</h1>
      <div>${this.model.get("name")}</div>
      <div>${this.model.get("age")}</div>
      <button class="set-age">Set random age</button>
      <hr />
      <input class="name-input" />
      <button class="set-name">Click Me</button>
    </div>
  `;

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick
    };
  };

  onSetAgeClick = () => {
    this.model.setRandomAge();
  };

  onSetNameClick = () => {
    const input: HTMLInputElement = this.parent.querySelector(".name-input");
    if (input) {
      const value = input.value;
      this.model.setName(value);
    }
  };
}
