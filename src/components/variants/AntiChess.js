import React from 'react';
import Antichess from '../../WithMoveValidation'
import { Row, Col } from 'react-bootstrap';
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
  const headingStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "bold",
  };
  const bodyStyle = {
    fontFamily: "Lucida Bright, Lucidabright, Lucida Serif, Lucida," +
      "Bitstream Charter, Bitstream Vera Serif, DejaVu Serif, Century Schoolbook L," +
      "serif",
    fontSize: "110%",
  };

  return (
    <div>
      <h1 className="text-center" style={headingStyle}>Antichess (Losing Chess)</h1>
      <div>
        <h2 style={headingStyle}>Pieces</h2>
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
      </div>

      <div>
        <h2 style={headingStyle}>Rules</h2>
        <p style={bodyStyle}>In antichess, the first player to run out of legal moves (typically by losing all his/her pieces) wins. 
        Captures are mandatory whenever a capture is possible (if multiple captures are possible, then the player can choose).
        The third change of rules is that the king is not a special piece: it cannot be checked/checkmated, castling is disallowed, and pawns can promote to a king.
        </p>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={{marginBottom: "2rem"}}>
            <div>
              {Antichess('', 'w', '', undefined, 1, false, true)} 
            </div>
            <div style={{bodyStyle}}>
            { /* <span style={{fontFamily: "serif", fontWeight: "bold"}}>1. ♘f3 d4</span> */ }
            </div>
          </Col>
          <Col xs="auto" xl="4" style={{marginBottom: "2rem"}}>
            This is the starting position. <br/>
            Because White cannot make a capture on the first move, all the typical moves are legal.
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={{marginBottom: "2rem"}}>
            <div>
              {Antichess('', 'w', '', '8/8/8/8/7r/8/P7/8 w - - 0 1', 1, false, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={{marginBottom: "2rem"}}>
            <span style={{fontFamily: "serif", fontWeight: "bold"}}>1. a4 ♖xa4#</span><br/>
            <span style={{fontFamily: "serif", fontWeight: "bold"}}>1. a3 ♖b4 2. axb4#</span>
          </Col>
        </Row>
      </div>

      <div>
        <h2 style={headingStyle}>Strategies</h2>
      </div>
    </div>
  );
}

export default AntiChessDocument;
