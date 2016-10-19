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