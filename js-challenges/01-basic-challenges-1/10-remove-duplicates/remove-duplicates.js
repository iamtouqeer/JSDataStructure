// function removeDuplicates(arr) {
//   const uniqueArr = [];

//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (!uniqueArr.includes(element)) {
//       uniqueArr.push(element);
//     }
//   }

//   return uniqueArr;
// }

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
