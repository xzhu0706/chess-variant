import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import Lobby from './Lobby';
import PopularVariants from '../components/PopularVariants';
import AntiChess from '../Images/AntiChess.png';
import variant2 from '../Images/variant2.jpg';
import * as mutations from '../graphql/mutations';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }

  render() {
    return (
      <div>
        <Lobby history={this.props.history}/>
        <Lobby 
          games={games} 
          makeDialogVisible={this.makeDialogVisible} 
        />

        <h1 className="text-center" style={{ fontFamily: 'AppleSDGothicNeo-Bold' }}>Popular Variants</h1>
        <Row>
          <Col className="text-center">
            <PopularVariants name="Antichess" src={AntiChess} description="Win by losing all your pieces or being stalemated" />
          </Col>
          <Col className="text-center">
            <PopularVariants name="" description="" src={variant2} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
