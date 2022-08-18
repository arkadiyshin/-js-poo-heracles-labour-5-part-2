class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = "";
    this.crossable = true;
  }

  isCrossable(fighter) {
    return this.crossable;
  }
}