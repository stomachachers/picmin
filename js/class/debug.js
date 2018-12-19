class DebugOverlay extends GameObject {
	constructor(parent) {
		super(parent);

    this.visible = false;
    
    this.playerPosX = new GeneralText(this, 'x: ' + this.parent.player.posX, 0, 200, '50px mplus');
    this.addChild(this.playerPosX);

    this.playerPosY = new GeneralText(this, 'y: ' + this.parent.player.posY, 150, 200, '50px mplus');
    this.addChild(this.playerPosY);
  }
  
  changeVisible() {
    if(this.visible == false){
      this.visible = true;
    }else{
      this.visible = false;
    }
  }

  tick() {
    this.playerPosX.text.text = 'x: ' + this.parent.player.posX;
    this.playerPosY.text.text = 'y: ' + this.parent.player.posY;
  }
}

class DebugOption extends GameObject {
  constructor(parent) {
    super(parent);

    this.x = 100;
    this.y = 100;

    let canvasContainer = document.getElementById('canvas-container');
    this.info = new createjs.Text(document.body.clientHeight+' '+window.innerHeight , '50px mplus-bold', '#000000');
    this.addChild(this.info);
  }
}
