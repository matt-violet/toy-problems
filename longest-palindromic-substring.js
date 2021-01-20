/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCenter(s, i, i);
    let evenPalindrome = expandFromCenter(s, i-1, i);
    
    if (oddPalindrome.length > answer.length) {
      answer = oddPalindrome;
    }
    if (evenPalindrome.length > answer.length) {
      answer = evenPalindrome;
    }
  }
  
  function expandFromCenter(str, left, right) {
    let index = 0;
    while (str[left - index] && str[left - index] == str[right + index]) {
      index++;
    }
    index--;
    
    return str.substring(left - index, right + index + 1);
  }
  
  return answer;
};
