# Solutions

## 1. Looping a Triangle

Write a loop that makes seven calls to console.log to output the following triangle:
```
#
##
###
####
#####
######
#######
```

### Solution:

```js
var hashtag = '#';
for (var i = 0; i < 7; i++){
  console.log(hashtag);
  hashtag += '#';
}
```

## 2. FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

Solution:

```js
function printFizzBuzz(start, end) {
  if (start <= end) {
    if (start % 5 === 0 && start % 5 === 0) {
      console.log('FizzBuzz');
    }
    else if (start % 3 === 0) {
      console.log('Fizz');
    }
    else if (start % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(start);
    }
    printFizzBuzz(start + 1, end);
  }
}

printFizzBuzz(1, 100);
```

## 3. Chess Board
Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:
```
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
```
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

Solution:
```js
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
```