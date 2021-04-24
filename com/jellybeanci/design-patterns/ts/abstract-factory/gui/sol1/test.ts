import {Client} from "./client";
import {ButtonFactory} from "./button-factory";

export class Test {
  public static main() {
    new Client(new ButtonFactory());
  }
}