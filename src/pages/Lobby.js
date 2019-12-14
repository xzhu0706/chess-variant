import React, { Component, forwardRef } from 'react';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
// import * as subscriptions from '../graphql/subscriptions';
// import * as queries from '../graphql/queries';
// import * as mutations from '../graphql/mutations';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as customMutations from '../customGraphql/mutations';
import * as customSubscriptions from '../customGraphql/subscriptions';
import CreateGameDialog from './CreateGameDialog';
import * as customQueries from '../customGraphql/queries';


const CURRENT_GAME = 'currentGame';
const lobbyColumns = [
  {
    title: 'Player',
    field: 'player',
    cellStyle: {
      backgroundColor: '#FFF',
      fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
      fontSize: '16px',
      color: '#333333',
    },
  },
  {
    title: 'Opponent',
    field: 'opponent',
    cellStyle: {
      backgroundColor: '#FFF',
      fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
      fontSize: '16px',
      color: '#333333',
    },
  },
  {
    title: 'Skill Level',
    field: 'skillLevel',
    cellStyle: {
      backgroundColor: '#FFF',
      fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
      fontSize: '16px',
      color: '#333333',
    },
  },
  {
    title: 'Time',
    field: 'timing',
    cellStyle: {
      backgroundColor: '#FFF',
      fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
      fontSize: '16px',
      color: '#333333',
    },
  },
  {
    title: 'Variant',
    field: 'variant',
    cellStyle: {
      backgroundColor: '#FFF',
      fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
      fontSize: '16px',
      color: '#333333',
    },
  },
  { title: '', field: 'gameId', hidden: true },
];

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};


