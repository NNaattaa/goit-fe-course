`use strict`;
const countProps = function(obj) {
  // const keys = Object.keys(obj);

  // let counter = 0;

  // for (let key of keys) {
  //     counter += 1;
  // }
  // return counter
  // ------- 2 способ по-проще-----------
  return Object.keys(obj).length;
};

console.log(countProps({})); // 0

console.log(
  countProps({
    name: 'Mango',
    age: 2,
  }),
); // 2

console.log(
  countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
  }),
); // 3
