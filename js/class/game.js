class Game {
  constructor() {
    // canvas要素を取得する
    this.canvas = document.getElementById('canvas');

    // デバイスごとにcanvasのサイズを決定する
    if (getDevice() === 'sp') {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    if (getDevice() === 'pc') {
      this.canvas.width = CANVAS_WIDTH_PC;
      this.canvas.height = window.innerHeight;
    }
    console.log('canvas.width :', this.canvas.width);
    console.log('canvas.height:', this.canvas.height);

    // canvas要素をCreateJSで操作する
    this.stage = new createjs.Stage('canvas');

    // 描画のタイミングモードをRAF（RequestAnimationFrame）に設定する
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.render);

    this.sceneManager = new SceneManager();
  }

  // Gameクラスのコンストラクタの処理が終えてからでないと，gameにアクセスできないため，メソッドを分割する
  setup() {
    this.sceneManager.switchScene(SCENE.TITLE);
  }

  render() {
    game.stage.update();
  }
}
