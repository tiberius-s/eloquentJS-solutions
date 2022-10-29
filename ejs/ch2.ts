/**
 * Note: The solutions here are wrapped in functions to enable us to export
 * and unit test them.
 */

// Exercise 1
export function forLoopTriangle(): void {
  for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
  }
}

export function whileLoopTriangle(): void {
  let counter = 1;
  while (counter <= 7) {
    console.log('#'.repeat(counter));
    counter++;
  }
}

// Exercise 2
export function fizzBuzz(limit: number): void {
  for (let counter = 1; counter <= limit; counter++) {
    let output = '';
    if (counter % 3 === 0) output += 'Fizz';
    if (counter % 5 === 0) output += 'Buzz';
    console.log(output || counter);
  }
}

export function fizzBuzzRecursive(limit: number, counter = 1): void {
  if (counter > limit) return;
  let output = '';
  if (counter % 3 === 0) output += 'Fizz';
  if (counter % 5 === 0) output += 'Buzz';
  console.log(output || counter);
  return fizzBuzzRecursive(limit, ++counter);
}

// Exercise 3
export function chessboard(): void {
  let board = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      (row + col) % 2 === 0 ? (board += ' ') : (board += '#');
    }
    board += '\n';
  }
  console.log(board);
}
