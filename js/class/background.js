class Background extends GameObject {
  constructor(parent) {
    super(parent);

    this.x = 0;
    this.y = 0;
    this.sizeX = 480;
    this.sizeY = 480;
    this.scrollSpeed = 3;  
    this.width = this.sizeX * (this.root.width / this.sizeX) * 2;
    this.height = this.sizeY * (this.root.height / this.sizeY) * 2; 

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
    if(bg.x > this.root.width) {
      bg.x -= bg.sizeX;
      target.to({x: bg.x - bg.sizeX});
    }
    target.to({x: bg.x + bg.scrollSpeed});
    if(bg.y > this.root.height) {
      bg.y -= bg.sizeY;
      target.to({y: bg.y - bg.sizeY});
    }
    target.to({y: bg.y + bg.scrollSpeed});
  }
}
