document.addEventListener('DOMContentLoaded', function () {
  //========================================
  //=======|   IMPORTS
  //========================================

  //= ./utils.js
  //= ../components/feedback/feedback.js
  //= ../components/popup/popup.js
  //= ../components/popup/form.js

  //========================================
  //=======|   HELPERS
  //========================================

  function lockScroll() {
    let body = document.querySelector('body');
    let fixedEls = document.querySelectorAll('.js-fixed') || null;
    if (fixedEls) {
      for (let i = 0; i < fixedEls.length; i++) {
        fixedEls[i].style.width = `calc(100vw - ${getScrollBarWidth()}px)`;
      }
    }
    body.style.overflow = 'hidden';
    body.style.width = `calc(100vw - ${getScrollBarWidth()}px)`;
  }

  function unlockScroll() {
    let body = document.querySelector('body');
    let fixedEls = document.querySelectorAll('.js-fixed') || null;
    if (fixedEls) {
      for (let i = 0; i < fixedEls.length; i++) {
        fixedEls[i].style.width = '';
      }
    }
    body.style.overflow = '';
    body.style.width = '';
  }
});
