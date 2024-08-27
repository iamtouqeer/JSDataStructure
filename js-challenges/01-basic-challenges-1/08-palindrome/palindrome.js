// function isPalindrome(str) {
//   const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedStr = formattedString.split('').reverse().join('');

//   return formattedString === reversedStr;
// }

function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);

  return formattedStr === reversedStr;
}

function removeNonAlphaNumeric(str) {
  let formattedString = '';
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (isAlphaNumeric(char)) {
      formattedString += char;
    }
  }
  return formattedString;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase a-z
  );
}
function reverseString(str) {
  let reversed = '';

  for (let index = str.length - 1; index >= 0; index--) {
    reversed += str[index];
  }

  return reversed;
}

module.exports = isPalindrome;
