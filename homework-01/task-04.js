const credits = 23580;
const pricePerDroid = 3000;
let message;

let userInput = prompt('Какое кл-во дроидов вы хотите купить?');

let quantityDroid = userInput;
let totalPrice = userInput * pricePerDroid;

if (userInput === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else if (totalPrice < credits) {
    message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`;
  }
}

console.log(message);
