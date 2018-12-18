class Scene extends GameObject {
  constructor(parent) {
    super(parent);
  }
}

class TitleScene extends Scene {
  constructor(parent) {
    super(parent);

    this.background = new TitleBackground(this);
    this.addChild(this.background);

    this.titleLogo = new TitleLogo(this);
    this.addChild(this.titleLogo);

    this.startButton = new StartButton(this);
    this.addChild(this.startButton);

    this.root.stage.addChild(this);
  }
}

class GameScene extends Scene {
  constructor(parent) {
    super(parent);

    this.statusBar = new StatusBar(this);
    this.addChild(this.statusBar);

    this.board = new Board(this);
    this.addChild(this.board);

    this.player = new Player(this);
    this.addChild(this.player);

    this.crossButton = new CrossButton(this);
    this.addChild(this.crossButton);

    this.root.stage.addChild(this);
  }
}

class GameoverScene extends GameObject {
  constructor(parent) {
    super(parent);

    this.background = new GameoverBackground(this);
    this.addChild(this.background);

    this.endButton = new EndButton(this);
    this.addChild(this.endButton);

    this.root.stage.addChild(this);
  }
}

class SceneManager extends GameObject {
  constructor(parent) {
    super(parent);

    this.nowScene = null;
  }

  switch(scene) {
    this.delete();

    if (scene === SCENE.TITLE) {
      this.nowScene = new TitleScene(this);
    }
    if (scene === SCENE.GAME) {
      this.nowScene = new GameScene(this);
    }
    if (scene === SCENE.GAMEOVER) {
      this.nowScene = new GameoverScene(this);
    }
  }

  delete() {
    this.root.stage.removeChild(this.nowScene);
  }
}
