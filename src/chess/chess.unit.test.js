/* unit tests for chess.js */

const chessjs = require("./chess.js");

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

describe("valid_2x2_grid_move() unit test", () => {
  test("a8 is in the same 2x2 subgrid as itself, b8, a7 and b7", () => {
    expect(chessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.a8)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.b8)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.a7)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.a8, SQUARES.b7)).toBe(false);
  });

  test("g3 is in the same 2x2 subgrid as itself, g4, h4 and h3", () => {
    expect(chessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.g3)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.g4)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.h4)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.g3, SQUARES.h3)).toBe(false);
  });

  test("f3 is in the same 2x2 subgrid as itself, e4, f4, and e3", () => {
    expect(chessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.f3)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.e4)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.f4)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.f3, SQUARES.e3)).toBe(false);
  });

  test("b2 is in the same 2x2 subgrid as itself, a2, a1 and b1", () => {
    expect(chessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.b2)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.a2)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.a1)).toBe(false);
    expect(chessjs.valid_2x2_grid_move(SQUARES.b2, SQUARES.b1)).toBe(false);
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
      expect(chessjs.valid_2x2_grid_move(SQUARES.a8, s)).toBe(true);
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
      expect(chessjs.valid_2x2_grid_move(SQUARES.g3, s)).toBe(true);
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
      expect(chessjs.valid_2x2_grid_move(SQUARES.f3, s)).toBe(true);
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
      expect(chessjs.valid_2x2_grid_move(SQUARES.b2, s)).toBe(true);
    }
  });
});