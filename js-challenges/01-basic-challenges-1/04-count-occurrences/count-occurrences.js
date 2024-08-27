// function countOccurrences(sentense, letter) {
//   let count = 0;
//   for (let index = 0; index < sentense.length; index++) {
//     if (sentense[index] == letter) {
//       count++;
//     }
//   }
//   return count;
// }

const countOccurrences = (sentense, letter) =>
  sentense.split(letter).length - 1;

module.exports = countOccurrences;
