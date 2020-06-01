// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

/**
 * @param {number} num
 * @return {number}
 */

const maximum69Number  = function(num) {
  const temp = num.toString().split("");
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "6") {
      temp[i] = "9";
      break;
    }
  }
  if (parseInt(temp.join("")) > num) {
    return parseInt(temp.join(""));
  } else {
    return num;
  }
};