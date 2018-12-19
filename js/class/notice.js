class Notice extends GameObject {
  constructor(parent) {
    super(parent);
  }
}

class EventNotice extends Notice {
  constructor(parent) {
    super(parent);

    this.type = this.parent.type;

    this.x = this.root.width / 2;
    this.y = this.root.height / 4;
    this.width = 600;
    this.height = 200;

    this.logoImg = document.getElementById('caution');

    this.base = new createjs.Bitmap(this.logoImg);
    this.base.x = 20;
    this.base.y = -70;
    this.base.regX = this.width / 2;
    this.base.regY = this.height / 2;
    this.base.scaleY = 0.8;
    this.addChild(this.base);

    if (this.type === EVENT.QUAKE) {
      this.textBody = '地震発生!';
    }
    if (this.type === EVENT.TSUNAMI) {
      this.textBody = '津波到達!';
    }
    this.text = new createjs.Text(this.textBody, '100px mplus', '#000000');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    

    this.addChild(this.text);
  }
}
