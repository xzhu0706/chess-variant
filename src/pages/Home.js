import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { API, graphqlOperation } from 'aws-amplify';
import Lobby from './Lobby';
import PopularVariants from '../components/PopularVariants';
import AntiChess from '../Images/AntiChess.png';
import GridChess from '../Images/GridChess.png';
// import * as mutations from '../graphql/mutations';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showDialog: false,
    };
  }

  render() {
    const { history } = this.history;
    return (
      <div className="text-center">
        <Lobby history={history} />

        <h1 style={{ fontFamily: 'AppleSDGothicNeo-Bold' }}>Featured Variants</h1>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <PopularVariants name="Antichess" src={AntiChess} description="Win by losing all your pieces or being stalemated" link="antichess" />
          </Col>
          <Col md="auto">
            <PopularVariants name="Grid Chess" description="Each move must cross one or multiple grid lines" src={GridChess} link="grid" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
