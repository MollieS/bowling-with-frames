function Game () {
  this.totalScore = 0
  this.currentFrameNumber = 1
  this.playing = true
  this.frames = []
};

Game.prototype._isGameOver = function() {
  if (this.currentFrameNumber > 10) {
    this.playing = false
  };
};

Game.prototype.spareScoreCalc = function() {
  var now = this.currentFrameNumber -1
  var before = this.currentFrameNumber -2
  if (this.frames[before].spare === true)
  {
    previousFrame = this.frames[before]
    currentFrame = this.frames[now]
    previousFrame.score += currentFrame.firstRoll
  }
};

Game.prototype.scoreCalculate = function() {
  this.spareScoreCalc()
  this.totalScore = 0
  var now = this.currentFrameNumber -1
  for (i = 0; i < this.frames.length; i++) {
    this.totalScore += this.frames[i].score
  }
};

Game.prototype.roll = function(firstBall, secondBall) {
  var frame = new Frame(firstBall, secondBall)
  frame.hits()
  this.frames.push(frame)
  this._isGameOver()
  if ( this.playing === true && this.frames.length === 1) {
    this.totalScore += firstBall + secondBall;
    this.currentFrameNumber += 1;
  }
  else if (this.playing === true && this.frames.length > 1){
    this.scoreCalculate()
    this.currentFrameNumber += 1;
  }
  else {
    return "Game is Over"
  }
};
