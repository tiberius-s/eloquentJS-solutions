export function min(arg1: number, arg2: number): number {
  return arg1 <= arg2 ? arg1 : arg2;
}

export function isEven(value: number): boolean {
  const absValue = Math.abs(value);
  if (absValue === 0) {
    return true;
  }
  if (absValue === 1) {
    return false;
  }
  return isEven(absValue - 2);
}

// export function countChar(input: string, char: string): number {
//   return input.split('').reduce((acc: string[], curr: string) => (curr === char ? [...acc, curr] : acc), []).length;
// }

// export function countChar(input: string, char: string): number {
//   return input.split('').filter((x) => x === char).length;
// }

export function countChar(input: string, char: string): number {
  let count = 0;
  for (const value of input) {
    if (value === char) {
      count++;
    }
  }
  return count;
}

export const countB = (input: string) => countChar(input, 'B');
