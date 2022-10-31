import { readFileSync } from 'fs';
import { join } from 'path';

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

// Exercise 4
export enum WritingDirection {
  RightToLeft = 'rtl',
  LeftToRight = 'ltr',
  TopToBottom = 'ttb',
}

export type Range = [from: number, to: number];

export type Script = {
  name: string;
  ranges: Range[];
  direction: WritingDirection;
  year: number;
  living: false;
  link: string;
};

export type Count = {
  name: string;
  count: number;
};

const SCRIPTS: Script[] = JSON.parse(readFileSync(join(__dirname, './data/scripts.json'), 'utf8'));

function characterScript(code: number | undefined): Script | undefined {
  if (!code) return;

  for (const script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
}

function countBy<T>(items: Iterable<T>, groupName: (x: T) => unknown): Count[] {
  const counts = [];
  for (const item of items) {
    const name = String(groupName(item));
    const known = counts.findIndex((c) => c.name === name);
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

export function dominantDirection(text: string) {
  const counts = countBy<string>(text, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter((row) => row.name !== 'none');

  return counts.reduce((prev, curr) => (prev.count > curr.count ? prev : curr)).name;
}

/**
  countBy can be implemented with a Map, and arguably looks cleaner

  function countBy<T>(items: Iterable<T>, groupName: (x: T) => unknown): Map<string, number> {
    const counts = new Map();
    for (const item of items) {
      const name = String(groupName(item));
      counts.set(name, counts.get(name) + 1 || 1);
    }
    return counts;
  }

  function dominantDirection(text: string) {
    const counts = countBy<string>(text, (char) => {
      const script = characterScript(char.codePointAt(0));
      return script ? script.direction : 'none';
    });
    counts.delete('none');

    return [...counts.entries()].reduce((prev, curr) => (prev[1] > curr[1] ? prev : curr))[0];
  }
*/
