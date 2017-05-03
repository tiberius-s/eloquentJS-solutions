'use strict';

const every = (arr, evalFunc) => arr.reduce((a, b) => evalFunc(a) === (evalFunc(a) === evalFunc(b)));

const some = (arr, evalFunc) => arr.map(a => evalFunc(a)).includes(true);

console.log(every([NaN, NaN, NaN], isNaN)); // true
console.log(every([NaN, NaN, 4], isNaN)); // false
console.log(some([NaN, 3, 4], isNaN));  // true
console.log(some([2, 3, 4], isNaN));  // false