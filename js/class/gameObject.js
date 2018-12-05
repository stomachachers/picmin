// ゲームに登場するすべてのオブジェクトは，GameObjectクラスを継承する
class GameObject extends createjs.Container {
  constructor() {
    super();
    // idを持たせる！
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
    for (count = 0; CELL_WIDTH*count < game.canvas.width || CELL_HEIGHT*count < game.canvas.height; count++) {
      this.line.graphics.moveTo(CELL_WIDTH * count, 0);
      this.line.graphics.lineTo(CELL_WIDTH * count, game.canvas.height + CELL_HEIGHT);
      this.line.graphics.moveTo(0, CELL_HEIGHT * count);
      this.line.graphics.lineTo(game.canvas.width + CELL_WIDTH + 10, CELL_HEIGHT * count);
    }
    this.line.graphics.endStroke();

    this.line.x = (game.canvas.width - CELL_WIDTH * (count-1)) / 2;
    this.line.y = (game.canvas.height - CELL_HEIGHT * (count-1)) / 2;
    this.addChild(this.line);
  }
}
