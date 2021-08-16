/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
import '../styles/style.css';

const submitElm = document.querySelector('#submit');
const usernameInputField = document.querySelector('#username');
const passwordInputField = document.querySelector('#password');
const inputBarElm = document.querySelectorAll('.input-bar');
const inputErrMessageClass = 'input__error-msg';

// Input validation for username and password
// Input length must be atleast 8 characters
function inputValidation({ inputElm, inputErrMessageElm }) {
  const invalidMessage = `${inputElm.name} lenght must be at least 8 characters !!!`;

  if (inputElm.value.length < 8) {
    inputErrMessageElm.innerText = invalidMessage;
    inputElm.classList.add('invalid');
  } else {
    inputErrMessageElm.innerText = '';
    inputElm.classList.remove('invalid');
  }
}

// Form validation - check if form is valid or not.
// If form is valid, then submit button will not be disabled.
// If form is not valid, then submit button will be disabled.
function formValidation(inputFieldElmList) {
  let valid = true;

  inputFieldElmList.forEach((inputFieldElm) => {
    if (inputFieldElm.classList.contains('invalid') || inputFieldElm.value === '') {
      valid = false;
      return;
    }
  });

  if (!valid) {
    submitElm.disabled = true;
  } else {
    submitElm.disabled = false;
  }
}

inputBarElm.forEach((inputBar) => {
  inputBar.addEventListener('input', (event) => {
    inputValidation({
      inputElm: event.srcElement,
      inputErrMessageElm: document.querySelector(`.${event.srcElement.name}.${inputErrMessageClass}`),
    });

    formValidation([
      usernameInputField,
      passwordInputField,
    ]);
  });
});

submitElm.addEventListener('click', (event) => {
  event.preventDefault();
});
