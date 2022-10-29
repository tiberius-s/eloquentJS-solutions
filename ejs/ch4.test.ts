import '@jest/globals';
import {
  arrayToList,
  deepEqual,
  listToArray,
  nth,
  prepend,
  range,
  reverseArray,
  reverseArrayInPlace,
  sum,
} from './ch4';

describe('Eloquent Javascript - Chapter 4', () => {
  describe('1 - range and sum', () => {
    test('range should return array with numbers 1 - 10', () => {
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(range(1, 10)).toEqual(expected);
    });

    test('range should return array with numbers 5 - 1', () => {
      const expected = [5, 4, 3, 2, 1];
      expect(range(5, 1, -1)).toEqual(expected);
    });

    test('sum should return the sum of an array filled with 1 - 10', () => {
      expect(sum(range(1, 10))).toEqual(55);
    });
  });

  describe('2 - reversing an array', () => {
    test('reverseArray should return a new, reversed array', () => {
      const array = [1, 2, 3, 4, 5];
      const result = reverseArray(array);
      expect(result).toEqual([5, 4, 3, 2, 1]);
      expect(array === result).toBeFalsy(); // check that reference is different
    });

    test('reverseArray should return a new, reversed array', () => {
      const array = [1, 2, 3, 4, 5];
      const result = reverseArrayInPlace(array);
      expect(result).toEqual([5, 4, 3, 2, 1]);
      expect(array === result).toBeTruthy(); // check that reference is the same
    });
  });

  describe('3 - a list', () => {
    test('arrayToList should convert array to LinkedList', () => {
      const expected = { value: 10, rest: { value: 20, rest: null } };
      const arr = [10, 20];
      expect(arrayToList(arr)).toEqual(expected);
    });

    test('listToArray should convert a LinkedList to an array', () => {
      const expected = [10, 20, 30];
      const list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };
      expect(listToArray(list)).toEqual(expected);
    });

    test('prepend should add a new node at the beginning of the list', () => {
      const expected = { value: 10, rest: { value: 20, rest: null } };
      const list = { value: 20, rest: null };
      expect(prepend(10, list)).toEqual(expected);
    });

    test("nth should return the value from a node's given position in list", () => {
      const expected = { value: 10, rest: { value: 20, rest: null } };
      const list = { value: 20, rest: null };
      expect(prepend(10, list)).toEqual(expected);
    });

    test('nth should return null if list is not long enough', () => {
      const list = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } };
      expect(nth(5, list)).toEqual(null);
    });
  });

  describe('4 - deep comparison', () => {
    const obj = { here: { is: 'an' }, object: 2 };
    test.each([
      [obj, obj, true],
      [obj, { here: 1, object: 2 }, false],
      [obj, { here: { is: 'an' }, object: 2 }, true],
      [
        {
          key1: 3,
          key2: 'string',
          key3: [4, '45', { key4: [5, '6', false, null, { v: 1 }] }],
        },
        {
          key1: 3,
          key2: 'string',
          key3: [4, '45', { key4: [5, '6', false, null, { v: 1 }] }],
        },
        true,
      ],
      [
        {
          key1: 3,
          key2: 'string',
          key3: [4, '45', { key4: [5, '6', false, null, { v: 1 }] }],
        },
        {
          key1: 3,
          key2: 'string',
          key3: [4, '45', { key4: [5, '6', false, null, { v: 2 }] }],
        },
        false,
      ],
    ])('when %s is compared to %s, should return %p', (source, target, expected) => {
      expect(deepEqual(source, target)).toEqual(expected);
    });
  });
});
