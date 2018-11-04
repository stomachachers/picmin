class GameObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}
