import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  it('should return the string in uppercase', () => {
    expect(changeStringCase('hello', 'uppercase')).toEqual('HELLO');
  });

  it('should return the string in lowercase', () => {
    expect(changeStringCase('HELLO', 'lowercase')).toEqual('hello');
  });

  it('should return the string unchanged', () => {
    expect(changeStringCase('hello', 'camelcase')).toEqual('hello');
  });
});

describe('sumOfArray()', () => {
  it('should return the sum of the array', () => {
    expect(sumOfArray([1, 2, 3])).toEqual(6);
  });

  it('should return 0 if the array is empty', () => {
    expect(sumOfArray([])).toEqual(0);
  });

  it('should return the sum of the array with negative numbers', () => {
    expect(sumOfArray([-1, -2, -3])).toEqual(-6);
  });

  it('should return 0 If type of values are only string or NaN', () => {
    expect(sumOfArray(['first', true, 'third', 'false'])).toEqual(0);
  });
});

describe('divisibleBy()', () => {
  it('should return the numbers divisible by the number', () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6]);
  });

  it('should return an empty array if no numbers are divisible by the number', () => {
    expect(divisibleBy([1, 3, 5], 2)).toEqual([]);
  });
});

describe('addDotsToString()', () => {
  it('should add dots to the string if it is longer than the length', () => {
    expect(addDotsToString('hello world', 6)).toEqual('hel...');
  });

  it('should return the string unchanged if it is shorter than the length', () => {
    expect(addDotsToString('hello world', 11)).toEqual('hello world');
  });
});

describe('objectEntries()', () => {
  it('should return an array of key-value pairs', () => {
    expect(objectEntries({ a: 1, b: 2 })).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });

  it('should return an empty array if the object is empty', () => {
    expect(objectEntries({})).toEqual([]);
  });
});
