'use strict';
const total = 100;
const ordered = 30;
let message;

if (ordered === 0) {
  message = `Ничего не выбрано`;
} else if (ordered <= total) {
  message = `Заказ оформлен, с вами свяжется менеджер`;
} else {
  message = `На складе недостаточно товаров!`;
}

console.log(message);
