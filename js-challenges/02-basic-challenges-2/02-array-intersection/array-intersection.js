// function arrayIntersection(arr1, arr2) {
//   const intersectionArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
//       intersectionArr.push(arr1[i]);
//       console.log({ arr1: arr1[i] });
//     }
//   }
//   return intersectionArr;
// }

function arrayIntersection(arr1, arr2) {
  const set11 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set11.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
}
module.exports = arrayIntersection;
