import '@jest/globals';
import { every, everySome, flatten, loop } from './ch5';

describe('Eloquent Javascript - Chapter 5', () => {
  describe('1 - Flattening', () => {
    test('should return a flat array', () => {
      const arrays = [[1, 2, 3], [4, [5]], [6]];
      const expected = [1, 2, 3, 4, 5, 6];
      expect(flatten(arrays)).toEqual(expected);
    });
  });

  describe('2 - Your Own Loop', () => {
    test('should loop and invoke function passed in', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn);

      loop(
        3,
        (n: number) => n > 0,
        (n: number) => n - 1,
        console.log,
      );

      expect(logSpy).toHaveBeenNthCalledWith(1, 3);
      expect(logSpy).toHaveBeenNthCalledWith(2, 2);
      expect(logSpy).toHaveBeenNthCalledWith(3, 1);

      logSpy.mockReset();
    });
  });

  describe('3 - Everything', () => {
    test('every should return true', () => {
      expect(every([1, 2, 3, 4, 5], (x) => x < 10)).toBeTruthy();
    });
    test('every return false', () => {
      expect(every([6, 7, 8, 9, 10], (x) => x < 10)).toBeFalsy();
    });
    test('everySome should return true', () => {
      expect(everySome([1, 2, 3, 4, 5], (x) => x < 10)).toBeTruthy();
    });
    test('everySome return false', () => {
      expect(everySome([6, 7, 8, 9, 10], (x) => x < 10)).toBeFalsy();
    });
  });

  describe('4 - Dominant Writing Direction', () => {
    test('every should return true', () => {
      expect(every([1, 2, 3, 4, 5], (x) => x < 10)).toBeTruthy();
    });
  });
});
