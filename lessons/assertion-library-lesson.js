const { sum, subtract } = require("../math");

let result, expected;

result = sum(3, 7);
expected = 10;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    // toEqual for deep equality
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    // toBeGreaterThan for greater than
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    },
    // toBeLessThan for less than
    toBeLessThan(expected) {
      if (actual >= expected) {
        throw new Error(`${actual} is not less than ${expected}`);
      }
    },
    // toBeGreaterThanOrEqual for greater than or equal to
    toBeGreaterThanOrEqual(expected) {
      if (actual < expected) {
        throw new Error(
          `${actual} is not greater than or equal to ${expected}`
        );
      }
    },
    // toBeLessThanOrEqual for less than or equal to
    toBeLessThanOrEqual(expected) {
      if (actual > expected) {
        throw new Error(`${actual} is not less than or equal to ${expected}`);
      }
    },
    // toBeCloseTo for floating point numbers
    toBeCloseTo(expected) {
      if (Math.abs(actual - expected) > 2) {
        throw new Error(`${actual} is not close to ${expected}`);
      }
    },
    // toBeInstanceOf for instanceof
    toBeInstanceOf(expected) {
      if (!(actual instanceof expected)) {
        throw new Error(`${actual} is not an instance of ${expected}`);
      }
    },
    // toBeNull for null
    toBeNull() {
      if (actual !== null) {
        throw new Error(`${actual} is not null`);
      }
    },
    // toBeTruthy for truthy
    toBeTruthy() {
      if (!actual) {
        throw new Error(`${actual} is not truthy`);
      }
    },
    // toBeFalsy for falsy
    toBeFalsy() {
      if (actual) {
        throw new Error(`${actual} is not falsy`);
      }
    },
    // toContain for arrays
    toContain(expected) {
      if (!actual.includes(expected)) {
        throw new Error(`${actual} does not contain ${expected}`);
      }
    },
    // toHaveLength for length
    toHaveLength(expected) {
      if (actual.length !== expected) {
        throw new Error(`${actual} does not have length of ${expected}`);
      }
    },
    // toMatch for regex
    toMatch(expected) {
      if (!actual.match(expected)) {
        throw new Error(`${actual} does not match ${expected}`);
      }
    },
    // toThrow for exceptions
    toThrow() {
      let error;
      try {
        actual();
      } catch (e) {
        error = e;
      }
      if (!error) {
        throw new Error(`${actual} did not throw an exception`);
      }
    },
    // toThrowError for specific exceptions
    toThrowError(expected) {
      let error;
      try {
        actual();
      } catch (e) {
        error = e;
      }
      if (!error || error.constructor !== expected) {
        throw new Error(`${actual} did not throw an error of type ${expected}`);
      }
    },
    // toBeDefined for defined values
    toBeDefined() {
      if (actual === undefined) {
        throw new Error(`${actual} is not defined`);
      }
    },
    // toBeUndefined for undefined values
    toBeUndefined() {
      if (actual !== undefined) {
        throw new Error(`${actual} is not undefined`);
      }
    },

    // toBeNaN for NaN values
    toBeNaN() {
      if (!Number.isNaN(actual)) {
        throw new Error(`${actual} is not NaN`);
      }
    },
  };
}
