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
            <Box display='flex' flexDirection='row' alignItems='space' justifyContent='center' style={{backgroundColor: 'white', marginTop: '30px', marginLeft: '1px', position:'fixed', width: '25%', height: '100%'}}>
            <Box style={{marginTop: '15px', height: '40%'}} display='flex' flexDirection='column' justifyContent='space-between' alignContent='flex-end'>
                <ListItem>
                    <Avatar style={{background: 'royalBlue'}}><AiFillHome style={{fontSize: 24}}/></Avatar>
                    <Typography style={{marginLeft: '10px', fontSize: '18px', fontWeight:'bold'}}>Home</Typography>
                </ListItem>
                <ListItem>
                    <Avatar style={{background: '#D80000'}}><GiChessRook style={{fontSize: 24}}/></Avatar>
                    <Typography style={{marginLeft: '10px', fontSize: '18px', fontWeight:'bold'}}>Play</Typography>
                </ListItem>
                <ListItem>
                    <Avatar style={{background: '#008800'}}><FaGlobe style={{fontSize: 24}}/></Avatar>
                    <Typography style={{marginLeft: '10px', fontSize: '18px', fontWeight:'bold'}}>Explore Variants</Typography>
                </ListItem>
                <ListItem>
                    <Avatar style={{background: '#CCCC00'}}><FaChessBoard style={{fontSize: 23}}/></Avatar>
                    <Typography style={{marginLeft: '10px', fontSize: '18px', fontWeight:'bold'}}>Create a Variant</Typography>
                </ListItem>
                <ListItem>
                    <Avatar style={{background: 'dodgerBlue'}}><FaBook style={{fontSize: 23}}/></Avatar>
                    <Typography style={{marginLeft: '10px', fontSize: '18px', fontWeight:'bold'}}>Glossary of Pieces</Typography>
                </ListItem>
            </Box>
            </Box>
        )
    }
}

export default Sidebar