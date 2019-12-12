import React, {Component} from 'react';
import {List, Box, ListItemAvatar, Avatar, ListItemText, ListItem, ListItemIcon, Typography} from '@material-ui/core';
import { AiFillHome } from "react-icons/ai";
import { FaChessBoard } from "react-icons/fa";
import { GiChessRook } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";




class Sidebar extends Component {

    render() {
        return (
            <Box display='flex' flexDirection='row' alignItems='space' justifyContent='center' style={{marginTop: '50px', marginLeft: '1px', position:'fixed', width: '25%', height: '100%'}}>
            <Box style={{height: '40%'}} display='flex' flexDirection='column' justifyContent='space-between' alignContent='flex-end'>
                <ListItem>
                    <ListItemIcon><AiFillHome style={{fontSize: 24}}/></ListItemIcon>
                    <Typography style={{marginLeft: '-15px', fontSize: '18px', fontWeight:'bold'}}>Home</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><GiChessRook style={{fontSize: 24}}/></ListItemIcon>
                    <Typography style={{marginLeft: '-15px', fontSize: '18px', fontWeight:'bold'}}>Play</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FaGlobe style={{fontSize: 24}}/></ListItemIcon>
                    <Typography style={{marginLeft: '-15px', fontSize: '18px', fontWeight:'bold'}}>Explore Variants</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FaChessBoard style={{fontSize: 23}}/></ListItemIcon>
                    <Typography style={{marginLeft: '-15px', fontSize: '18px', fontWeight:'bold'}}>Create a Variant</Typography>
                </ListItem>
                <ListItem>
                    <ListItemIcon><FaBook style={{fontSize: 23}}/></ListItemIcon>
                    <Typography style={{marginLeft: '-15px', fontSize: '18px', fontWeight:'bold'}}>Glossary of Pieces</Typography>
                </ListItem>
            </Box>
            </Box>
        )
    }
}

export default Sidebar