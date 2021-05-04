import {Sorter} from "./sorter";

export interface Client {
  setSorter(sorter: Sorter): void;

  sortArray(array: number[]): number[];
}