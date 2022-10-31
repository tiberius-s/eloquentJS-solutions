// Exercise 1
export class Vec {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  plus(vec: Vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  minus(vec: Vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

// Exercise 2
export class Group {
  list: unknown[];

  constructor() {
    this.list = [];
  }

  add(item: unknown): void {
    if (!this.has(item)) {
      this.list.push(item);
    }
  }

  delete(item: unknown): void {
    const index = this.list.indexOf(item);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  has(item: unknown): boolean {
    return this.list.includes(item);
  }

  static from(iterable: Iterable<unknown>): Group {
    const group = new Group();
    for (const item of iterable) {
      group.add(item);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

// Exercise 3
export class GroupIterator {
  index: number;
  list: unknown[];

  constructor(group: Group) {
    this.index = 0;
    this.list = group.list;
  }

  next() {
    if (this.index === this.list.length) {
      return { done: true };
    }
    const value = this.list[this.index];
    this.index++;
    return { value, done: false };
  }
}
