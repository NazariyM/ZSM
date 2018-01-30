import slick from 'slick-carousel';

export function initSliders() {

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev"><div class="icon-arr-l"></div></button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next"><div class="icon-arr-r"></div></button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const $heroSld = $('.js-hero-slider');
  $heroSld.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  }));
}