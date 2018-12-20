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

  delete() {
    if (this.nowScene !== null) {
      this.nowScene.eventManager.deleteAll();
    }
    this.root.stage.removeChild(this.nowScene);
  }

  tick() {
    this.nowScene.tick();
  }
}

class Scene extends GameObject {
  constructor(parent) {
    super(parent);

    this.timer = new ChildTimer(this);
    this.eventManager = new EventManager(this);
  }

  tick() {
    this.timer.tick();
    this.eventManager.tick();
  }
}

class TitleScene extends Scene {
  constructor(parent) {
    super(parent);

    this.root.score = 0;

    this.background = new TitleBackground(this);
    this.addChild(this.background);

    this.titleLogo = new TitleLogo(this);
    this.addChild(this.titleLogo);

    this.startButton = new StartButton(this);
    this.addChild(this.startButton);

    this.optionButton = new OptionButton(this);
    this.addChild(this.optionButton);
  }

  tick() {
    super.tick();
  }
}

class OptionScene extends Scene {
  constructor(parent) {
    super(parent);
    this.background = new SimpleBackground(this, '#eeeeee');
    this.addChild(this.background);

    this.backButton = new ToTitleButton(this, this.root.width / 2, this.root.height / 4 * 3);
    this.addChild(this.backButton);

    this.debugInfo = new DebugOption(this);
    this.addChild(this.debugInfo);
  }

  tick() {
    super.tick();
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

    this.statusBar.tick();
    this.debugInfo.tick();

    if (this.prevTime !== this.time) {
      console.log(this.time);
      this.root.score += 10;
    }

    if (this.prevTime !== this.time && this.time === 5) {
      this.eventManager.generate(EVENT.QUAKE);
    }
    if (this.prevTime !== this.time && this.time === 10) {
      this.eventManager.generate(EVENT.TSUNAMI);
    }

    if (this.player.nowCell.state === MAP_STATE.FLOOD) {
      this.root.sceneManager.switch(SCENE.GAMEOVER);
    }
  }
}

class GameoverScene extends Scene {
  constructor(parent) {
    super(parent);

    //this.background = new GameoverBackground(this);
    this.background = new SimpleBackground(this);
    this.addChild(this.background);

    this.gameoverLogo = new GameoverLogo(this);
    this.addChild(this.gameoverLogo);

    this.scoreInfo = new GeneralText(this, 'score: ' + this.root.score, this.root.width / 2, this.root.height / 2, '100px mplus', undefined, 'center', 'middle');
    this.addChild(this.scoreInfo);

    this.endButton = new ToTitleButton(this, this.root.width / 2, this.root.height / 4 * 3);
    this.addChild(this.endButton);
  }

  tick() {
    super.tick();
  }
}
