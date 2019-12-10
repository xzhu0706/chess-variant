import React, {Component} from 'react';
import { ListItemText, Box, ListItemAvatar, Avatar, CardContent, Typography } from '@material-ui/core';

class PostCard extends Component{

    render(){
        return (
            <Box display='flex' flexDirection='column' style={{marginBottom: '10px', border:'1px solid lightGray', borderRadius: '4px'}}>
                <Typography style={{margin: '10px 0 0 10px'}} variant='h5' color='textPrimary' component='h5'>
                        {this.props.title}
                </Typography>
                    <Box style={{marginLeft: '10px'}}display='flex' flexDirection='row' justifyContent='flex-start'>
                        <Avatar alt="Cindy Baker" src="">D</Avatar>
                        <Box style={{marginLeft: '5px'}}display='flex' flexDirection='column' alignItems='flex-start' alignContent='flex-start'>
                            <Typography align='left' variant='h6'>Daouda Gueye</Typography>
                            <div style={{marginTop: '-12px'}}>
                                <Typography variant='caption'>2h</Typography>
                            </div>
                        </Box>
                    </Box>
                <Typography style={{margin: '10px 10px 10px 10px'}}variant='body2' color='textSecondary' component='p'>
                        {this.props.content}
                </Typography>
            </Box>
        )}
}

export default PostCard