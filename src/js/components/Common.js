import '../modules/dev/noTouch';
// import Header from './Header';
import objectFitImages from 'object-fit-images';
import { initSliders } from './initSliders';
// import { initAccordion } from './initAccordion';
// import Popup from 'vintage-popup';
// import CTabs from './c-tabs';

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

export class Common {

  static init() {
    objectFitImages();
    initSliders();
    // initAccordion();
  }
}

/** tabs init */
// const $tabs = $('.c-tabs');
// $tabs.each((index, el) => {
//   const tab = new CTabs($(el));
//   tab.init();
// });

/** popup init*/
// Popup.expose($);
// const $popup = $('[data-popup-target]');

// $popup.popup();

/** Export initialized common scripts by default */
export default Common.init();