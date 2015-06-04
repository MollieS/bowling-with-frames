function Game () {
  this.totalScore = 0
  this.currentFrameNumber = 1
  this.playing = true
  this.frames = []
  this.bonusRolls = false
};

Game.prototype.scoreCalculate = function() {
  this.spareScoreCalc()
  this.strikeScoreCalc()
  this.scoreUpdate()
  this.bonusScoreUpdate()
};

Game.prototype.roll = function(firstBall, secondBall) {
  this.newFrame(firstBall, secondBall)
  this._isGameOver()
  if (this.playing === true && this.frames.length === 1) {
    this.totalScore += this.frames[0].score
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

Game.prototype.scoreUpdate = function() {
  this.totalScore = 0
  for (i = 0; i < this.frames.length; i++) {
    this.totalScore += this.frames[i].score
  }
};

Game.prototype.strikeScoreCalc = function(first_argument) {
  var previousFrame = this.frames[this.currentFrameNumber -2]
  var currentFrame = this.frames[this.currentFrameNumber -1]
  var starterFrame = this.frames[this.currentFrameNumber -3]
  if (previousFrame.strike === true && currentFrame.strike === false){
      previousFrame.score += currentFrame.score
      previousFrame.updated = true
  }
  if (this.frames.length > 2 && starterFrame.strike === true && starterFrame.updated === false){
    starterFrame.score += currentFrame.firstRoll + previousFrame.firstRoll
    starterFrame.updated = true
  }
};

Game.prototype._isGameOver = function() {
  if (this.currentFrameNumber >= 11) {
    if (this.frames[9].strike === false){
      this.playing = false
    }
    else if (this.frames[9].strike) {
      this.bonusRolls = true
      this.playing = true
    }
  }
  else {
    this.playing = true
  }
};

Game.prototype.newFrame = function(firstBall, secondBall) {
  var frame = new Frame(firstBall, secondBall)
  frame.hits()
  this.frames.push(frame)
};

Game.prototype.spareScoreCalc = function() {
  var previousFrame = this.frames[this.currentFrameNumber -2]
  var currentFrame = this.frames[this.currentFrameNumber -1]
  if (previousFrame.spare === true)
  {
    previousFrame.score += currentFrame.firstRoll
  }
};

Game.prototype.bonusScoreUpdate = function() {
  if (this.bonusRolls) {
    if (this.frames[10].strike === true){
    }
    else {
      this.totalScore += this.frames.score
    }
  };
};
