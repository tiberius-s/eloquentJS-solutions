'use strict';

var size = 8;
function printChessBoard(width, height) {
  var row = [];
  var blockSwitch = true;
  for (var i = 0; i < width; i++){
    if (blockSwitch) {
      row.push('#');
    }
    else {
      row.push('_');
    }
    blockSwitch = !blockSwitch;
  }
  for (var j = 0; j < height; j++){
    console.log(row.join(''));
    row.reverse();
  }
}

printChessBoard(size, size);