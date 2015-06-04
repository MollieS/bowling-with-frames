describe ("Game", function(){

  describe("playing", function(){

    it ("calculates the score of a roll", function(){
      game = new Game
      game.roll(3, 4);
      expect(game.totalScore).toBe(7);
    });

  });

});