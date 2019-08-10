import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  template = (): string => `
    <div>
      <input class="name-input" placeholder="${this.model.get("name")}" />
      <button class="set-name">Set Name</button>
      <button class="set-age">Set random age</button>
      <button class="save-data">Save Name and Age</button>
    </div>
  `;

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-data": () => {
        this.model.save();
      }
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
