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

    // changed by Dozi on 2018-12-05 21:38
    // sceneManagerをグローバルオブジェクトに変更
    window.sceneManager = new SceneManager();
  }

  render() {
    // 1秒に60回、特定のシーンのrenderを呼び出す
    window.sceneManager.drawScene();
    this.sceneManager = new SceneManager();
  }

  // Gameクラスのコンストラクタの処理が終えてからでないと，gameにアクセスできないため，メソッドを分割する
  setup() {
    window.sceneManager.switchScene(SCENE.TITLE);
  }

  render() {
    game.stage.update();
  }
}
