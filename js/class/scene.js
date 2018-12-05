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
    this.addChild(this.startButton);

    game.stage.addChild(this);
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
