import { Model } from "../models/Model";

export abstract class View<T extends Model<P>, P> {
  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindEvents = (fragment: DocumentFragment) => {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach(elem => {
        elem.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  };

  bindModel = () => {
    this.model.on("change", () => {
      this.render();
    });
  };

  render = (): void => {
    this.parent.innerHTML = "";
    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();
    this.bindEvents(templateElem.content);
    this.parent.appendChild(templateElem.content);
  };
}
