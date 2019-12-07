import React, {Component} from 'react';
import { Card, Avatar, CardContent, Typography } from '@material-ui/core';

class PostCard extends Component{

    render(){
        return (
            <Card>
                <Typography variant='h2' color='textPrimary' component='h2'>
                    {this.props.title}
                </Typography>
                <CardHeader
                    avatar = {
                        <Avatar>D</Avatar>
                    } 
                    title = {this.props.author}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {this.props.content}
                    </Typography>
                </CardContent>
            </Card>
        )}
}