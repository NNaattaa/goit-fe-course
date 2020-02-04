`use strict`;
let input;
let total = 0;
const numbers = [];

do {
  input = prompt('Enter any number');

  if (Number.isNaN(Number(input))) {
    alert('No number was entered, try again');
  } else {
    numbers.push(Number(input));
  }
} while (input);

/*
 * ====Цикл for====
 */

for (let i = 0; i < numbers.length; i += 1) {
  total = total += numbers[i];
}

/*
 * =====Цикл for of====
 */

// for (let number of numbers) {
//   total = total += number;
// }

console.log(`The total amount of numbers is ${total}`);
