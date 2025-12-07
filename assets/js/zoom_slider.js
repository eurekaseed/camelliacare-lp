// zoom_slider

$(function () {
  "use strict";

  const $slider = $(".js-slider");

  const swiper = new Swiper($slider, {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    loopAdditionalSlides: 1,
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        // ロード時に画像が拡縮して見える場合があるので、
        // スライド切り替え前にtransitionを設定するクラスを付与。
        $(this.el).find(".swiper-slide").addClass("is-add-transition");
      },
    },
  });
});
