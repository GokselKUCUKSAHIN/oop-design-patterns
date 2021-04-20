export class SingletonObject {
  private static init = (_ => {
    console.log("Singleton Object STATIC BLOCK");
  })();
  private nameProperty: string;

  public constructor(name: string) {
    this.nameProperty = name;
  }

  public sayName(): void {
    console.log("My name is ", this.nameProperty);
    console.log("Hi");
  }
}