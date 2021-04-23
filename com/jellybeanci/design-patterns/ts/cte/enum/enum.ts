enum Size {
  SMALL, MEDIUM, LARGE, EXTRA_LARGE
}

class Enum {
  public static main()
  {
    this.printState(Size.MEDIUM);
  }
  public static printState(size: Size)
  {
    console.log("Selected size is:", size);
    console.log(Size[size]);
  }
}
Enum.main();