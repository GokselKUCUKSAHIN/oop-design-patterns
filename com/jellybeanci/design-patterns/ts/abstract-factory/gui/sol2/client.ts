import {GUIFactory} from "./gui-factory";
import {Component} from "../sol1/component";

export class Client {
  constructor(factory: GUIFactory) {
    let button: Component = factory.createButton();
    button.paint();

    let list: Component = factory.createList();
    list.paint();

    let table: Component = factory.createTable();
    table.paint();
  }
}