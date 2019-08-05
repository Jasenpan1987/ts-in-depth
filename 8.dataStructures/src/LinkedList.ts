import { ISortable } from "./ISortable";
import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements ISortable {
  head: Node | null = null;
  constructor() {
    super();
  }
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length() {
    if (!this.head) {
      return 0;
    }

    let len = 1;
    let node = this.head;
    while (node.next) {
      len += 1;
      node = node.next;
    }
    return len;
  }

  at(idx: number) {
    if (!this.head) {
      throw "Index out of bound";
    }

    let i = 0;
    let node: Node | null;
    node = this.head;
    while (node) {
      if (i === idx) {
        return node;
      }
      i += 1;
      node = node.next;
    }
    throw "Index out of bound";
  }

  compare(idx: number): boolean {
    if (!this.head) {
      throw "List is empty";
    }

    if (!this.head.next) {
      throw "Only has one element in the list";
    }

    return this.at(idx).data > this.at(idx + 1).data;
  }

  swap(idx: number) {
    // this is not the actuall solution
    const leftNode = this.at(idx);
    const rightNode = this.at(idx + 1);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print() {
    if (!this.head) {
      return "Empty List";
    }
    let node = this.head;
    let output = "";
    while (node.next) {
      output += `[${node.data}] -> `;
      node = node.next;
    }
    output += `[${node.data}]`;

    console.log(output);
  }
}
