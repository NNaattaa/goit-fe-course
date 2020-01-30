let input;
let total = 0;

do {
  input = prompt('Enter any number');
  if (Number.isNaN(Number(input))) {
    alert('No number was entered, try again');
  } else {
    total = total + Number(input);
  }
} while (input);

alert(`The total amount of numbers is ${total}`);
