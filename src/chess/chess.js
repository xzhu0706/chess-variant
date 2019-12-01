/*
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

/* minified license below  */

/* @license
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */

var Chess = function(fen, variant=0, customPieces={}) {

  /* jshint indent: false */

  const BLACK = 'b';
  const WHITE = 'w';

  const EMPTY = -1;

  const PAWN = 'p';
  const KNIGHT = 'n';
  const BISHOP = 'b';
  const ROOK = 'r';
  const QUEEN = 'q';
  const KING = 'k';

  // new pieces
  const MANN = 'm';
  const FERZ = 'f';
  const NIGHTRIDER = 'd';
  const CENTAUR = 'c';
  const EMPRESS = 'e';
  const PRINCESS = 's';

  const SYMBOLS = 'pnbrqkPNBRQK' + 'mfdcesMFDCES'; // all possible pieces in a FEN string

  const DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  const POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];

  const ANTI = 1;
  const GRID = 2;
  const EXTINCTION = 3;

  const PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };

  let PIECE_OFFSETS = {
    n: [-18, -33, -31, -14,  18, 33, 31,  14],
    b: [],
    r: [],
    q: [],
    k: [-17, -16, -15,   1,  17, 16, 15,  -1],
    m: [-17, -16, -15,   1,  17, 16, 15,  -1],
    f: [-17, -15,  17,  15],
    d: [],
    // c: [-18, -33, -31, -14,  18, 33, 31,  14,
    //     -17, -16, -15,   1,  17, 16, 15,  -1],
    e: [-18, -33, -31, -14,  18, 33, 31,  14],
    s: [-18, -33, -31, -14,  18, 33, 31,  14],
  };

  let PIECE_OFFSETS_REPEATING = {
    n: [],
    b: [-17, -15,  17,  15],
    r: [-16,   1,  16,  -1],
    q: [-17, -16, -15,   1,  17, 16, 15,  -1],
    k: [],
    m: [],
    f: [],
    d: [-18, -33, -31, -14,  18, 33, 31,  14],
    // c: [],
    e: [-16,   1,  16,  -1],
    s: [-17, -15,  17,  15],
  };

  let SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5, m: 6, f: 7, d: 8, e: 9, s: 10 };

  // the ATTACKS array is a bit-mask of attacks based on a 6-bit string of the form kqrbnp.
  // For example:
  // kqrbnp = 010100 = 20 (only the queen and bishop can attack the center piece)
  // kqrbnp = 000010 =  2 (only the knight can attack the center piece)
  // kqrbnp = 011000 = 24 (only the queen and rook can attack the center piece)
  let ATTACKS = [
    1044,   0,   0,   0,   0,   0,   0, 536,   0,   0,   0,   0,   0,   0,1044,   0,
       0,1044,   0,   0, 256,   0,   0, 536,   0,   0, 256,   0,   0,1044,   0,   0,
       0,   0,1044,   0,   0,   0,   0, 536,   0,   0,   0,   0,1044,   0,   0,   0,
       0,   0,   0,1044,   0, 256,   0, 536,   0, 256,   0,1044,   0,   0,   0,   0,
       0, 256,   0,   0,1044,   0,   0, 536,   0,   0,1044,   0,   0, 256,   0,   0,
       0,   0,   0, 256,   0,1044,1794, 536,1794,1044,   0, 256,   0,   0,   0,   0,
       0,   0,   0,   0,   0,1794,1269, 632,1269,1794,   0,   0,   0,   0,   0,   0,
     536, 536, 536, 536, 536, 536, 632,   0, 632, 536, 536, 536, 536, 536, 536,   0,
       0,   0,   0,   0,   0,1794,1269, 632,1269,1794,   0,   0,   0,   0,   0,   0,
       0,   0,   0, 256,   0,1044,1794, 536,1794,1044,   0, 256,   0,   0,   0,   0,
       0, 256,   0,   0,1044,   0,   0, 536,   0,   0,1044,   0,   0, 256,   0,   0,
       0,   0,   0,1044,   0, 256,   0, 536,   0, 256,   0,1044,   0,   0,   0,   0,
       0,   0,1044,   0,   0,   0,   0, 536,   0,   0,   0,   0,1044,   0,   0,   0,
       0,1044,   0,   0, 256,   0,   0, 536,   0,   0, 256,   0,   0,1044,   0,   0,
       1044,0,   0,   0,   0,   0,   0, 536,   0,   0,   0,   0,   0,   0,1044,
  ];

  // how to shift the board in order to make a move (?)
  // const RAYS = [
  //    17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
  //     0, 17,  0,  0, 33,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
  //     0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
  //     0, 36,  0, 17,  0, 33,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
  //     0, 18,  0,  0, 17,  0, 49, 16,  0,  0, 15,  0,  0, 14,  0, 0,
  //     0, 19,  0, 18, 36, 17, 33, 16,  0, 15,  0, 14,  0,  0,  0, 0,
  //    23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10,  9, 0,
  //     1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
  //     0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
  //     0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
  //     0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
  //     0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
  //     0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
  //     0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
  //   -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
  // ];

  /* update PIECE_OFFSETS, PIECE_OFFSETS_REPEATING, SHIFTS, ATTACKS with custom pieces */
  // customPieces is of the form { m: { 0: [ <non-repeating offsets> ], 1: [ <repeating offsets> ] } }
  for (let [key, value] of Object.entries(customPieces)) {
    // copy over the offsets
    PIECE_OFFSETS[key] = value[0];
    PIECE_OFFSETS_REPEATING[key] = value[1];
    // assign the new piece a unique index value
    SHIFTS[key] = Object.keys(SHIFTS).length;
    // update ATTACKS so that the new piece can be recognized as an attacker (see attacked())
    updateAttacks(ATTACKS, value);
  }

  const FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q' 
  };

  const BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };

  const RANK_1 = 7;
  const RANK_2 = 6;
  const RANK_3 = 5;
  const RANK_4 = 4;
  const RANK_5 = 3;
  const RANK_6 = 2;
  const RANK_7 = 1;
  const RANK_8 = 0;

  const SQUARES = {
    a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
    a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
    a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
    a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
    a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
    a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
    a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
    a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  };
  // the array size is 16*8 rather than 8*8 because there are benefits to doing it this way.
  // for example, the top row starts with 0x00 = 0000 0000 and ends with 0x07 = 0000 0111,
  // the second row starts with 0x10 = 0001 0000 and ends with 0x17 = 0001 0111 and so on,
  // until 0111 0111 = 119.

  const ROOKS = {
    w: [{square: SQUARES.a1, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h1, flag: BITS.KSIDE_CASTLE}],
    b: [{square: SQUARES.a8, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h8, flag: BITS.KSIDE_CASTLE}]
  };
 
  let STARTING_PIECES = { 'w': { }, 'b': { } }; // for extinction chess

  var board = new Array(128);
  var kings = {w: EMPTY, b: EMPTY};
  var turn = WHITE;
  var castling = {w: 0, b: 0};
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var history = [];
  var header = {};

  /* if the user passes in a fen string, load it, else default to
   * starting position
   */
  if (typeof fen === 'undefined') {
    load(DEFAULT_POSITION);
  } else {
    load(fen);
  }

  function clear() {
    board = new Array(128);
    kings = {w: EMPTY, b: EMPTY};
    turn = WHITE;
    castling = {w: 0, b: 0};
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    header = {};
    update_setup(generate_fen());
  }

  function reset() {
    load(DEFAULT_POSITION);
  }

  function load(fen) {
    const tokens = fen.split(/\s+/);
    /*
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    becomes
    tokens[0] = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR' (the board position)
    tokens[1] = 'w'    (it's white's turn)
    tokens[2] = 'KQkq' ('K' means white can castle kingside)
    tokens[3] = '-'    (en passant target square: if a pawn has just moved 2 squares,
                        this is the square behind the pawn)
    tokens[4] = '0'    (number of half-moves in the game since the last capture or pawn advance)
    tokens[5] = '1'    (number of full-moves)
    In chess, one "full" move is really 2 moves. If White plays e4 and then Black plays e5,
    that counts as one move.
    */
    const position = tokens[0];
    let square = 0;

    if (!validate_fen(fen).valid) {
      return false;
    }

    clear();

    // save white's and black's pieces at the start of the game
    for (let i = 0; i < position.length; i++) {
      if (is_digit(position[i]) || position[i] === '/') continue;

      if (position[i] < 'a') {
        STARTING_PIECES['w'][position[i].toLowerCase()] = 0;
      } else {
        STARTING_PIECES['b'][position[i]] = 0;
      }
    }

    // e.g., position = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
    for (let i = 0; i < position.length; i++) {
      const piece = position.charAt(i);

      if (piece === '/') {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        const color = (piece < 'a') ? WHITE : BLACK; // if it's a capital letter then it's a white piece
        // put the piece, which has a piece.type and a piece.color, on the board
        put({ type: piece.toLowerCase(), color: color }, algebraic(square));
        square++;
      }
    }

    turn = tokens[1];

    if (tokens[2].indexOf('K') > -1) {
      castling.w |= BITS.KSIDE_CASTLE; // (castling.w |= BITS.KSIDE_CASTLE) is castling.w with the 5th bit activated
    }
    if (tokens[2].indexOf('Q') > -1) {
      castling.w |= BITS.QSIDE_CASTLE; // (castling.w |= BITS.QSIDE_CASTLE) is castling.w with the 6th bit activated
    }
    if (tokens[2].indexOf('k') > -1) {
      castling.b |= BITS.KSIDE_CASTLE; 
    }
    if (tokens[2].indexOf('q') > -1) {
      castling.b |= BITS.QSIDE_CASTLE; 
    }

    ep_square = (tokens[3] === '-') ? EMPTY : SQUARES[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);

    update_setup(generate_fen());

    return true;
  }

  /* TODO: this function is pretty much crap - it validates structure but
   * completely ignores content (e.g. doesn't verify that each side has a king)
   * ... we should rewrite this, and ditch the silly error_number field while
   * we're at it
   */
  function validate_fen(fen) {
    var errors = {
       0: 'No errors.',
       1: 'FEN string must contain six space-delimited fields.',
       2: '6th field (move number) must be a positive integer.',
       3: '5th field (half move counter) must be a non-negative integer.',
       4: '4th field (en-passant square) is invalid.',
       5: '3rd field (castling availability) is invalid.',
       6: '2nd field (side to move) is invalid.',
       7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
       8: '1st field (piece positions) is invalid [consecutive numbers].',
       9: '1st field (piece positions) is invalid [invalid piece].',
      10: '1st field (piece positions) is invalid [row too large].',
      11: 'Illegal en-passant square',
      12: 'Wrong number of kings'
    };

    /* 1st criterion: 6 space-seperated fields? */
    var tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return {valid: false, error_number: 1, error: errors[1]};
    }

    /* 2nd criterion: move number field is a integer value > 0? */
    if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
      return {valid: false, error_number: 2, error: errors[2]};
    }

    /* 3rd criterion: half move counter is an integer >= 0? */
    if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
      return {valid: false, error_number: 3, error: errors[3]};
    }

    /* 4th criterion: 4th field is a valid e.p.-string? */
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return {valid: false, error_number: 4, error: errors[4]};
    }

    /* 5th criterion: 3th field is a valid castle-string? */
    if( !/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return {valid: false, error_number: 5, error: errors[5]};
    }

    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
    if (!/^(w|b)$/.test(tokens[1])) {
      return {valid: false, error_number: 6, error: errors[6]};
    }

    /* 7th criterion: 1st field contains 8 rows? */
    var rows = tokens[0].split('/');
    if (rows.length !== 8) {
      return {valid: false, error_number: 7, error: errors[7]};
    }

    /* 8th criterion: every row is valid? */
    for (var i = 0; i < rows.length; i++) {
      /* check for right sum of fields AND not two numbers in succession */
      var sum_fields = 0;
      var previous_was_number = false;

      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return {valid: false, error_number: 8, error: errors[8]};
          }
          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          const matcher = new RegExp('^[' + SYMBOLS + ']$');
          if (!matcher.test(rows[i][k])) {
            return {valid: false, error_number: 9, error: errors[9]};
          }
          sum_fields += 1;
          previous_was_number = false;
        }
      }
      if (sum_fields !== 8) {
        return {valid: false, error_number: 10, error: errors[10]};
      }
    }

    if (variant !== ANTI && variant !== EXTINCTION) {
      /* verify that there is exactly one king per side */
      let king_count = { 'w': 0, 'b': 0 };
      for (const ch in tokens[0]) {
        if (tokens[0][ch] === '/') continue;
        if (tokens[0][ch] === 'K') {
          king_count['w']++;
        }
        else if (tokens[0][ch] === 'k') {
          king_count['b']++;
        }
      }
      if (king_count['w'] !== 1 || king_count['b'] !== 1) {
        return { valid: false, error_number: 12, error: errors[12] };
      }
    }

    if ((tokens[3][1] == '3' && tokens[1] == 'w') ||
        (tokens[3][1] == '6' && tokens[1] == 'b')) {
          return {valid: false, error_number: 11, error: errors[11]};
    }

    /* everything's okay! */
    return {valid: true, error_number: 0, error: errors[0]};
  }

  function generate_fen() {
    var empty = 0;
    var fen = '';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        var color = board[i].color;
        var piece = board[i].type;

        fen += (color === WHITE) ?
                 piece.toUpperCase() : piece.toLowerCase();
      }

      if ((i + 1) & 0x88) {
        if (empty > 0) {
          fen += empty;
        }

        if (i !== SQUARES.h1) {
          fen += '/';
        }

        empty = 0;
        i += 8;
      }
    }

    var cflags = '';
    if (castling[WHITE] & BITS.KSIDE_CASTLE) { cflags += 'K'; }
    if (castling[WHITE] & BITS.QSIDE_CASTLE) { cflags += 'Q'; }
    if (castling[BLACK] & BITS.KSIDE_CASTLE) { cflags += 'k'; }
    if (castling[BLACK] & BITS.QSIDE_CASTLE) { cflags += 'q'; }

    /* do we have an empty castling flag? */
    cflags = cflags || '-';
    var epflags = (ep_square === EMPTY) ? '-' : algebraic(ep_square);
    return [fen, turn, cflags, epflags, half_moves, move_number].join(' ');
  }

  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' &&
          typeof args[i + 1] === 'string') {
        header[args[i]] = args[i + 1];
      }
    }
    return header;
  }

  /* called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object.  if the FEN is
   * equal to the default position, the SetUp and FEN are deleted
   * the setup is only updated if history.length is zero, ie moves haven't been
   * made.
   */
  function update_setup(fen) {
    if (history.length > 0) return;

    if (fen !== DEFAULT_POSITION) {
      header['SetUp'] = '1';
      header['FEN'] = fen;
    } else {
      delete header['SetUp'];
      delete header['FEN'];
    }
  }

  function get(square) {
    var piece = board[SQUARES[square]];
    return (piece) ? {type: piece.type, color: piece.color} : null;
  }

  function put(piece, square) {
    /* check for valid piece object */
    if (!('type' in piece && 'color' in piece)) {
      return false;
    }

    /* check for piece */
    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false;
    }

    /* check for valid square */
    if (!(square in SQUARES)) {
      return false;
    }

    var sq = SQUARES[square];

    /* don't let the user place more than one king */
    if (piece.type == KING && (variant !== ANTI) && (variant !== EXTINCTION) &&
        !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
      return false;
    }

    board[sq] = {type: piece.type, color: piece.color};
    if (piece.type === KING) {
      kings[piece.color] = sq;
    }

    update_setup(generate_fen());

    return true;
  }

  function remove(square) {
    var piece = get(square);
    board[SQUARES[square]] = null;
    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }

    update_setup(generate_fen());

    return piece;
  }

  function build_move(board, from, to, flags, promotion) {
    var move = {
      color: turn,
      from: from,
      to: to,
      flags: flags,
      piece: board[from].type
    };

    if (promotion) {
      move.flags |= BITS.PROMOTION;
      move.promotion = promotion;
    }

    if (board[to]) {
      move.captured = board[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
    }

    return move;
  }

  function generate_moves(options) {
    // add_move() appends a move to the list of available moves (if a pawn is moving to rank 1 or rank 8,
    // then we might append multiple moves, i.e., all the possible promoting outcomes)
    function add_move(board, moves, from, to, flags) {
      /* if pawn promotion */
      if (board[from].type === PAWN &&
         (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
          
          // promotion to king is allowed in antichess
          if (variant === ANTI) {
            pieces.push(KING);
          }

          for (let i = 0, len = pieces.length; i < len; i++) {
            moves.push(build_move(board, from, to, flags, pieces[i]));
          }
      } else {
       moves.push(build_move(board, from, to, flags));
      }
    }

    // initialize moves array and other variables
    var moves = [];
    var us = turn;
    var them = swap_color(us);
    var second_rank = {b: RANK_7, w: RANK_2};
    var first_sq = SQUARES.a8;
    var last_sq = SQUARES.h1;
    var single_square = false;

    /* do we want legal moves? */
    var legal = (typeof options !== 'undefined' && 'legal' in options) ?
                options.legal : true;

    /* are we generating moves for a single square? */
    if (typeof options !== 'undefined' && 'square' in options) {
      if (options.square in SQUARES) {
        /* if the variant is antichess or another variant with a mandatory capture rule,
        we always generate moves for all squares initially */
        if (variant !== ANTI) {
          first_sq = last_sq = SQUARES[options.square];
        }
        single_square = true;
      } else {
        /* invalid square */
        return [];
      }
    }

    var capturePossible = 0;

    for (let i = first_sq; i <= last_sq; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece == null || piece.color !== us) {
        continue;
      }

      if (piece.type === PAWN) {
        /* single square, non-capturing */
        var square = i + PAWN_OFFSETS[us][0];
        if (board[square] == null) {
          // validate the move in a special way if we're playing grid chess
          if (variant !== GRID || valid_2x2_grid_move(i, square)) {
            add_move(board, moves, i, square, BITS.NORMAL);
          }

          /* double square, non-capturing */
          var square = i + PAWN_OFFSETS[us][1];
          if (second_rank[us] === rank(i) && board[square] == null) {
            // validate the move in a special way if we're playing grid chess
            if (variant !== GRID || valid_2x2_grid_move(i, square)) {
              add_move(board, moves, i, square, BITS.BIG_PAWN);
            }
          }
        }
        
        /* pawn captures */
        for (let j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 0x88) continue;

          if (board[square] != null &&
              board[square].color === them) {
              // validate the move in a special way if we're playing grid chess
              if (variant !== GRID || valid_2x2_grid_move(i, square)) {
                add_move(board, moves, i, square, BITS.CAPTURE);
                capturePossible = 1;
              }
          } else if (square === ep_square) {
            // validate the move in a special way if we're playing grid chess
            if (variant !== GRID || valid_2x2_grid_move(i, square)) {
              add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
              capturePossible = 1;
            }
          }
        }
      } else {
        for (let j = 0, len = PIECE_OFFSETS_REPEATING[piece.type].length; j < len; j++) {
          // flip the offsets for the black pieces
          const offset =
            piece.color === 'w'?
            PIECE_OFFSETS_REPEATING[piece.type][j] :
            -PIECE_OFFSETS_REPEATING[piece.type][j];
          let square = i;

          // generate all moves in the direction of the offset
          while (true) {
            square += offset;
            if (square & 0x88) break; // stop if we've fallen off the edge of the board

            // if we're moving to a null square, just add the move (unless we're playing grid chess)
            if (board[square] == null) {
              if (variant !== GRID || valid_2x2_grid_move(i, square)) {
                add_move(board, moves, i, square, BITS.NORMAL);
              }
            } else { // we're moving to a square occupied by a piece
              if (board[square].color === us) break;
              if (variant !== GRID || valid_2x2_grid_move(i, square)) {
                add_move(board, moves, i, square, BITS.CAPTURE);
                capturePossible = 1;
              }
              break;
            }
          }
        }

        for (let j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          const offset =
            piece.color === 'w'?
            PIECE_OFFSETS[piece.type][j] :
            -PIECE_OFFSETS[piece.type][j];
          let square = i + offset;
          if (square & 0x88) continue;
          if (board[square] == null) {
            if (variant !== GRID || valid_2x2_grid_move(i, square)) {
              add_move(board, moves, i, square, BITS.NORMAL);
            }
          }
          else if (board[square].color === them) { // we're moving to a square occupied by an enemy piece
            if (variant !== GRID || valid_2x2_grid_move(i, square)) {
              add_move(board, moves, i, square, BITS.CAPTURE);
              capturePossible = 1;
            }
          }
        }
      }
    }

    if (variant === ANTI) {
      /* now that we've generated moves on all the squares, if capturePossible is 1, we have to restrict
        the moves to capturing moves */

      /* are we generating capturing moves for a single square? */
      if (typeof options !== 'undefined' && 'square' in options) {
        if (capturePossible) {
          const legal_capturing_moves = moves.filter(move =>
            move.from === SQUARES[options.square] && move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE));
          return legal_capturing_moves;
        }
        else {
          const legal_moves = moves.filter(move =>
            move.from === SQUARES[options.square]);
          return legal_moves;
        }
      }
      else {
        /* generate capturing moves for all squares */
        if (capturePossible) {
          const legal_capturing_moves = moves.filter(move =>
            move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE));
          return legal_capturing_moves;
        }
        else {
          return moves;
        }
      }
    }

    /* check for castling if: a) we're generating all moves, or b) we're doing
     * single square move generation on the king's square
     */
    if ((!single_square || last_sq === kings[us]) && variant !== ANTI) {
      /* king-side castling */
      if ((castling[us] & BITS.KSIDE_CASTLE) && (kings[us] !== EMPTY)) {
        var castling_from = kings[us];
        var castling_to = castling_from + 2;

        // check that interceding squares are not being attacked, unless variant is extinction chess
        // (in which one may always ignore check)
        if (
          board[castling_from + 1] == null &&
          board[castling_to] == null &&
          (variant === EXTINCTION || !attacked(them, kings[us]) &&
          !attacked(them, castling_from + 1) &&
          !attacked(them, castling_to))
        ) {
          add_move(board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
        }
      }

      /* queen-side castling */
      if ((castling[us] & BITS.QSIDE_CASTLE) && kings[us] !== EMPTY) {
        var castling_from = kings[us];
        var castling_to = castling_from - 2;

        if (
          board[castling_from - 1] == null &&
          board[castling_from - 2] == null &&
          board[castling_from - 3] == null &&
          (variant === EXTINCTION || !attacked(them, kings[us]) &&
          !attacked(them, castling_from - 1) &&
          !attacked(them, castling_to))
        ) {
          add_move(board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
        }
      }
    }

    if (!legal || variant === EXTINCTION) {
      /* return all pseudo-legal moves (this includes moves that allow the king to be captured) */
      return moves;
    } else {
      /* filter out illegal moves */
      var legal_moves = [];
      for (let i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);
        if (!king_attacked(us)) {
          legal_moves.push(moves[i]);
        }
        undo_move();
      }
      return legal_moves;
    }
  }

  /* convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} sloppy Use the sloppy SAN generator to work around over
   * disambiguation bugs in Fritz and Chessbase.  See below:
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  function move_to_san(move, sloppy) {

    var output = '';

    if (move.flags & BITS.KSIDE_CASTLE) {
      output = 'O-O';
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = 'O-O-O';
    } else {
      var disambiguator = get_disambiguator(move, sloppy);

      if (move.piece !== PAWN) {
        output += move.piece.toUpperCase() + disambiguator;
      }

      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += 'x';
      }

      output += algebraic(move.to);

      if (move.flags & BITS.PROMOTION) {
        output += '=' + move.promotion.toUpperCase();
      }
    }

    make_move(move);
    if (in_check()) {
      if (in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }
    undo_move();

    return output;
  }

  // parses all of the decorators out of a SAN string
  function stripped_san(move) {
    return move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');
  }

  /* whether the piece on `square` is attacked by a piece of the given `color`... */
  function attacked(color, square) {
    for (let i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      /* if empty square or wrong color */
      if (board[i] == null || board[i].color !== color) continue;

      /* if we're playing grid chess and it's not a valid, out-of-grid move */
      if (variant === GRID && !valid_2x2_grid_move(i, square)) continue;

      const piece = board[i];
      const difference = i - square;
      const index = difference + 119;

      if (ATTACKS[index] & (1 << SHIFTS[piece.type])) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE) return true;
          } else {
            if (piece.color === BLACK) return true;
          }
          continue;
        }

        /* if the difference is equal to one of the regular offsets */
        if (PIECE_OFFSETS[piece.type].indexOf(difference) !== -1) {
          return true;
        }

        // compute list of possible (repeating) offsets that produce the difference
        // e.g. an attack from -6 units away could be due to an offset of -1, -2, -3 or -6
        // e.g. an attack from -51 units away could be due to an offset of -51 or -17 (but not -1)
        const derivedOffsets = offsetsFromAttack(difference, PIECE_OFFSETS_REPEATING[piece.type]);

        // if none of the repeating offsets match this difference
        if (derivedOffsets && derivedOffsets.length === 0) {
          continue;
        }

        // one of the offsets can produce the difference, but
        // now we need to check for a blocking piece that would invalidate the "attack".
        // if there is no blocking piece for each offset, then the offset is validated -
        // immediately return true.
        for (const offset of derivedOffsets) {
          const ray = -offset;
          let intermediate = i + ray;
      
          let blocked = false;
          while (intermediate !== square) {
            if (board[intermediate] != null) { blocked = true; break; }
            intermediate += ray;
          }
      
          if (!blocked) return true;
        }
      }
    }

    // no square on the board contains a piece that attacks the given square
    return false;
  }

  function king_attacked(color) {
    return attacked(swap_color(color), kings[color]);
  }

  function in_check() {
    /* check is not possible in antichess and extinction chess */
    return king_attacked(turn) && variant !== ANTI && variant !== EXTINCTION;
  }

  function in_checkmate() {
    return in_check() && generate_moves().length === 0;
  }

  function in_stalemate() {
    return !in_check() && generate_moves().length === 0;
  }

  /* for extinction chess: returns true if the current player is missing
  a piece they had at the start of the game */
  function extinguished() {
    let piece_populations = STARTING_PIECES[turn];
    for (const count in piece_populations) {
      piece_populations[count] = 0;
    }

    for (let i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (i & 0x88) { i += 7; continue; }

      if (board[i] == null || board[i].color !== turn) continue;

      piece_populations[board[i].type]++;
    }

    for (const count in piece_populations) {
      if (!piece_populations[count]) {
        return true;
      }
    }

    return false;
  }

  function insufficient_material() {
    if (variant === ANTI || variant === GRID || variant === EXTINCTION) return false;
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;

    for (var i = SQUARES.a8; i<= SQUARES.h1; i++) {
      sq_color = (sq_color + 1) % 2;
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece) {
        pieces[piece.type] = (piece.type in pieces) ?
                              pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }
        num_pieces++;
      }
    }

    /* k vs. k */
    if (num_pieces === 2) { return true; }

    /* k vs. kn .... or .... k vs. kb */
    else if (num_pieces === 3 && (pieces[BISHOP] === 1 ||
                                 pieces[KNIGHT] === 1)) { return true; }

    /* kb vs. kb where any number of bishops are all on the same color */
    else if (num_pieces === pieces[BISHOP] + 2) {
      var sum = 0;
      var len = bishops.length;
      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) { return true; }
    }

    return false;
  }

  function in_threefold_repetition() {
    /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */
    var moves = [];
    var positions = {};
    var repetition = false;

    while (true) {
      var move = undo_move();
      if (!move) break;
      moves.push(move);
    }

    while (true) {
      /* remove the last two fields in the FEN string, they're not needed
       * when checking for draw by rep */
      var fen = generate_fen().split(' ').slice(0,4).join(' ');

      /* has the position occurred three or move times */
      positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
      if (positions[fen] >= 3) {
        repetition = true;
      }

      if (!moves.length) {
        break;
      }
      make_move(moves.pop());
    }

    return repetition;
  }

  function push(move) {
    history.push({
      move: move,
      kings: {b: kings.b, w: kings.w},
      turn: turn,
      castling: {b: castling.b, w: castling.w},
      ep_square: ep_square,
      half_moves: half_moves,
      move_number: move_number
    });
  }

  function make_move(move) {
    const us = turn;
    const them = swap_color(us);
    push(move);

    board[move.to] = board[move.from];
    board[move.from] = null;

    /* if ep capture, remove the captured pawn */
    if (move.flags & BITS.EP_CAPTURE) {
      if (turn === BLACK) {
        board[move.to - 16] = null;
      } else {
        board[move.to + 16] = null;
      }
    }

    /* if pawn promotion, replace with new piece */
    if (move.flags & BITS.PROMOTION) {
      board[move.to] = {type: move.promotion, color: us};
    }

    /* if we moved the king */
    if (board[move.to].type === KING) {
      kings[board[move.to].color] = move.to;

      /* if we castled, move the rook next to the king */
      if (move.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move.to - 1;
        var castling_from = move.to + 1;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move.to + 1;
        var castling_from = move.to - 2;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }

      /* turn off castling */
      castling[us] = '';
    }

    /* turn off castling if we move a rook */
    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square &&
            castling[us] & ROOKS[us][i].flag) {
          castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }

    /* turn off castling if we capture a rook */
    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square &&
            castling[them] & ROOKS[them][i].flag) {
          castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }

    /* if big pawn move, update the en passant square */
    if (move.flags & BITS.BIG_PAWN) {
      if (turn === 'b') {
        ep_square = move.to - 16;
      } else {
        ep_square = move.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }

    /* reset the 50 move counter if a pawn is moved or a piece is captured */
    if (move.piece === PAWN) {
      half_moves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }

    if (turn === BLACK) {
      move_number++;
    }
    turn = swap_color(turn);
  }

  function undo_move() {
    var old = history.pop();
    if (old == null) { return null; }

    var move = old.move;
    kings = old.kings;
    turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;

    var us = turn;
    var them = swap_color(turn);

    board[move.from] = board[move.to];
    board[move.from].type = move.piece;  // to undo any promotions
    board[move.to] = null;

    if (move.flags & BITS.CAPTURE) {
      board[move.to] = {type: move.captured, color: them};
    } else if (move.flags & BITS.EP_CAPTURE) {
      var index;
      if (us === BLACK) {
        index = move.to - 16;
      } else {
        index = move.to + 16;
      }
      board[index] = {type: PAWN, color: them};
    }


    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castling_to = move.to + 1;
        castling_from = move.to - 1;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        castling_to = move.to - 2;
        castling_from = move.to + 1;
      }

      board[castling_to] = board[castling_from];
      board[castling_from] = null;
    }

    return move;
  }

  /* this function is used to uniquely identify ambiguous moves */
  function get_disambiguator(move, sloppy) {
    var moves = generate_moves({legal: !sloppy});

    var from = move.from;
    var to = move.to;
    var piece = move.piece;

    var ambiguities = 0;
    var same_rank = 0;
    var same_file = 0;

    for (var i = 0, len = moves.length; i < len; i++) {
      var ambig_from = moves[i].from;
      var ambig_to = moves[i].to;
      var ambig_piece = moves[i].piece;

      /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */
      if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
        ambiguities++;

        if (rank(from) === rank(ambig_from)) {
          same_rank++;
        }

        if (file(from) === file(ambig_from)) {
          same_file++;
        }
      }
    }

    if (ambiguities > 0) {
      /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      if (same_rank > 0 && same_file > 0) {
        return algebraic(from);
      }
      /* if the moving piece rests on the same file, use the rank symbol as the
       * disambiguator
       */
      else if (same_file > 0) {
        return algebraic(from).charAt(1);
      }
      /* else use the file symbol */
      else {
        return algebraic(from).charAt(0);
      }
    }

    return '';
  }

  function ascii() {
    var s = '   +------------------------+\n';
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* display the rank */
      if (file(i) === 0) {
        s += ' ' + '87654321'[rank(i)] + ' |';
      }

      /* empty piece */
      if (board[i] == null) {
        s += ' . ';
      } else {
        var piece = board[i].type;
        var color = board[i].color;
        var symbol = (color === WHITE) ?
                     piece.toUpperCase() : piece.toLowerCase();
        s += ' ' + symbol + ' ';
      }

      if ((i + 1) & 0x88) {
        s += '|\n';
        i += 8;
      }
    }
    s += '   +------------------------+\n';
    s += '     a  b  c  d  e  f  g  h\n';

    return s;
  }

  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  function move_from_san(move, sloppy) {
    // strip off any move decorations: e.g Nf3+?!
    var clean_move = stripped_san(move);

    // if we're using the sloppy parser run a regex to grab piece, to, and from
    // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
    if (sloppy) {
      var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        var piece = matches[1];
        var from = matches[2];
        var to = matches[3];
        var promotion = matches[4];
      }
    }

    var moves = generate_moves();
    for (var i = 0, len = moves.length; i < len; i++) {
      // try the strict parser first, then the sloppy parser if requested
      // by the user
      if ((clean_move === stripped_san(move_to_san(moves[i]))) ||
          (sloppy && clean_move === stripped_san(move_to_san(moves[i], true)))) {
        return moves[i];
      } else {
        if (matches &&
            (!piece || piece.toLowerCase() == moves[i].piece) &&
            SQUARES[from] == moves[i].from &&
            SQUARES[to] == moves[i].to &&
            (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }

    return null;
  }


  /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/
  function rank(i) {
    return i >> 4;
  }

  function file(i) {
    return i & 15;
  }

  function algebraic(i){
    var f = file(i), r = rank(i);
    return 'abcdefgh'.substring(f,f+1) + '87654321'.substring(r,r+1);
  }

  function swap_color(c) {
    return c === WHITE ? BLACK : WHITE;
  }

  function is_digit(c) {
    return '0123456789'.indexOf(c) !== -1;
  }

  /* pretty = external move object */
  function make_pretty(ugly_move) {
    var move = clone(ugly_move);
    move.san = move_to_san(move, false);
    move.to = algebraic(move.to);
    move.from = algebraic(move.from);

    var flags = '';

    for (var flag in BITS) {
      if (BITS[flag] & move.flags) {
        flags += FLAGS[flag];
      }
    }
    move.flags = flags;

    return move;
  }

  function clone(obj) {
    var dupe = (obj instanceof Array) ? [] : {};

    for (var property in obj) {
      if (typeof property === 'object') {
        dupe[property] = clone(obj[property]);
      } else {
        dupe[property] = obj[property];
      }
    }

    return dupe;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/
  function perft(depth) {
    var moves = generate_moves({legal: false});
    var nodes = 0;
    var color = turn;

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = perft(depth - 1);
          nodes += child_nodes;
        } else {
          nodes++;
        }
      }
      undo_move();
    }

    return nodes;
  }

  return {
    /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/
    WHITE: WHITE,
    BLACK: BLACK,
    PAWN: PAWN,
    KNIGHT: KNIGHT,
    BISHOP: BISHOP,
    ROOK: ROOK,
    QUEEN: QUEEN,
    KING: KING,
    SQUARES: (function() {
                /* from the ECMA-262 spec (section 12.6.4):
                 * "The mechanics of enumerating the properties ... is
                 * implementation dependent"
                 * so: for (var sq in SQUARES) { keys.push(sq); } might not be
                 * ordered correctly
                 */
                var keys = [];
                for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
                  if (i & 0x88) { i += 7; continue; }
                  keys.push(algebraic(i));
                }
                return keys;
              })(),
    FLAGS: FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function(fen) {
      return load(fen);
    },

    reset: function() {
      return reset();
    },

    moves: function(options) {
      /* The internal representation of a chess move is in 0x88 format, and
       * not meant to be human-readable.  The code below converts the 0x88
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */

      var ugly_moves = generate_moves(options);
      var moves = [];

      for (var i = 0, len = ugly_moves.length; i < len; i++) {

        /* does the user want a full move object (most likely not), or just
         * SAN
         */
        if (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(move_to_san(ugly_moves[i], false));
        }
      }

      return moves;
    },

    in_check: function() {
      return in_check();
    },

    in_checkmate: function() {
      return in_checkmate();
    },

    in_stalemate: function() {
      return in_stalemate();
    },

    in_draw: function() {
      return half_moves >= 100 ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    insufficient_material: function() {
      return insufficient_material();
    },

    in_threefold_repetition: function() {
      return in_threefold_repetition();
    },

    game_over: function() {
      return half_moves >= 100 ||
             in_checkmate() ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition() ||
             (variant === EXTINCTION && extinguished());
    },

    validate_fen: function(fen) {
      return validate_fen(fen);
    },

    fen: function() {
      return generate_fen();
    },

    pgn: function(options) {
      /* using the specification from http://www.chessclub.com/help/PGN-spec
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */
      var newline = (typeof options === 'object' &&
                     typeof options.newline_char === 'string') ?
                     options.newline_char : '\n';
      var max_width = (typeof options === 'object' &&
                       typeof options.max_width === 'number') ?
                       options.max_width : 0;
      var result = [];
      var header_exists = false;

      /* add the PGN header headerrmation */
      // for (var i in header) {
      //   /* TODO: order of enumerated properties in header object is not
      //    * guaranteed, see ECMA-262 spec (section 12.6.4)
      //    */
      //   result.push('[' + i + ' \"' + header[i] + '\"]' + newline);
      //   header_exists = true;
      // }

      if (header_exists && history.length) {
        result.push(newline);
      }

      /* pop all of history onto reversed_history */
      var reversed_history = [];
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      var moves = [];
      var move_string = '';

      /* build the list of moves.  a move_string looks like: "3. e3 e6" */
      while (reversed_history.length > 0) {
        var move = reversed_history.pop();

        /* if the position started with black to move, start PGN with 1. ... */
        if (!history.length && move.color === 'b') {
          move_string = move_number + '. ...';
        } else if (move.color === 'w') {
          /* store the previous generated move_string if we have one */
          if (move_string.length) {
            moves.push(move_string);
          }
          move_string = move_number + '.';
        }

        move_string = move_string + ' ' + move_to_san(move, false);
        make_move(move);
      }

      /* are there any other leftover moves? */
      if (move_string.length) {
        moves.push(move_string);
      }

      /* is there a result? */
      if (typeof header.Result !== 'undefined') {
        moves.push(header.Result);
      }

      /* history should be back to what is was before we started generating PGN,
       * so join together moves
       */
      if (max_width === 0) {
        return result.join('') + moves.join(' ');
      }

      /* wrap the PGN output at max_width */
      var current_width = 0;
      for (var i = 0; i < moves.length; i++) {
        /* if the current move will push past max_width */
        if (current_width + moves[i].length > max_width && i !== 0) {

          /* don't end the line with whitespace */
          if (result[result.length - 1] === ' ') {
            result.pop();
          }

          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(' ');
          current_width++;
        }
        result.push(moves[i]);
        current_width += moves[i].length;
      }

      return result.join('');
    },

    load_pgn: function(pgn, options) {
      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
                    options.sloppy : false;

      function mask(str) {
        return str.replace(/\\/g, '\\');
      }

      function has_keys(object) {
        for (var key in object) {
          return true;
        }
        return false;
      }

      function parse_pgn_header(header, options) {
        var newline_char = (typeof options === 'object' &&
                            typeof options.newline_char === 'string') ?
                            options.newline_char : '\r?\n';
        var header_obj = {};
        var headers = header.split(new RegExp(mask(newline_char)));
        var key = '';
        var value = '';

        for (var i = 0; i < headers.length; i++) {
          key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
          value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
          if (trim(key).length > 0) {
            header_obj[key] = value;
          }
        }

        return header_obj;
      }

      var newline_char = (typeof options === 'object' &&
                          typeof options.newline_char === 'string') ?
                          options.newline_char : '\r?\n';
      var regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
                             '(' + mask(newline_char) + ')*' +
                             '1.(' + mask(newline_char) + '|.)*$', 'g');

      /* get header part of the PGN file */
      var header_string = pgn.replace(regex, '$1');

      /* no info part given, begins with moves */
      if (header_string[0] !== '[') {
        header_string = '';
      }

      reset();

      /* parse PGN header */
      var headers = parse_pgn_header(header_string, options);
      for (var key in headers) {
        set_header([key, headers[key]]);
      }

      /* load the starting position indicated by [Setup '1'] and
      * [FEN position] */
      if (headers['SetUp'] === '1') {
          if (!(('FEN' in headers) && load(headers['FEN']))) {
            return false;
          }
      }

      /* delete header to get the moves */
      var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');

      /* delete comments */
      ms = ms.replace(/(\{[^}]+\})+?/g, '');

      /* delete recursive annotation variations */
      var rav_regex = /(\([^\(\)]+\))+?/g
      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, '');
      }

      /* delete move numbers */
      ms = ms.replace(/\d+\.(\.\.)?/g, '');

      /* delete ... indicating black to move */
      ms = ms.replace(/\.\.\./g, '');

      /* delete numeric annotation glyphs */
      ms = ms.replace(/\$\d+/g, '');

      /* trim and get array of moves */
      var moves = trim(ms).split(new RegExp(/\s+/));

      /* delete empty entries */
      moves = moves.join(',').replace(/,,+/g, ',').split(',');
      var move = '';

      for (var half_move = 0; half_move < moves.length - 1; half_move++) {
        move = move_from_san(moves[half_move], sloppy);

        /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }

      /* examine last move */
      move = moves[moves.length - 1];
      if (POSSIBLE_RESULTS.indexOf(move) > -1) {
        if (has_keys(header) && typeof header.Result === 'undefined') {
          set_header(['Result', move]);
        }
      }
      else {
        move = move_from_san(move, sloppy);
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }
      return true;
    },

    header: function() {
      return set_header(arguments);
    },

    ascii: function() {
      return ascii();
    },

    turn: function() {
      return turn;
    },

    move: function(move, options) {
      /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *         promotion: 'q',
       *      })
       */

      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
                    options.sloppy : false;

      var move_obj = null;

      if (typeof move === 'string') {
        move_obj = move_from_san(move, sloppy);
      } else if (typeof move === 'object') {
        var moves = generate_moves();

        /* convert the pretty move object to an ugly move object */
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move.from === algebraic(moves[i].from) &&
              move.to === algebraic(moves[i].to) &&
              (!('promotion' in moves[i]) ||
              move.promotion === moves[i].promotion)) {
            move_obj = moves[i];
            break;
          }
        }
      }

      /* failed to find move */
      if (!move_obj) {
        return null;
      }

      /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */
      var pretty_move = make_pretty(move_obj);

      make_move(move_obj);

      return pretty_move;
    },

    rank: rank,
    swap_color: swap_color,
    attacked: attacked,
    king_attacked: king_attacked,
    generate_moves: generate_moves,
    extinguished: extinguished,

    undo: function() {
      var move = undo_move();
      return (move) ? make_pretty(move) : null;
    },

    clear: function() {
      return clear();
    },

    put: function(piece, square) {
      return put(piece, square);
    },

    get: function(square) {
      return get(square);
    },

    remove: function(square) {
      return remove(square);
    },

    perft: function(depth) {
      return perft(depth);
    },

    square_color: function(square) {
      if (square in SQUARES) {
        var sq_0x88 = SQUARES[square];
        return ((rank(sq_0x88) + file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
      }

      return null;
    },

    history: function(options) {
      var reversed_history = [];
      var move_history = [];
      var verbose = (typeof options !== 'undefined' && 'verbose' in options &&
                     options.verbose);

      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      while (reversed_history.length > 0) {
        var move = reversed_history.pop();
        if (verbose) {
          move_history.push(make_pretty(move));
        } else {
          move_history.push(move_to_san(move));
        }
        make_move(move);
      }

      return move_history;
    }

  };
};

