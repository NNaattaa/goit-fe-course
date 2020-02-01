'use strict';

const total = 100;
const ordered = 50; /* 80 100 130 */

if (ordered > total) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с Вами свяжется менеджер');
}
