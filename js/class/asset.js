class Asset extends GameObject{
  constructor(parent){
    super(parent);
  }
}

class TitleLogo extends Asset {
  constructor(parent) {
    super(parent);

    this.x = this.root.width / 2;
    this.y = this.root.height * 0.2;
    this.logoImg = document.getElementById('logo');
    this.regX = this.logoImg.naturalWidth / 2;
    this.regY = this.logoImg.naturalHeight / 2;

    this.logo = new createjs.Bitmap(this.logoImg);

    this.addChild(this.logo);
  }
}

class GameoverLogo extends Asset {
  constructor(parent) {
    // ゲームオーバーテキスト
    super(parent);

    this.text = new createjs.Text('ゲームオーバー!', '120px mplus-bold', '#333333');
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    this.text.x = this.root.width / 2;
    this.text.y = this.root.height * 0.3;
    this.addChild(this.text);
  }
}

// 汎用テキストオブジェクト
class GeneralText extends Asset {
  constructor(parent, msg, x, y, font, color = '#000000') {
    super(parent);

    this.text = new createjs.Text(msg, font, color);
    this.text.textAlign = 'left';
    this.text.textBaseline = 'top';
    this.text.x = x;
    this.text.y = y;
    this.addChild(this.text);
  }
}