function Game () {
  this.totalScore = 0
};


Game.prototype.scoreCalculate = function(firstBall, secondBall) {
  this.totalScore += (firstBall + secondBall)
};

Game.prototype.roll = function(firstBall, secondBall) {
  this.scoreCalculate(firstBall, secondBall)
};



