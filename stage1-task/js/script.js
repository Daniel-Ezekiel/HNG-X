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

labelDay.textContent = weekDays[new Date().getUTCDay()];

setInterval(() => {
  labelTime.textContent = Date.now();
}, 1000);
