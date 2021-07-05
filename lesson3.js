"use strict";

console.log("Задача 1 - простые числа от 1 до 100");

var i = 2;
var primesFound = [];

while (i <= 100) {
  var isPrime = true;
  for (let j = 0; j < primesFound.length; j++) {
    if (i % primesFound[j] === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primesFound.push(i);
    console.log(i);
  }

  i++;
}
