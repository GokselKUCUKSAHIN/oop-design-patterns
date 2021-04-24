import {GUIFactory} from "./gui-factory";
import {Component} from "./component";

export class Client {
  constructor(factory: GUIFactory) {
    let component: Component = factory.create();
    component.paint();
  }
}