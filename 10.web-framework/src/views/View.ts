import { Model } from "../models/Model";

export abstract class View<T extends Model<P>, P> {
  abstract template(): string;
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  eventsMap = (): { [key: string]: () => void } => {
    return {};
  };

  regionsMap = (): { [key: string]: string } => {
    return {};
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

  bindModel = () => {
    this.model.on("change", () => {
      this.render();
    });
  };

  mapRegions = (fragment: DocumentFragment) => {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const elem = fragment.querySelector(selector);
      if (elem) {
        this.regions[key] = elem;
      }
    }
  };

  onRender = (): void => {};

  render = (): void => {
    this.parent.innerHTML = "";
    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();
    this.bindEvents(templateElem.content);
    this.mapRegions(templateElem.content);
    this.onRender();
    this.parent.appendChild(templateElem.content);
  };
}
