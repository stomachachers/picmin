// DOMと関連リソースの読み込みが終わってから実行する
window.addEventListener('load', function() {
  window.game = new Game();
  game.setup();

  game.render();
});
