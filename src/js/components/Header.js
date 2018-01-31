import { Resp, $window } from '../modules/dev/_helpers';

export function initMobNav() {
  const $nav = $('.js-nav');
  const $btn = $('.js-nav-btn');

  $btn.on('click tap', function () {
    $(this).find('.bar').toggleClass('animate');
    $nav.slideToggle();
  });

  $window.on('resize', function () {
    if (Resp.isMobile) $nav.removeAttr('style');
  });

}