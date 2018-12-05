class Human extends GameObject {
  constructor() {
    super();
  }
}

class Player extends Human {
  constructor() {
    super();

    this.width = 50;
    this.height = 50;
    this.x = game.stage.canvas.width / 2;
    this.y = game.stage.canvas.height / 2;

    this.body = new createjs.Shape();
    this.body.graphics.beginFill('#d9eb52');
    this.body.graphics.drawCircle(0, 0, 50);
    this.body.graphics.endFill();

    this.addChild(this.body);
  }
}
