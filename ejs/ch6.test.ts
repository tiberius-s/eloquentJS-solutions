import '@jest/globals';
import { describe } from '@jest/globals';
import { Group, Vec } from './ch6';

describe('Eloquent Javascript - Chapter 6', () => {
  describe('A Vector Type', () => {
    test('plus correctly calculates new vector', () => {
      const result = new Vec(1, 2).plus(new Vec(2, 3));
      expect(result).toEqual(new Vec(3, 5));
    });
    test('minus correctly calculates new vector', () => {
      const result = new Vec(1, 2).minus(new Vec(2, 3));
      expect(result).toEqual(new Vec(-1, -1));
    });
    test('length should be distance between points', () => {
      expect(new Vec(3, 4).length).toBe(5);
    });
  });

  describe('Groups', () => {
    test('Group should have correct behaviors', () => {
      const group = Group.from([10, 20]);
      expect(group.has(10)).toBeTruthy();
      expect(group.has(30)).toBeFalsy();
      group.add(10);
      group.delete(10);
      expect(group.has(10)).toBeFalsy();
    });
  });

  describe('Iterable Groups', () => {
    test('should iterate over group', () => {
      const logSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn);

      for (const value of Group.from(['a', 'b', 'c'])) {
        console.log(value);
      }

      expect(logSpy).toHaveBeenNthCalledWith(1, 'a');
      expect(logSpy).toHaveBeenNthCalledWith(2, 'b');
      expect(logSpy).toHaveBeenNthCalledWith(3, 'c');

      logSpy.mockReset();
    });
  });

  describe('Borrowing a Method', () => {
    test('Call hasOwnProperty from Object.prototype', () => {
      const map = { one: true, two: true, hasOwnProperty: true };
      expect(Object.hasOwnProperty.call(map, 'one')).toBeTruthy();
    });
  });
});
