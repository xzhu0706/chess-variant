import React from 'react';
import GridChess from '../../WithMoveValidation'
import { Row, Col } from 'react-bootstrap';
// what should we do about all these imports? (for each and every doc page)?
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
      <h1 className="text-center" style={headingStyle}>Grid Chess</h1>
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
        <p style={bodyStyle}>In grid chess, all standard chess rules apply, except that each move must cross one or more grid lines.<br/>
        It follows that the king is not placed in check by any piece that lies in the same grid.
        </p>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={{marginBottom: "2rem"}}>
            <div>
              {GridChess('', 'w', '', undefined, 2, false, true)} 
            </div>
            <div style={{bodyStyle}}>
            { /* <span style={{fontFamily: "serif", fontWeight: "bold"}}>1. ♘f3 d4</span> */ }
            </div>
          </Col>
          <Col xs="auto" xl="4" style={{marginBottom: "2rem"}}>
            This is the starting position. <br/>
            Because White can only make out-of-grid moves, all the typical moves are legal at the start.
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={{marginBottom: "2rem"}}>
            <div>
              {GridChess('', 'w', '', 'rnbqkbnr/ppp1pppp/8/4P3/3p4/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3', 2, false, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={{marginBottom: "2rem"}}>
            After 
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> 1. e4 d5 2. e5 d4</span>, 
            White is unable to play
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> e6</span>, and on the next move Black is also unable to play 
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> d3</span>.
            <br/>
            The pawns are stuck until Black moves a piece to
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> d6 </span>
            or White moves a piece to
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> e3</span>.
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={{marginBottom: "2rem"}}>
            <div>
              {GridChess('', 'w', '', '2k5/8/8/8/2N5/8/1q6/1K6 w - - 0 1', 2, false, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={{marginBottom: "2rem"}}>
            There are two things to observe in this position. <br/>
            First, White's king cannot move anywhere, not even to
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> c2 </span>
            (one can't move into check). <br/>
            Second, White does not have to capture the queen with the knight because White's king is not even in check. <br/>
          </Col>
        </Row>
      </div>

      <div>
        <h2 style={headingStyle}>Strategies</h2>
      </div>
    </div>
  );
}

export default GridChessDocument;
