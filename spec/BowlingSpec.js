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
});