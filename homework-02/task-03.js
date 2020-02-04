`use strict`;

/*
 * ===========Цикл for of========
 */

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

/*
 * ===========Цикл for========
 */

// function findLongestWord(string) {
//   let words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

/*
 *  =====Аргументы для параметра функции=====
 */

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));

console.log(findLongestWord('Duis leo Phasellus accumsan cursus velit.'));
