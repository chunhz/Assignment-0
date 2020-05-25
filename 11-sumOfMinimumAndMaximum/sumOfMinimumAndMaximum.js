function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var sum = 0;
  var tempMin = 999, tempMax = -999;
  for (var i = 0; i < nums.length; i++){
    if(nums[i] < tempMin) 
      tempMin = nums[i];
    if(nums[i] > tempMax) 
      tempMax = nums[i];
    
  }
  return sum = tempMax + tempMin;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;