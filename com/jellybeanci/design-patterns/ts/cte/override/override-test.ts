export class OverrideTest {
  private name: string;
  private id: number;

  public constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
  }

  public toString(): string {
    return `Override Test Object [name=${this.name}, id=${this.id}]`;
  }
}