const valid_2x2_grid_move = (from, to) => {
  /* returns true if the `from` and `to` squares are in different 2x2 subgrids */
  // a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
  // a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
  // a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
  // a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
  // a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
  // a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
  // a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
  // a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  return !((from >> 5 === to >> 5) && ((from & 15) >> 1 === (to & 15) >> 1));
};

/* Given a repeating offset, return the list of 'actual' offsets
between -119 and 119.
Expected results:
 -17 -> [-17, -34, -51, -68, -85, -102, -119]
 +17 -> [+17, +34, +51, +68, +85, +102, +119]
  -1 -> [ -1,  -2,  -3,  -4,  -5,   -6,   -7]
  +1 -> [ +1,  +2,  +3,  +4,  +5,   +6,   +7]
 -18 -> [-18, -36, -54]
 +18 -> [+18, +36, +54]
 -19 -> [-19, -38]
 +19 -> [+19, +38]
 -20 -> [-20]
 +20 -> [+20]
 -24 -> []
 +24 -> []
 -34 -> [-34, -68, -102]
 +34 -> [+34, +68, +102]
 -51 -> [-51, -102]
 +51 -> [+51, +102]
-119 -> [-119]
+119 -> [+119]
*/
function generateOffsets(offset) {
  if (offset === 0) return [];
  const row = offset+119 >>> 4; // gives row between 0 and 14
  const col = offset+119 & 15; // gives col between 0 and 15
  const reps = Math.floor(7 / Math.max(Math.abs(7 - (col)), Math.abs(7 - (row))));

  let offsets = [];
  for (let i = 1; i <= reps; i++) {
    offsets.push(offset*i);
  }
  return offsets;
}

