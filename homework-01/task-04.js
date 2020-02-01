'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const incomeRequest = prompt(`Сколько дроидов Вы хотите купить?`);
let totalPrice;
let change;
let message;

if (incomeRequest === null) {
  message = `Отменено пользователем`;
} else if (incomeRequest) {
  totalPrice = Number(incomeRequest) * pricePerDroid;
  change = credits - totalPrice;
  if (totalPrice <= credits) {
    message = `Вы купили ${incomeRequest} дроидов, на счету осталось ${change} кредитов`;
  } else {
    message = `Недостаточно средств на счету`;
  }
}

alert(message);
