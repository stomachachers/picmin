// スマホのスクロールを禁止する
document.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });

function getDevice() {
  let ua = window.navigator.userAgent;
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) {
    return 'sp';
  }
  else {
    return 'pc';
  }
}
