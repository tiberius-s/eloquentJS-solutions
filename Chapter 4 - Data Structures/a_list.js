'use strict';

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--){
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(obj) {
  let arr = [];
  while (obj.rest) {
    arr.push(obj.value);
    obj = obj.rest;
  }
  arr.push(obj.value);
  return arr;
}

function prepend(el, list) {
  list = { value: el, rest: list };
  return list;
}

function nth(list, num) {
  if (num == 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
}

let array = [1, 2, 3];
console.log(arrayToList(array));
console.log(listToArray(arrayToList(array)));
console.log(prepend(0, arrayToList(array)));
console.log(nth(arrayToList(array), 1));