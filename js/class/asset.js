class Asset extends GameObject{
  constructor(parent){
    super(parent);
  }
}

class TitleLogo extends Asset{
  constructor(parent){
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