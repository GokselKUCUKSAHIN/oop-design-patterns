import {Sorter} from "./sorter";
import {BubbleSort} from "./bubble-sort";

export class Test {
  static main() {
    const sorter: Sorter = new BubbleSort();
    const myArray = [3, 6, 1, 3, -1, -6, 2, 7, 3, -5, 9, 3, -1, 4, 20, 7, 9];
    const sorted = sorter.sort(myArray);
    console.log("Original:", myArray);
    console.log("Sorted   ", sorted);
    console.log("Build-in ", myArray.sort((a, b) => a - b)); // it's mutates the original array.
    console.log("Original:", myArray);
  }
}

Test.main();