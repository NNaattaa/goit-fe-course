'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.

createIngredients(ingredients);

function createIngredients(ingredients) {
  const ingredientsItem = document.querySelector('#ingredients');

  const itemList = ingredients.reduce(
    (string, item) => string + `<li>${item}</li>`,
    '',
  );
  ingredientsItem.insertAdjacentHTML('afterbegin', itemList);
  return console.log(ingredientsItem);
}
