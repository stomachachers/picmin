class Notice extends GameObject {
  constructor(parent) {
    super(parent);
  }
}

class EventNotice extends Notice {
  constructor(parent) {
    super(parent);

    this.x = this.root.width / 2;
    this.y = this.root.height / 4;
    this.width = 600;
    this.height = 200;

    this.base = new createjs.Shape();
    this.base.regX = this.width / 2;
    this.base.regY = this.height / 2;
    this.base.graphics.beginFill('#f26b7a');
    this.base.graphics.drawRoundRect(0, 0, this.width, this.height, 10);
    this.base.graphics.endFill();
    this.addChild(this.base);

    this.text = new createjs.Text('地震発生!', '100px mplus', '#f0f2dc');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    
    this.addChild(this.text);
  }
}
