import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function AntiChess() {
  return (
    <div>
      <h2 className="text-center">Anti Chess (Losing Chess)</h2>
      <h2>Description:</h2>
      <p>Antichess is an eccentric variant where the objective is to lose all your pieces or to get stalemated.</p>
      <Row>
        <Col>
          <Image src="http://chsch.info/wp-content/uploads/2017/02/antichess-c4-opening.png" />
        </Col>
        <Col>
          <Image src="http://chsch.info/wp-content/uploads/2017/02/antichess-c4-rook-black-defeat.png" />
        </Col>
      </Row>
      <h2>Rules:</h2>
      <ul>
        <li>do this</li>
        <li>do this</li>
        <li>do this</li>
      </ul>
    </div>
  );
}

export default AntiChess;
