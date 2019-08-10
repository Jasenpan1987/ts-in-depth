import { User } from "../models/User";

export class UserForm {
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
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel = () => {
    this.model.on("change", () => {
      this.render();
    });
  };

  bindEvents = (fragment: DocumentFragment) => {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach(elem => {
        elem.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  };

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

  render = (): void => {
    this.parent.innerHTML = "";
    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();
    this.bindEvents(templateElem.content);
    this.parent.appendChild(templateElem.content);
  };
}
