'use strict';
class User {
  constructor({ name, age, followers }) {
    this.userName = name;
    this.userAge = age;
    this.userFollowers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.userName} is ${this.userAge} years old and has ${this.userFollowers} followers`,
    );
  }
}

const mango = new User({ name: 'Mango', age: 2, followers: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({ name: 'Poly', age: 3, followers: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 followers
