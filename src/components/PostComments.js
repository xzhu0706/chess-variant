import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {Box, Avatar, Typography, InputBase, Fab} from '@material-ui/core';

class PostComments extends Component {

    constructor(props){
        super(props)
        this.comment = ''
    }

    setComment = (e) => {this.comment = e.target.value}

    render() {
        
        return (
            <Box style={{margin:'15px 15px 15px 15px', backgroundColor: 'whiteSmoke', border: '1px solid lightGray', borderRadius: '4px'}} display='flex' flexDirection='column' justifyContent='center'>
                <Box style={{margin: '10px 5px 0 5px'}} display='flex' flexDirection='row' justifyContent='space-between'>
                    <InputBase
                        style={{ 
                            backgroundColor: 'white', 
                            border: '1px solid lightGray', 
                            borderRadius: '20px', 
                            width: '75%', 
                            fontFamily: 'Verdana',
                            paddingLeft: '15px',
                        }}
                        multiline={true}
                        onChange={this.setComment}
                        rows={1}
                        rowsMax={Infinity}
                        placeholder="Leave a comment."
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                    <Fab style={{backgroundColor: 'dodgerBlue', color: 'white', fontWeight: 'bold', height: '40px'}} onClick={(comment) => this.props.handleNewComment(this.comment)} variant="extended">Add Comment</Fab>
                </Box>
                <Comment.Group style={{marginLeft: '10px'}} className="ui comments">
                    {this.props.comments}
                </Comment.Group>
            </Box>
        )
    }
}

export default PostComments