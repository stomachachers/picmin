// ゲームに登場するすべてのオブジェクトは，GameObjectクラスを継承する
class GameObject extends createjs.Container {
  constructor() {
    super();

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.belongScene;
  }
}

class SideBar extends GameObject {
  constructor() {
    super();

    this.width = game.dispWidth;
    this.height = game.dispHeight;
    this.x = 0;
    this.y = 0;

    this.left = new createjs.Shape();
    this.left.graphics.beginFill('#00000020');
    this.left.graphics.drawRect(0, 0, this.width, this.height);
    this.left.graphics.endFill();
    this.addChild(this.left);

    this.right = new createjs.Shape();
    this.right.graphics.beginFill('#00000020');
    this.right.graphics.drawRect(game.width - this.width, 0, this.width, this.height);
    this.right.graphics.endFill();
    this.addChild(this.right);
    console.log(this.left);
    console.log(this.right);
  }
}

class Grid extends GameObject {
  constructor() {
    super();

    this.x = 0;
    this.y = 0;

    let count = 0;
    this.line = new createjs.Shape();
    this.line.graphics.beginStroke('#808080');
    this.line.graphics.setStrokeStyle(1);

    for (count = 0; count * CELL_WIDTH < game.width || count % 2 === 0; count++) {
      this.line.graphics.moveTo(count * CELL_WIDTH, 0);
      this.line.graphics.lineTo(count * CELL_WIDTH, game.height + CELL_HEIGHT);
    }
    this.width = count * CELL_WIDTH;
    this.line.regX = this.width / 2;
    this.line.x = game.width / 2;

    for (count = 0; count * CELL_HEIGHT < game.height || count % 2 === 0; count++) {
      this.line.graphics.moveTo(0, count * CELL_HEIGHT);
      this.line.graphics.lineTo(game.width + CELL_WIDTH, count * CELL_HEIGHT);
    }
    this.height = count * CELL_HEIGHT;
    this.line.regY = this.height / 2;
    this.line.y = game.height / 2;

    this.addChild(this.line);
  }
}
