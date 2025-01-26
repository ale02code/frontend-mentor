import { success } from "./success.js";

const formMain = document.getElementById("form-main")
const divTextInFormMain = document.querySelector(".paragraphs-container__form__content");
const inputEmail = document.getElementById("email-input");

const textContentError = document.createElement('p');

const createError = textError => {
  textContentError.textContent = textError;
  textContentError.classList.add("paragraphs-container__form__content__paragraph-error");
  inputEmail.style.border = "red solid 1px"
  inputEmail.style.background = "#ff44445a"
  divTextInFormMain.appendChild(textContentError);
}


formMain.addEventListener('submit', (event) => {
  const valueEmail = inputEmail.value.trim();

  event.preventDefault();
  if (valueEmail === "") {
    createError("Field empty");
  } else if (!/@/.test(valueEmail)) {
    createError('You forgot "@"');
  } else if (!/\./.test(valueEmail)) {
    createError('You forgot "."');
  } else if (/@\./.test(valueEmail)) {
    createError('Error Email');
  } else if (/\.\./.test(valueEmail)) {
    createError("you can't put '..'");
  } else if (/^\./.test(valueEmail) || /\.$/.test(valueEmail)) {
    createError("you can't init or end with .");
  } else {
    success(valueEmail);
  }
})