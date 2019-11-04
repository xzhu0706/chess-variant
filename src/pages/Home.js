import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const descripList = [
      { description: 'Design your own variants', key: 0 },
      { description: 'Test your variant against others', key: 1 },
      { description: 'Play variants created from other players', key: 2 },
    ];

    const imgStyle = {
      width: '15em',
      height: '15em',
    };

    const top = {
      background: '#efd5be',
      padding: '.5em',
    };

    return (
      <div>
        <div style={top}>
          <a href="/">Chess-Variant.com</a>
        </div>
        <div>
          <Row>
            <Col>
              <div className="col">
                <h1>Welcome to Chess-Variants</h1>
                <ul>
                  {descripList.map((description) => (<li key={description.key}>{description.description}</li>))}
                </ul>
              </div>
            </Col>
            <Col>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Glinski_Chess_Setup.png" alt="Chess Piece" style={imgStyle} fluid />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
