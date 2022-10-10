const popupLinks = document.querySelectorAll('.js-popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

if (popupLinks && popupLinks.length > 0) {
  for (let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];
    Boolean(popupLink) &&
      popupLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
      });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon && popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const el = popupCloseIcon[i];
    el.addEventListener('click', function (evt) {
      popupClose(el.closest('.popup'));
      evt.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    Boolean(currentPopup) && currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (evt) {
      if (!evt.target.closest('.popup__content')) {
        popupClose(evt.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (popupActive.querySelector('form')) {
    popupActive.querySelector('form').reset();
  }
  if (popupActive && unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').clientWidth + 'px';

  if (lockPadding && lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.classList.add('lock');
}

function bodyUnlock() {
  if (lockPadding && lockPadding.length > 0) {
    for (let i = 0; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = '0px';
    }
  }
  body.classList.remove('lock');
}

document.addEventListener('keydown', function (evt) {
  if (evt.which == 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});
