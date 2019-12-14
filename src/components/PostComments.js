import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {Box, Avatar, Typography, InputBase, Fab} from '@material-ui/core';

const COMMENTS = [
    {author: "Daouda Gueye", content: "this is a test comment"},
    {author: "Daouda Gueye", content: "this is a test comment"},
    {author: "Daouda Gueye", content: "this is a test comment"},
    {author: "Daouda Gueye", content: "this is a test comment"},
    {author: "Daouda Gueye", content: "this is a test comment"}
]

class PostComments extends Component {

    constructor(props){
        super(props)
        this.comment = ''
    }

    setComment = (e) => {this.comment = e.target.value}

    render() {
        const comments = COMMENTS.map((comment) => {
            return (
                <Comment className='comment'>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>{comment.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>{comment.content}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            )
        })
        return (
            <Box style={{margin:'15px 15px 15px 15px', backgroundColor: 'whiteSmoke', border: '1px solid lightGray'}} display='flex' flexDirection='column' justifyContent='center'>
                <Box display='flex' flexDirection='row' justifyContent='center'>
                    <InputBase
                        style={{ marginTop: '10px', border: '1px solid lightGray', borderRadius: '2px', width: '100%', fontFamily: 'Verdana' }}
                        multiline={true}
                        onChange={(e) => this.setComment}
                        rows={1}
                        rowsMax={Infinity}
                        placeholder="Leave a comment."
                        inputProps={{ 'aria-label': 'naked' }}
                    />
                    <Fab variant="extended" color="primary">Add Comment</Fab>
                </Box>
                <Comment.Group className="ui comments">
                    {comments}
                </Comment.Group>
            </Box>
        )
    }
}

export default PostComments