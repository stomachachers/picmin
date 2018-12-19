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
      // スクロールを禁止する
      window.addEventListener('touchmove', function(event) {
        event.preventDefault();
      }, {passive: false});

      // 縦を画面サイズに合わせる場合
      if (window.innerHeight / 16 * 9 <= window.innerWidth) {
        this.dispHeight = window.innerHeight;
        this.dispWidth = this.dispHeight / 16 * 9;
        this.scale = this.dispHeight / this.height;
        this.canvas.style.transform = 'translateX(' + (window.innerWidth / 2 - this.dispWidth / 2) + 'px) scale(' + this.scale + ')';
      }
      // 横を画面サイズに合わせる場合
      if (window.innerHeight / 16 * 9 > window.innerWidth) {
        this.dispWidth = window.innerWidth;
        this.dispHeight = this.dispWidth / 9 * 16;
        this.scale = this.dispWidth / this.width;
        this.canvas.style.transform = 'translateX(' + (window.innerWidth / 2 - this.dispWidth / 2) + 'px) scale(' + this.scale + ')';
      }
    }
    if (getDevice() === 'pc') {
      // 縦を画面サイズに合わせる
      this.dispHeight = window.innerHeight;
      this.dispWidth = this.dispHeight / 16 * 9;
      this.scale = this.dispHeight / this.height;
      this.canvas.style.transform = 'translateX(' + (window.innerWidth / 2 - this.dispWidth / 2) + 'px) scale(' + this.scale + ')';
    }
    this.canvasContainer.style.height = this.dispHeight + 'px';
    document.body.style.height = this.dispHeight + 'px';
    //document.html.style.height = this.dispHeight + 'px';

    // canvas要素をCreateJSで操作する
    this.stage = new createjs.Stage('canvas');

    // 描画のタイミングモードをRAF（RequestAnimationFrame）に設定する
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.tick.bind(this));

    this.score = 0;
    this.timer = new Timer(this);
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
