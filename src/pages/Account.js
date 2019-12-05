import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
// import * as customQueries from '../customGraphql/queries';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Image, ListGroup, ListGroupItem, Table,
} from 'react-bootstrap';


export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrentUser: false,
    };
  }

  async componentDidMount() {
    const username = this.props.match.params.username;
    const currentUser = await Auth.currentUserInfo();
    const queryResult = await API.graphql(graphqlOperation(
      queries.getUserByUsername, { username },
    ));
    const userInfo = queryResult.data.getUserByUsername.items;
    if (userInfo && userInfo[0]) {
      this.setState({
        user: userInfo[0],
        isCurrentUser: currentUser && currentUser.username === username,
      }, () => {console.log('user', this.state.user)});
    }
  }

  render() {
    const { user, isCurrentUser } = this.state;
    return (
      <Container>
        <Profile
          username={user ? user.username : 'Loading..'}
          email={user ? user.email : 'Loading..'}
          phone={user ? user.phoneNumber : 'Loading..'}
          history={user ? user.pastGames.items : 'Loading..'}
          isCurrentUser={isCurrentUser}
        />
      </Container>
    );
  }
}

const Profile = (props) => (
  <div>
    <Row>
      <Col sm={{ span: 4, offset: 1 }}>
        <AccountInfo
          username={props.username}
          email={props.email}
          phone={props.phone}
          isCurrentUser={props.isCurrentUser}
        />
      </Col>
      <Col sm={{ span: 7 }} >
        <MatchHistory history={props.history} currentUser={props.username} />
      </Col>
    </Row>
  </div>
);

const AccountInfo = (props) => (
  <div>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg" thumbnail fluid />
    <ListGroup>
      <ListGroupItem variant="flush">{props.username}</ListGroupItem>
      { props.isCurrentUser
        && <ListGroupItem>{props.email}</ListGroupItem> }
      { props.isCurrentUser
        && <ListGroupItem>{props.phone}</ListGroupItem> }
    </ListGroup>
  </div>
);

const GameRow = (props) => {
  return <tr>
    <td><Link to={`/game/${props.id}`}>Link</Link></td>
    <td>{props.opponent}</td>
    <td>{props.variant}</td>
    <td>{props.time}</td>
    <td>{props.winner}</td>
    <td>{props.result}</td>
  </tr>
}

const MatchHistory = (props) => {
  // get row elements
  let index = 0;
  let games = props.history
  let gamesList = []
  if (games !== "Loading..") {
    while (index < games.length) {
      let game = games[index].game
      console.log(game);
      let opponent = '';
      if (!game.available) {
        if (game.opponent.username === props.currentUser) {
          opponent = game.creator.username;
        } else {
          opponent = game.opponent.username;
        }
        let row = <GameRow
          opponent={opponent}
          variant={game.variant}
          time={game.time ? game.time : "N/A"}
          winner={game.winner ? game.winner : "N/A"}
          result={game.result ? game.result : "N/A"}
          id={game.id}
        />
        gamesList.push(row)
      }
      index++;
    }
  }

  return <div>
    <h2>Match History</h2>
    <Table striped bordered responsive>
      <thead>
        <tr>
          <td>Page</td>
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
  </div>;
};
