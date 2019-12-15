import React, {Component} from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {Box, Avatar, Typography, InputBase, Fab} from '@material-ui/core';
import getElapsedTime from '../Utils/ElapsedTime'
import {computeTimeInterval} from '../Utils/ElapsedTime'
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
    
    getElapsedTime = (creationDate) => {
        let date = new Date(creationDate)
        let now = new Date()
        //timeDiff is converted to seconds from milliseconds
        let timeDiff = parseInt((now-date)/1000)
        let elapsedTime;
        if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_YEAR)) > 0)
            return elapsedTime + Time.YEAR_REPRESENTATION
    
        if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_MONTH)) > 0) 
            return elapsedTime + Time.MONTH_REPRESENTATION
    
        if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_DAY)) > 0) 
            return elapsedTime + Time.DAY_REPRESENTATION
    
        if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_AN_HOUR)) > 0) 
            return elapsedTime + Time.HOURS_REPRESENTATION
    
        if((elapsedTime = parseInt(timeDiff/Time.SECONDS_IN_A_MINUTE)) > 0) 
            return elapsedTime + Time.MINUTES_REPRESENTATION
    
        return elapsedTime + Time.SECONDS_REPRESENTATION
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateElapsedTime = () => {
        let elapsedTime = this.getElapsedTime(this.createdAt)
        this.setState({elapsedTime})
    }

    render(){
        let elapsedTime = this.state.elapsedTime
        elapsedTime = elapsedTime[elapsedTime.length-1] === Time.SECONDS_REPRESENTATION? 'just now' : elapsedTime
        return (
            <Comment>
                <Comment.Content style={{ width: '100%' }}>
                    <Box display='flex' flexDirection='row' justifyContent='flex-start' alignItems='center'>
                        <Avatar style={{ backgroundColor: '#333333', color: 'white' }}>{this.props.author[0]}</Avatar>
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