class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      showDialog: false,
      showJoiningOwnGameDialog: false,
    };
    this.gamesData = {};
    this.gameUpdateSubscription = null;
    this.gameCreationSubscription = null;
    this.gameDeletionSubscription = null;
  }

  async componentDidMount() {
    const limit = 1000; // temporary solution
    const filter = {
      available: { eq: true },
    };
    let queryResult = await API.graphql(graphqlOperation(customQueries.listGames, { limit, filter }));
    if (queryResult) {
      //console.log(queryResult);
      queryResult = queryResult.data.listGames.items;
      const games = queryResult.map((game) => {
        const gameId = game.id;
        this.gamesData[gameId] = game;
        const row = this.constructRowFromGameData(game);
        return row;
      });
      this.setState({ games });
    }

    this.gameCreationSubscription = API.graphql(graphqlOperation(customSubscriptions.onCreateGame)).subscribe({
      next: (gameData) => {
        const game = gameData.value.data.onCreateGame;
        const gameId = game.id;
        this.gamesData[gameId] = game;
        const row = this.constructRowFromGameData(game);
        const games = [row, ...this.state.games];
        this.setState({ games });
      },
    });

    /* this.gameDeletionSubscription = API.graphql(graphqlOperation(subscriptions.onDeleteGame),).subscribe({
      next: (gameData) => {
        let game = gameData.value.data.onDeleteGame
        let gameId = game.id
        let remainingGames = this.state.games.filter((gameData) => {
          return gameData.gameId !== gameId
        })
        this.setState({games: remainingGames})
      },
    }); */

    this.gameUpdateSubscription = API.graphql(graphqlOperation(customSubscriptions.onUpdateGame)).subscribe({
      next: (gameData) => {
        //console.log('joined game', gameData.value.data);
        const game = gameData.value.data.onUpdateGame;
        const currentGame = localStorage.getItem(CURRENT_GAME);
        if (currentGame && currentGame === game.id && !game.ended) {
          this.props.history.push({ pathname: `/game/${game.id}` });
        }
        // since they didn't create the game which has now been joined, any other player
        // will simply remove it from their lobby.
        else if (this.gamesData.hasOwnProperty(game.id)) {
          delete this.gamesData[game.id];
          this.removeGameFromLobby(game.id);
        }
      },
    });
    //console.log('join game subscription', this.gameUpdateSubscription, this.gameCreationSubscription);
  }

  componentWillUnmount() {
    if (this.gameUpdateSubscription) {
      this.gameUpdateSubscription.unsubscribe();
    }
    if (this.gameCreationSubscription) {
      this.gameCreationSubscription.unsubscribe();
    }
    if (this.gameDeletionSubscription) {
      this.gameDeletionSubscription.unsubscribe();
    }
  }


  createGame = async (event, gameInfo) => {
    let userInfo;
    this.setState({ showDialog: false });
    const newGame = { ...gameInfo };
    //console.log('new', newGame);
    newGame.fen = 'init';
    newGame.available = true;
    newGame.ended = false;
    await this.getUserInfo().then((user) => {
      //console.log(typeof (user), user);
      if (typeof (user) === 'object') {
        userInfo = { ...user };
        newGame.creator = {
          id: userInfo.attributes.sub,
          username: userInfo.username,
        };
      } else {
        newGame.creator = {
          id: user,
          username: 'anonymous',
        };
      }
    });
    // const currentGame = localStorage.getItem(CURRENT_GAME);
    // if (currentGame) {
    //    API.graphql(graphqlOperation(mutations.deleteGame, { input: {id: currentGame }}))
    // }
    const createNewGame = await API.graphql(graphqlOperation(customMutations.createGame, { input: newGame }));
    const newGameData = createNewGame.data.createGame;
    localStorage.setItem(CURRENT_GAME, newGameData.id);
    if (userInfo) {
      // if user is logged in, create playerGameMapping
      const playerGameMappingInput = {
        playerGameMappingGameId: newGameData.id,
        playerGameMappingPlayerId: userInfo.attributes.sub,
      };
      const newPlayerGameMapping = await API.graphql(
        graphqlOperation(customMutations.createPlayerGameMapping, { input: playerGameMappingInput }),
      );
      // testing output
      const queryResult2 = await API.graphql(
        graphqlOperation(customQueries.getUserWithPastGames, { id: userInfo.attributes.sub }),
      );
      const queryResult3 = await API.graphql(graphqlOperation(customQueries.getGame, { id: newGameData.id }));
      //console.log('after creat game', newPlayerGameMapping, queryResult2, queryResult3);
    }
  }

  showDialog = () => {
    this.setState({ showDialog: true });
  }

  closeDialog = () => {
    this.setState({ showDialog: false });
  }

  showJoiningOwnGameDialog = () => {
    this.setState({ showJoiningOwnGameDialog: true });
  }

  closeJoiningOwnGameDialog = () => {
    this.setState({ showJoiningOwnGameDialog: false });
  }

  constructRowFromGameData = (game) => {
    const { creator, variant } = game;
    const player = creator.username;
    const skillLevel = game.skillLevel || 'n/a';
    const timing = game.time;
    const gameId = game.id;
    const opponent = game.opponent ? game.opponent.username : 'n/a';
    return {
      creator, player, skillLevel, timing, variant, gameId, opponent,
    };
  }

  joinGame = async (event, rowData) => {
    let userInfo;
    const joinGameInput = {};
    const { gameId, opponent } = rowData;
    await this.getUserInfo().then((user) => {
      if (typeof (user) === 'object') {
        userInfo = { ...user };
        joinGameInput.opponent = {
          id: userInfo.attributes.sub,
          username: userInfo.username,
        };
      } else {
        joinGameInput.opponent = {
          id: user,
          username: 'anonymous',
        };
      }
    });

    // Wrong user trying to join invite only game
    if (opponent !== 'n/a') {
      // guest user
      if (joinGameInput.opponent.username === 'anonymous') {
        this.showJoiningOwnGameDialog();
        return;
      }
      // wrong user
      if (userInfo.username !== opponent) {
        this.showJoiningOwnGameDialog();
        return;
      }
    }


    if (joinGameInput.opponent.id === rowData.creator.id) {
      this.showJoiningOwnGameDialog();
      return;
    }


    joinGameInput.available = false;
    joinGameInput.id = gameId;
    const joinGame = await API.graphql(graphqlOperation(customMutations.updateGame, { input: joinGameInput }));
    const joinedGameData = joinGame.data.updateGame;
    if (userInfo) {
      // if user is logged in, create playerGameMapping
      try {
        const playerGameMappingInput = {
          playerGameMappingGameId: joinedGameData.id,
          playerGameMappingPlayerId: userInfo.attributes.sub,
        };
        const newPlayerGameMapping = await API.graphql(
          graphqlOperation(customMutations.createPlayerGameMapping, { input: playerGameMappingInput }),
        );
        //console.log('joined mapping', newPlayerGameMapping);
      } catch (e) {
        //console.log(e);
      }
    }
    this.props.history.push({ pathname: `/game/${gameId}` });
  }

  getUserInfo = async () => {
    let userInfo;
    await Auth.currentAuthenticatedUser().then((user) => {
      userInfo = { ...user };
    }).catch(async (e) => {
      await Auth.currentCredentials().then((credential) => {
        userInfo = credential.identityId.split(':')[1];
      });
    });
    return userInfo;
  }

  removeGameFromLobby = (gameId) => {
    const remainingGames = this.state.games.filter((gameData) => gameData.gameId !== gameId);
    this.setState({ games: remainingGames });
  }

  render() {
    const lobbyStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      padding: '70px 0',
      textAlign: 'center',
    };

    const createGameButtonStyle = {
      width: '30%',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#333333',
      color: '#FFF',
      fontFamily: 'AppleSDGothicNeo-Bold',
    };

    return (
      <Container maxWidth="sm" style={lobbyStyle}>
        <CreateGameDialog closeDialog={this.closeDialog} showDialog={this.state.showDialog} createGame={this.createGame} />
        <Button style={createGameButtonStyle} variant="contained" onClick={this.showDialog} id="btncreategame">
                Create a game
        </Button>
        <Dialog
          open={this.state.showJoiningOwnGameDialog}
          onClose={this.closeJoiningOwnGameDialog}
        >
          <DialogTitle id="alert-dialog-title">Invalid Opponent</DialogTitle>
          <DialogActions>
            <Button onClick={this.closeJoiningOwnGameDialog} color="primary">
              Alright
            </Button>
          </DialogActions>
        </Dialog>

        <div style={{ width: '100%' }}>
          <MaterialTable
            onRowClick={(event, rowData) => this.joinGame(event, rowData)}
            icons={tableIcons}
            columns={lobbyColumns}
            data={this.state.games}
            title="Lobby"
            maxWidth="md"
            options={{
              headerStyle: {
                backgroundColor: '#FFF',
                fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
                fontSize: '18px',
                color: '#333333',
              },
              paging: true,
              searchFieldStyle: {
                fontSize: '14px',
                fontFamily: 'verdana',
              },
            }}
            localization={{
              toolbar: {
                searchPlaceholder: 'keywords',
              },
            }}
          />
        </div>
      </Container>
    );
  }
}
export default Lobby;
