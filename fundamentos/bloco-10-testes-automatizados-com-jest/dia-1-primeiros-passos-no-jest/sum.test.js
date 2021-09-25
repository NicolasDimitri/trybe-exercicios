const { throws } = require('assert');
const sum = require('./sum');

describe('sum', () => {
  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('9 + 9 = 18', () => {
    expect(sum(9, 9)).toBe(18);
  });
  it('15 + 15 = 30', () => {
    expect(sum(15, 15)).toBe(30);
  });
  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('4 + "5" = error', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('throw error message =  "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numb');
  });
});
