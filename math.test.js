// math.test.js
const { factorial, fibonacci } = require('./math');

describe('factorial', () => {
  test('el factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('el factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('el factorial de un número negativo es indefinido', () => {
    expect(factorial(-3)).toBeUndefined();
  });
});

describe('fibonacci', () => {
  test('fibonacci de 0 es 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci de 1 es 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci de 6 es 8', () => {
    expect(fibonacci(6)).toBe(8);
  });

  test('fibonacci de un número negativo es indefinido', () => {
    expect(fibonacci(-2)).toBeUndefined();
  });
});
