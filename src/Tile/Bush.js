class Bush extends Tile {
  constructor(x, y) {
    super(x, y)
    this.image = "./images/bush.png";
    this.crossable = false;
  }

  isCrossable(fighter) {
    return fighter instanceof Hind ? true : this.crossable;
  }
}