const DIRECTIONS = new Map();
DIRECTIONS.set(1, "N");
DIRECTIONS.set(2, "S");
DIRECTIONS.set(3, "E");
DIRECTIONS.set(4, "W");

class Monster extends Fighter {
  constructor(name, x, y) {
    super(name, x, y)
    this.weapon = null;
    this.shield = null;
    this.experience = 500;
  }

  getDirection() {
    return DIRECTIONS.get(Math.ceil(Math.random() * 4));
  }
}
