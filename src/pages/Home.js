import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

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
      width: '10em',
      height: '10em',
    };

    return (
      <div>
        <div>
          <a href="/">Chess-Variant.com</a>
        </div>
        <div>
          <Row>
            <Column>
              <div className="col">
                <h1>Welcome to Chess-Variants</h1>
                <ul>
                  {descripList.map((description) => (<li key={description.key}>{description.description}</li>))}
                </ul>
              </div>
            </Column>
            <Column>
              <img src="https://cdn0.iconfinder.com/data/icons/sports-and-games-4/512/172-512.png" alt="Chess Piece" style={imgStyle} />
            </Column>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
