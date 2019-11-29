/* unit tests for chess.js */
const mychessjs = require("./chess.js");

/* This file contains tests on the following units in chess.js:
 * valid_2x2_grid_move() (checks whether two squares are in different 2x2 grids)
 * attacked() (checks whether a piece is under attack)
 * updateAttacks() (updates the `ATTACKS` array based on the passed `customPieces` argument)
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
  test("In grid chess, a king won't be under attack by an opponent queen in the same grid (above the king)", () => {
    expect(gridGame.attacked('b', 113)).toBe(false); // fix this so it mocks the call to valid_2x2_grid_move()
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
  test("In grid chess, a king won't be under attack by an opponent queen in the same grid (to the left of the king)", () => {
    expect(gridGame2.attacked('b', 113)).toBe(false); // fix this so it mocks the call to valid_2x2_grid_move()
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
  test("In grid chess, a king is under attack if there is an adjacent opponent queen in an adjacent grid", () => {
    expect(gridGame3.attacked('b', 113)).toBe(true); // fix this so it mocks the call to valid_2x2_grid_move()
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
  test("In standard chess, Black's king is under attack if there is an adjacent White queen", () => {
    expect(standardGame.attacked('w', 113)).toBe(true); // fix this so it mocks the call to valid_2x2_grid_move()
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
  test("In standard chess, a king is under attack if there is an opponent queen on the same diagonal", () => {
    expect(standardGame2.attacked('b', 113)).toBe(true); // fix this so it mocks the call to valid_2x2_grid_move()
  });

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
  test("In antichess, a king is under attack if there is an adjacent opponent queen", () => {
    expect(antiGame.attacked('w', 113)).toBe(true); // fix this so it mocks the call to valid_2x2_grid_move()
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
  test("In antichess, a king is under attack if there is an opponent queen on the same diagonal", () => {
    expect(antiGame2.attacked('b', 113)).toBe(true); // fix this so it mocks the call to valid_2x2_grid_move()
  });
});

// describe("updateAttacks()", () => {
//   test('updateAttacks() updates an empty ATTACKS array to the standard ATTACKS array from (un-modified) chess.js' +
//       'if given the standard piece definitions', () => {
//     let ATTACKS = [
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     ];

//     const defaultPieces = {
//       n: {
//         0: [],
//         1: [-18, -33, -31, -14,  18, 33, 31,  14]
//       },
//       b: {
//         0: [-17, -15,  17,  15],
//         1: []
//       },
//       r: {
//         0: [-16,   1,  16,  -1],
//         1: []
//       },
//       q: {
//         0: [-17, -16, -15,   1,  17, 16, 15,  -1],
//         1: []
//       },
//       k: {
//         0: [],
//         1: [-17, -16, -15,   1,  17, 16, 15,  -1]
//       },
//     };

//     const SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };

//     expect(mychessjs.updateAttacks(ATTACKS, SHIFTS, defaultPieces)).toEqual(
//       [
//         20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
//         0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
//         0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
//         0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
//         0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
//         24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
//         0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
//         0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
//         0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
//         0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
//         20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20,
//       ]
//     );
//   });

//   test('updateAttacks() updates the ATTACKS array correctly for a given "compound" fairy piece', () => {
//     let ATTACKS = [
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     ];

//     const customPieces = {
//       x: {
//         0: [-17, -16, -15,   1,  17, 16, 15,  -1], // queen offsets
//         1: [-18, -33, -31, -14,  18, 33, 31,  14] // knight offsets
//       }
//     };

//     const SHIFTS = { x: 0 };

//     expect(mychessjs.updateAttacks(ATTACKS, SHIFTS, customPieces)).toEqual(
//       [
//         1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
//         0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
//         0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
//         0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
//         0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
//         1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
//         0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
//         0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
//         0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0,
//         0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
//         1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
//       ]
//     );

//   });

//   test('updateAttacks() updates the ATTACKS array correctly for a knight with (3, 2) repeated offsets', () => {
//     let ATTACKS = [
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     ];

//     const customPieces = {
//       n: {
//         0: [-50, -46, -35, -29, 29, 35, 46, 50], 
//         1: []
//       }
//     };

//     const SHIFTS = { n: 1 };

//     expect(mychessjs.updateAttacks(ATTACKS, SHIFTS, customPieces)).toEqual(
//       [
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
//         0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0,
//         0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//       ]
//     );

//   });
// });