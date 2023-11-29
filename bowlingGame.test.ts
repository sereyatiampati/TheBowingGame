import BowlingGame from './bowlingGame';

describe('BowlingGame', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  test('should calculate score for all strikes', () => {
    rollMultipleTimes(12, 10);
    expect(game.calculateScore()).toBe(300);
  });

  test('should calculate score for all nines and misses', () => {
    rollMultipleTimes(10, 9);
    expect(game.calculateScore()).toBe(90);
  });

  test('should calculate score for all fives and spares', () => {
    rollSpareTimes(10, 5);
    game.rollBall(5); // Bonus roll
    expect(game.calculateScore()).toBe(150);
  });

  // Add more test cases as needed

  function rollMultipleTimes(rolls: number, pins: number): void {
    for (let i = 0; i < rolls; i++) {
      game.rollBall(pins);
    }
  }

  function rollSpareTimes(frames: number, pins: number): void {
    for (let i = 0; i < frames; i++) {
      game.rollBall(pins);
      game.rollBall(10 - pins); // Roll to make a spare
    }
  }
});

