
var newsSwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  spaceBetween: 0,
  navigation: {
      nextEl: '.catalog__arrow--left',
      prevEl: '.catalog__arrow--right',
  }

});

var newsSwiper = new Swiper ('.swiper-product', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
      nextEl: '.product__arrow--right',
      prevEl: '.product__arrow--left',
  }

});