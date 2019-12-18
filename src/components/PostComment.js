import React, {Component} from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {Box, Avatar, Typography, InputBase, Fab} from '@material-ui/core';
import getElapsedTime from '../Utils/ElapsedTime'
import {computeTimeInterval} from '../Utils/ElapsedTime'
import {colorForLetter} from '../Utils/ColorForLetter'
import * as Time from '../Constants/TimeConstants';


class PostComment extends Component {

    constructor(props){
        super(props)
        this.state = {
            elapsedTime: this.props.elapsedTime
        }
        this.createdAt = this.props.createdAt
    }

    componentDidMount() {
        let interval = computeTimeInterval(this.state.elapsedTime)
        this.interval = setInterval(() => this.updateElapsedTime(), interval);
    }
    

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateElapsedTime = () => {
        let elapsedTime = getElapsedTime(this.createdAt)
        this.setState({elapsedTime})
    }

    render(){
        let elapsedTime = this.state.elapsedTime
        elapsedTime = elapsedTime[elapsedTime.length-1] === Time.SECONDS_REPRESENTATION? 'just now' : elapsedTime
        let initial = this.props.author.charAt(0).toUpperCase()
        let avatarColor = colorForLetter(initial)
        return (
            <Comment>
                <Comment.Content style={{ width: '100%' }}>
                    <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                        <Avatar style={{ backgroundColor: avatarColor, color: 'white' }}>{initial}</Avatar>
                        <Comment.Author style={{ marginLeft: '5px' }} as='a'>{this.props.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>{elapsedTime}</div>
                        </Comment.Metadata>
                    </Box>
                    <Comment.Text>{this.props.content}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        )
    }
}

export default PostComment