/* unit tests for chess.js */
const mychessjs = require("./chess.js");

/* This file contains tests on the following units in chess.js:
 * valid_2x2_grid_move() (checks whether two squares are in different 2x2 grids)
 * attacked() (checks whether a piece is under attack)
 * generateOffsets() (a helper function that updates move offset data based on `customPieces` arg)
 * 
 * We do not test any of the original units in chess.js and assume
 * that they are working as a basic part of the chess.js library.
 * We only wrote unit tests for functions that we wrote ourselves or we modified.
 */

var SQUARES = {
  a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
  a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
  a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
  a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
  a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
  a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
  a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
  a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
};

describe("valid_2x2_grid_move() unit testing", () => {
  test("a8 is in the same 2x2 subgrid as itself, b8, a7 and b7", () => {
    expect(mychessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.a8)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.b8)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.a7)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.b7)).toBe(false);
  });

  test("g3 is in the same 2x2 subgrid as itself, g4, h4 and h3", () => {
    expect(mychessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.g3)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.g4)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.h4)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.h3)).toBe(false);
  });

  test("f3 is in the same 2x2 subgrid as itself, e4, f4, and e3", () => {
    expect(mychessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.f3)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.e4)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.f4)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.e3)).toBe(false);
  });

  test("b2 is in the same 2x2 subgrid as itself, a2, a1 and b1", () => {
    expect(mychessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.b2)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.a2)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.a1)).toBe(false);
    expect(mychessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.b1)).toBe(false);
  });

  test("a8 is not in the same 2x2 subgrid as squares other than itself, b8, a7 and b7", () => {
    for (let s = SQUARES.a8; s <= SQUARES.h1; s++) {
      if (s & 0x88) {
        s += 7;
        continue;
      }
      if (s === SQUARES.a8 || s === SQUARES.b8 ||
          s === SQUARES.a7 || s === SQUARES.b7) {
        continue;
      }
      expect(mychessjs.valid_2x2_grid_move(SQUARES.a8, s)).toBe(true);
    }
  });

  test("g3 is not in the same 2x2 subgrid as squares other than itself, g4, h4 and h3", () => {
    for (let s = SQUARES.a8; s <= SQUARES.h1; s++) {
      if (s & 0x88) {
        s += 7;
        continue;
      }
      if (s === SQUARES.g4 || s === SQUARES.h4 ||
          s === SQUARES.g3 || s === SQUARES.h3) {
        continue;
      }
      expect(mychessjs.valid_2x2_grid_move(SQUARES.g3, s)).toBe(true);
    }
  });

  test("f3 is not in the same 2x2 subgrid as squares other than itself, e4, f4, and e3", () => {
    for (let s = SQUARES.a8; s <= SQUARES.h1; s++) {
      if (s & 0x88) {
        s += 7;
        continue;
      }
      if (s === SQUARES.e4 || s === SQUARES.f4 ||
          s === SQUARES.e3 || s === SQUARES.f3) {
        continue;
      }
      expect(mychessjs.valid_2x2_grid_move(SQUARES.f3, s)).toBe(true);
    }
  });

  test("b2 is not in the same 2x2 subgrid as squares other than itself, a2, a1 and b1", () => {
    for (let s = SQUARES.a8; s <= SQUARES.h1; s++) {
      if (s & 0x88) {
        s += 7;
        continue;
      }
      if (s === SQUARES.a2 || s === SQUARES.b2 ||
          s === SQUARES.a1 || s === SQUARES.b1) {
        continue;
      }
      expect(mychessjs.valid_2x2_grid_move(SQUARES.b2, s)).toBe(true);
    }
  });  
});

