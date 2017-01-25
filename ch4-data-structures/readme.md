# Solutions

## 1. The Sum of a Range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

`console.log(sum(range(1, 10)));`

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

### Solution:
```js
'use strict';

function range(start, end, step) {
  const inc = validateStep(start, end, step);
  if (start > end && inc >= 0 || start < end && inc <= 0) {
    return "Invalid range!";
  } else {
    return addNumbers(start, end, inc);
  }

  function validateStep(start, end, step) {
    if (step === undefined) {
      return 1;
    } else if (start > end && step === undefined) {
      return -1;
    } else {
      return step;
    }
  }

  function addNumbers(start, end, step) {
    let numArray = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        numArray.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        numArray.push(i);
      }
    }
    return numArray;
  }
}

function sumArray(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

console.log(range(15, 10, -1));
console.log(sumArray(range(15, 10, -1)));
```

## 2. Reversing an Array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

### Solution:
```js
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
```

## 3. A List

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third and so on.
```js
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values `{value: 0, rest: list}` and `{value: -1, rest: list}` (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function `arrayToList` that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a `listToArray` function that produces an array from a list. Also write the helper functions `prepend`, which takes an element and a list and creates a new list that adds the element to the front of the input list, and `nth`, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

### Solution:
```js
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
```

## 4. Deep Comparison

The `==` operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, `deepEqual`, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to `deepEqual`.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the `typeof` operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

## Solution:
```js
function deepEqual(val1, val2){
  // check if values are strictly equal
  if (val1 === val2) {
    return true;
  }
  // return false if either of the params are null
  if (val1 === null || val2 === null) {
    return false;
  }
  // handle object property comparison
  if ((typeof val1 === 'object') && (typeof val2 === 'object')) {
    if (Object.keys(val1).length !== Object.keys(val2).length) {
      return false;
    }
    for (let key in val1) {
      if (val2.hasOwnProperty(key)){
        return deepEqual(val1[key], val2[key]);
      }
    }
  }
  // default
  return false;
}

const obj = { here: { is: "an" }, object: 2 };
console.log(`Test 1: ${deepEqual(obj, obj)}`);
console.log(`Test 2: ${deepEqual(obj, { here: 1, object: 2 })}`);
console.log(`Test 3: ${deepEqual(obj, { here: { is: "an" }, object: 2 })}`);
```