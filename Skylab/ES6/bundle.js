"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (number, index) {
  return number + index;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (number) {
  return number % 2 === 0;
});
var find = arr.find(function (number) {
  return number === 2;
});
console.log(find);
