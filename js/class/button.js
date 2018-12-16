class Button extends GameObject {
  constructor(parent) {
    super(parent);
  }
}

class StartButton extends Button {
  constructor(parent) {
    super(parent);

    this.width = 180;
    this.height = 60;
    this.x = this.root.width / 2;
    this.y = this.root.height / 4 * 3;

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

    this.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.root.sceneManager.switch(SCENE.GAME);
  }
}

class CrossButton extends Button {
  constructor(parent) {
    super(parent);

    this.x = this.root.width - 100;
    this.y = this.root.height - 100;

    this.radius = 18;
    this.color = '#ffffffaa';

    // 上
    this.up = new createjs.Shape();
    this.up.x = 0;
    this.up.y = -35;
    this.up.graphics.beginFill(this.color);
    this.up.graphics.drawCircle(0, 0, this.radius);
    this.up.graphics.endFill();
    this.addChild(this.up);

    this.up.addEventListener('click', this.onClickUp.bind(this));

    // 右
    this.right = new createjs.Shape();
    this.right.x = 35;
    this.right.y = 0;
    this.right.graphics.beginFill(this.color);
    this.right.graphics.drawCircle(0, 0, this.radius);
    this.right.graphics.endFill();
    this.addChild(this.right);

    this.right.addEventListener('click', this.onClickRight.bind(this));

    // 下
    this.down = new createjs.Shape();
    this.down.x = 0;
    this.down.y = 35;
    this.down.graphics.beginFill(this.color);
    this.down.graphics.drawCircle(0, 0, this.radius);
    this.down.graphics.endFill();
    this.addChild(this.down);

    this.down.addEventListener('click', this.onClickDown.bind(this));

    // 左
    this.left = new createjs.Shape();
    this.left.x = -35;
    this.left.y = 0;
    this.left.graphics.beginFill(this.color);
    this.left.graphics.drawCircle(0, 0, this.radius);
    this.left.graphics.endFill();
    this.addChild(this.left);

    this.left.addEventListener('click', this.onClickLeft.bind(this));
  }

  onClickUp() {
    let target = createjs.Tween.get(this.parent.player);
    target.to({y: this.parent.player.y - CELL_HEIGHT}, this.parent.player.speed);
  }

  onClickRight() {
    let target = createjs.Tween.get(this.parent.player);
    target.to({x: this.parent.player.x + CELL_WIDTH}, this.parent.player.speed);
  }

  onClickDown() {
    let target = createjs.Tween.get(this.parent.player);
    target.to({y: this.parent.player.y + CELL_HEIGHT}, this.parent.player.speed);
  }

  onClickLeft() {
    let target = createjs.Tween.get(this.parent.player);
    target.to({x: this.parent.player.x - CELL_WIDTH}, this.parent.player.speed);
  }
}
