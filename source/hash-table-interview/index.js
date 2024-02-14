// // for loop
// function itemInCommon(arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) return true
//         }
//     }
//     return false;
// }

// let array1 = [1, 0, 5];
// let array2 = [2, 4, 5];
// itemInCommon(array1, array2);

//More Efficient ways

function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  // { 1: true, 0: true, 9: true}

  console.log({ obj });
  for (let j = 0; j < arr2.length; j++) {
    console.log("Is this ...", obj[arr2[j]]);
    if (obj[arr2[j]]) return true;
  }
  return false;
}

let array1 = [1, 0, 5];
let array2 = [3, 4, 2, 7, 9];
itemInCommon(array1, array2);
