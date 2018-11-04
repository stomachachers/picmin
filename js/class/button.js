class Button extends GameObject {
  constructor(ctx) {
    super(ctx);
  }
}

class StartButton extends Button {
  constructor(ctx) {
    super(ctx);
  }

  draw() {
    this.ctx.fillStyle = 'rgb(200, 0, 0)';
    this.ctx.fillRect(10, 10, 100, 100);
  }
}
