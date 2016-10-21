'use strict';

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++ , j--){
    let x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("reverseArray: " + reverseArray(testArr));
console.log("reverseArrayInPlace: " + reverseArrayInPlace(testArr));