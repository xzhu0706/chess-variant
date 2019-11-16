const chessjs = require("./chess.js");

let game = new chessjs.Chess("rnbqk1nr/ppppppbp/8/6N1/8/8/PPPPPPPP/RNBQKB1R w - - 1 3", 1);
/*   
 *   +------------------------+    
 *   8 | r  n  b  q  k  .  n  r |
 *   7 | p  p  p  p  p  p  b  p |
 *   6 | .  .  .  .  .  .  .  . |
 *   5 | .  .  .  .  .  .  N  . |
 *   4 | .  .  .  .  .  .  .  . |
 *   3 | .  .  .  .  .  .  .  . |
 *   2 | P  P  P  P  P  P  P  P |
 *   1 | R  N  B  Q  K  B  .  R |
 *   +------------------------+
 *       a  b  c  d  e  f  g  h
 * 
 * It is White's turn, so g5-f7 and g5-h7 should be the
 * only generated moves.
 * 
 * Given the board representation
 * 
 *   a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
 *   a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
 *   a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
 *   a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
 *   a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
 *   a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
 *   a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
 *   a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
 * 
 * g5-f7 would be 54-21 and g5-h7 would be 54-23 (and piece would be 'n' for both moves).
 */
test("After 1. Nh3 g5 2. Nxg5, the only generated moves for White are " + 
  "Nxf7 (square 54 to square 21) and Nxh7 (square 54 to square 23). This is testing the " +
  "mandatory capture rule in antichess.", () => {
    const moves = game.generate_moves(); // an array of move objects
    const expected = [
      { color: 'w', piece: 'n', from: 54, to: 21, captured: 'p' },
      { color: 'w', piece: 'n', from: 54, to: 23, captured: 'p' }
    ];
    expect(moves).toHaveLength(2);
    expect(moves).toMatchObject(expected); // for each move object in the moves array, match the expected subset of properties
  });

let game2 = new chessjs.Chess("rnbqkbnr/ppppp1pp/5p2/7Q/8/4P3/PPPP1PPP/RNB1KBNR b - - 1 2", 1);
// +------------------------+
// 8 | r  n  b  q  k  b  n  r |
// 7 | p  p  p  p  p  .  p  p |
// 6 | .  .  .  .  .  p  .  . |
// 5 | .  .  .  .  .  .  .  Q |
// 4 | .  .  .  .  .  .  .  . |
// 3 | .  .  .  .  P  .  .  . |
// 2 | P  P  P  P  .  P  P  P |
// 1 | R  N  B  .  K  B  N  R |
//   +------------------------+
//     a  b  c  d  e  f  g  h
test("In Antichess, the current player does not have to move when his/her king is in check", () => {
    expect(game2.in_check()).toBe(false);
  });

let game3 = new chessjs.Chess("8/5k2/8/7Q/8/8/8/4K3 w - - 0 1", 1);
// +------------------------+
// 8 | .  .  .  .  .  .  .  . |
// 7 | .  .  .  .  .  k  .  . |
// 6 | .  .  .  .  .  .  .  . |
// 5 | .  .  .  .  .  .  .  Q |
// 4 | .  .  .  .  .  .  .  . |
// 3 | .  .  .  .  .  .  .  . |
// 2 | .  .  .  .  .  .  .  . |
// 1 | .  .  .  .  K  .  .  . |
//   +------------------------+
//     a  b  c  d  e  f  g  h
test("In Antichess, capturing the opponent's king is possible", () => {
  const expected = [
    { color: 'w', piece: 'q', from: 55, to: 21, captured: 'k' }
  ];
  expect(game3.generate_moves()).toMatchObject(expected);
});