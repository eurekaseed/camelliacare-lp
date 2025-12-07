// 要素が特定のスクロール位置に達したときに、それぞれ右からと左から入ってくるアニメーション

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-animation");
  // .scroll-animationクラスを持つすべての要素を取得
  function checkScroll() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (element.classList.contains("right")) {
          element.classList.add("slideInFromRight");
        } else if (element.classList.contains("left")) {
          element.classList.add("slideInFromLeft");
        }
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // 初期チェック
});
