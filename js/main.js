// DOMと関連リソースの読み込みが終わってから実行する
window.addEventListener('load', function() {
  // gameオブジェクトはグローバルオブジェクトにする
  window.game = new Game();

  game.render();
});
