// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var answer = [];
    
    var reverse = function(word) {
      var result = [];
      for (var i = word.length - 1; i >= 0; i--) {
        result.push(word[i]);
      }
      var resultJoined = result.join("");
      return resultJoined;
    }
    
    for (var i = 0; i < s.length; i++) {
        answer.push(reverse(s[i]))  
    }
  console.log(answer)
};