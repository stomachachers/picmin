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
    stage.addChild(this);
  }

  delete() {
    stage.removeChild(this);
  }
}

class GameScene extends Scene {
  constructor() {
    super();

    this.addChild();
    stage.addChild(this);
  }

  delete() {
    stage.removeChild(this);
  }
}

class SceneManager {
  constructor() {
    this.nowScene = new NoneScene();
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
