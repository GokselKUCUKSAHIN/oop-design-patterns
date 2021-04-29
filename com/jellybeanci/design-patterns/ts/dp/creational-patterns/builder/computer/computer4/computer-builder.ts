import {ComputerBuilderInterface} from "./computer-builder-interface";
import {Computer} from "../domain/computer";
import {CPU} from "../domain/cpu";
import {RAM} from "../domain/ram";
import {HDD} from "../domain/hdd";
import {GraphiscCard} from "../domain/graphisc-card";
import {Display} from "../domain/display";
import {Keyboard} from "../domain/keyboard";
import {Mouse} from "../domain/mouse";

export class ComputerBuilder implements ComputerBuilderInterface {

  private name: string;
  private cpu: CPU;
  private ram: RAM;
  private hdd: HDD;
  private graphicCard: GraphiscCard;
  private display: Display;
  private keyboard: Keyboard;
  private mouse: Mouse;

  constructor(name: string) {
    this.name = name;
  }

  build(): Computer {
    const computer = Computer.computer_4(this.name, this.cpu, this.ram, this.hdd, this.graphicCard, this.display, this.keyboard, this.mouse);
    return computer;
  }

  buildCPU(): ComputerBuilderInterface {
    this.cpu = new CPU();
    return this;
  }

  buildDisplay(): ComputerBuilderInterface {
    this.display = new Display();
    return this;
  }

  buildGraphicCard(): ComputerBuilderInterface {
    this.graphicCard = new GraphiscCard();
    return this;
  }

  buildHDD(): ComputerBuilderInterface {
    this.hdd = new HDD();
    return this;
  }

  buildKeyboard(): ComputerBuilderInterface {
    this.keyboard = new Keyboard();
    return this;
  }

  buildMouse(): ComputerBuilderInterface {
    this.mouse = new Mouse();
    return this;
  }

  buildRAM(): ComputerBuilderInterface {
    this.ram = new RAM();
    return this;
  }
}