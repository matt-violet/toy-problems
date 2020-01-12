// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const k = x < 0 ? -1 : 1;
  let xrev = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (x === 0 || x > 2147483647 || x < -2147483648) {
    return 0;
  }
  if (xrev[0] === '0') {
    xrev = result.slice(1);
  }
  return xrev * k;
};