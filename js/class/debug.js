class DebugOverlay extends GameObject {
	constructor(parent) {
		super(parent);

    this.visible = false;
    
    this.playerPosX = new GeneralText(this, 'x: ' + this.parent.player.posX, 0, 200, '50px mplus');
    this.addChild(this.playerPosX);
    this.playerPosY = new GeneralText(this, 'y: ' + this.parent.player.posY, 150, 200, '50px mplus');
    this.addChild(this.playerPosY);

    this.addEventListener('tick', this.tick.bind(this));
  }
  
  changeVisible() {
    if(this.visible == false){
      this.visible = true;
    }else{
      this.visible = false;
    }
  }

  tick() {
    // TODO addchildしてるのに動かない
    this.playerPosX.text = 'hoge: ' + this.parent.player.posX;
    this.addChild(this.playerPosX);
  }
}