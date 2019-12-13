import React, {Component} from 'react';
import { ListItemText, Box, ListItemAvatar, Avatar, CardContent, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faRegComment } from '@fortawesome/free-solid-svg-icons'
import { FaRegComment } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";


class PostCard extends Component{

    render(){
        return (
            <Box display='flex' flexDirection='column' style={{backgroundColor: 'white', border:'1px solid lightGray', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '2px', marginBottom: '0px'}}>
                <Box display='flex' flexDirection='column' style={{margin: '10px 10px 10px 10px'}}>
                <Typography style={{fontWeight: 'bold', fontSize: '16px', fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'}} variant='h6' color='textPrimary' component='h6'>
                        {this.props.title}
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                    <Avatar style={{backgroundColor: '#333333', color: 'white'}}>D</Avatar>
                    <Box style={{ marginLeft: '5px' }} display='flex' flexDirection='column' alignItems='flex-start' alignContent='flex-start'>
                        <Typography align='left' variant='subtitle1'>{this.props.author}</Typography>
                        <Typography style={{marginTop: '-5px'}} variant='caption'>{this.props.elapsedTime}</Typography>
                    </Box>
                </Box>
                <Typography style={{marginTop: '10px', fontFamily: 'Arial', fontSize: '16px'}} variant='body1' color='black' component='p'>
                        {this.props.content}
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                    <IconButton>
                        <FaRegThumbsUp style={{ fontSize: 22 }} />
                        <Typography style={{ marginLeft: '5px' }} variant='subtitle2'>100</Typography>
                    </IconButton>
                    <IconButton>
                        <FaRegComment style={{ fontSize: 24 }} />
                        <Typography style={{ marginLeft: '5px' }} variant='subtitle2'>50</Typography>
                    </IconButton>
                </Box>
                </Box>
            </Box>
        )}
}

export default PostCard