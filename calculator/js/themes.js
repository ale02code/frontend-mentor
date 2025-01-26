"use strict";

const themeButton = document.getElementById("change-theme");

const body = document.querySelector(".body");
const resultSection = document.querySelector(".main-container__result-section");
const keys = document.querySelector(".main-container__keys")
const numbersKeysContainer = document.querySelectorAll(".main-container__keys__button-container");
const numbersKeys = document.querySelectorAll(".main-container__keys__button-container__normal-button");
const removeKeyContainer = document.getElementById("remove-container");
const removeKey = document.getElementById("remove-button");
const resetKeyContainer = document.querySelector(".main-container__keys__button-container-reset");
const resetKey = document.getElementById("reset-button");
const equalKeyContainer = document.querySelector(".main-container__keys__button-container-equal");
const equalKey = document.getElementById("equal-button");

// *default style
body.classList.add("body-1");
themeButton.classList.add("input-theme-1");
resultSection.classList.add("result-1");
keys.classList.add("keys-1");

numbersKeysContainer.forEach(keyContainer => keyContainer.classList.add("theme-1"));
numbersKeys.forEach(number => number.classList.add("button-normal-theme-1"))

removeKeyContainer.classList.add("theme-delete-1");
removeKey.classList.add("delete-1");

resetKeyContainer.classList.add("theme-reset-1");
resetKey.classList.add("reset-1");

equalKeyContainer.classList.add("theme-equal-1");
equalKey.classList.add("equal-1");

// *Remove themes
const removeClasses = () => {
  body.classList.remove("body-1", "body-2", "body-3");
  themeButton.classList.remove("input-theme-1", "input-theme-2", "input-theme-3");
  resultSection.classList.remove("result-1", "result-2", "result-3");
  keys.classList.remove("keys-1", "keys-2", "keys-3");

  numbersKeysContainer.forEach(keyContainer => keyContainer.classList.remove("theme-1", "theme-2", "theme-3"));
  numbersKeys.forEach(number => number.classList.remove("button-normal-theme-1", "button-normal-theme-2", "button-normal-theme-3"));

  removeKeyContainer.classList.remove("theme-delete-1", "theme-delete-2", "theme-delete-3");
  removeKey.classList.remove("delete-1", "delete-2", "delete-3");

  resetKeyContainer.classList.remove("theme-reset-1", "theme-reset-2", "theme-reset-3");
  resetKey.classList.remove("reset-1", "reset-2", "reset-3");

  equalKeyContainer.classList.remove("theme-equal-1", "theme-equal-2", "theme-equal-3");
  equalKey.classList.remove("equal-1", "equal-2", "equal-3");
}

// *Add themes
const addTheme = (value) => {
  body.classList.add(`body-${value}`);
  themeButton.classList.add(`input-theme-${value}`);
  resultSection.classList.add(`result-${value}`);
  keys.classList.add(`keys-${value}`);

  numbersKeysContainer.forEach(keyContainer => keyContainer.classList.add(`theme-${value}`));
  numbersKeys.forEach(number => number.classList.add(`button-normal-theme-${value}`));

  removeKeyContainer.classList.add(`theme-delete-${value}`);
  removeKey.classList.add(`delete-${value}`);

  resetKeyContainer.classList.add(`theme-reset-${value}`);
  resetKey.classList.add(`reset-${value}`);

  equalKeyContainer.classList.add(`theme-equal-${value}`);
  equalKey.classList.add(`equal-${value}`);
}

// *Change theme
themeButton.addEventListener("input", () => {
  const themeValue = themeButton.value;

  removeClasses();

  if (themeValue === "0") {
    addTheme(1);
  }

  if (themeValue === "1") {
    addTheme(2);
  }

  if (themeValue === "2") {
    addTheme(3);
  }
})