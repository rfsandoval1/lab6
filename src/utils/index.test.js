const { calcWeightedGrade, percentile } = require('./index');

describe('calcWeightedGrade', () => {
  it('calculates weighted grade correctly', () => {
    expect(calcWeightedGrade([
      { score: 80, weight: 0.4 },
      { score: 90, weight: 0.6 }
    ])).toBe(86.00);
  });

  it('throws RangeError if weights do not sum to 1', () => {
    expect(() => calcWeightedGrade([
      { score: 80, weight: 0.5 },
      { score: 90, weight: 0.6 }
    ])).toThrow(RangeError);
  });

  it('throws TypeError for invalid types', () => {
    expect(() => calcWeightedGrade('not an array')).toThrow(TypeError);
    expect(() => calcWeightedGrade([{ score: 'a', weight: 0.5 }])).toThrow(TypeError);
  });

  it('throws RangeError for out-of-range values', () => {
    expect(() => calcWeightedGrade([{ score: 101, weight: 1 }])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{ score: 80, weight: -0.1 }])).toThrow(RangeError);
  });
});

describe('percentile', () => {
  it('returns minimum for p=0', () => {
    expect(percentile(0, [1, 2, 3])).toBe(1.00);
  });
  it('returns maximum for p=100', () => {
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
  });
  it('returns correct nearest-rank for p=50', () => {
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
  });
  it('throws TypeError for invalid input', () => {
    expect(() => percentile('a', [1, 2, 3])).toThrow(TypeError);
    expect(() => percentile(50, 'not an array')).toThrow(TypeError);
    expect(() => percentile(50, [1, 'a', 3])).toThrow(TypeError);
  });
  it('throws RangeError for out-of-range p', () => {
    expect(() => percentile(-1, [1, 2, 3])).toThrow(RangeError);
    expect(() => percentile(101, [1, 2, 3])).toThrow(RangeError);
  });
  it('throws TypeError for empty array', () => {
    expect(() => percentile(50, [])).toThrow(TypeError);
  });
});
