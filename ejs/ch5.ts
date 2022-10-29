// Exercise 1
export function flatten(arr: unknown[][]): unknown[] {
  return arr.reduce((prev, curr) => {
    return Array.isArray(curr) ? prev.concat(flatten(curr)) : prev.concat(curr);
  }, []);
}

//Exercise 2
export function loop<T>(
  value: T,
  testFn: (value: T) => boolean,
  updateFn: (value: T) => T,
  bodyFn: (value: T) => unknown,
): void {
  for (value; testFn(value); value = updateFn(value)) {
    bodyFn(value);
  }
}

// BONUS implementation with a while loop
export function whileLoop<T>(
  value: T,
  testFn: (value: T) => boolean,
  updateFn: (value: T) => T,
  bodyFn: (value: T) => unknown,
) {
  while (testFn(value)) {
    bodyFn(value);
    value = updateFn(value);
  }
}

// Exercise 3
export function every<T>(arr: T[], predicate: (x: T) => boolean): boolean {
  let hits = 0;
  for (const item of arr) {
    if (!predicate(item)) {
      hits++;
    }
  }
  return hits > 0 ? false : true;
}

export function everySome<T>(arr: T[], predicate: (x: T) => boolean): boolean {
  return !arr.some((x) => !predicate(x));
}

export enum WritingDirection {
  RightToLeft = 'rtl',
  LeftToRight = 'ltr',
}
