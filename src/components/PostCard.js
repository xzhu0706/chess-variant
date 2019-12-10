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
            <Box display='flex' flexDirection='column' style={{marginBottom: '10px', border:'1px solid lightGray', borderRadius: '4px'}}>
                <Typography style={{fontWeight: 'bold', margin: '10px 0 0 10px'}} variant='h5' color='textPrimary' component='h5'>
                        {this.props.title}
                </Typography>
                    <Box style={{marginLeft: '10px'}}display='flex' flexDirection='row' justifyContent='flex-start'>
                        <Avatar alt="Cindy Baker" src="">D</Avatar>
                        <Box style={{marginLeft: '5px'}}display='flex' flexDirection='column' alignItems='flex-start' alignContent='flex-start'>
                            <Typography align='left' variant='subtitle1'>Daouda Gueye</Typography>
                            <div style={{marginTop: '-12px'}}>
                                <Typography variant='caption'>2h</Typography>
                            </div>
                        </Box>
                    </Box>
                <Typography style={{margin: '10px 10px 10px 10px'}}variant='body1' color='black' component='p'>
                        {this.props.content}
                </Typography>
                <Box display='flex' flexDirection='row' justifyContent='flex-start' style={{marginLeft: '10px'}}>
                <IconButton aria-label="delete" disabled color="primary">
                    <FaRegThumbsUp style={{fontSize: 21}}/>
                    <Typography style={{marginLeft: '5px'}}variant='caption'>100</Typography>
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <FaRegComment style={{fontSize: 22}}/>
                    <Typography style={{marginLeft: '5px'}}variant='caption'>{'  50'}</Typography>
                </IconButton>
                </Box>
            </Box>
        )}
}

export default PostCard