'use strict';
const total = 100;
const ordered = 30;
let message;

if (ordered <= total && ordered !== 0) {
  message = `Заказ оформлен, с вами свяжется менеджер`;
} else if (ordered === 0) {
  message = `Ничего не выбрано`;
} else {
  message = `На складе недостаточно товаров!`;
}

console.log(message);
