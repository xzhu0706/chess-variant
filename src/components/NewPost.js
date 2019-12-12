import React, {Component} from 'react';
import {List, Container, Box, Button, TextField, Dialog, DialogContent} from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputBase from '@material-ui/core/InputBase';

class NewPost extends Component {

    constructor(props){
        super(props)
        this.title = ''
        this.content = ''
    }
    setTitle = (title) => {
        this.title = title
    }
    
    setContent = (content) => {
        this.content = content
    }
    render(){
        return(
            <Dialog maxWidth='sm' fullWidth={true} open={this.props.open}>
                <DialogContent>
                    
                    <Box style={{ backgroundColor: 'white'}} display='flex' flexDirection='column'>
                        <TextField
                            variant='outlined'
                            margin='dense'
                            placeholder='Enter title'
                        />
                        <InputBase
                            style={{ border:'1px solid lightGray', borderRadius:'2px', width: '100%', fontFamily: 'Verdana', fontWeight: 'bold' }}
                            multiline={true}
                            onChange = {(content) => {this.setContent(content)}}
                            rows={10}
                            rowsMax={Infinity}
                            placeholder="Start writing here."
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                        <Box display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'
                            style={{ margin: '10px 10px 5px 10px', backgroundColor: 'white', height: '50px' }}>
                            <Button onClick={this.props.handleNewPost} variant="contained" color="primary">Submit</Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        )
    }
}

export default NewPost