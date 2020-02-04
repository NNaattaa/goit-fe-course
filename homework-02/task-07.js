`use strict`;
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  for (let item of allLogins) {
    if (item === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  if (isLoginUnique(allLogins, login) === false) {
    return console.log('Такой логин уже используется!');
  } else {
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);

addLogin(logins, 'Ajax'); // 'Такой логин уже используется!'

addLogin(logins, 'Salvoray'); // 'Логин успешно добавлен!'

console.log(logins);
