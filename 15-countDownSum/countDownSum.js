class MySolution {
  countDownSum(num) {
    //this.num = num;
    var sum = num;
    if(num != 0){
    num --;
      this.countDownSum(num);
    }
    sum += num;
  return sum;
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;