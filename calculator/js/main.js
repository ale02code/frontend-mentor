"use strict";

const result = document.getElementById("result-view");
const numbers = document.querySelectorAll(".numbers");
const symbols = document.querySelectorAll(".symbols");
const remove = document.getElementById("remove-button");
const reset = document.getElementById("reset-button");
const equal = document.getElementById("equal-button");

let firstNumber = '';
let symbol = undefined;
let secondNumber = '';

const mathOperation = () => {
  if (firstNumber !== '' && symbol !== undefined && secondNumber !== '') {
    const operation = eval(firstNumber + symbol + secondNumber);
    if (isNaN(operation)) {
      return result.innerText = 0;
    }
    firstNumber = operation;
    return result.innerText = operation;
  } else {
    return result.innerText = '0';
  }
};

const maxLength = (number) => {
  return number.slice(0, 8);
}

remove.addEventListener("click", () => {
  if (firstNumber.length !== 1 || secondNumber.length !== 1) {
    if (symbol === undefined) {
      firstNumber = firstNumber.slice(0, -1);
      result.innerText = firstNumber;
    } else {
      secondNumber = secondNumber.slice(0, -1);
      result.innerText = secondNumber;
    }
  }
});

numbers.forEach((number) => number.addEventListener('click', () => {
  const valueNumber = number.innerText;

  if (symbol === undefined) {
    firstNumber += valueNumber;
    result.innerText = firstNumber;
  } else {
    secondNumber += valueNumber;
    result.innerText = secondNumber;
  }
}));

symbols.forEach((symbolBtn) => symbolBtn.addEventListener('click', () => {
  const valueSymbol = symbolBtn.innerText;
  valueSymbol === "x" ? symbol = "*" : symbol = valueSymbol;
}));

reset.addEventListener("click", () => {
  firstNumber = '';
  symbol = undefined;
  secondNumber = '';
  result.innerText = '0';
});

equal.addEventListener("click", () => {
  mathOperation();
  firstNumber = result.innerText;
  secondNumber = '';
  symbol = undefined;
});
