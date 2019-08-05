import { NumberCollection } from "./NumberCollection";
import { CharCollection } from "./CharCollection";
import { LinkedList } from "./LinkedList";

let nums = new NumberCollection([2, 1, 19, 0, 22]);
nums.sort();
console.log(nums);

let str = new CharCollection("UiAoEfTT");
str.sort();
console.log(str);

let linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(2);
linkedList.add(18);
linkedList.add(-2);
linkedList.print();
linkedList.sort();
linkedList.print();
