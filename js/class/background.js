class Background extends GameObject {
  constructor() {
    super();

    this.x = 0;
    this.y = 0;
    this.sizeX = 480;
    this.sizeY = 480;
    this.width = this.sizeX * 4;
    this.height = this.sizeY * 4;
    this.belongScene;

    this.img = document.getElementById('building');
    this.bg = new createjs.Shape();
    this.bg.regX = this.width / 2;
    this.bg.regY = this.height / 2;
    this.bg.graphics.beginBitmapFill(this.img, 'repeat');
    this.bg.graphics.drawRect(0, 0, this.width, this.height);
    this.bg.graphics.endFill();
    this.addChild(this.bg);

    createjs.Ticker.addEventListener('tick', this.update.bind(this))
  }

  update() {
    // 画面をスクロールさせるアニメーション
    let bg = this;
    let target = createjs.Tween.get(bg);
    target.to({x: bg.x + 2});
    if(bg.x > game.canvas.width) {
        target.to({x: bg.x - bg.sizeX});
    }
    target.to({y: bg.y + 2});
    if(bg.y > game.canvas.height) {
        target.to({y: bg.y - bg.sizeY});
    }
  }
}
