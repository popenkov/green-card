document.addEventListener('DOMContentLoaded', function () {
  //========================================
  //=======|   IMPORTS
  //========================================

  //= ./utils.js
  //= ../components/feedback/feedback.js
  //= ../components/popup/popup.js

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

const submitButton = document.querySelector('.js-form-submit-btn');

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.js-form-submit-btn')) {
    evt.preventDefault();
    const btn = evt.target.closest('.js-form-submit-btn');
    const form = btn.closest('.js-form');
    const formData = new FormData(form);

    for (var value of formData.values()) {
      console.log(value);
    }

    fetch('/form.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Success');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error');
      });
  }
});
