class Button extends GameObject {
  constructor(ctx) {
    super(ctx);
  }
}

class StartButton extends Button {
  constructor(ctx) {
    super(ctx);
    this.x = 285;
    this.y = 600;
    this.width = 180;
    this.height = 60;
  }

  draw() {
    this.ctx.fillStyle = 'rgb(242, 107, 122)';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.font = '44px serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'rgb(240, 242, 220)';
    this.ctx.fillText('START', this.x + this.width/2, this.y + this.height/2);
  }

  onClick(clickX, clickY) {
    if (super.isClick(clickX, clickY)) {
      console.log('click');
    }
  }
}
