import React, { Component, forwardRef } from 'react';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import { API, graphqlOperation } from 'aws-amplify';
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
import * as subscriptions from '../graphql/subscriptions';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Amplify, { Auth } from 'aws-amplify';
import CreateGameDialog from './CreateGameDialog';



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
  {title: '', field: 'gameId',  hidden: true},
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
    };
    this.gamesData = {}
    this.gameRoomStateUpdateSubscription = null
    this.gameCreationSubscription = null
    this.gameDeletionSubscription = null
    this.currentGame = null
  }

  async componentDidMount() {
    let queryResult = await API.graphql(graphqlOperation(queries.listGames))
    if (queryResult) {
      queryResult = queryResult.data.listGames.items
      const games = queryResult.map((game) => {
        let gameId = game.id
        this.gamesData[gameId] = game
        let row = this.constructRowFromGameData(game)
        return row
      });
      this.setState({ games });
    }

    this.gameCreationSubscription = API.graphql(graphqlOperation(subscriptions.onCreateGame),).subscribe({
      next: (gameData) => {
        alert(JSON.stringify(gameData.value.data.onCreateGame))
        const game = gameData.value.data.onCreateGame
        let gameId = game.id
        this.gamesData[gameId] = game
        let row = this.constructRowFromGameData(game)
        const games = [row, ...this.state.games]
        this.setState({ games })
      },
    });

    this.gameDeletionSubscription = API.graphql(graphqlOperation(subscriptions.onDeleteGame),).subscribe({
      next: (gameData) => {
        let game = gameData.value.data.onDeleteGame
        let gameId = game.id
        let remainingGames = this.state.games.filter((gameData) => {
          return gameData.gameId !== gameId
        })
        this.setState({games: remainingGames})
      },
    });

    this.gameRoomUpdateSubscription = API.graphql(graphqlOperation(subscriptions.onUpdateGame),).subscribe({
      next: (gameData) => {
        let game = gameData.value.data.onUpdateGame
        alert('GAME UPDATE: ' + game.id)
        let currentGame = localStorage.getItem('currentGame')
        if(currentGame && currentGame === game.id){
          game['createdIt'] = true
          this.props.history.push({pathname: '/game', state: {message: game}})
        }
      },
    });

  }

  componentWillUnmount(){
    this.gameRoomUpdateSubscription.unsubscribe()
    this.gameCreationSubscription.unsubscribe()
    this.gameDeletionSubscription.unsubscribe()
  }

  createGame = async (event, gameInfo) => {
    this.setState({showDialog: false})
    gameInfo['fen'] = "1"
    let userInfo = await Auth.currentUserInfo()
    if(userInfo) {
      let user = {}
      user.id = userInfo.id
      user.username = userInfo.username
      gameInfo['creator'] = user
    }
    alert(JSON.stringify(gameInfo))
    let currentGame = localStorage.getItem('currentGame')
    if(currentGame){
      await API.graphql(graphqlOperation(mutations.deleteGame, { input: {id: currentGame }}))
    }
    let newGame = await API.graphql(graphqlOperation(mutations.createGame, { input: gameInfo }))
    localStorage.setItem('currentGame', newGame.data.createGame.id)
  }

  constructRowFromGameData = (game) => {
    const creator = game.creator
    const player = creator ? creator.username : 'anonymous'
    const skillLevel = 'n/a'
    const timing = game.time;
    const variant = game.variant
    const gameId = game.id
    return {player, skillLevel, timing, variant, gameId}
  }

  showDialog = () => {
    this.setState({showDialog: true})
  }

  joinGame = async (event, rowData) => {
    let gameId = rowData.gameId
    let gameInfo = this.gamesData[gameId]
    gameInfo.fen = '#'
    alert(JSON.stringify(gameInfo))
    delete gameInfo['__typename']
    let creator = gameInfo['creator']
    delete creator['__typename']
    gameInfo['creator'] = creator
    await API.graphql(graphqlOperation(mutations.updateGame, {input: gameInfo}))
    gameInfo['createdIt'] = false
    this.props.history.push({pathname: '/game', state: {message: gameInfo}})
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
        <CreateGameDialog showDialog = {this.state.showDialog} createGame = {this.createGame} />
        <Button style={createGameButtonStyle} variant="contained" onClick={this.showDialog}>
                Create a game
        </Button>
        <div style={{ width: '100%' }}>
          <MaterialTable
            onRowClick = {(event, rowData) => this.joinGame(event, rowData)}
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
              paging: false,
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
