let canvas = document.getElementById('canvas');

const CANVAS_WIDTH_PC = 750;

const SCENE = {
  NONE : 0,
  TITLE: 1,
  GAME : 2
};

// ユーザエージェントからデバイスを判別する
function getDevice() {
  let ua = window.navigator.userAgent;

  if (ua.includes('iPhone') || ua.includes('Android')) {
    return 'sp';
  }
  else {
    return 'pc';
  }
}

canvas.addEventListener('click', function(event) {
  // 要素内の座標を算出する
  let x = event.clientX - canvas.getBoundingClientRect().left;
  let y = event.clientY - canvas.getBoundingClientRect().top;
  window.game.onClick(x, y);
});
