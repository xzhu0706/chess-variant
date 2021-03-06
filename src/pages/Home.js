import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import { API, graphqlOperation } from 'aws-amplify';
import PropTypes from 'prop-types';
import { Box, Container } from '@material-ui/core';
import Lobby from './Lobby';
// import PopularVariants from '../components/PopularVariants';
// import AntiChess from '../Images/AntiChess.png';
// import GridChess from '../Images/GridChess.png';
import DiscussionBoard from './DiscussionBoard';

// import * as mutations from '../graphql/mutations';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showDialog: false,
    };
  }


  render() {
    const { history, collapsed } = this.props;
    let content;
    if (collapsed) {
      content = (
        <Container>
          <Lobby marginRight="5%" width="90%" history={history} />
        </Container>
      );
    } else {
      content = (
        <Box style={{ marginTop: '100px' }} display="flex" flexDirection="row" justifyContent="space-between">
          <DiscussionBoard marginLeft="5%" width="40%" />
          <Lobby marginRight="5%" width="40%" history={history} />
        </Box>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Home;

Home.defaultProps = {
  history: undefined,
};

Home.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
};
