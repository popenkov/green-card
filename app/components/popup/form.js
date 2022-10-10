const submitButton = document.querySelector('.js-form-submit-btn');
const formElement = document.querySelector('.js-form');
const mainForm = document.querySelector('.js-form--main');
const successForm = document.querySelector('.js-form--success');
const errorForm = document.querySelector('.js-form--error');

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.js-form-submit-btn')) {
    evt.preventDefault();
    const btn = evt.target.closest('.js-form-submit-btn');
    const form = btn.closest('.js-form');

    const data = new URLSearchParams();
    for (const pair of new FormData(form)) {
      data.append(pair[0], pair[1]);
    }

    fetch('/form.php', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        mainForm.classList.remove('open');
        formElement.reset();
        successForm.classList.add('open');
      })
      .catch((error) => {
        mainForm.classList.remove('open');
        errorForm.classList.add('open');
      });
  }

  //фокус по клику на плэйсхолдер
  if (evt.target.closest('.js-label')) {
    evt.preventDefault();
    const placeHolder = evt.target.closest('.js-label');
    const inputContainer = placeHolder.parentNode;
    const input = inputContainer.querySelector('.js-input');
    input.focus();
  }
});

const allInputs = document.querySelectorAll('.js-input');
allInputs &&
  allInputs.forEach((input) => {
    input.addEventListener('blur', (evt) => {
      evt.preventDefault();
      const inputContainer = input.parentNode;
      const label = inputContainer.querySelector('.js-label');

      console.log(input.value.length);
      if (input.value.length > 0) {
        label.classList.add('empty');
      } else {
        label.classList.remove('empty');
      }
    });
  });

document.addEventListener('blur', (evt) => {
  if (evt.target.closest('.js-input')) {
    evt.preventDefault();
    const input = evt.target.closest('.js-input');
    const inputContainer = input.parentNode;
    const label = inputContainer.querySelector('.js-label');

    console.log(input.value.length);
    if (input.value.length > 0) {
      label.classList.add('empty');
    } else {
      label.classList.remove('empty');
    }
  }
});
