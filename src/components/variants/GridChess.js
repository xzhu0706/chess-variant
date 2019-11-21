import React from 'react';
import GridChess from '../../WithMoveValidation';
import ContentBox from './ContentBox';
import VariantDocument from './Variant';
import wb from '../../pieces/standard/wb.svg';
import wr from '../../pieces/standard/wr.svg';
import wn from '../../pieces/standard/wn.svg';
import wp from '../../pieces/standard/wp.svg';
import wk from '../../pieces/standard/wk.svg';
import wq from '../../pieces/standard/wq.svg';
import bb from '../../pieces/standard/bb.svg';
import br from '../../pieces/standard/br.svg';
import bn from '../../pieces/standard/bn.svg';
import bp from '../../pieces/standard/bp.svg';
import bk from '../../pieces/standard/bk.svg';
import bq from '../../pieces/standard/bq.svg';

function GridChessDocument() {
  const piecesTable = (
    <table>
    <tbody>
      <tr>
        <td><img style={{width: "3em", height: "3em"}} src={wp} alt="white pawn" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={wr} alt="white rook" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={wn} alt="white knight" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={wb} alt="white bishop" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={wq} alt="white queen" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={wk} alt="white king" /></td>
      </tr>
      <tr>
        <td><img style={{width: "3em", height: "3em"}} src={bp} alt="black pawn" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={br} alt="black rook" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={bn} alt="black knight" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={bb} alt="black bishop" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={bq} alt="black queen" /></td>
        <td><img style={{width: "3em", height: "3em"}} src={bk} alt="black king" /></td>
      </tr>
    </tbody>
  </table>
  );

  return (
    <VariantDocument title="Grid chess" piecesTable={piecesTable}>
      <p>
        In grid chess, all standard chess rules apply, except that each move must cross one or more
        grid lines. It follows that the king will not be under attack by any opposing piece that is currently in the same grid.
      </p>

      <ContentBox
        board={GridChess('', 'w', '', undefined, 2, false, true)}
      >
        This is the starting position in grid chess.
        All the standard moves are legal at the start because they all cross one grid line.
      </ContentBox>

      <ContentBox
        board={GridChess('', 'w', '', 'rnbqkbnr/ppp1pppp/8/4P3/3p4/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3', 2, false, true)}
      >
        After
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. e4 d5 2. e5 d4</span>
        , White is unable to play
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> e6</span>
        , and on the next move Black is similarly unable to play
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> d3</span>.<br />
        The pawns are stuck until Black moves a piece to
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> d6 </span>
        or White moves a piece to
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> e3</span>.
      </ContentBox>

      <ContentBox
        board={GridChess('', 'w', '', '2k5/8/8/8/2N5/8/1q6/1K6 w - - 0 1', 2, false, true)}
      >
        There are two things to observe in this position.
        <br />
        First, White's king is not in check, and therefore White does not have to capture the queen with the knight.
        <br />
        Second, White's king cannot move anywhere. In particular, it cannot capture the queen
        (because it cannot move in its own grid) or move to
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> c2 </span>
        (because it would be placing itself in check by the queen).
        <br />
      </ContentBox>

      <ContentBox
        board={GridChess('', 'w', '', '4k3/8/8/R7/6B1/8/8/4K3 w - - 0 1', 2, false, true)}
      >
        Here is a checkmate-in-one scenario.
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. ♖a8#</span>.
        <br />
        Note that checkmate occurs in the standard way: a player&apos;s king is attacked but
        can&apos;t move and in addition the attack can't be blocked.
      </ContentBox>

    </VariantDocument>
  );
}

export default GridChessDocument;
