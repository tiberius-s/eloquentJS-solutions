import '@jest/globals';
import { every, everySome, flatten, loop, dominantDirection, WritingDirection } from './ch5';

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
    test.each([
      [[1, 2, 3, 4, 5], (x: number) => x < 10, true],
      [[6, 7, 8, 9, 10], (x: number) => x < 10, false],
    ])('given %p and %s, every returns %p', (arr, fn, expected) => {
      expect(every(arr, fn)).toBe(expected);
    });

    test.each([
      [[1, 2, 3, 4, 5], (x: number) => x < 10, true],
      [[6, 7, 8, 9, 10], (x: number) => x < 10, false],
    ])('given %p and %s, everySome returns %p', (arr, fn, expected) => {
      expect(everySome(arr, fn)).toBe(expected);
    });
  });

  describe('4 - Dominant Writing Direction', () => {
    test.each([
      ['Hello!', WritingDirection.LeftToRight],
      ['Hey, مساء الخير', WritingDirection.RightToLeft],
    ])('%p should return %', (text, expected) => {
      expect(dominantDirection(text)).toEqual(expected);
    });
  });
});
