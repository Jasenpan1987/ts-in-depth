import { ISortable } from "./ISortable";
import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter implements ISortable {
  constructor(public data: number[]) {
    super();
  }

  compare(idx: number): boolean {
    return this.data[idx] > this.data[idx + 1];
  }

  swap(idx: number): void {
    let temp = this.data[idx];
    this.data[idx] = this.data[idx + 1];
    this.data[idx + 1] = temp;
  }

  get length() {
    return this.data.length;
  }
}
