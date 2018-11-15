class Button extends GameObject {
  constructor(ctx) {
    super(ctx);
  }
}

class StartButton extends Button {
  constructor(ctx, width, height) {
    super(ctx);
    this.width = 180;
    this.height = 60;
    this.x = width / 2 - this.width / 2;
    this.y = height / 4 * 3 - this.height;   
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
      //SCENE を TITLEからGAMEに変更させる。
      // changeScene(GAME);  
    }
  }
}
