import React, { Component } from 'react'; 
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
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

import CreateGameDialog from './CreateGameDialog';


const lobbyColumns = [
    {title: 'Player', field: 'player', cellStyle: {
        backgroundColor: '#FFF',
        fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
        fontSize: "16px",
        color: '#333333'
    }},
    {title: 'Skill Level', field: 'skillLevel', cellStyle: {
        backgroundColor: '#FFF',
        fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
        fontSize: "16px",
        color: '#333333'
    }},
    {title: 'Time', field: 'timing', cellStyle: {
        backgroundColor: '#FFF',
        fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
        fontSize: "16px",
        color: '#333333'
    }},
    {title: 'Variant', field: 'variant', cellStyle: {
        backgroundColor: '#FFF',
        fontFamily: 'AppleSDGothicNeo-SemiBold, verdana',
        fontSize: "16px",
        color: '#333333'
    }},
    {title: '', field: 'join'}
]

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
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const JoinButton = (props) => (
    <Link to={`/game/${props.gameid}`}>
        <Button variant='contained' color='primary'>
            JOIN
        </Button>
    </Link>
)

const LobbyTable = (props) => (
    <MaterialTable
                    icons = {tableIcons}
                    columns={lobbyColumns}
                    data={props.games}
                    title='Lobby'
                    maxWidth="md"
                    options={{
                        headerStyle: {
                            backgroundColor: '#FFF',
                            fontFamily: "AppleSDGothicNeo-SemiBold, verdana",
                            fontSize: "18px",
                            color: '#333333'
                        },
                        paging: false,
                        searchFieldStyle:{
                            fontSize: "14px",
                            fontFamily: 'verdana'
                        }
                    }}
                    localization = {{
                        toolbar: {
                            searchPlaceholder: "keywords"
                        }
                    }}
                />
)

class Lobby extends Component{
    constructor(props){
        super(props)
        this.state = {
            games: []
        }
    }

    getLobby(data) {
        const tableData = [];
        data.forEach((game) => {
            const linkToBtn = (<JoinButton gameid={game.id} />)
            // (<Link to={`/game/${game.id}`}>
            //     <Button variant='contained' color='primary'>
            //         JOIN
            //     </Button>
            // </Link>)
            const row = {
                player: game.creator,
                skillLevel: 'Beginner',
                timing: 'unlimited',
                variant: game.variant,
                join: linkToBtn
            }
            tableData.push(row)
        })
        this.setState({games: tableData})
        console.log('lobby',tableData, this.state.games)
    }

    async componentDidMount(){
        const games = await API.graphql(graphqlOperation(queries.listGames))
        this.getLobby(games.data.listGames.items)

        this.subscription = API.graphql(
            graphqlOperation(subscriptions.onCreateGame)
        ).subscribe({
            next: gameData => {
                const game = gameData.value.data.onCreateGame
                console.log('lobby subscription', gameData, game)
                const linkToBtn = (<JoinButton gameid={game.id} />)
                
                // (<Link to={`/game/${game.id}`}>
                //     <Button variant='contained' color='primary'>
                //         JOIN
                //     </Button>
                // </Link>)
                const row = {
                    player: game.creator,
                    skillLevel: 'Beginner',
                    timing: 'unlimited',
                    variant: game.variant,
                    join: linkToBtn
                }
                const tableData = this.state.games.slice();
                tableData.push(row);
                this.setState({games: tableData});
            }
          })
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    render(){
        const lobbyStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "70px 0",
            textAlign: "center"

        }
        const createGameButtonStyle = {
            width: "30%",
            padding: "10px", 
            marginBottom: "10px",
            backgroundColor: '#333333',
            color: '#FFF',
            fontFamily: "AppleSDGothicNeo-Bold"
        }
        return (
            <Container maxWidth='sm' style={lobbyStyle}>
                <CreateGameDialog 
                    onClick={this.props.makeDialogVisible}
                 />
                <div style={{width: "100%"}}>
                {/* <MaterialTable
                    icons = {tableIcons}
                    columns={lobbyColumns}
                    data={this.state.games}
                    title='Lobby'
                    maxWidth="md"
                    options={{
                        headerStyle: {
                            backgroundColor: '#FFF',
                            fontFamily: "AppleSDGothicNeo-SemiBold, verdana",
                            fontSize: "18px",
                            color: '#333333'
                        },
                        paging: false,
                        searchFieldStyle:{
                            fontSize: "14px",
                            fontFamily: 'verdana'
                        }
                    }}
                    localization = {{
                        toolbar: {
                            searchPlaceholder: "keywords"
                        }
                    }}
                /> */}
                <LobbyTable games={this.state.games} />
                </div>
            </Container>
        )
    }
}

export default Lobby