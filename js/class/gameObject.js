// ゲームに登場するすべてのオブジェクトは，GameObjectクラスを継承する
class GameObject extends createjs.Container {
  constructor(parent) {
    super();

    this.parent = parent;
    this.root = this.parent.root;

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
}

class StatusBar extends GameObject {
  constructor(parent) {
    super(parent);

    this.width = this.root.width;
    this.height = 300;
    this.x = 0;
    this.y = 0;

    this.base = new createjs.Shape();
    this.base.graphics.beginFill('#33ccccff');
    this.base.graphics.drawRect(this.x, this.y, this.width, this.height);
    this.base.graphics.endFill();
    this.addChild(this.base);
  }
}

class Grid extends GameObject {
  constructor(parent) {
    super(parent);

    this.x = 0;
    this.y = 0;

    let count = 0;
    this.line = new createjs.Shape();
    this.line.graphics.beginStroke('#808080');
    this.line.graphics.setStrokeStyle(1);

    for (count = 0; count * CELL_WIDTH < this.root.width || count % 2 === 0; count++) {
      this.line.graphics.moveTo(count * CELL_WIDTH, 0);
      this.line.graphics.lineTo(count * CELL_WIDTH, this.root.height + CELL_HEIGHT);
    }
    this.width = count * CELL_WIDTH;
    this.line.regX = this.width / 2;
    this.line.x = this.root.width / 2;

    for (count = 0; count * CELL_HEIGHT < this.root.height || count % 2 === 0; count++) {
      this.line.graphics.moveTo(0, count * CELL_HEIGHT);
      this.line.graphics.lineTo(this.root.width + CELL_WIDTH, count * CELL_HEIGHT);
    }
    this.height = count * CELL_HEIGHT;
    this.line.regY = this.height / 2;
    this.line.y = this.root.height / 2;

    this.addChild(this.line);
  }
}
