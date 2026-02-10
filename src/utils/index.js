// Utilities: calcWeightedGrade and percentile

/**
 * Calculates weighted grade from items [{score, weight}].
 * Throws RangeError if weights do not sum to 1 (±0.001).
 * Throws TypeError for invalid types/ranges.
 * Returns grade (0–100) with 2 decimals.
 */
function calcWeightedGrade(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new TypeError('items must be a non-empty array');
  }
  let weightSum = 0;
  let grade = 0;
  for (const item of items) {
    if (typeof item.score !== 'number' || typeof item.weight !== 'number') {
      throw new TypeError('score and weight must be numbers');
    }
    if (item.score < 0 || item.score > 100) {
      throw new RangeError('score must be in 0–100');
    }
    if (item.weight < 0 || item.weight > 1) {
      throw new RangeError('weight must be in 0–1');
    }
    weightSum += item.weight;
    grade += item.score * item.weight;
  }
  if (Math.abs(weightSum - 1) > 0.001) {
    throw new RangeError('weights must sum to 1 ±0.001');
  }
  return Number(grade.toFixed(2));
}

/**
 * Returns the percentile p (nearest-rank) from values.
 * p in [0,100], values: array of numbers, length ≥ 1.
 * Returns result with 2 decimals.
 * Throws TypeError/RangeError for invalid input.
 */
function percentile(p, values) {
  if (typeof p !== 'number' || !Array.isArray(values) || values.length < 1) {
    throw new TypeError('Invalid input');
  }
  if (p < 0 || p > 100) {
    throw new RangeError('Percentile p must be in 0–100');
  }
  for (const v of values) {
    if (typeof v !== 'number') {
      throw new TypeError('All values must be numbers');
    }
  }
  const sorted = [...values].sort((a, b) => a - b);
  const N = sorted.length;
  if (p === 0) return Number(sorted[0].toFixed(2));
  if (p === 100) return Number(sorted[N - 1].toFixed(2));
  const rank = Math.ceil((p / 100) * N);
  return Number(sorted[rank - 1].toFixed(2));
}

module.exports = { calcWeightedGrade, percentile };
