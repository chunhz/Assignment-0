function fizzBuzz(start, end) {
  // Insert code here;
  var arr = [];
  while(start <= end){
    if (start % 3 == 0 && start % 5 == 0){
      arr.push("FizzBuzz");
      start ++ 
    }
    else if(start % 3 == 0){
      arr.push("Fizz");
      start ++;
    }
    else if(start % 5 == 0){
      arr.push("Buzz");
      start ++;
    }
    else{
      arr.push(start);
      start++;
    } 
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;