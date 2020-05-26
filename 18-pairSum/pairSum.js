function pairSum(nums, target) {
  // Insert code here;
  if (nums.length < 2 ) throw "error";

  let ans = false;

  for ( let i = 0; i < nums.length; i++){
    for ( let j = 0; j < i; j++){
      if ((nums[i] + nums[j]) == target ) ans = true;
    }
  }
  return ans;
  
}

// Do not edit this line;
module.exports = pairSum;