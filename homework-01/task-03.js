const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt('Enter password');

if (userInput === null) {
  message = 'Aborted by user!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Welcome!';
} else {
  message = 'Access denied! Incorect password!';
}

alert(message);
