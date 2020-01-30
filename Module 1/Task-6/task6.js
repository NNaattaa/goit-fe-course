'use strict';

let input;
let total = 0;

const startMessage = `Enter your number`;

do {
  input = prompt(startMessage);
  total += Number(input);
} while (input !== null);

// console.log(total);
alert(`Total sum is: ${total}`);
