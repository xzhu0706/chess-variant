import React, {Component} from 'react';
import {List, ListItemAvatar, Avatar, ListItemText, ListItem} from '@material-ui/core';


class Sidebar extends Component {

    render() {
        return (
            <List style={{marginTop: '30px', position:'fixed', backgroundColor: 'white', width: '20%', height: '100%'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="" src=""/>
                    </ListItemAvatar>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="" src=""/>
                    </ListItemAvatar>
                    <ListItemText primary="Play"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="" src=""/>
                    </ListItemAvatar>
                    <ListItemText primary="Browse Variants"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="" src=""/>
                    </ListItemAvatar>
                    <ListItemText primary="Create a Variant"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="" src=""/>
                    </ListItemAvatar>
                    <ListItemText primary="Glossary of Pieces"/>
                </ListItem>
            </List>
        )
    }
}

export default Sidebar