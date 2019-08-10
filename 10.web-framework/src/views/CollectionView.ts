import { Model } from "../models/Model";
import { Collection } from "../models/Collection";

export abstract class CollectionView<T, P> {
  abstract renderItem(item: T, itemParent: Element): void;
  constructor(public parent: Element, public collection: Collection<T, P>) {}

  render(): void {
    this.parent.innerHTML = "";
    const template = document.createElement("template");

    for (let item of this.collection.items) {
      const itemParent = document.createElement("div");
      this.renderItem(item, itemParent);
      template.content.append(itemParent);
    }

    this.parent.append(template.content);
  }
}
