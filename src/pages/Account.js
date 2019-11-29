import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
// import * as queries from '../graphql/queries';
import * as customQueries from '../customGraphql/queries';
import { Link } from 'react-router-dom';


import {
  Container, Row, Col, Image, ListGroup, ListGroupItem, Table,
} from 'react-bootstrap';


export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  async componentDidMount() {
    const user = await Auth.currentUserInfo();
    if (user) {
      let userid = user.attributes.sub
      let queryResult = await API.graphql(graphqlOperation(customQueries.getUserWithPastGames, { id: userid }));
      this.setState({ user: queryResult.data.getUser })
    }
  }

  render() {
    return (
      <Container>
        <Profile
          username={this.state.user ? this.state.user.username : 'Loading..'}
          email={this.state.user ? this.state.user.email : 'Loading..'}
          phone={this.state.user ? this.state.user.phoneNumber : 'Loading..'}
          history={this.state.user ? this.state.user.pastGames.items : 'Loading..'}
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
        />
      </Col>
      <Col sm={{ span: 7 }} >
        <MatchHistory history={props.history} />
      </Col>
      
    </Row>
  </div>
);

const AccountInfo = (props) => (
  <div>

    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/250px-ChessSet.jpg" thumbnail fluid />
    <ListGroup>
      <ListGroupItem variant="flush">{props.username}</ListGroupItem>
      <ListGroupItem>{props.email}</ListGroupItem>
      <ListGroupItem>{props.phone}</ListGroupItem>
    </ListGroup>
  </div>
);

const GameRow = (props) => {

  return <tr>
    <td>{props.available}</td>
    <td>{props.opponent}</td>
    <td>{props.variant}</td>
    <td>{props.time}</td>
    <td>{props.winner}</td>
    <td>{props.result}</td>
    <td>{props.fen}</td>
    <td><Link to={`/game/${props.id}`}>Link</Link></td>
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
      console.log(game)
      let row = <GameRow
        available={game.available ? "yes" : "no"}
        opponent={game.opponent.username ? game.opponent.username : "anonymous"}
        variant={game.variant}
        time={game.time ? game.time : "N/A"}
        winner={game.winner ? game.winner : "N/A"}
        result={game.result ? game.result : "N/A"}
        fen={game.fen}
        id={game.id}
      />
      gamesList.push(row)
      index++;
    }
  }

  return <div>
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
          <td>Fen</td>
        </tr>
      </thead>
      <tbody>
        {gamesList}
      </tbody>
    </Table>
  </div>;
};
