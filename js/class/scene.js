class Scene extends GameObject {
  constructor() {
    super();
  }
}

class NoneScene extends Scene {
  constructor() {
    super();
  }

  delete() {}
}

class TitleScene extends Scene {
  constructor() {
    super();

    this.startButton = new StartButton();
    this.startButton.belongScene = this;
    // ハードコーディングは正義
    this.titleBg = new Background();
    this.titleBg.belongScene = this;

    this.addChild(this.titleBg);
    this.addChild(this.startButton);

    game.stage.addChild(this);
  }

  /*render() {
    // render関数記入例
    
    // 背景のクリア
    // 本来はcrearRectで行うべき…？
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill("#FFFFFF");
    this.bg.graphics.drawRect(0,0,game.stage.canvas.width, game.stage.canvas.height);
    this.bg.graphics.endFill();

    this.addChild(this.bg);

    // 要素の描画
    this.titleBg.render();

    this.addChild(this.titleBg);
    
    // this.startButton.render();

  }*/

  delete() {
    game.stage.removeChild(this);
  }
}

class GameScene extends Scene {
  constructor() {
    super();

    this.grid = new Grid();
    this.grid.belongScene = this;
    this.addChild(this.grid);

    this.player = new Player();
    this.player.belongScene = this;
    this.addChild(this.player);

    this.crossButton = new CrossButton();
    this.crossButton.belongScene = this;
    this.addChild(this.crossButton);

    game.stage.addChild(this);
  }

  delete() {
    game.stage.removeChild(this);
  }
}

class SceneManager {
  constructor() {
    this.noneScene = new NoneScene();
    this.nowScene = this.noneScene;
  }

  switchScene(scene) {
    this.nowScene.delete();

    if (scene === SCENE.TITLE) {
      this.titleScene = new TitleScene();
      this.nowScene = this.titleScene;
    }

    if (scene === SCENE.GAME) {
      this.gameScene = new GameScene();
      this.nowScene = this.gameScene;
    }
  }
}
