'use strict';

function printFizzBuzz(start, end) {
  if (start <= end) {
    if (start % 5 == 0 && start % 3 == 0) {
      console.log('FizzBuzz');
    }
    else if (start % 3 == 0) {
      console.log('Fizz');
    }
    else if (start % 5 == 0) {
      console.log('Buzz');
    }
    else {
      console.log(start);
    }
    printFizzBuzz(start + 1, end);
  }
}

printFizzBuzz(1, 100);