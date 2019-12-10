import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
// import * as queries from '../graphql/queries';
import * as customQueries from '../customGraphql/queries';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Image, ListGroup, ListGroupItem, Table,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import * as queries from '../graphql/queries';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrentUser: false,
    };
  }

  async componentDidMount() {
    const { username } = this.props.match.params;
    const currentUser = await Auth.currentUserInfo();
    const queryResult = await API.graphql(graphqlOperation(
      customQueries.getUserByUsername, { username },
    ));
    const userInfo = queryResult.data.getUserByUsername.items;
    if (userInfo && userInfo[0]) {
      this.setState({
        user: userInfo[0],
        isCurrentUser: currentUser && currentUser.username === username,
      }, () => { console.log('user', this.state.user); });
    }
  }

  render() {
    const { user, isCurrentUser } = this.state;
    return (
      <Container>
        <Profile
          username={user ? user.username : 'Loading..'}
          history={user ? user.pastGames.items : 'Loading..'}
          variants={user ? user.variants.items : 'Loading..'} // this.state.user.variants.items[0].name
          isCurrentUser={isCurrentUser}
        />
      </Container>
    );
  }
}

const Profile = ({
  username, history, variants,
}) => (
  <div>
    <Row>
      <Col sm={{ span: 4, offset: 1 }}>
        <AccountInfo
          username={username}
        />
      </Col>
      <Col sm={{ span: 7 }}>
        {username !== 'Loading..' ? (
          <VariantHistory variants={variants} />
        ) : null}
        <MatchHistory history={history} currentUser={username} />
      </Col>
    </Row>
  </div>
);

const VariantHistory = (props) => {
  const variantsList = [];
  const { variants } = props;
  if (variants) {
    variants.forEach((variant) => {
      const { id, name, createdAt } = variant;
      variantsList.push(
        <div key={id}>
          <div style={{ fontWeight: 'bold' }}><Link to={`/pages/${id}`}>{name}</Link></div>
        Created At:
          {' '}
          {createdAt.slice(0, 10)}
          {' '}
          {createdAt.slice(11, 19)}
          <hr />
        </div>,
      );
    });
  }

  return (
    <div style={{ paddingBottom: '1em' }}>
      <h2>Created Variants</h2>
      {variantsList.length !== 0
        ? variantsList
        : <span>No variants yet.</span>}
    </div>
  );
};

const AccountInfo = ({
  username,
}) => (
  <div>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg" thumbnail fluid />
    <ListGroup>
      <ListGroupItem variant="flush">{username}</ListGroupItem>
    </ListGroup>
  </div>
);

const GameRow = ({
  id, opponent, variant, time, winner, result,
}) => (
  <tr>
    <td><Link to={`/game/${id}`}>Link</Link></td>
    <td>{opponent}</td>
    <td>{variant}</td>
    <td>{time}</td>
    <td>{winner}</td>
    <td>{result}</td>
  </tr>
);

const MatchHistory = ({ history, currentUser }) => {
  // get row elements
  let index = 0;
  const games = history;
  const gamesList = [];
  if (games !== 'Loading..') {
    while (index < games.length) {
      const { game } = games[index];
      console.log(game);
      let opponent = '';
      if (!game.available) {
        if (game.opponent.username === currentUser) {
          opponent = game.creator.username;
        } else {
          opponent = game.opponent.username;
        }
        const row = (
          <GameRow
            key={game.id}
            opponent={opponent}
            variant={game.variant}
            time={game.time ? game.time : 'N/A'}
            winner={game.winner ? game.winner : 'N/A'}
            result={game.result ? game.result : 'N/A'}
            id={game.id}
          />
        );
        gamesList.push(row);
      }
      const row = (
        <GameRow
          available={game.available ? 'yes' : 'no'}
          opponent={opponent}
          variant={game.variant}
          time={game.time ? game.time : 'N/A'}
          winner={game.winner ? game.winner : 'N/A'}
          result={game.result ? game.result : 'N/A'}
          id={game.id}
        />
      );
      gamesList.push(row);
      index += 1;
    }
  }

  return (
    <div>
      <h2>Match History</h2>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <td>Available</td>
            <td>Opponent</td>
            <td>Variant</td>
            <td>Time</td>
            <td>Winner</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {gamesList}
        </tbody>
      </Table>
    </div>
  );
};

export default Account;

AccountInfo.defaultProps = {
  username: [],
};

AccountInfo.propTypes = {
  username: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Profile.propTypes = {
  username: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  variants: PropTypes.string.isRequired,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

GameRow.propTypes = {
  opponent: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

MatchHistory.propTypes = {
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  currentUser: PropTypes.string.isRequired,
};
