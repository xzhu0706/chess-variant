import React, {Component} from 'react';
import {List, Container, Box, Button, TextField} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputBase from '@material-ui/core/InputBase';

class NewPost extends Component {

    render(){
        return(
            <Box style={{backgroundColor: 'white', borderRadius: '4px', border: '1px solid lightGray'}} display='flex' flexDirection='column'>
                {/*<TextField
                    placeholder="Empty" 
                    style={{width: '100%'}}
                    multiline={true}
                    variant='naked'
                    rows = {5}
                    rowsMax={Infinity}
                />*/}
                    <InputBase
                        style={{width: '100%'}}
                        multiline={true}
                        rows = {1}
                        rowsMax={Infinity}
                        placeholder="  Start writing here." 
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center' 
                    style={{margin: '10px 10px 5px 10px', backgroundColor: 'white', height: '50px'}}>
                    <Button variant="contained" color="primary">Submit</Button>
                </Box>
            </Box>
        )
    }
}

export default NewPost