// DOMと関連リソースの読み込みが終わってから実行する
window.addEventListener('load', function() {
  let game = new Game();
  game.begin();

  game.render();
});
