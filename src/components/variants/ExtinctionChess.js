import React from 'react';
import ExtinctionChess from '../../WithMoveValidation'
import { Row, Col } from 'react-bootstrap';
// what should we do about all these imports? 
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
  const headingStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: "bold",
  };
  const bodyStyle = {
    fontFamily: "Lucida Bright, Lucidabright, Lucida Serif, Lucida," +
      "Bitstream Charter, Bitstream Vera Serif, DejaVu Serif, Century Schoolbook L," +
      "serif",
    fontSize: "100%",
    marginBottom: "2rem"
  };

  return (
    <div>
      <h1 className="text-center" style={headingStyle}>Extinction Chess</h1>
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
        <p style={bodyStyle}>In extinction chess,

        </p>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={bodyStyle}>
            <div>
              {ExtinctionChess('', 'w', '', undefined, 3, true, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={bodyStyle}>
            This is the starting position. <br/>
            Because White can only make out-of-grid moves, all the typical moves are legal at the start.
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={bodyStyle}>
            <div>
              {ExtinctionChess('', 'w', '', 'rnbqkbnr/ppp1pppp/8/4P3/3p4/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3', 3, true, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={bodyStyle}>
            After 
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> 1. e4 d5 2. e5 d4</span>, 
            White is unable to play
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> e6</span>, and on the next move Black is similarly unable to play 
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> d3</span>.
            <br/>
            The pawns are stuck until Black moves a piece to
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> d6 </span>
            or White moves a piece to
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> e3</span>.
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={bodyStyle}>
            <div>
              {ExtinctionChess('', 'w', '', 'rnbqk1nr/pppppNbp/5pp1/8/8/8/PPPPPPPP/RNB2B1R w KQkq - 2 4', 3, true, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={bodyStyle}>
            There are two things to observe in this position. <br/>
            First, White's king cannot move anywhere, not even to
            <span style={{fontFamily: "serif", fontWeight: "bold"}}> c2 </span>
            (one can't move into check). <br/>
            Second, White does not have to capture the queen with the knight because White's king is not even in check. <br/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" style={bodyStyle}>
            <div>
              {ExtinctionChess('', 'w', '', '3k4/5N2/8/8/8/8/8/4K3 w - - 0 1', 3, true, true)} 
            </div>
          </Col>
          <Col xs="auto" xl="4" style={bodyStyle}>
            Checkmate in one: <span style={{fontFamily: "serif", fontWeight: "bold"}}>1. ♖a8#</span>.<br/>
            Checkmate occurs in the typical way: a player's king is attacked but can't move and also the player can't block the attack.
          </Col>
        </Row>
      </div>

      <div>
        <h2 style={headingStyle}>Strategies</h2>

      </div>
    </div>
  );
}

export default ExtinctionChessDocument;
