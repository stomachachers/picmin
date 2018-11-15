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
    
    // canvasの描画コンテキストを取得する
    this.ctx = canvas.getContext('2d');

    this.startButton = new StartButton(this.ctx, canvas.width, canvas.height);

  }

  render() {
    // canvasの描画をクリアする
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.startButton.draw();

    // コールバック時のthisの値を，windowではなく現在のthis(Game)に設定する
    window.requestAnimationFrame(this.render.bind(this));
  }

  onClick(clickX, clickY) {
    this.startButton.onClick(clickX, clickY);
  }
}
