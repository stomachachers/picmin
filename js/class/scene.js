class Scene extends GameObject {
  constructor() {
    super();
  }
}

class NoneScene extends Scene {
  constructor() {
    super();
  }

  render() {

  }

  delete() {}
}

class TitleScene extends Scene {
  constructor() {
    super();

    this.startButton = new StartButton();
    // ハードコーディングは正義
    this.title_bg = new Background();

    this.addChild(this.startButton);

    game.stage.addChild(this);
  }

  render() {
    // render関数記入例
    
    // 背景のクリア
    // 本来はcrearRectで行うべき…？
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill("#000000");
    this.bg.graphics.drawRect(0,0,window.stage.canvas.width, window.stage.canvas.height);
    this.bg.graphics.endFill();

    // 要素の描画
    this.title_bg.render();
    this.startButton.render();

  }

  delete() {
    game.stage.removeChild(this);
  }
}

class GameScene extends Scene {
  constructor() {
    super();

    this.crossButton = new CrossButton();
    this.crossButton.belongScene = this;
    this.addChild(this.crossButton);

    this.player = new Player();
    this.addChild(this.player);

    game.stage.addChild(this);
  }

  render() {

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

  // added by Dozi on 2018-12-05 21:41
  // SceneManagerにdrawSceneを追加。
  // 各sceneにrender関数を追加。
  // これにより、sceneからの描画が容易に。

  drawScene() {
    this.nowScene.render();
  }
}
