import React from 'react';
import ExtinctionChess from '../../WithMoveValidation';
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

function ExtinctionChessDocument() {
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
    <VariantDocument title="Extinction chess" piecesTable={piecesTable}>
      In extinction chess, all standard chess rules apply, except that a player loses only when he/she loses every member of one of the piece types that were present in the starting position, i.e., when one of those pieces goes extinct.
      
      <ContentBox
        board={ExtinctionChess('', 'w', '', undefined, 3, false, true)}
      >
      This is the default starting position. The pieces in the starting position determine the piece types that can "go extinct".
      Thus, a player wins if he/she eliminates all of the other player's pawns, knights, bishops, rooks, queens or kings.<br/>
      </ContentBox>

      <ContentBox
        board={ExtinctionChess('', 'w', '', 'rnbq1bnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQ1BNR w KQkq - 0 1', 3, false, true)}
      >
      A king has no special purpose in extinction chess (and check/checkmate is disabled).
      Thus, a game can be played with no kings on either side, which is not the case in standard chess!
      </ContentBox>

      <ContentBox
        board={ExtinctionChess('', 'w', '', 'rnbqkbnr/pppppppp/8/8/bbbbbbbb/8/8/R3K2R w KQkq - 0 1', 3, false, true)} 
      >
      Because the king is not a special piece, the king can ignore attacks/checks and moreover can castle even when the interceding squares are under attack.
      </ContentBox>

      <ContentBox
        board={ExtinctionChess('', 'w', '', '8/8/3q1p2/2r5/4N3/2b3k1/3n1n2/8 w KQkq - 0 1', 3, false, true)}  
      >
      Here is an example of an ending scenario. White wins in one move if he/she captures any of Black's pieces except for the knight, because of the fact Black has two knights.
      </ContentBox>
    </VariantDocument>
  );
}

export default ExtinctionChessDocument;
