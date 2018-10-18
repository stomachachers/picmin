// DOMと関連リソースの読み込みが終わってから実行
window.addEventListener('load', function() {
  let canvas = document.getElementById('canvas');

  // デバイスによってcanvasのサイズを変える
  if (getDevice() === 'sp') {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  if (getDevice() === 'pc') {
    canvas.width = 750;
    canvas.height = window.innerHeight;
  }

  let ctx = canvas.getContext('2d');

  render(ctx);
});

function render(ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(100, 100, 200, 200);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(150, 150, 200, 200);

  window.requestAnimationFrame(render);
}
