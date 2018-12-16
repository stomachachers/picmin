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
    this.nowCell = this.parent.board.cells[this.posY][this.posX];
    this.isMoved = false;

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

  move(direction) {
    if (this.isMoved == false){
      this.isMoved = true;
      let target = createjs.Tween.get(this);
      if (direction === DIRECTION.UP && this.posY - 1 >= 0) {
        this.posY--;
        target.to({y: this.y - CELL_HEIGHT}, this.speed);
      }
      if (direction === DIRECTION.RIGHT && this.posX + 1 < this.parent.board.lenX) {
        this.posX++;
        target.to({x: this.x + CELL_WIDTH}, this.speed);
      }
      if (direction === DIRECTION.DOWN && this.posY + 1 < this.parent.board.lenY) {
        this.posY++;
        target.to({y: this.y + CELL_HEIGHT}, this.speed);
      }
      if (direction === DIRECTION.LEFT && this.posX - 1 >= 0) {
        this.posX--;
        target.to({x: this.x - CELL_WIDTH}, this.speed);
      }

      this.nowCell = this.parent.board.cells[this.posY][this.posX];

      setTimeout(function(){this.isMoved = false;}.bind(this), this.speed);
    }
  }
}
