class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a: number, b: number): number {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure('Klunk');
  }
}

function reliableMultiply(a: number, b: number): number {
  try {
    return primitiveMultiply(a, b);
  } catch (err) {
    if (err instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    } else {
      throw err;
    }
  }
}

// console.log(reliableMultiply(8, 8));

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content:[],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content as unknown[];
  },
};

function withBoxUnlocked(body: (args?: unknown[]) => unknown) {
  const initialBoxState = box.locked;
  try {
    if (box.locked === true) {
      box.unlock();
      body();
      box.lock();
    } else {
      body();
    }
  } finally {
    if (box.locked !== initialBoxState) {
      box.lock();
    }
  }
}

withBoxUnlocked(function () {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised: ' + e);
}

// console.log(box.locked);
