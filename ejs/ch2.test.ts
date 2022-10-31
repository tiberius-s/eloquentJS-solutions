import '@jest/globals';

import { forLoopTriangle, whileLoopTriangle, fizzBuzz, fizzBuzzRecursive, chessboard } from './ch2';

describe('Eloquent JavaScript - Chapter 2', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

  beforeEach(() => {
    logSpy.mockClear();
  });

  describe('1 - Looping a Triangle', () => {
    test('for loop should log a triangle made of #', () => {
      forLoopTriangle();

      expect(logSpy).toHaveBeenNthCalledWith(1, '#');
      expect(logSpy).toHaveBeenNthCalledWith(2, '##');
      expect(logSpy).toHaveBeenNthCalledWith(3, '###');
      expect(logSpy).toHaveBeenNthCalledWith(4, '####');
      expect(logSpy).toHaveBeenNthCalledWith(5, '#####');
      expect(logSpy).toHaveBeenNthCalledWith(6, '######');
      expect(logSpy).toHaveBeenNthCalledWith(7, '#######');
    });

    test('while should log a triangle made of #', () => {
      whileLoopTriangle();

      expect(logSpy).toHaveBeenNthCalledWith(1, '#');
      expect(logSpy).toHaveBeenNthCalledWith(2, '##');
      expect(logSpy).toHaveBeenNthCalledWith(3, '###');
      expect(logSpy).toHaveBeenNthCalledWith(4, '####');
      expect(logSpy).toHaveBeenNthCalledWith(5, '#####');
      expect(logSpy).toHaveBeenNthCalledWith(6, '######');
      expect(logSpy).toHaveBeenNthCalledWith(7, '#######');
    });
  });

  describe('2 - FizzBuzz', () => {
    test('fizzBuzz should correctly log FizzBuzz', () => {
      fizzBuzz(15);

      expect(logSpy).toHaveBeenNthCalledWith(1, 1);
      expect(logSpy).toHaveBeenNthCalledWith(2, 2);
      expect(logSpy).toHaveBeenNthCalledWith(3, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(4, 4);
      expect(logSpy).toHaveBeenNthCalledWith(5, 'Buzz');
      expect(logSpy).toHaveBeenNthCalledWith(6, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(7, 7);
      expect(logSpy).toHaveBeenNthCalledWith(8, 8);
      expect(logSpy).toHaveBeenNthCalledWith(9, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(10, 'Buzz');
      expect(logSpy).toHaveBeenNthCalledWith(11, 11);
      expect(logSpy).toHaveBeenNthCalledWith(12, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(13, 13);
      expect(logSpy).toHaveBeenNthCalledWith(14, 14);
      expect(logSpy).toHaveBeenNthCalledWith(15, 'FizzBuzz');
    });

    test('fizzBuzzRecursive should correctly log FizzBuzz', () => {
      fizzBuzzRecursive(15);

      expect(logSpy).toHaveBeenNthCalledWith(1, 1);
      expect(logSpy).toHaveBeenNthCalledWith(2, 2);
      expect(logSpy).toHaveBeenNthCalledWith(3, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(4, 4);
      expect(logSpy).toHaveBeenNthCalledWith(5, 'Buzz');
      expect(logSpy).toHaveBeenNthCalledWith(6, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(7, 7);
      expect(logSpy).toHaveBeenNthCalledWith(8, 8);
      expect(logSpy).toHaveBeenNthCalledWith(9, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(10, 'Buzz');
      expect(logSpy).toHaveBeenNthCalledWith(11, 11);
      expect(logSpy).toHaveBeenNthCalledWith(12, 'Fizz');
      expect(logSpy).toHaveBeenNthCalledWith(13, 13);
      expect(logSpy).toHaveBeenNthCalledWith(14, 14);
      expect(logSpy).toHaveBeenNthCalledWith(15, 'FizzBuzz');
    });
  });

  describe('3 - Chessboard', () => {
    test('should log out chessboard', () => {
      const control = ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
      chessboard();
      expect(logSpy).toHaveBeenCalledWith(control);
    });
  });
});
