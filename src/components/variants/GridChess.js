import React from 'react';
import GridChess from '../../WithMoveValidation';
import ContentBox from './ContentBox';
import VariantDocument from './Variant';

function GridChessDocument() {
  return (
    <VariantDocument title="Grid Chess">
      <p>
      In grid chess, all standard chess rules apply, except that each move must cross one or more
      grid lines. It follows that the king will not be under attack by any opposing piece that is
      currently in the same grid.
      </p>

      <ContentBox
        board={GridChess(undefined, 2, true, true)}
      >
        This is the starting position in grid chess.
        All the standard moves are legal at the start because they all cross one grid line.
      </ContentBox>

      <ContentBox
        board={GridChess('rnbqkbnr/ppp1pppp/8/4P3/3p4/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3', 2, true, true)}
      >
        After
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. e4 d5 2. e5 d4</span>
        , White is unable to play
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> e6</span>
        , and on the next move Black is similarly unable to play
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> d3</span>
.
        <br />
        The pawns are stuck until Black moves a piece to
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> d6 </span>
        or White moves a piece to
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> e3</span>
.
      </ContentBox>

      <ContentBox
        board={GridChess('2k5/8/8/8/2N5/8/1q6/1K6 w - - 0 1', 2, true, true)}
      >
        There are two things to observe in this position.
        <br />
        First, White&apos;s king is not in check, and therefore White does not have to capture the
        queen with the knight.
        <br />
        Second, White&apos;s king cannot move anywhere. In particular, it cannot capture the queen
        (because it cannot move in its own grid) or move to
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> c2 </span>
        (because it would be placing itself in check by the queen).
        <br />
      </ContentBox>

      <ContentBox
        board={GridChess('4k3/8/8/R7/6B1/8/8/4K3 w - - 0 1', 2, true, true)}
      >
        Here is a checkmate-in-one scenario.
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. ♖a8#</span>
.
        <br />
        Note that checkmate occurs in the standard way: a player&apos;s king is attacked but
        can&apos;t move and in addition the attack can&apos;t be blocked.
      </ContentBox>

    </VariantDocument>
  );
}

export default GridChessDocument;
