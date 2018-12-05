class Game {
  constructor() {
    // canvas要素を取得する
    let canvas = document.getElementById('canvas');

    // デバイスごとにcanvasのサイズを決定する
    if (getDevice() === 'sp') {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    if (getDevice() === 'pc') {
      canvas.width = CANVAS_WIDTH_PC;
      canvas.height = window.innerHeight;
    }
    console.log('canvas.width :', canvas.width);
    console.log('canvas.height:', canvas.height);

    // canvas要素をCreateJSで操作する
    this.stage = new createjs.Stage('canvas');

    // 描画のタイミングモードをRAF（RequestAnimationFrame）に設定する
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.render);

    this.sceneManager = new SceneManager();
  }
  render() { 
    // 1秒に60回、特定のシーンのrenderを呼び出す
    game.stage.update();
  }

  // Gameクラスのコンストラクタの処理が終えてからでないと，gameにアクセスできないため，メソッドを分割する
  setup() {
    this.sceneManager.switchScene(SCENE.TITLE);
  }

}
