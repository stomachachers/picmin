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
    if (scene === SCENE.OPTION) {
      this.nowScene = new OptionScene(this);
    }
    if (scene === SCENE.GAME) {
      this.nowScene = new GameScene(this);
    }
    if (scene === SCENE.GAMEOVER) {
      this.nowScene = new GameoverScene(this);
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

    this.background = new TitleBackground(this);
    this.addChild(this.background);

    this.titleLogo = new TitleLogo(this);
    this.addChild(this.titleLogo);

    this.startButton = new StartButton(this);
    this.addChild(this.startButton);

    this.optionButton = new OptionButton(this);
    this.addChild(this.optionButton);
  }
}

class OptionScene extends Scene {
  constructor(parent) {
    super(parent);
    this.background = new SimpleBackground(this, '#eeeeee');
    this.addChild(this.background);

    this.backButton = new ToTitleButton(this, this.root.width / 2, this.root.height / 4 * 3);
    this.addChild(this.backButton);
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

    this.debugButton = new DebugButton(this);
    this.addChild(this.debugButton);

    this.debugInfo = new DebugOverlay(this);
    this.addChild(this.debugInfo);
  }

  tick() {
    super.tick();

    if (this.prevTime !== this.time) {
      console.log(this.time);
    }

    if (this.prevTime !== this.time && this.time === 1) {
      this.root.eventManager.generate(EVENT.QUAKE);
    }
    if (this.prevTime !== this.time && this.time === 5) {
      this.root.eventManager.generate(EVENT.TSUNAMI);
    }
  }
}

class GameoverScene extends GameObject {
  constructor(parent) {
    super(parent);

    this.background = new GameoverBackground(this);
    this.addChild(this.background);

    this.gameoverLogo = new GameoverLogo(this);
    this.addChild(this.gameoverLogo);

    this.endButton = new ToTitleButton(this, this.root.width / 2, this.root.height / 4 * 3);
    this.addChild(this.endButton);

    this.root.stage.addChild(this);
  }
}