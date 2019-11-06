import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class Welcome extends Component{
    render(){
        const imgStyle = {
            width: '15em',
            height: '15em'
        }
        const descripList = this.props.descripList
        return (
            <div>
            <Row>
              <Col>
                <div className="col">
                  <h1>Welcome to Chess-Variants</h1>
                  <ul>
                    {descripList.map((description) => (
                      <li key={description.key}>{description.description}</li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Glinski_Chess_Setup.png" alt="Chess Piece" style={imgStyle} fluid />
              </Col>
            </Row>
          </div>
        )
    }
}

export default Welcome