export function range(start: number, end: number, step = 1): number[] {
  return Array.from({ length: Math.ceil((end - start) / step + 1) }, (_, i) => start + i * step);
}

export function sum(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr);
}

export function reverseArray(arr: unknown[]): unknown[] {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

export function reverseArrayInPlace(arr: unknown[]): unknown[] {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

export type LinkedList = {
  value: unknown;
  rest: LinkedList | null;
};

export function arrayToList(arr: unknown[]): LinkedList | null {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

export function listToArray(obj: LinkedList): unknown[] {
  const arr = [];
  while (obj?.rest) {
    arr.push(obj.value);
    obj = obj.rest;
  }
  arr.push(obj?.value);
  return arr;
}

export function prepend(el: unknown, list: LinkedList): LinkedList {
  list = { value: el, rest: list };
  return list;
}

export function nth(position: number, list: LinkedList | null): unknown {
  if (position == 0) {
    return list?.value;
  }
  if (!list) {
    return null;
  }
  return nth(position - 1, list?.rest);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deepEqual(valOne: any, valTwo: any): boolean {
  // check if values are strictly equal
  if (valOne === valTwo) {
    return true;
  }
  // return false if either of the values is null
  if (valOne === null || valTwo === null) {
    return false;
  }
  // handle object property comparison
  if (typeof valOne === 'object' && typeof valTwo === 'object') {
    const keysOne = Object.keys(valOne);
    const keysTwo = Object.keys(valTwo);
    if (keysOne.length !== keysTwo.length) {
      return false;
    }
    for (const key of keysOne) {
      if (!keysTwo.includes(key) || !deepEqual(valOne[key], valTwo[key])) {
        return false;
      }
    }
    return true; // checks for every key passed
  }
  return false;
}
