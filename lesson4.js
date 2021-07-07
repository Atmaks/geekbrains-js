"use strict";

console.log("Задача 1 - число в объект");

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

console.log("Задача 2 - корзина с объектами");

var products = [
  {
    name: "Кепка белая Nike",
    price: 450,
  },
  {
    name: "Кроссовки непромокаемые спортивные белые Adidas",
    price: 5000,
  },
];

var orders = [
  {
    product: products[0],
    count: 1,
  },
  {
    product: products[1],
    count: 2,
  },
];

var basket = {
  user: "Aerith",
  orders: orders,
};

function countBasketPrice(basket) {
  let sum = 0;
  for (let i = 0; i < basket.orders.length; i++) {
    sum += basket.orders[i].count * basket.orders[i].product.price;
  }

  return sum;
}

console.log("Корзина:");
console.log(basket);
console.log("Стоимость корзины: " + countBasketPrice(basket));
