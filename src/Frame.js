function Frame (firstRoll, secondRoll) {
  this.pins = 10
  this.firstRoll = firstRoll
  this.secondRoll = secondRoll
  this.spare = false
  this.strike = false
};

Frame.prototype.hits = function() {
  this.pins -= this.firstRoll
  this.isAStrike();
  this.pins -= this.secondRoll
  this.isASpare();
};

Frame.prototype.isASpare = function() {
  if (this.pins === 0 && this.strike === false) {
    this.spare = true
  }
};

Frame.prototype.isAStrike = function() {
  if (this.pins === 0){
    this.strike = true
  }
};