import React from 'react';
import ExtinctionChess from '../../WithMoveValidation';
import ContentBox from './ContentBox';
import VariantDocument from './Variant';

function ExtinctionChessDocument() {
  return (
    <VariantDocument title="Extinction Chess">
      <p>
      In extinction chess, all standard chess rules apply, except that a player loses only when he/she loses every member of one of the piece types that were present in the starting position, i.e., when one of those pieces goes extinct.
      </p>
      
      <ContentBox
        board={ExtinctionChess(undefined, 3, true, true)}
      >
      This is the default starting position. The pieces in the starting position determine the
      piece types that can &quot;go extinct&quot;.
      Thus, a player wins if he/she eliminates all of the other player's pawns, knights,
      bishops, rooks, queens or kings.
        <br />
      </ContentBox>

      <ContentBox
        board={ExtinctionChess('rnbq1bnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQ1BNR b KQkq - 0 1', 3, true, true)}
      >
      A king has no special purpose in extinction chess (and check/checkmate is disabled).
      Thus, a game can be played with no kings on either side, which is not the case in
      standard chess!
      </ContentBox>

      <ContentBox
        board={ExtinctionChess('rnbqkbnr/pppppppp/8/8/bbbbbbbb/8/8/R3K2R w KQkq - 0 1', 3, true, true)} 
      >
      Because the king is not a special piece, the king can ignore attacks/checks and moreover
      can castle even when the interceding squares are under attack.
      </ContentBox>

      <ContentBox
        board={ExtinctionChess('8/8/3q1p2/2r5/4N3/2b3k1/3n1n2/8 w KQkq - 0 1', 3, true, true)}  
      >
      Here is an example of an ending scenario. White wins in one move if he/she captures any of Black's pieces except for the knight because Black has two knights.
      </ContentBox>
    </VariantDocument>
  );
}

export default ExtinctionChessDocument;
