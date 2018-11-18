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
    this.x = stage.canvas.width / 2;
    this.y = stage.canvas.height / 4 * 3;

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

    stage.addChild(this);

    this.addEventListener('click', this.onClick);
  }

  onClick() {
    super.onClick();
    // ゲームをスタートさせる処理
    console.log('click');
    game.sceneManager.switchScene(SCENE.GAME);
  }
}
