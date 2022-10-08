const feedbackPage = document.querySelector('.feedback');

if (feedbackPage) {
  const feedbackSwiper = new Swiper('.js-feedback-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: '.js-feedback-navigation--right',
      prevEl: '.js-feedback-navigation--left',
    },
  });
}
