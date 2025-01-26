"use strict";

const dayInput = document.getElementById("put-day");
const monthInput = document.getElementById("put-month");
const yearInput = document.getElementById("put-year");
const arrowResult = document.querySelector(".image-arrow");

const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

const labels = document.querySelectorAll(".label-date-input");
const inputs = document.querySelectorAll(".input-date");

const daySpanResult = document.getElementById("days-date-result");
const monthSpanResult = document.getElementById("months-date-result");
const yearSpanResult = document.getElementById("years-date-result");

const dateToGetYear = new Date();
const getYearToComparative = dateToGetYear.getFullYear();

function getAge() {
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const valueDate = new Date(`${year}-${month}-${day}`);
  const getTimeDate = !isNaN(valueDate.getTime())

  const changeErrorMode = () => {
    labels.forEach(label => label.classList.add("label-error"))
    inputs.forEach(input => input.classList.add("input-error"))
  }

  if (day === "" || month === "" || year === "") {
    dayError.textContent = "This field is required";
    monthError.textContent = "This field is required";
    yearError.textContent = "This field is required";

    changeErrorMode();
  } else if (year > getYearToComparative) {

    dayError.textContent = "Must be a valid day";
    monthError.textContent = "Must be a valid month";
    yearError.textContent = "Must be in the past";

    changeErrorMode()
  } else if (getTimeDate === false) {
    dayError.textContent = "Must be a valid date";

    changeErrorMode()
  } else {
    const dateOutput = new Date(valueDate);
    const dateDiff = Date.now() - dateOutput;
    const ageDate = new Date(dateDiff);

    const getDay = ageDate.getUTCDate() - 1;
    const getMonth = ageDate.getUTCMonth();
    const getYear = ageDate.getUTCFullYear() - 1970;

    // Output
    daySpanResult.textContent = (getDay);
    monthSpanResult.textContent = (getMonth);
    yearSpanResult.textContent = (getYear);
  }
}

arrowResult.addEventListener('click', getAge);
