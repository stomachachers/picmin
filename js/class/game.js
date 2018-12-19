class Game {
  constructor() {
    // canvas要素を取得する
    this.canvas = document.getElementById('canvas');
    this.canvasContainer = document.getElementById('canvas-container');

    this.canvas.width = 1080;
    this.canvas.height = 1920;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.root = this;

    if (getDevice() === 'sp') {
      // スマートフォンの場合，スクロールを禁止する
      window.addEventListener('touchmove', function(event) {
        event.preventDefault();
      }, {passive: false});

      // 縦を基準に計算する
      if (this.canvasContainer.offsetHeight / 16 * 9 > this.canvasContainer.offsetWidth) {
        this.dispWidth = this.canvasContainer.offsetHeight / 16 * 9;
        this.dispHeight = this.canvasContainer.offsetHeight;
        this.scale = this.dispHeight / this.height;
        this.transX = (this.canvasContainer.offsetHeight / 2 - this.dispHeight / 2) / this.scale;
      }
      // 横を基準に計算する
      if (this.canvasContainer.offsetWidth / 9 * 16 > this.canvasContainer.offsetWidth) {
        this.dispWidth = this.canvasContainer.offsetWidth;
        this.dispHeight = this.canvasContainer.offsetWidth / 9 * 16;
        this.scale = this.dispWidth / this.width;
        this.transX = (this.canvasContainer.offsetWidth / 2 - this.dispWidth / 2) / this.scale;
      }
    }
    if (getDevice() === 'pc') {
      // 縦を基準に計算する
      this.dispWidth = this.canvasContainer.offsetHeight / 16 * 9;
      this.dispHeight = this.canvasContainer.offsetHeight;
      this.scale = this.dispHeight / this.height;
      this.transX = (this.canvasContainer.offsetWidth / 2 - this.dispWidth / 2) / this.scale;
    }

    this.canvas.style.transform = 'scale(' + this.scale + ')' + ' translateX(' + this.transX + 'px)';
    console.log('width:', this.dispWidth, ', height:', this.dispHeight);

    // canvas要素をCreateJSで操作する
    this.stage = new createjs.Stage('canvas');

    this.timer = new Timer(this);

    // 描画のタイミングモードをRAF（RequestAnimationFrame）に設定する
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.tick.bind(this));

    this.sceneManager = new SceneManager(this);
    this.sceneManager.switch(SCENE.TITLE);

    this.eventManager = new EventManager(this);
  }

  tick() {
    this.timer.tick();

    this.sceneManager.tick();

    this.render();
  }

  render() { 
    this.stage.update();
  }
}
