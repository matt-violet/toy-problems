// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length == 0) {
    return true;
  } else if (s.length % 2 == 1) {
    return false;
  }
  
  const openers = ['(', '[', '{'];
  const closers = [')', ']', '}'];
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (openers.includes(char)) {
      stack.push(char);
    } else if (closers.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] != openers[closers.indexOf(char)]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  let result = stack.length;
  if (result == 0) {
    return true;
  } else {
    return false;
  }
};