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
    this.height = 260;
    this.x = 0;
    this.y = 0;

    this.base = new createjs.Shape();
    this.base.graphics.beginFill('#33ccccff');
    this.base.graphics.drawRect(this.x, this.y, this.width, this.height);
    this.base.graphics.endFill();
    this.addChild(this.base);

    this.score = new createjs.Text('score : ' + String(this.root.score), '50px mplus-bold', '#ffffff');
    this.score.x = 100;
    this.score.y = 100;
    this.addChild(this.score);
  }

  tick() {
    this.score.text = 'score : ' + String(this.root.score);
  }
}
