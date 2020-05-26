function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const mySet = new Set();

  args.forEach(args=>{
    for ( let a of args){
        mySet.add(a);
    }
  })
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;