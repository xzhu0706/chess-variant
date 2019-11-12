import React from 'react';
import Antichess from '../WithMoveValidation'
import { Row, Col } from 'react-bootstrap';
import wb from '../pieces/fairy/wb_180.svg';
import wr from '../pieces/fairy/wr_180.svg';
import wn from '../pieces/fairy/wn_180.svg';
import wp from '../pieces/fairy/wp_180.svg';
import wk from '../pieces/fairy/wk_180.svg';
import wq from '../pieces/fairy/wq_180.svg';
import bb from '../pieces/fairy/bb_180.svg';
import br from '../pieces/fairy/br_180.svg';
import bn from '../pieces/fairy/bn_180.svg';
import bp from '../pieces/fairy/bp_180.svg';
import bk from '../pieces/fairy/bk_180.svg';
import bq from '../pieces/fairy/bq_180.svg';

function AntiChess() {
  return (
    <div>
      <h1 className="text-center">Antichess (Losing Chess)</h1>
      <h2>Pieces</h2>
      <table>
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
      </table>
      <h2>Rules</h2>
      <p>Antichess (also known as losing chess, giveaway chess and suicide chess) is a variant in which the goal is to lose all of one's pieces or otherwise be stalemated.
      Captures are mandatory whenever they are possible (if multiple captures are possible, the player can choose).
      In addition, the king is not a special piece in that it cannot be checked (or checkmated), castling is disallowed and pawns that reach the opponent's back rank can promote to a king.
      A player wins when he or she runs out of legal moves.</p>
      <Row>
        <Col>
          {Antichess('', '', 'w', "k7/8/8/8/8/8/8/R7 w KQkq - 0 1", 320, false)}
          Black wins in one...
          this needs to be styled, put in a center-aligned box of some kind, with this being the "caption"... (sidenote: should we write a function that stylizes text like "1. Ng4 g4"?)
        </Col>
      </Row>
      <Row>
        <Col>
          {Antichess('', '', 'w', undefined, 320, false)}
          ...
        </Col>
      </Row>
      <h2>Strategies</h2>
    </div>
  );
}

export default AntiChess;
