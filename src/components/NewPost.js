import React, {Component} from 'react';
import {List, Container, Box, Button} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


class NewPost extends Component {

    render(){
        return(
            <Box style={{border: '1px solid lightGray'}} display='flex' flexDirection='column'>
                <TextareaAutosize
                    aria-label="empty textarea" 
                    placeholder="Empty" 
                    style={{width: '100%'}}
                    rows = {5}
                    />
                <Box display='flex' flexDirection='row' alignItems='center' 
                    style={{backgroundColor: 'white', height: '50px'}}>
                    <Button variant="contained" color="primary">Submit</Button>
                </Box>
            </Box>
        )
    }
}

export default NewPost