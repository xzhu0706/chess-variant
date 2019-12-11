import React, {Component} from 'react';
import {List, Container, Box} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


class NewPost extends Component {

    render(){
        return(
            <Box>
                <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />;
            </Box>
        )
    }
}