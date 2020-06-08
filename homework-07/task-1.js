'use strict';
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории
//  (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const allItems = document.querySelectorAll('.item');

// items.forEach(item => console.log(item.children[0]));
// const items = findItems.forEach(item => console.log(item.firstElementChild, item.lastElementChild.children.length));
// const items = findItems.forEach(item => console.log(item.children[0], item.lastElementChild.children.length));
const items = allItems.forEach(item =>
  console.log(
    `Категория: ${
      item.querySelector('h2').textContent
    }. Количество элементов: ${item.lastElementChild.children.length}`,
  ),
);