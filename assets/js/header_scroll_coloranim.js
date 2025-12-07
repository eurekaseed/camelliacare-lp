// ヘッダーのFVスクロールカラーアニメ
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const fvHeight = document.querySelector(".p-swiperfv").offsetHeight; // FVの高さを取得

  window.addEventListener("scroll", function () {
    if (window.scrollY > fvHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
