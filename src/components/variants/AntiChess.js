import React from 'react';
import Antichess from '../../WithMoveValidation';
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

function AntiChessDocument() {
  const piecesTable = (
    <table>
      <tbody>
        <tr>
          <td><img style={{ width: '3em', height: '3em' }} src={wp} alt="white pawn" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={wr} alt="white rook" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={wn} alt="white knight" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={wb} alt="white bishop" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={wq} alt="white queen" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={wk} alt="white king" /></td>
        </tr>
        <tr>
          <td><img style={{ width: '3em', height: '3em' }} src={bp} alt="black pawn" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={br} alt="black rook" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={bn} alt="black knight" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={bb} alt="black bishop" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={bq} alt="black queen" /></td>
          <td><img style={{ width: '3em', height: '3em' }} src={bk} alt="black king" /></td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <VariantDocument title="Antichess" piecesTable={piecesTable}>
      In antichess, there are three rules that break from the standard chess rules:
      <br />
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
        board={Antichess('', 'w', '', undefined, 1, false, true)}
      >
        This is the starting position in antichess.
        Because White cannot make a capture on the first move, the beginning
        plays out like in standard chess.
      </ContentBox>

      <ContentBox
        board={Antichess('', 'w', '', 'rnbqkbnr/pppppp1p/8/6p1/8/7N/PPPPPPPP/RNBQKB1R w KQkq - 0 2', 1, false, true)}
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
        board={Antichess('', 'w', '', 'rnbqk1nr/ppppppbp/8/6N1/8/8/PPPPPPPP/RNBQKB1R w KQkq - 1 3', 1, false, true)}
      >
        White must make some capture if any is available.
        White may have multiple capturing moves available, as in this position based on the
        continuation
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 2. ♘xg5 ♗g7</span>
.
        In this case, White may choose how to make a capture.
      </ContentBox>

      <ContentBox
        board={Antichess('', 'w', '', '8/8/8/8/7r/8/P7/8 w - - 0 1', 1, false, true)}
      >
        Here is a sample ending scenario.
        {' '}
        <br />
        White plays
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1. a4</span>
        , which forces
        <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}> 1...♖xa4#</span>
.
        {' '}
        <br />
        When control switches to White&apos;s turn, White has no valid moves. Therefore, White wins.
      </ContentBox>

    </VariantDocument>
  );
}

export default AntiChessDocument;
