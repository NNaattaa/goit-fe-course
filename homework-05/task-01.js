'use strict';
const Account = function(login, email) {
  this.userName = login;
  this.userEmail = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.userName}, Email: ${this.userEmail}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com
