describe ("Bowling", function () {

  it ("A normal game", function () {
    var game = new Game
    game.roll(1, 3)
    game.roll(0, 0)
    game.roll(6, 0)
    game.roll(1, 2)
    game.roll(0, 0)
    game.roll(0, 0)
    game.roll(1, 2)
    game.roll(2, 2)
    game.roll(1, 1)
    game.roll(0, 0)
    expect(game.totalScore).toBe(22)
  })

  it ("Can score strikes and half strikes", function(){
    var game = new Game
      game.roll(10, 0);
      game.roll(2, 5);
      game.roll(5, 5);
      game.roll(7, 1);
      game.roll(10, 0);
      game.roll(5, 5);
      game.roll(2, 1);
      game.roll(0, 0);
      game.roll(3, 4);
      game.roll(0, 0);
      expect(game.totalScore).toBe(91);
  });
});