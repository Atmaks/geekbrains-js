"use strict";

console.log("Задача 1 - простые числа от 1 до 100");

function isValidNumber(number) {
  return;
}

function makeNumberObject(number) {
  if (!(number >= 0 && number <= 999)) {
    console.error(
      "Ошибка: параметр функции makeNumberObject должен находиться в отрезке [0, 999]"
    );
    return {};
  }

  return {
    единицы: number % 10,
    десятки: Math.floor(number / 10) % 10,
    сотни: Math.floor(number / 100),
  };
}

function testFunc(number) {
  console.log("Тест задачи 1: makenumberObject(" + number + ") == ");
  console.log(makeNumberObject(number));
}

testFunc(2);
testFunc(34);
testFunc(999);
testFunc(1000);

// console.log("Задача 2-3 - корзина");

// var presetBasket = [
//   {
//     name: "Кепка белая Nike",
//     price: 450,
//     count: 1,
//   },
//   {
//     name: "Кроссовки непромокаемые спортивные белые Adidas",
//     price: 5000,
//     count: 1,
//   },
// ];

// function countBasketPrice(basket) {
//   let sum = 0;
//   for (let i = 0; i < basket.length; i++) {
//     sum += basket[i].count * basket[i].price;
//   }

//   return sum;
// }

// console.log("Корзина:");
// console.log(presetBasket);
// console.log("Стоимость корзины: " + countBasketPrice(presetBasket));
