import React, {Component} from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {Box, Avatar, Typography, InputBase } from '@material-ui/core';


class PostComments extends Component {

    constructor(props){
        super(props)
        this.comment = ''
    }

    setComment = (e) => {this.comment = e.target.value}

    render() {
        const comments = this.props.comments.map((comment) => {
            return (
                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>Matt</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            )
        })
        return (
            <Box display='flex' flexDirection='column' justifyContent='center'>
                <InputBase
                    style={{ marginTop: '10px', border: '1px solid lightGray', borderRadius: '2px', width: '100%', fontFamily: 'Verdana'}}
                    multiline={true}
                    onChange={(e) => this.setComment}
                    rows={1}
                    rowsMax={Infinity}
                    placeholder="Leave a comment."
                    inputProps={{ 'aria-label': 'naked' }}
                />
                <Comment.Group>
                    {comments}
                </Comment.Group>
            </Box>
        )
    }
}

export default PostComments