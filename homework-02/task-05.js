`use strict`;
function checkFor(str) {
  return str.includes('sale') || str.toLowerCase().includes('spam');
}

console.log(checkFor('Latest technology news'));

console.log(checkFor('JavaScript weekly newsletter'));

console.log(checkFor('Get best sale offers now!'));

console.log(checkFor('[SPAM] How to earn fast money?'));
