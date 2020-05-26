function frequencyCounter(word) {
  // Insert code here;
  
  var obj = {}; // declare obj.
  freqCounter = 1; // every letter has frequency of 1 in default.

  for(var i = 0; i < word.length; i++){

    for(var j = 0 ; j<i; j++){ //check for duplicate characters.
      if(word.charAt(i) == word.charAt(j)){
      freqCounter++;
      obj[word.charAt(i)] = freqCounter; // set value into obj.
      }
     }
  
     obj[word.charAt(i)] = freqCounter; // set value into obj.
     freqCounter = 1; // reset counter.
 }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;