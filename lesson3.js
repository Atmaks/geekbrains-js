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

console.log("Задача 2-3 - корзина");

var presetBasket = [
  {
    name: "Кепка белая Nike",
    price: 450,
    count: 1,
  },
  {
    name: "Кроссовки непромокаемые спортивные белые Adidas",
    price: 5000,
    count: 1,
  },
];

function countBasketPrice(basket) {
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].count * basket[i].price;
  }

  return sum;
}

console.log("Корзина:");
console.log(presetBasket);
console.log("Стоимость корзины: " + countBasketPrice(presetBasket));

console.log("Задача 4 - цикл без тела");

for (i = 1; i <= 9; console.log(i++)) {}

console.log("Задача 5 - пирамида");

var outputString = "X";
for (i = 1; i < 20; i++) {
  console.log(outputString);
  outputString += "X";
}
