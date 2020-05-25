function countOfAllBooleans(arr) {
  // Insert code here;
  var boolCount = 0;
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] == "boolean") 
      boolCount++;
  }
  return boolCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;