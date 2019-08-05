export abstract class Sorter {
  abstract length: number;
  abstract compare(idx: number): boolean;
  abstract swap(idx: number): void;

  sort(): void {
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len - i - 1; j += 1) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }
  }
}
