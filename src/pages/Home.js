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

  componentWillUnmount() {
    alert("UNMOUNTED")
  }

  render() {
    return (
      <div>
        <Lobby history={this.props.history}/>
      </div>
    );
  }
}

export default Home;
