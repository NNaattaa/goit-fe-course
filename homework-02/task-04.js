`use strict`;
function formatString(string) {
  let SumWords = string.slice(0, 40);

  if (string.length > SumWords.length) {
    SumWords += '...';
  }

  return SumWords;
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
