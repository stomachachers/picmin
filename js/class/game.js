class Game {
  constructor() {
    this.gameboard = new Gameboard();
    this.button = new Button();
  }

  begin() {
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
  }

  render() {
    this.button.draw();
    window.requestAnimationFrame(render);
  }
}
