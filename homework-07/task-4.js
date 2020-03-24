'use strict';
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
//  значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtn = document.querySelector(
  '#counter button[data-action = "decrement"]',
);
const incrementBtn = document.querySelector(
  '#counter button[data-action = "increment"]',
);
const value = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
