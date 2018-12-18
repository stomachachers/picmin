class Button extends GameObject {
  constructor(parent) {
    super(parent);

    // 全ボタンに影をつける
    this.shadowX = 5;
    this.shadowY = 5;
    this.shadowBlur = 10;
    this.shadowColor = "#55555577";
    this.shadow = new createjs.Shadow(this.shadowColor, this.shadowX, this.shadowY, this.shadowBlur);
  }
}

class StartButton extends Button {
  constructor(parent) {
    super(parent);

    this.width = 540;
    this.height = 180;
    this.x = this.root.width / 2;
    this.y = this.root.height / 4 * 3 - 180;

    // ベース部分
    this.base = new createjs.Shape();
    this.base.graphics.beginFill('#f26b7a');
    this.base.graphics.drawRoundRect(-1 * this.width / 2, -1 * this.height / 2, this.width, this.height, 10);
    this.base.graphics.endFill();
    this.base.shadow = this.shadow;
    this.addChild(this.base);

    // テキスト部分
    this.text = new createjs.Text('START', '132px mplus', '#f0f2dc');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    this.addChild(this.text);

    this.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.root.sceneManager.switch(SCENE.GAME);
  }
}

class OptionButton extends Button {
  constructor(parent) {
    super(parent);

    this.width = 540;
    this.height = 180;
    this.x = this.root.width / 2;
    this.y = this.root.height / 4 * 3 + 180;

    // ベース部分
    this.base = new createjs.Shape();
    this.base.graphics.beginFill('#fc2374');
    this.base.graphics.drawRoundRect(-1 * this.width / 2, -1 * this.height / 2, this.width, this.height, 10);
    this.base.graphics.endFill();
    this.base.shadow = this.shadow;
    this.addChild(this.base);

    // テキスト部分
    this.text = new createjs.Text('OPTION', '125px mplus', '#f0f2dc');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    this.addChild(this.text);

    this.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.root.sceneManager.switch(SCENE.OPTION);
  }
}

class ToTitleButton extends Button {
  constructor(parent, x, y) {
    super(parent);

    this.width = 540;
    this.height = 180;
    this.x = x;
    this.y = y;

    // ベース部分
    this.base = new createjs.Shape();
    this.base.graphics.beginFill('#999999');
    this.base.graphics.drawRoundRect(-1 * this.width / 2, -1 * this.height / 2, this.width, this.height, 10);
    this.base.graphics.endFill();
    this.base.shadow = this.shadow;
    this.addChild(this.base);

    // テキスト部分
    this.text = new createjs.Text('タイトルへ', '100px mplus', '#f0f2dc');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    this.addChild(this.text);

    this.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.root.sceneManager.switch(SCENE.TITLE);
  }
}

class CrossButton extends Button {
  constructor(parent) {
    super(parent);

    this.x = this.root.width - 300;
    this.y = this.root.height - 300; //この位置を割合に変えて、キャンバスサイズに比例したボタンサイズ・位置にする

    this.radius = 70;
    this.interval = this.radius * 2;
    this.color = '#ffffffaa';

    // 上
    this.up = new createjs.Shape();
    this.up.x = 0;
    this.up.y = -1 * this.interval;
    this.up.graphics.beginFill(this.color);
    this.up.graphics.drawCircle(0, 0, this.radius);
    this.up.graphics.endFill();
    this.up.shadow = this.shadow;
    this.addChild(this.up);

    this.up.addEventListener('click', this.onClick.bind(this, DIRECTION.UP));

    // 右
    this.right = new createjs.Shape();
    this.right.x = this.interval;
    this.right.y = 0;
    this.right.graphics.beginFill(this.color);
    this.right.graphics.drawCircle(0, 0, this.radius);
    this.right.graphics.endFill();
    this.right.shadow = this.shadow;
    this.addChild(this.right);

    this.right.addEventListener('click', this.onClick.bind(this, DIRECTION.RIGHT));

    // 下
    this.down = new createjs.Shape();
    this.down.x = 0;
    this.down.y = this.interval;
    this.down.graphics.beginFill(this.color);
    this.down.graphics.drawCircle(0, 0, this.radius);
    this.down.graphics.endFill();
    this.down.shadow = this.shadow;
    this.addChild(this.down);

    this.down.addEventListener('click', this.onClick.bind(this, DIRECTION.DOWN));

    // 左
    this.left = new createjs.Shape();
    this.left.x = -1 * this.interval;
    this.left.y = 0;
    this.left.graphics.beginFill(this.color);
    this.left.graphics.drawCircle(0, 0, this.radius);
    this.left.graphics.endFill();
    this.left.shadow = this.shadow;
    this.addChild(this.left);

    this.left.addEventListener('click', this.onClick.bind(this, DIRECTION.LEFT));
  }

  onClick(direction) {
    this.parent.player.move(direction);
  }
}

class DebugButton extends Button {
  constructor(parent) {
    super(parent);

    this.shape = new createjs.Shape();
    // 右上
    this.x = this.root.width - 100;
    this.y = 100;
    this.radius = 50;
    this.shape.graphics.beginFill('#ac62ffaa');
    this.shape.graphics.drawCircle(0, 0, this.radius);
    this.shape.graphics.endFill();
    this.shape.shadow = this.shadow;
    this.addChild(this.shape);

    this.shape.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.parent.debugInfo.changeVisible();
  }
}