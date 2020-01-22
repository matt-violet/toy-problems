// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

// Return any permutation of T (as a string) that satisfies this property.

// Example :
// Input: 
// S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation: 
// "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
// Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 

// Note:

// S has length at most 26, and no character is repeated in S.
// T has length at most 200.
// S and T consist of lowercase letters only.

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

//input: two strings
//output: string
//edge case: chars that appear in T but not S can have any position
const customSortString = function(S, T) {
  let result = [];
  for (let i = 0; i < S.length; i++) {
    let charS = S.charAt(i);
    for (let j = 0; j < T.length; j++) {
      let charT = T.charAt(j);
      if (charT == charS) {
        result.push(charT);
      }
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (!result.includes(T.charAt(i))) {
      for (let j = 0; j < T.length; j++) {
        if (T.charAt(j) == T.charAt(i)) {
          result.push(T.charAt(i)); 
        }
      }
    }
  }
  return result.join('');
};