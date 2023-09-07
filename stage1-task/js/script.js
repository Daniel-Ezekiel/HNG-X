"use strict";

const labelDay = document.querySelector(".day");
const labelTime = document.querySelector(".time");

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const getTodayDate = (_) => {
  return new Date();
};
const getDay = (_) => {
  return getTodayDate().getDay();
};

labelDay.textContent = weekDays[getDay()];
// Show UTC Time in Milliseconds using the setInterval API
setInterval(() => {
  labelTime.textContent = Date.now();
}, 1000);
