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

class Grid extends createjs.Container {
  constructor() {
    super();

    this.x = 0;
    this.y = 0;

    let count = 0;
    this.line = new createjs.Shape();
    this.line.graphics.beginStroke('#808080');
    this.line.graphics.setStrokeStyle(1);

    for (count = 0; count * CELL_WIDTH < game.canvas.width || count % 2 === 0; count++) {
      this.line.graphics.moveTo(count * CELL_WIDTH, 0);
      this.line.graphics.lineTo(count * CELL_WIDTH, game.canvas.height + CELL_HEIGHT);
    }
    this.width = count * CELL_WIDTH;
    this.line.regX = this.width / 2;
    this.line.x = game.canvas.width / 2;

    for (count = 0; count * CELL_HEIGHT < game.canvas.height || count % 2 === 0; count++) {
      this.line.graphics.moveTo(0, count * CELL_HEIGHT);
      this.line.graphics.lineTo(game.canvas.width + CELL_WIDTH, count * CELL_HEIGHT);
    }
    this.height = count * CELL_HEIGHT;
    this.line.regY = this.height / 2;
    this.line.y = game.canvas.height / 2;

    this.addChild(this.line);
  }
}
