class Manager {
  constructor(game) {
    this.game = game;
  }
}

class SceneManager extends Manager {
  constructor(game) {
    super(game);
  }

  switchScene(scene) {
    if (scene === TITLE) {}
  }
}
