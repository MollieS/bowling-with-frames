function Game () {
  this.totalScore = 0
  this.currentFrame = 1
  this.playing = true
  this.frames = []
};


Game.prototype.scoreCalculate = function(firstBall, secondBall) {
  this.totalScore += (firstBall + secondBall)
};

Game.prototype.roll = function(firstBall, secondBall) {
  var frame = new Frame(firstBall, secondBall)
  frame.hits()
  this.frames.push(frame)
  this._isGameOver()
  if ( this.playing === true ) {
    this.scoreCalculate(firstBall, secondBall)
  }
  else {
    return "Game is Over"
  }
};

Game.prototype._isGameOver = function() {
  if (this.currentFrame > 10) {
    this.playing = false
  };
};

Game.prototype._isASpare = function(firstBall, secondBall) {
  // body...
};



