import React from 'react';
import Antichess from '../../WithMoveValidation';
import ContentBox from './ContentBox';
import VariantDocument from './Variant';

function AntiChessDocument() {
  return (
    <VariantDocument title="Antichess">
      In antichess, there are three rules that break from the standard chess rules:
      <ol>
        <li>
          The first player to run out of legal moves (typically by losing all his/her
          pieces) wins.
        </li>
        <li>
          Check and checkmate and castling are not allowed, and pawn promotion to a king is
          allowed (the king is a mundane piece).
        </li>
        <li>
          Capture is mandatory.
        </li>
      </ol>
      <ContentBox
        board={Antichess(undefined, 1, true, true)}
      >
        This is the starting position in antichess.
        Because White cannot make a capture on the first move, the beginning
        plays out like in standard chess.
      </ContentBox>

      <ContentBox
        board={Antichess('rnbqkbnr/pppppp1p/8/6p1/8/7N/PPPPPPPP/RNBQKB1R w KQkq - 0 2', 1, true, true)}
      >
        A popular opening move in antichess is
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. ♘h3</span>
        , and a popular response to it is
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1...g5</span>
.
        In this position, White is forced to play
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 2. ♘xg5</span>
.
      </ContentBox>

      <ContentBox
        board={Antichess('rnbqk1nr/ppppppbp/8/6N1/8/8/PPPPPPPP/RNBQKB1R w KQkq - 1 3', 1, true, true)}
      >
        White must make some capture if any is available.
        White may have multiple capturing moves available, as in this position.
        In this case, White may choose how to make a capture.
      </ContentBox>

      <ContentBox
        board={Antichess('8/8/8/8/7r/8/P7/8 w - - 0 1', 1, true, true)}
      >
        Here is a sample ending scenario.
        {' '}
        <br />
        White plays
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. a4</span>
        , which forces
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1...♖xa4</span>
.
        {' '}
        <br />
        When it becomes White&apos;s turn, White has no valid moves. Therefore, White wins.
      </ContentBox>

    </VariantDocument>
  );
}

export default AntiChessDocument;
