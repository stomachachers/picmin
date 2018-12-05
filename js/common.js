const CANVAS_WIDTH_PC = 750;
const CELL_WIDTH = 70;
const CELL_HEIGHT = CELL_WIDTH;

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
