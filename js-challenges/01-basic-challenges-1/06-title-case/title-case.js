// function titleCase(str) {
//   const words = str.toLowerCase().split(' ');
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(' ');
// }

const titleCase = (sentence) =>
  sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

module.exports = titleCase;
