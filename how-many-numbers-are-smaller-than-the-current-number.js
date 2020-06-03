// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// 
// Return the answer in an array.

const smallerNumbersThanCurrent = function(nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let num = nums[i]
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < num) {
        count++;
      }
    }
    output.push(count);
  }
  return output;
};