describe("attacked() unit testing", () => {
  let gridGame = mychessjs.Chess("1k6/8/8/8/8/8/1q6/1K6 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  k  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  q  .  .  .  .  .  . |
  // 1 | .  K  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
  test("In grid chess, a king isn't attacked by a queen in the same grid (above the king)", () => {
    expect(gridGame.attacked('b', 113)).toBe(false);
  });

  let gridGame2 = mychessjs.Chess("1k6/8/8/8/8/8/8/qK6 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  k  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  .  .  .  .  .  . |
  // 1 | q  K  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
  test("In grid chess, a king isn't attacked by a queen in the same grid (to the left of the king)", () => {
    expect(gridGame2.attacked('b', 113)).toBe(false);
  });

  let gridGame3 = mychessjs.Chess("1k6/8/8/8/8/8/2q5/1K6 w - - 0 1", 2);
  // +------------------------+
  // 8 | .  k  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  q  .  .  .  .  . |
  // 1 | .  K  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
  test("In grid chess, a king is attacked by an adjacent queen in the next grid", () => {
    expect(gridGame3.attacked('b', 113)).toBe(true);
  });

  let standardGame = mychessjs.Chess("1K6/8/8/8/8/8/1Q6/1k6 w - - 0 1", 0);
  // +------------------------+
  // 8 | .  K  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  Q  .  .  .  .  .  . |
  // 1 | .  k  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
  test("In standard chess, Black's king is attacked by an adjacent White queen", () => {
    expect(standardGame.attacked('w', 113)).toBe(true);
  });

  let standardGame2 = mychessjs.Chess("1k6/8/8/8/8/8/2q5/1K6 w - - 0 1", 0);
  // +------------------------+
  // 8 | .  k  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  q  .  .  .  .  . |
  // 1 | .  K  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
  test("In standard chess, a king is under attack if there is a diagonally adjacent opponent queen", () => {
    expect(standardGame2.attacked('b', 113)).toBe(true);
  });

  let standardGame3 = mychessjs.Chess("rnbqkbnr/pppp1ppp/8/8/8/8/PPPPQPPP/RNB1KBNR b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  Q  P  P  P |
  // 1 | R  N  B  .  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, the king is attacked by a queen on the same file when there is NO piece blocking the path", () => {
    expect(standardGame3.attacked('w', 4)).toBe(true);
  });

  let standardGame4 = mychessjs.Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPQPPP/RNB1KBNR b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  Q  P  P  P |
  // 1 | R  N  B  .  K  B  N  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, the king is NOT attacked by a queen on the same file when there IS a piece blocking the path", () => {
    expect(standardGame4.attacked('w', 4)).toBe(false);
  });

  let standardGame5 = mychessjs.Chess("rnbqkbnr/pppppppp/5N2/8/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  p  p  p  p |
  // 6 | .  .  .  .  .  N  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, a knight attacks the king when if it is blocked by intermediate pieces", () => {
    expect(standardGame5.attacked('w', 4)).toBe(true);
  });

  let standardGame6 = mychessjs.Chess("rnbqkbnr/pppp4/5N2/8/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  .  .  . |
  // 6 | .  .  .  .  .  N  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, a knight attacks the king when it is not blocked by intermediate pieces", () => {
    expect(standardGame6.attacked('w', 4)).toBe(true);
  });

  let standardGame7 = mychessjs.Chess("rnbqkbnr/pppp4/5D2/8/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  .  .  . |
  // 6 | .  .  .  .  .  D  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, a nightrider attacks the king from 1 knight distance away " +
  "when it is not blocked by intermediate pieces", () => {
    expect(standardGame7.attacked('w', 4)).toBe(true);
  });

  let standardGame8 = mychessjs.Chess("rnbqkbnr/pppp4/8/8/6D1/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  D  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, a nightrider attacks the king from 2 knight distances away " +
  "when it is not blocked by intermediate pieces", () => {
    expect(standardGame8.attacked('w', 4)).toBe(true);
  });

  let standardGame9 = mychessjs.Chess("rnbqkbnr/pppp4/5p2/8/6D1/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
  // +------------------------+
  // 8 | r  n  b  q  k  b  n  r |
  // 7 | p  p  p  p  .  .  .  . |
  // 6 | .  .  .  .  .  p  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  D  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | P  P  P  P  P  P  P  P |
  // 1 | R  N  B  Q  K  B  .  R |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  test("In standard chess, a nightrider does not attack the king from 2 knight distances away " +
  "when it is blocked by an enemy piece 1 knight distance away", () => {
    expect(standardGame9.attacked('w', 4)).toBe(false);
  });

  test("In standard chess, a nightrider does not attack the king from 2 knight distances away " +
  "when it is blocked by a friendly piece 1 knight distance away", () => {
    let standardGame10 = mychessjs.Chess("rnbqkbnr/pppp4/5Q2/8/6D1/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  .  .  .  . |
    // 6 | .  .  .  .  .  Q  .  . |
    // 5 | .  .  .  .  .  .  .  . |
    // 4 | .  .  .  .  .  .  D  . |
    // 3 | .  .  .  .  .  .  .  . |
    // 2 | P  P  P  P  P  P  P  P |
    // 1 | R  N  B  Q  K  B  .  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame10.attacked('w', 4)).toBe(false);
  });

  test("In standard chess, a princess does not attack the king from 2 knight distances away " +
  "when it is blocked by a friendly piece 1 knight distance away", () => {
    let standardGame11 = mychessjs.Chess("rnbqkbnr/pppp4/5Q2/8/6S1/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  .  .  .  . |
    // 6 | .  .  .  .  .  Q  .  . |
    // 5 | .  .  .  .  .  .  .  . |
    // 4 | .  .  .  .  .  .  S  . |
    // 3 | .  .  .  .  .  .  .  . |
    // 2 | P  P  P  P  P  P  P  P |
    // 1 | R  N  B  Q  K  B  .  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame11.attacked('w', 4)).toBe(false);
  });

  test("In standard chess, a diagonally adjacent ferz attacks the enemy king ", () => {
    let standardGame12 = mychessjs.Chess("rnbqkbnr/pppp1F2/8/8/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  .  F  .  . |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  . |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  .  .  .  . |
    // 2 | P  P  P  P  P  P  P  P |
    // 1 | R  N  B  Q  K  B  .  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame12.attacked('w', 4)).toBe(true);
  });

  test("In standard chess, a princess attacks the king when on the same diagonal " +
  "when the diagonal contains no intermediate piece", () => {
    let standardGame13 = mychessjs.Chess("rnbqkbnr/pppp4/8/7S/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  .  .  .  . |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  S |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  .  .  .  . |
    // 2 | P  P  P  P  P  P  P  P |
    // 1 | R  N  B  Q  K  B  .  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame13.attacked('w', 4)).toBe(true);
  });

  test("In standard chess, a princess does not attack the enemy king along the same diagonal " +
  "when the diagonal contains an intermediate piece", () => {
    let standardGame14 = mychessjs.Chess("rnbqkbnr/pppp1p2/8/7S/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 1", 0);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  .  p  .  . |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  S |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  .  .  .  . |
    // 2 | P  P  P  P  P  P  P  P |
    // 1 | R  N  B  Q  K  B  .  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
  
    expect(standardGame14.attacked('w', 4)).toBe(false);
  });

  test("In standard chess, a custom piece with a non-repeating offset x that is positioned -x squares " +
  "from the opponent's king is putting the opponent in check", () => {
    let customPiece = { 'c': { 0: [-96], 1: [] } };
    let standardGame = mychessjs.Chess("rnbqkbnr/pppppppp/8/8/8/4P3/PPPPCPPP/RNBQKBNR b KQkq - 0 1", 0, customPiece);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  p  p  p  p |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  . |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  P  .  .  . |
    // 2 | P  P  P  P  C  P  P  P |
    // 1 | R  N  B  Q  K  B  N  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame.attacked('w', 4)).toBe(true);

    customPiece = { 'c': { 0: [-51], 1: [] } };
    standardGame = mychessjs.Chess("rnbqkbnr/pppppppp/8/7C/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1", 0, customPiece);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  p  p  p  p |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  C |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  P  .  .  . |
    // 2 | P  P  P  P  .  P  P  P |
    // 1 | R  N  B  Q  K  B  N  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame.attacked('w', 4)).toBe(true);
  });

  test("In standard chess, a custom piece with a repeating offset -32 that is positioned -96 squares " +
  "from the opponent's king is checking the opponent (if there are no interceding pieces)", () => {
    let customPiece = { 'c': { 0: [], 1: [-32] } };
    let standardGame = mychessjs.Chess("rnbqkbnr/pppppppp/8/8/8/4P3/PPPPCPPP/RNB1KBNR b KQkq - 0 1", 0, customPiece);
    // +------------------------+
    // 8 | r  n  b  q  k  b  n  r |
    // 7 | p  p  p  p  p  p  p  p |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  . |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  P  .  .  . |
    // 2 | P  P  P  P  C  P  P  P |
    // 1 | R  N  B  Q  K  B  N  R |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    expect(standardGame.attacked('w', 4)).toBe(true);
  });

  test("In antichess, a king is under attack (it's just not under check) if there is an adjacent opponent queen", () => {
    let antiGame = mychessjs.Chess("1K6/8/8/8/8/8/1Q6/1k6 b - - 0 1", 0);
    // +------------------------+
    // 8 | .  K  .  .  .  .  .  . |
    // 7 | .  .  .  .  .  .  .  . |
    // 6 | .  .  .  .  .  .  .  . |
    // 5 | .  .  .  .  .  .  .  . |
    // 4 | .  .  .  .  .  .  .  . |
    // 3 | .  .  .  .  .  .  .  . |
    // 2 | .  Q  .  .  .  .  .  . |
    // 1 | .  k  .  .  .  .  .  . |
    //   +------------------------+
    //     a  b  c  d  e  f  g  h
    // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
    expect(antiGame.attacked('w', 113)).toBe(true);
  });

  let antiGame2 = mychessjs.Chess("1k6/8/8/8/8/8/2q5/1K6 w - - 0 1", 0);
  // +------------------------+
  // 8 | .  k  .  .  .  .  .  . |
  // 7 | .  .  .  .  .  .  .  . |
  // 6 | .  .  .  .  .  .  .  . |
  // 5 | .  .  .  .  .  .  .  . |
  // 4 | .  .  .  .  .  .  .  . |
  // 3 | .  .  .  .  .  .  .  . |
  // 2 | .  .  q  .  .  .  .  . |
  // 1 | .  K  .  .  .  .  .  . |
  //   +------------------------+
  //     a  b  c  d  e  f  g  h
  // It's White's turn and White's king is placed on square 'b1' (i.e., 113).
  test("In antichess, a king is under attack (it's just not under check) if there is an opponent queen on the same diagonal", () => {
    expect(antiGame2.attacked('b', 113)).toBe(true);
  });
});

describe("generateOffsets() unit test (return positive integer multiples of the input between -119 and 119)", () => {
  test("-17 -> [-17, -34, -51, -68, -85, -102, -119]", () => {
    expect(mychessjs.generateOffsets(-17)).toEqual([-17, -34, -51, -68, -85, -102, -119]);
  });
  test("+17 -> [+17, +34, +51, +68, +85, +102, +119]", () => {
    expect(mychessjs.generateOffsets(+17)).toEqual([+17, +34, +51, +68, +85, +102, +119]);
  });
  test("-1 -> [ -1,  -2,  -3,  -4,  -5,   -6,   -7]", () => {
    expect(mychessjs.generateOffsets(-1)).toEqual([ -1,  -2,  -3,  -4,  -5,   -6,   -7]);
  })
  test("+18 -> [+18, +36, +54]", () => {
    expect(mychessjs.generateOffsets(+18)).toEqual([+18, +36, +54]);
  })
  test("-19 -> [-19, -38]", () => {
    expect(mychessjs.generateOffsets(-19)).toEqual([-19, -38]);
  })
  test("-20 -> [-20]", () => {
    expect(mychessjs.generateOffsets(-20)).toEqual([-20]);
  })
  test("+20 -> [+20]", () => {
    expect(mychessjs.generateOffsets(+20)).toEqual([+20]);
  })
  test("-24 -> []", () => {
    expect(mychessjs.generateOffsets(-24)).toEqual([]);
  })
  test("+24 -> []", () => {
    expect(mychessjs.generateOffsets(+24)).toEqual([]);
  })
  test("-34 -> [-34, -68, -102]", () => {
    expect(mychessjs.generateOffsets(-34)).toEqual([-34, -68, -102]);
  })
  test("+51 -> [+51, +102]", () => {
    expect(mychessjs.generateOffsets(+51)).toEqual([+51, +102]);
  })
  test("-119 -> [-119]", () => {
    expect(mychessjs.generateOffsets(-119)).toEqual([-119]);
  })
  test("+119 -> [+119]", () => {
    expect(mychessjs.generateOffsets(+119)).toEqual([+119]);
  })
});
