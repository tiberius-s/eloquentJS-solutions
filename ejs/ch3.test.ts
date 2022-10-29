import '@jest/globals';
import { countB, countChar, isEven, min } from './ch3';

describe('Eloquent Javascript - Chapter 3', () => {
  describe('min', () => {
    test.each([
      [0, 10, 0],
      [0, -10, -10],
    ])('%p and %p should return %p', (a, b, expected) => {
      expect(min(a, b)).toEqual(expected);
    });
  });

  describe('isEven', () => {
    test.each([
      [50, true],
      [75, false],
      [-1, false],
    ])('%p should return %p', (input, expected) => {
      expect(isEven(input)).toEqual(expected);
    });
  });

  describe('countChar', () => {
    test('should return correct number of given char', () => {
      expect(countChar('kakkerlak', 'k')).toEqual(4);
    });
  });

  describe('countB', () => {
    test('should return correct number of "B"', () => {
      expect(countB('BBC')).toEqual(2);
    });
  });
});
