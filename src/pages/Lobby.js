import React, {Component} from 'react'; 
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import { forwardRef } from 'react';

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

const lobbyColumns = [
    {title: 'Player', field: 'player'},
    {title: 'Skill Level', field: 'skillLevel'},
    {title: 'Time', field: 'timing'},
    {title: 'Variant', field: 'variant'}
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


class Lobby extends Component{
    render(){
        const lobbyStyle = {
            float: "right",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
        }
        const createGameButtonStyle = {
            width: "40%",
            padding: "10px", 
            marginBottom: "10px",
            backgroundColor: '#36454f',
            color: '#FFF'
        }
        return (
            <Container maxWidth='sm' style={lobbyStyle}>
                <Button style={createGameButtonStyle} variant="contained">Create a game</Button>
                <MaterialTable
                    icons = {tableIcons}
                    columns={lobbyColumns}
                    data={this.props.games}
                    title='Lobby'
                    options={{
                        headerStyle: {
                            backgroundColor: '#FFF',
                            fontFamily: "Verdana",
                            fontWeight: "normal",
                            fontSize: "16px",
                            color: '#000'
                        },
                        searchFieldStyle:{
                            fontSize: "14px",
                            width: "100%",
                            display: "flex"
                            
                        }
                    }}
                    localization = {{
                        toolbar: {
                            searchPlaceholder: "keywords"
                        }
                    }}
                />
            </Container>
        )
    }
}

export default Lobby