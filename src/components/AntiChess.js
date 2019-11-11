import React from 'react';
import Antichess from '../WithMoveValidation'
import { Row, Col, Image } from 'react-bootstrap';

function AntiChess() {
  return (
    <div>
      <h1 className="text-center">Antichess (Losing Chess)</h1>
      <h2>Rules</h2>
      <p>Antichess (also known as losing chess, giveaway chess and suicide chess) is a variant in which the goal is to lose all of one's pieces or otherwise be stalemated.
      Captures are mandatory whenever they are possible (if multiple captures are possible, the player can choose).
      In addition, the king is not a special piece in that it cannot be checked (or checkmated), castling is disallowed and pawns that reach the opponent's back rank can promote to a king.
      A player wins when he or she runs out of legal moves.</p>
      <Row>
        <Col>
          {Antichess("k7/8/8/8/8/8/8/R7 w KQkq - 0 1", 320, false)}
          Black wins in one...
        </Col>
      </Row>
      <Row>
        <Col>
          {Antichess(undefined, 320, false)}
          ...
        </Col>
      </Row>
    </div>
  );
}

export default AntiChess;
