describe ("Game", function(){

  var game;

  beforeEach(function (){
    game = new Game;
  });

  describe("playing", function(){

    it ("calculates the score of a roll", function(){
      game.roll(3, 4);
      expect(game.totalScore).toBe(7);
    });

    it ("keeps track of frames", function(){
      game.roll(1, 2);
      expect(game.currentFrameNumber).toBe(2)
    });

    it("has only ten frames", function(){
      game.currentFrameNumber = 11;
      game.roll(1, 2);
      expect(game.playing).toBe(false);
    });

    it("you cannot roll when game is over", function(){
      game.currentFrameNumber = 11;
      game.totalScore = 25
      game.roll(4, 5)
      expect(game.totalScore).toBe(25);
    });

  });

  describe("spares", function(){

    it("can score a spare", function(){
      game.roll(5, 5);
      game.roll(4, 4);
      expect(game.totalScore).toBe(22);
    })
  });

});