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
  return arr.reduce((a, b) => {
    return a + b;
  });
}

console.log(range(15, 10, -1));
console.log(sumArray(range(15, 10, -1)));