function updateAttacks(ATTACKS, customPieceOffsets, shifts) {
  // the input looks like this:
  // { 0: [ <non-repeating offsets> ], 1: [ <repeating offsets> ] }
  customPieceOffsets[0].forEach(off => {
    const row = off+119 >>> 4; // gives row between 0 and 14
    const col = off+119 & 15; // gives col between 0 and 15
    const index = 16*row + col;
    ATTACKS[index] |= 1 << shifts; // activate the bit of the custom piece
  });
  customPieceOffsets[1].forEach(off => {
    const offsets = generateOffsets(off); // generate list of offsets derived from the repeating offset
    offsets.forEach(off => { // for each of those offsets, activate the bit of the custom piece
      const row = off+119 >>> 4;
      const col = off+119 & 15;
      const index = 16*row + col;
      ATTACKS[index] |= 1 << shifts;
    });
  });
  return ATTACKS;
}

// given a list of (repeating) offsets, compute the subset of offsets that can produce the given attack
// e.g. an attack from +6 units away could be due to a repeating offset of +1, +2, +3 or +6
// e.g. an attack from -51 units away could be due to a repeating offset of -51 or -17 (but not -1)
function offsetsFromAttack(attack, repeatingOffsets) {
  return repeatingOffsets.filter(offset => {
    const generatedOffsets = generateOffsets(offset);
    return (generatedOffsets.indexOf(attack) !== -1); // if the particular offset can create the given attack, return true
  });
}

/* export Chess object if using node or any other CommonJS compatible
 * environment */
if (typeof exports !== 'undefined') exports.Chess = Chess;
if (typeof exports !== 'undefined') exports.valid_2x2_grid_move = valid_2x2_grid_move;
if (typeof exports !== 'undefined') exports.generateOffsets = generateOffsets;
if (typeof exports !== 'undefined') exports.updateAttacks = updateAttacks;
if (typeof exports !== 'undefined') exports.offsetsFromAttack = offsetsFromAttack;

/* export Chess object for any RequireJS compatible environment */
if (typeof define !== 'undefined') define( function () { return Chess;  });