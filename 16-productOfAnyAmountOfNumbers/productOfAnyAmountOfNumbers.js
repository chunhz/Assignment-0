function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let total = 1;

  for(var i of args){
    total = i * total;
  }
  return total;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;