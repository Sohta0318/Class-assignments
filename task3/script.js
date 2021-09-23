"use strict";
// return true if the array is sorted either
// ascending, or descending.
// [] => true
// [42] => true
// [39, 42] => true
// [42, 39] => true
// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [1, 5, 2] => false
// function isSorted(arr) {
//   let result;
//   if (arr.length === 0 || arr.length === 1) {
//     result = true;
//     return result;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < arr[i + 1]) {
//       result = `accend true`;
//     } else if (arr[i] > arr[i + 1]) {
//       result = `discend true`;
//     } else {
//       result = false;
//       break;
//     }

//     return result;
//   }
// }

function isSorted(arr) {
  let result;
  if (
    arr.every(function (value, i) {
      return i === 0 || value >= arr[i - 1];
    })
  ) {
    result = true;
  } else if (
    arr.every(function (value, i) {
      return i === 0 || value <= arr[i - 1];
    })
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42]));
console.log(isSorted([42, 39]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.log(isSorted([1, 5, 2]));
console.log(isSorted([1, 2, 3, 6, 8, 5, 1, 6]));
