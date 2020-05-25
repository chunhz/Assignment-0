function frequencyCounter(word) {
  // Insert code here;
  var map = new Map();
  freqCounter = 1;

  for(var i = 0; i < word.length; i++){

    map.set(word.charAt(i),freqCounter);
    
     for(var j = 0 ; j<i; j++){
       if(word.charAt(i) == word.charAt(j)){
       freqCounter++;
       map.set(word.charAt(i),freqCounter)
       //console.log("j: "+ j+" freqcounter: " + freqCounter);
       break;
       }
     }
     return map.get(charAt[i]);
  }

}

// Do not edit this line;
module.exports = frequencyCounter;