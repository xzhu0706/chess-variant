import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { API, graphqlOperation } from 'aws-amplify';
import Lobby from './Lobby';
import PopularVariants from '../components/PopularVariants';
import AntiChess from '../Images/AntiChess.png';
import GridChess from '../Images/GridChess.png';
import DiscussionBoard from './DiscussionBoard';
import { ListItemText, Box, ListItemAvatar, Avatar, CardContent, Typography } from '@material-ui/core';

// import * as mutations from '../graphql/mutations';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
  }

  render() {
    return (
      <Box style={{height: '100%'}}display='flex' flexDirection='row' justifyContent='space-between'>
        <DiscussionBoard />
        <Lobby history={this.props.history} /> 
      </Box>       
    )
  }
}

export default Home;
