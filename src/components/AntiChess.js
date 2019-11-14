import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Antichess from '../WithMoveValidation';
import wb from '../pieces/standard/wb.svg';
import wr from '../pieces/standard/wr.svg';
import wn from '../pieces/standard/wn.svg';
import wp from '../pieces/standard/wp.svg';
import wk from '../pieces/standard/wk.svg';
import wq from '../pieces/standard/wq.svg';
import bb from '../pieces/standard/bb.svg';
import br from '../pieces/standard/br.svg';
import bn from '../pieces/standard/bn.svg';
import bp from '../pieces/standard/bp.svg';
import bk from '../pieces/standard/bk.svg';
import bq from '../pieces/standard/bq.svg';

function AntiChess() {
  const headingStyle = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
  };
  const bodyStyle = {
    fontFamily: 'Lucida Bright, Lucidabright, Lucida Serif, Lucida,'
      + 'Bitstream Charter, Bitstream Vera Serif, DejaVu Serif, Century Schoolbook L,'
      + 'serif',
    fontSize: '110%',
  };

  return (
    <div>
      <h1 className="text-center" style={headingStyle}>Antichess (Losing Chess)</h1>
      <p>
        <h2 style={headingStyle}>Pieces</h2>
        <table>
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
        </table>
      </p>

      <p>
        <h2 style={headingStyle}>Rules</h2>
        <p style={bodyStyle}>
Antichess (also known as losing chess, giveaway chess and suicide chess) is a variant in which the goal is to lose all of one's pieces or otherwise be stalemated.
        Captures are mandatory whenever a capture is possible (if multiple captures are possible, the player can choose).
        In antichess the king is not a special piece in that it cannot be checked (or checkmated), castling is disallowed and pawns that reach the opponent's back rank can promote to a king.
        A player wins only when he or she runs out of legal moves.
        </p>
        <Row>
          <Col xs={8} xl={6} style={{ marginBottom: '1rem' }}>
            <div>
              {Antichess('', 'w', '', undefined, 384, false)}
              {' '}

            </div>
            <div style={{ bodyStyle }}>
              { /* <span style={{fontFamily: "serif", fontWeight: "bold"}}>1. ♘f3 d4</span> */ }
            </div>
          </Col>
          <Col xs={8} xl={6}>
            <div>
              {Antichess('', 'w', '', '8/8/8/8/7r/8/P7/8 w - - 0 1', 384, false)}
              {' '}

            </div>
          </Col>
        </Row>
        <Row />
      </p>

      <p>
        <h2 style={headingStyle}>Strategies</h2>
      </p>
    </div>
  );
}

export default AntiChess;
