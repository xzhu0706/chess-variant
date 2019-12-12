import React, {Component} from 'react';
import {List, ListItemAvatar, Avatar, ListItemText, ListItem, ListItemIcon} from '@material-ui/core';
import { AiFillHome } from "react-icons/ai";
import { FaChessBoard } from "react-icons/fa";
import { GiChessRook } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";




class Sidebar extends Component {

    render() {
        return (
            <List style={{marginTop: '30px', marginLeft: '1px', position:'fixed', backgroundColor: 'white', width: '20%', height: '100%'}}>
                <ListItem>
                    <ListItemIcon><AiFillHome style={{fontSize: 24}}/></ListItemIcon>
                    <ListItemText secondary="Home"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><GiChessRook style={{fontSize: 24}}/></ListItemIcon>
                    <ListItemText secondary="Play"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FaGlobe style={{fontSize: 24}}/></ListItemIcon>
                    <ListItemText secondary="Browse Variants"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FaChessBoard style={{fontSize: 23}}/></ListItemIcon>
                    <ListItemText secondary="Create a Variant"/>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FaBook style={{fontSize: 23}}/></ListItemIcon>
                    <ListItemText style={{fontSize: '20px'}} primary="Glossary of Pieces"/>
                </ListItem>
            </List>
        )
    }
}

export default Sidebar