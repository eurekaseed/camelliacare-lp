// slide_in ：紙芝居式で右に徐々に見せる：slide_in
// ボックスに.slide_in
// もしくは、.slide1、slide2

const CLASSNAME = "-visible";
const DELAY = 100;
const $target1 = $(".wrapSlideIn");
const $target2 = $(".slideIn2");

// アニメーションを開始する関数
function startSlideAnim() {
  $target1.addClass(CLASSNAME); // 要素1にクラスを追加してアニメーション開始
  setTimeout(() => {
    $target2.addClass(CLASSNAME); // 要素2にクラスを追加してアニメーション開始
  }, DELAY);
}

// ページが読み込まれたらアニメーションを開始する
$(document).ready(() => {
  startSlideAnim();
});
