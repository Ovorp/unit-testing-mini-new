import { add } from '../utils/functions';

describe('add', () => {
  test('`add` returns the sum of two numbers', () => {
    expect(add(3, 4)).toBe(7);
  });

  test('`add` will add a number and a string', () => {
    expect(add(3, '4')).toBe(7);
  });

  test('`add` returns NaN if non numbers are passed', () => {
    expect(add('f', 'd')).toBeNaN();
  });
});
