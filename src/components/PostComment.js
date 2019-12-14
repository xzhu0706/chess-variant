import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {Box, Avatar, Typography, InputBase, Fab} from '@material-ui/core';

function PostComment(props) {
    return (
        <Comment>
            <Comment.Content style={{ width: '100%' }}>
                <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                    <Avatar style={{ backgroundColor: '#333333', color: 'white' }}>{props.author[0]}</Avatar>
                    <Comment.Author style={{marginLeft:'5px'}}as='a'>{props.author}</Comment.Author>
                    <Comment.Metadata>
                        <div>{props.elapsedTime}</div>
                    </Comment.Metadata>
                </Box>
                <Comment.Text>{props.content}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default PostComment