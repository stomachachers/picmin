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

    // canvasの描画コンテキストを取得する
    this.ctx = canvas.getContext('2d');

    this.button = new StartButton(this.ctx);
  }

  render() {
    this.button.draw();

    // コールバック時のthisの値を，windowではなく現在のthis(Game)に設定する
    window.requestAnimationFrame(this.render.bind(this));
  }
}
