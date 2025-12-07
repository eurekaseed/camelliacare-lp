// scroll_features ：3つの特徴：スクロールしたら順番に右からフェードイン
// ボックスに.scroll_features

// アニメーション発動の条件を定義
function stepFadeIn() {
  $(".scroll_features").each(function () {
    // scroll_features というクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fade_R_in"); // 画面内に入ったらfade_R_inというクラス名を追記
    } else {
      $(this).removeClass("fade_R_in"); // 画面外に出たらfade_R_inというクラス名を外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述 //
$(window).scroll(function () {
  stepFadeIn(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述
