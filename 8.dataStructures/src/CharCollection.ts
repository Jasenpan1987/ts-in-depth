import { ISortable } from "./ISortable";
import { Sorter } from "./Sorter";

export class CharCollection extends Sorter implements ISortable {
  constructor(public data: string) {
    super();
  }

  compare(idx: number) {
    return this.data[idx].toLowerCase() > this.data[idx + 1].toLowerCase();
  }

  swap(idx: number) {
    const head = this.data.slice(0, idx);
    const mid = `${this.data[idx + 1]}${this.data[idx]}`;
    const tail = this.data.slice(idx + 2);
    this.data = `${head}${mid}${tail}`;
  }

  get length() {
    return this.data.length;
  }
}
