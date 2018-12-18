class SceneManager extends GameObject {
  constructor(parent) {
    super(parent);

    this.nowScene = null;
  }

  switch(scene) {
    this.root.stage.removeChild(this.nowScene);

    if (scene === SCENE.TITLE) {
      this.nowScene = new TitleScene(this);
    }
    if (scene === SCENE.GAME) {
      this.nowScene = new GameScene(this);
    }

    this.root.stage.addChild(this.nowScene);
  }

  tick() {
    this.nowScene.tick();
  }
}

class Scene extends GameObject {
  constructor(parent) {
    super(parent);

    this.timer = new ChildTimer(this);
  }

  tick() {
    this.timer.tick();
  }
}

class TitleScene extends Scene {
  constructor(parent) {
    super(parent);

    this.background = new Background(this);
    this.addChild(this.background);

    this.titleLogo = new TitleLogo(this);
    this.addChild(this.titleLogo);

    this.startButton = new StartButton(this);
    this.addChild(this.startButton);
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
  }

  tick() {
    super.tick();

    console.log(this.prevTime, this.time);
    if (this.prevTime !== this.time && this.time === 5) {
      this.root.eventManager.generate(EVENT.QUAKE);
    }
  }
}
