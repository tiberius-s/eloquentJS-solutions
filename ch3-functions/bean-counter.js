'use strict';

function countChar(str, label) {
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === label) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countChar("Hello World", "o"));