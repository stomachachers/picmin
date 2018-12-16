class Human extends GameObject {
  constructor(parent) {
    super(parent);
  }
}

class Player extends Human {
  constructor(parent) {
    super(parent);

    this.width = 50;
    this.height = 50;
    this.x = this.root.width / 2;
    this.y = this.root.height / 2;
    this.speed = 300;

    this.body = new createjs.Shape();
    this.body.graphics.beginFill('#dc143c');
    this.body.graphics.drawCircle(0, 0, CELL_WIDTH / 2 - 5);
    this.body.graphics.endFill();

    this.addChild(this.body);
  }
}
