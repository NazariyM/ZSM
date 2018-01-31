import '../modules/dev/noTouch';
// import Header from './Header';
import objectFitImages from 'object-fit-images';
import { initSliders } from './initSliders';
import Popup from 'vintage-popup';
import '../modules/dep/stepper';

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

export class Common {

  static init() {
    objectFitImages();
    initSliders();
  }
}


showFieldInput();

function showFieldInput() {
  const $btn = $('.js-show-field');

  $btn.each(function () {
    const $checkbox = $(this).closest('.check-box');
    const $prevField = $checkbox.prev();

    $(this).on('change', function (e) {
      e.preventDefault();
      $prevField.slideToggle();
    });
  });
}

/** popup init*/
Popup.expose($);
const $popup = $('[data-popup-target]');

$popup.popup();

$('.js-step-number').numStepper();

/** Export initialized common scripts by default */
export default Common.init();