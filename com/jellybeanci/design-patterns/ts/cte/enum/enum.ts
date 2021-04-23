enum Size {
  SMALL, MEDIUM, LARGE, EXTRA_LARGE
}

class Enum {
  public static main()
  {
    this.printState(Size.EXTRA_LARGE);
    this.printState(Size.MEDIUM);
    this.printState(Size.LARGE);
    this.printState(Size.SMALL);
  }
  public static printState(size: Size)
  {
    console.log("Selected size is:", size, "Reversed Map Test:", Size[size]);
  }
}
Enum.main();