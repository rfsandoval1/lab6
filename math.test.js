// math.test.js
const { factorial, fibonacci } = require('./math');

describe('factorial', () => {
  test('factorial of 0 is 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test('factorial of 5 is 120', () => {
    expect(factorial(5)).toBe(120);
  });
  test('factorial of negative is undefined', () => {
    expect(factorial(-3)).toBeUndefined();
  });
});

describe('fibonacci', () => {
  test('fibonacci of 0 is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('fibonacci of 1 is 1', () => {
    expect(fibonacci(1)).toBe(1);
  });
  test('fibonacci of 6 is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test('fibonacci of negative is undefined', () => {
    expect(fibonacci(-2)).toBeUndefined();
  });
});
