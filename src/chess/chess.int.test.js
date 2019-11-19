/* integration tests for chess.js */

const chessjs = require("./chess.js");

/* For each variant, this file tests the functions we modified in chess/chess.js, which are
 * generate_moves()         (generates a list of valid moves in the current game position)
 * in_check()               (returns true iff the current player's king is in check - should be disabled in antichess)
 * in_checkmate()           (returns true iff the current player's king is in checkmate - should be impossible in antichess)
 * in_stalemate()           (returns true iff the current player has no legal moves)
 * insufficient_material()  (returns true iff neither player can win with the pieces he/she has - should be disabled in grid chess)
 * 
 */

describe("Make sure our modifications to chess.js did not mess up the implementation of regular chess", () => {
  //   a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
  //   a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
  //   a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
  //   a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
  //   a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
  //   a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
  //   a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
  //   a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119

  let standardGame = new chessjs.Chess("r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", 0);
  // +------------------------+
  // 8 | r  .  b  q  k  b  .  r |
  // 7 | p  p  p  p  .  p  p  p |
  // 6 | .  .  n  .  .  n  .  . |
  // 5 | .  B  .  .  p  .  .  . |
  // 4 | .  .  .  .  P  .  .  . |
  // 3 | .  .  .  .  .  N  .  . |
  // 2 | P  P  P  P  .  P  P  P |
  // 1 | R  N  B  Q  K  .  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // White should be able to castle by moving e1-g1 (116-118)
  test("In standard chess, castling is enabled", () => {
    const moves = standardGame.generate_moves();
    const expected = { color: 'w', piece: 'k', from: 116, to: 118, flags: 32 };
    // the moves array must equal an array that contains a move with the expected move properties
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let standardGame2 = new chessjs.Chess("8/3K1P2/1k6/8/8/8/8/8 w - - 0 1", 0);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  K  .  P  .  . |
  // 6 | .  k  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, promotions to queen, rook, bishop and knight are the only possible promotions", () => {
    const moves = standardGame2.generate_moves();
    let expected = { color: 'w', piece: 'p', from: 21, to: 5, promotion: 'r' };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
    expected = { color: 'w', piece: 'p', from: 21, to: 5, promotion: 'q' };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
    expected = { color: 'w', piece: 'p', from: 21, to: 5, promotion: 'b' };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
    expected = { color: 'w', piece: 'p', from: 21, to: 5, promotion: 'n' };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  test("In standard chess, promoting to a king or a pawn is impossible", () => {
    const moves = standardGame2.generate_moves();
    let expected = { color: 'w', piece: 'p', from: 21, to: 5, promotion: 'k' };
    expect(moves).not.toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
    expected = { color: 'w', piece: 'p', from: 21, to: 5, promotion: 'p' };
    expect(moves).not.toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let standardGame3 = new chessjs.Chess("rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPP1PPP/RNBQKBNR w KQkq f6 0 3", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  .  p  .  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  p  P  p  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  .  P  P  P |
  // 1 | R  N  B  Q  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, capturing en passant is possible", () => {
    const moves = standardGame3.generate_moves();
    const expected = { color: 'w', piece: 'p', from: 52, to: 37, captured: 'p' };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });
});

describe("Testing antichess (move generation, winning conditions, etc)", () => {
  let antiGame = new chessjs.Chess("rnbqk1nr/ppppppbp/8/6N1/8/8/PPPPPPPP/RNBQKB1R w - - 1 3", 1);
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
      const moves = antiGame.generate_moves(); // an array of move objects
      const expected = [
        { color: 'w', piece: 'n', from: 54, to: 21, captured: 'p' },
        { color: 'w', piece: 'n', from: 54, to: 23, captured: 'p' }
      ];
      expect(moves).toHaveLength(2);
      expect(moves).toMatchObject(expected); // expect the moves array to match the expected array
    }
  );

  let antiGame2 = new chessjs.Chess("rnbqkbnr/ppppp1pp/5p2/7Q/8/4P3/PPPP1PPP/RNB1KBNR b - - 1 2", 1);
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
  test("In Antichess, checking the king is not possible", () => {
      expect(antiGame2.in_check()).toBe(false);
    });

  let antiGame3 = new chessjs.Chess("8/5k2/8/7Q/8/8/8/4K3 w - - 0 1", 1);
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
  // White should be able to move h5-f7 (55-21)
  test("In Antichess, capturing the opponent's king is possible", () => {
    const expected = [
      { color: 'w', piece: 'q', from: 55, to: 21, captured: 'k' }
    ];
    expect(antiGame3.generate_moves()).toMatchObject(expected);
  });

  let antiGame4 = new chessjs.Chess("rnbqkbnr/pppp3p/4ppp1/8/8/4PN2/PPPPBPPP/RNBQK2R w KQkq - 0 4", 1);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  .  .  p |
  // 6 | .  .  .  .  p  p  p  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  P  N  .  . |
  // 2 | P  P  P  P  B  P  P  P |
  // 1 | R  N  B  Q  K  .  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // White should not be able to castle by moving e1-g1 (116-118)
  test("In Antichess, castling is not possible", () => {
    const moves = antiGame4.generate_moves();
    const expected = { color: 'w', piece: 'k', from: 116, to: 118, flags: 32 };
    // the moves array must not equal an array that contains a move object with the expected move properties
    expect(moves).not.toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let antiGame5 = new chessjs.Chess("8/3K2P1/8/8/8/8/8/3k4 w - - 0 1", 1);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  K  .  .  P  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | .  .  .  k  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // White should be able to promote to a king with the move g7-g8 (22-6)
  test("In Antichess, pawn promotion to a king is possible", () => {
    const moves = antiGame5.generate_moves();
    const expected = { color: 'w', piece: 'p', from: 22, to: 6, promotion: 'k' };
    // the moves array must equal an array that contains a move object with the expected move properties
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let antiGame6 = new chessjs.Chess("8/8/8/8/8/8/8/r3K3 b - - 0 1", 1);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | r  .  .  .  K  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In Antichess, the game is not over when the current player has a valid move " + 
       "(and three-fold repetition didn't just occur)", () => {
    expect(antiGame6.game_over()).toBe(false);
  });

  let antiGame7 = new chessjs.Chess("8/8/8/8/8/8/8/4r3 w - - 0 2", 1);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | .  .  .  .  r  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In Antichess, the game is over when the current player has run out of pieces", () => {
    expect(antiGame7.game_over()).toBe(true);
  });

  let antiGame8 = new chessjs.Chess("7n/5p2/5Pp1/6P1/8/8/8/8 b - - 0 1", 1);
//   +------------------------+
// 8 | .  .  .  .  .  .  .  n |
// 7 | .  .  .  .  .  p  .  . |
// 6 | .  .  .  .  .  P  p  . |
// 5 | .  .  .  .  .  .  P  . |
// 4 | .  .  .  .  .  .  .  . |
// 3 | .  .  .  .  .  .  .  . |
// 2 | .  .  .  .  .  .  .  . |
// 1 | .  .  .  .  .  .  .  . |
//   +------------------------+
//     a  b  c  d  e  f  g  h
  test("In Antichess, the game is over when the current player has pieces but has no legal moves", () => {
    expect(antiGame8.game_over()).toBe(true);
  });
});

describe("Testing grid chess (move generation, checking and game-over conditions)", () => {
  //   a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
  //   a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
  //   a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
  //   a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
  //   a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
  //   a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
  //   a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
  //   a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  let gridGame = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", 2);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, in the starting position, a White pawn can move one square", () => {
    const moves = gridGame.generate_moves();
    const expected = { color: 'w', piece: 'p', from: 100, to: 84 };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });
  test("In grid chess, in the starting position, a White pawn can move two squares", () => {
    const moves = gridGame.generate_moves();
    const expected = { color: 'w', piece: 'p', from: 100, to: 68 };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let gridGame2 = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1", 2);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (Black's turn.)
  test("In grid chess, in the starting position, a Black pawn can move one square", () => {
    const moves = gridGame2.generate_moves();
    const expected = { color: 'b', piece: 'p', from: 23, to: 39 };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });
  test("In grid chess, in the starting position, a Black pawn can move two squares", () => {
    const moves = gridGame2.generate_moves();
    const expected = { color: 'b', piece: 'p', from: 23, to: 55 };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let gridGame3 = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1", 2);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  .  .  .  K  .  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, castling on the king's side is allowed.", () => {
    const moves = gridGame3.generate_moves();
    const expected = { color: 'w', piece: 'k', from: 116, to: 118 };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });
  test("In grid chess, castling on the queen's side is allowed.", () => {
    const moves = gridGame3.generate_moves();
    const expected = { color: 'w', piece: 'k', from: 116, to: 114 };
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let gridGame4 = new chessjs.Chess("rnbqkbnr/pppp1ppp/8/4p3/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 2", 2);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  p  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  P  .  .  . |
  // 2 | P  P  P  P  .  P  P  P |
  // 1 | R  N  B  Q  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, after 1. e3, White cannot play e4 (because e4 is in the same 2x2 subgrid as e3).", () => {
    const moves = gridGame4.generate_moves();
    const expected = { color: 'w', piece: 'p', from: 84, to: 68 };
    expect(moves).not.toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let gridGame5 = new chessjs.Chess("k7/8/8/8/8/8/1K6/8 w - - 0 1", 2);
  // +------------------------+
  // 8 | k  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  K  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, a king that is not on any side/corner will have 8-3=5 viable (out-of-grid) moves on an empty board", () => {
    const moves = gridGame5.generate_moves();
    const expected = [
      { color: 'w', piece: 'k', from: 97, to: 80 },
      { color: 'w', piece: 'k', from: 97, to: 81 }, 
      { color: 'w', piece: 'k', from: 97, to: 82 },
      { color: 'w', piece: 'k', from: 97, to: 98 }, 
      { color: 'w', piece: 'k', from: 97, to: 114 }
    ];
    expect(moves).toMatchObject(expected);
  });

  let gridGame6 = new chessjs.Chess("k7/8/8/8/8/8/Kq6/8 w - - 0 1", 2);
  // +------------------------+
  // 8 | k  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | K  q  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, the king is not in check by an opponent queen in the same grid", () => {
    expect(gridGame6.in_check()).toBe(false);
  });

  let gridGame7 = new chessjs.Chess("8/8/8/8/8/8/Kk6/8 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | K  k  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, the king is not in check by an opponent king in the same grid", () => {
    expect(gridGame7.in_check()).toBe(false);
  });

  let gridGame8 = new chessjs.Chess("8/8/8/8/8/2k5/K7/8 b - - 0 1", 2);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  k  .  .  .  .  . |
  // 2 | K  .  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (Black's turn.)
  test("In grid chess, you can move your king into the same grid as the opponent's king", () => {
    const moves = gridGame8.generate_moves();
    const expected = { color: 'b', piece: 'k', from: 82, to: 97 };
    // the moves array must equal an array that contains a move object with the expected move properties
    expect(moves).toEqual(
      expect.arrayContaining([expect.objectContaining(expected)])
    );
  });

  let gridGame9 = new chessjs.Chess("k7/8/8/8/8/2n5/K7/8 w - - 0 1", 2);
  // +------------------------+
  // 8 | k  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  n  .  .  .  .  . |
  // 2 | K  .  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, a king on a2 is in check by an opponent knight on c3 (in a different grid)", () => {
    expect(gridGame9.in_check()).toBe(true);
  });

  let gridGame10 = new chessjs.Chess("k7/8/8/8/8/8/8/K7 w - - 0 1", 2);
  // +------------------------+
  // 8 | k  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | K  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In grid chess, stalemate occurs when there are no legal out-of-grid moves " +
  "even if there are valid in-the-grid moves", () => {
    expect(gridGame10.in_stalemate()).toBe(true);
  });

  let gridGame11 = new chessjs.Chess("8/8/2k5/8/8/3r4/K7/8 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  k  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  r  .  .  .  . |
  // 2 | K  .  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  // In this case the king can't move to an outside grid because it is cut off by the rook.
  test("In grid chess, you are stalemated " +
  "if your remaining pieces can't move out of their own grids", () => {
    expect(gridGame11.in_stalemate()).toBe(true);
  });

  let gridGame12 = new chessjs.Chess("8/8/2k5/8/r7/3r4/K7/8 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  .  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  k  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | r  .  .  .  .  .  .  . |
  // 3 | .  .  .  r  .  .  .  . |
  // 2 | K  .  .  .  .  .  .  . |
  // 1 | .  .  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  // In this case the king can't move to an outside grid AND it is being attacked.
  test("In grid chess, you are checkmated " +
  "if your king is being attacked and can't move out of its own grid", () => {
    expect(gridGame12.in_checkmate()).toBe(true);
  });

  let gridGame13 = new chessjs.Chess("2k5/8/6N1/8/8/8/8/1K6 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  .  k  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  N  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | .  K  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  // 
  test("In grid chess, draw by insufficient material cannot occur", () => {
    expect(gridGame13.insufficient_material()).toBe(false);
  });
});

describe("Testing extinction chess (winning conditions, etc.)", () => {
  //   a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
  //   a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
  //   a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
  //   a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
  //   a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
  //   a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
  //   a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
  //   a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  let extinctionGame = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQ1BNR w KQkq - 0 1", 3);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  .  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In extinction chess, the game is not over if White has no kings at the start of the game", () => {
    expect(extinctionGame.game_over()).toEqual(false);
  });

  let extinctionGame2 = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR w KQkq - 0 1", 3);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  .  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In extinction chess, the game is not over if White has no queens at the start of the game", () => {
    expect(extinctionGame2.game_over()).toEqual(false);
  });

  let extinctionGame3 = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RN1QK1NR w KQkq - 0 1", 3);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  .  Q  K  .  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In extinction chess, the game is not over if White has no bishops at the start of the game", () => {
    expect(extinctionGame3.game_over()).toEqual(false);
  });

  let extinctionGame4 = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKB1R w KQkq - 0 1", 3);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  .  B  Q  K  B  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In extinction chess, the game is not over if White has no knights at the start of the game", () => {
    expect(extinctionGame4.game_over()).toEqual(false);
  });

  let extinctionGame5 = new chessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBN1 w KQkq - 0 1", 3);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | .  N  B  Q  K  B  N  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // (White's turn.)
  test("In extinction chess, the game is not over if White has no rooks at the start of the game", () => {
    expect(extinctionGame5.game_over()).toEqual(false);
  });


});
