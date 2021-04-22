import {Employee} from "./employee";

export interface Factory {
  create(name: string): Employee;
}