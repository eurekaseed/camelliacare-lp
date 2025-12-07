// scroll-fadeup：スクロールしたらフェイドアップ
// intersectionObserverAPIを使用、rootビュー内でblockAnimを取得

"use strict";
{
  // DOM取得
  const targets = document.querySelectorAll(".blockAnim");

  // オプション
  const options = {
    root: null,
    rootMargin: "0px 0px -300px 0px",
    threshold: [0],
  };

  // 処理
  function callback(entries) {
    console.log(entries); /* entriesは配列 */
    entries.forEach((entry) => {
      console.log(entry); /* entryを取り出す */
      // entry.isIntersectingがtrueの時だけ処理を実行する
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeUP");
      }
    });
  }

  // 初期化
  const observer = new IntersectionObserver(callback, options);

  // 監視を開始
  targets.forEach((target) => {
    observer.observe(target);
  });
}
