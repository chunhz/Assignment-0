function isPalindrome(word) {
  // Insert code here;
  var test = word.split('').reverse().join('');
  if(test == word)
  return true;
  else 
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;