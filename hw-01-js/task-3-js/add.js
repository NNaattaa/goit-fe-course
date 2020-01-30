'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
const validMessage = `Добро пожаловать!`;
const inValidMessage = `Доступ запрещен, неверный пароль!`;
const cancelledMessage = `Отменено пользователем!`;

const authorization = prompt(`Enter your password`);

let message;

if (authorization === ADMIN_PASSWORD) {
  message = validMessage;
} else if (authorization === null) {
  message = cancelledMessage;
} else {
  message = inValidMessage;
}

alert(message);
