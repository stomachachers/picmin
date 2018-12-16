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

class SideBar extends GameObject {
  constructor() {
    super();

    this.width = this.root.dispWidth;
    this.height = this.root.dispHeight;
    this.x = 0;
    this.y = 0;

    this.left = new createjs.Shape();
    this.left.graphics.beginFill('#00000020');
    this.left.graphics.drawRect(0, 0, this.width, this.height);
    this.left.graphics.endFill();
    this.addChild(this.left);

    this.right = new createjs.Shape();
    this.right.graphics.beginFill('#00000020');
    this.right.graphics.drawRect(this.root.width - this.width, 0, this.width, this.height);
    this.right.graphics.endFill();
    this.addChild(this.right);
    console.log(this.left);
    console.log(this.right);
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
