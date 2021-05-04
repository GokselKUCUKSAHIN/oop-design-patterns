import {Sorter} from "./sorter";

export class BubbleSort implements Sorter {
  sort(array: number[]): number[] {
    const len = array.length;
    const arr = [...array];
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}