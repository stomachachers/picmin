class GameObject {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  isClick(clickX, clickY) {
    if (this.x <= clickX && clickX < this.x + this.width) {
      if (this.y <= clickY && clickY < this.y + this.height) {
        return true;
      }
    }
    else {
      return false;
    }
  }
}
