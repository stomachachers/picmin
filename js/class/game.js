class Game {
  constructor() {
    // canvas要素を取得する
    this.canvas = document.getElementById('canvas');
    this.canvasContainer = document.getElementById('canvas-container');

    this.canvas.width = 1080;
    this.canvas.height = 1920;
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // デバイスの画面サイズからcanvasの拡大率を決定する
    if (getDevice() === 'sp') {
      // スクロールを禁止する
      window.addEventListener('touchmove', function(event) {
        event.preventDefault();
      }, {passive: false});

      // 縦を基準に計算する
      if (this.canvasContainer.offsetHeight / 16 * 9 > this.canvasContainer.offsetWidth) {
        this.dispWidth = this.canvasContainer.offsetHeight / 16 * 9;
        this.dispHeight = this.canvasContainer.offsetHeight;
        this.scale = this.dispHeight / this.height;
        this.canvas.style.transform = 'scale(' + this.scale + ')' + ' translateY(' + (this.canvasContainer.offsetHeight / 2 - this.dispHeight / 2) / this.scale + 'px)';
      }

      // 横を基準に計算する
      if (this.canvasContainer.offsetWidth / 9 * 16 > this.canvasContainer.offsetWidth) {
        this.dispWidth = this.canvasContainer.offsetWidth;
        this.dispHeight = this.canvasContainer.offsetWidth / 9 * 16;
        this.scale = this.dispWidth / this.width;
        this.canvas.style.transform = 'scale(' + this.scale + ')' + ' translateX(' + (this.canvasContainer.offsetWidth / 2 - this.dispWidth / 2) / this.scale + 'px)';
      }
    }
    if (getDevice() === 'pc') {
      this.dispWidth = this.canvasContainer.offsetHeight / 16 * 9;
      this.dispHeight = this.canvasContainer.offsetHeight;
      this.scale = this.dispHeight / this.height;
      this.canvas.style.transform = 'scale(' + this.scale + ')' + ' translateX(' + (this.canvasContainer.offsetWidth / 2 - this.dispWidth / 2) / this.scale + 'px)';
    }
    console.log('width:', this.dispWidth, ', height:', this.dispHeight);

    // canvas要素をCreateJSで操作する
    this.stage = new createjs.Stage('canvas');

    // 描画のタイミングモードをRAF（RequestAnimationFrame）に設定する
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.render.bind(this));
  }

  // Gameクラスのコンストラクタの処理が終えてからでないと，gameにアクセスできないため，メソッドを分割する
  setup() {
    this.sceneManager = new SceneManager();
    this.sceneManager.switchScene(SCENE.TITLE);
  }

  render() { 
    this.stage.update();
  }
}
