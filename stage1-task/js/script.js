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
const getUTCValues = () => {
  const todayDate = getTodayDate();
  const UTCValues = [];

  const year = todayDate.getUTCFullYear();
  const monthIndex = todayDate.getUTCMonth();
  const day = todayDate.getUTCDay();
  const hours = todayDate.getUTCHours();
  const minutes = todayDate.getUTCMinutes();
  const seconds = todayDate.getUTCSeconds();
  const milliseconds = todayDate.getUTCMilliseconds();

  UTCValues.push(year, monthIndex, day, hours, minutes, seconds, milliseconds);
  return UTCValues;
};

labelDay.textContent = weekDays[getDay()];
// Show UTC Time in Milliseconds using the setInterval API
setInterval(() => {
  labelTime.textContent = Date.UTC(...getUTCValues());
}, 1000);
