'use strict';

function printMinimum(num1, num2) {
  if(num1 < num2){
    return num1;
  }
  else{
    return num2;
  }
}

console.log(printMinimum(4, 8));