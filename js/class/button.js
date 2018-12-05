class Button extends GameObject {
  constructor() {
    super();
  }

  onClick() {
    // どのボタンにも共通する処理
  }
}

class StartButton extends Button {
  constructor() {
    super();

    this.width = 180;
    this.height = 60;
    this.x = game.stage.canvas.width / 2;
    this.y = game.stage.canvas.height / 4 * 3;
    this.belongScene;    // 自身の所属するシーン

    // changed by Dozi on 2018-12-05 22:04
    // 各描画部分をrender関数へ移動

    this.addEventListener('click', this.onClick.bind(this));
  }

  render() {
    // ベース部分
    this.base = new createjs.Shape();
    this.base.graphics.beginFill('#f26b7a');
    this.base.graphics.drawRoundRect(-1 * this.width / 2, -1 * this.height / 2, this.width, this.height, 10);
    this.base.graphics.endFill();
    this.addChild(this.base);
    
    // テキスト部分
    this.text = new createjs.Text('START', '44px sans-serif', '#f0f2dc');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    this.addChild(this.text);
    
    // これまで移動させて大丈夫だったか…？
    stage.addChild(this);
  }

  onClick() {
    super.onClick();

    game.sceneManager.switchScene(SCENE.GAME);
  }
}

class CrossButton extends Button {
  constructor() {
    super();

    this.x = game.stage.canvas.width - 300;
    this.y = game.stage.canvas.height - 300;

    // 上
    this.up = new createjs.Shape();
    this.up.x = 50;
    this.up.y = 0;
    this.up.graphics.beginFill('#87796f');
    this.up.graphics.moveTo(0, 50);
    this.up.graphics.lineTo(25, 0);
    this.up.graphics.lineTo(50, 50);
    this.up.graphics.lineTo(0, 50);
    this.up.graphics.endFill();
    this.addChild(this.up);

    this.up.addEventListener('click', this.onClickUp.bind(this));

    // 右
    this.right = new createjs.Shape();
    this.right.x = 100;
    this.right.y = 50;
    this.right.graphics.beginFill('#87796f');
    this.right.graphics.moveTo(0, 0);
    this.right.graphics.lineTo(50, 25);
    this.right.graphics.lineTo(0, 50);
    this.right.graphics.lineTo(0, 0);
    this.right.graphics.endFill();
    this.addChild(this.right);

    this.right.addEventListener('click', this.onClickRight.bind(this));

    // 下
    this.down = new createjs.Shape();
    this.down.x = 50;
    this.down.y = 100;
    this.down.graphics.beginFill('#87796f');
    this.down.graphics.moveTo(0, 0);
    this.down.graphics.lineTo(50, 0);
    this.down.graphics.lineTo(25, 50);
    this.down.graphics.lineTo(0, 0);
    this.down.graphics.endFill();
    this.addChild(this.down);

    this.down.addEventListener('click', this.onClickDown.bind(this));

    // 左
    this.left = new createjs.Shape();
    this.left.x = 0;
    this.left.y = 50;
    this.left.graphics.beginFill('#87796f');
    this.left.graphics.moveTo(50, 0);
    this.left.graphics.lineTo(50, 50);
    this.left.graphics.lineTo(0, 25);
    this.left.graphics.lineTo(50, 0);
    this.left.graphics.endFill();
    this.addChild(this.left);

    this.left.addEventListener('click', this.onClickLeft.bind(this));
  }

  onClickUp() {
    super.onClick();

    let target = createjs.Tween.get(this.belongScene.player);
    target.to({y: this.belongScene.player.y - 100}, 500);
  }

  onClickRight() {
    super.onClick();

    let target = createjs.Tween.get(this.belongScene.player);
    target.to({x: this.belongScene.player.x + 100}, 500);
  }

  onClickDown() {
    super.onClick();

    let target = createjs.Tween.get(this.belongScene.player);
    target.to({y: this.belongScene.player.y + 100}, 500);
  }

  onClickLeft() {
    super.onClick();

    let target = createjs.Tween.get(this.belongScene.player);
    target.to({x: this.belongScene.player.x - 100}, 500);
  }
}
