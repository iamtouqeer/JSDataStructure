function countVowels(str) {
  let count = 0;

  str
    .toLowerCase()
    .split('')
    .forEach((element) => {
      if (isVowel(element)) {
        count++;
      }
    });
  return count;
}

function isVowel(char) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

module.exports = countVowels;
