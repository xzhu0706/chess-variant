import React, {Component} from 'react';
import { ListItem, Box, ListItemAvatar, Avatar, CardContent, Typography } from '@material-ui/core';

class PostCard extends Component{

    render(){
        return (
            <Box display='flex' flexDirection='column' style={{border:'1px solid lightGray', borderRadius: '4px'}}>
                <Typography style={{margin: '10px 0 0 10px'}} variant='h5' color='textPrimary' component='h5'>
                        {this.props.title}
                </Typography>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="">D</Avatar>
                    </ListItemAvatar>
                <Typography variant='body2' color='textSecondary' component='p'>
                        {this.props.content}
                </Typography>
            </Box>
        )}
}

export default PostCard