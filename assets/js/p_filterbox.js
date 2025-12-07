// .p-filterBoxで使用する検索フィルタリングボックスの表示・非表示を制御
// クリックでフィルタリングボックスを表示
// フィルタリングボックス外をクリックで非表示

document.addEventListener("DOMContentLoaded", () => {
  const filterBoxes = document.querySelectorAll(".p-filterBox");

  filterBoxes.forEach((filterBox) => {
    filterBox.addEventListener("click", () => {
      filterBox.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (!filterBox.contains(event.target)) {
        filterBox.classList.remove("active");
      }
    });
  });
});
