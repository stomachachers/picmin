class Human extends GameObject {
  constructor(parent) {
    super(parent);
  }
}

class Player extends Human {
  constructor(parent) {
    super(parent);

    this.posX = Math.floor(this.parent.board.lenX / 2);
    this.posY = 16;

    this.width = CELL_WIDTH - 10;
    this.height = CELL_HEIGHT - 10;
    this.x = this.parent.board.x + this.posX * CELL_WIDTH + CELL_WIDTH / 2;
    this.y = this.parent.board.y + this.posY * CELL_HEIGHT + CELL_HEIGHT / 2;
    this.speed = 300;

    this.body = new createjs.Shape();
    this.body.graphics.beginFill('#dc143c');
    this.body.graphics.drawCircle(0, 0, this.width / 2);
    this.body.graphics.endFill();

    this.addChild(this.body);
  }
}
