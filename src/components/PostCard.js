import React, {Component} from 'react';
import { ListItemText, Box, ListItemAvatar, Avatar, CardContent, Typography } from '@material-ui/core';

class PostCard extends Component{

    render(){
        return (
            <Box display='flex' flexDirection='column' style={{marginBottom: '10px', border:'1px solid lightGray', borderRadius: '4px'}}>
                <Typography style={{margin: '10px 0 0 10px'}} variant='h5' color='textPrimary' component='h5'>
                        {this.props.title}
                </Typography>
                    <Box style={{marginLeft: '10px'}}display='flex' flexDirection='row'>
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="">D</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Daouda Gueye'/>
                    </Box>
                <Typography style={{margin: '10px 10px 10px 10px'}}variant='body2' color='textSecondary' component='p'>
                        {this.props.content}
                </Typography>
            </Box>
        )}
}

export default PostCard