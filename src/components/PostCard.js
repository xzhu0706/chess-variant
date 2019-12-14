import React, {Component} from 'react'
import {Box, Avatar, Typography } from '@material-ui/core'
import PostComments from './PostComments'
import { Button } from 'semantic-ui-react'
import { API, graphqlOperation, Auth } from 'aws-amplify';
import getUserInfo from '../Utils/CurrentUser'
import {createComment} from '../graphql/mutations'
import {listComments, getPost} from '../graphql/queries'

class PostCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            showComments: false,
            comments: null
        }
        this.postId = this.props.postId
        this.currentUser = null
    }

    async componentDidMount(){
        this.currentUser = await getUserInfo()
    }

    toggleCommentsVisibility = async () => {
        //There is no need to load the comments if the user doesn't need them.
        // We can just wait until the comments are expanded and load them if they haven't 
        //already been loaded.

        if(this.state.comments === null){
            try {
                let queryResult = await API.graphql(graphqlOperation(getPost, {id: this.postId}))
                let comments = queryResult.data.getPost.comments.items
                this.setState({showComments: !this.state.showComments, comments})
            }
            catch(error) {console.log(error)}
        }
        else this.setState({showComments: !this.state.showComments})
    }

    handleNewComment = async (commentText) => {
        alert(commentText)
        /*
        let commentText = e.target.value
        let comment = {}
        comment.author = this.currentUser
        comment.content = commentText
        comment.createdAt = new Date().toJSON()
        comment.postCommentPostId = this.postId
        try {
            let createdComment = await API.graphql(graphqlOperation(createComment, { input: comment}));

        }
        catch(error) {console.log(error)}*/
    }

    render(){
        return (
            <Box display='flex' flexDirection='column' style={{backgroundColor: 'white', border:'1px solid lightGray', borderRadius: '4px', marginBottom: '15px'}}>
                <Box display='flex' flexDirection='column' style={{ margin: '10px 10px 10px 10px' }}>
                    <Typography style={{ fontWeight: 'bold', fontSize: '16px', fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' }} variant='h6' color='textPrimary' component='h6'>
                        {this.props.title}
                    </Typography>
                    <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                        <Avatar style={{ backgroundColor: '#333333', color: 'white' }}>D</Avatar>
                        <Box style={{ marginLeft: '5px' }} display='flex' flexDirection='column' alignItems='flex-start' alignContent='flex-start'>
                            <Typography align='left' variant='subtitle1'>{this.props.author}</Typography>
                            <Typography style={{ marginTop: '-5px' }} variant='caption'>{this.props.elapsedTime}</Typography>
                        </Box>
                    </Box>
                    <Typography style={{ marginTop: '10px', fontFamily: 'Arial', fontSize: '16px' }} variant='body1' color='black' component='p'>
                        {this.props.content}
                    </Typography>
                    <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                        <Button
                            content='Like'
                            icon='thumbs up outline'
                            label={{ as: 'a', basic: true, content: '2,048' }}
                            labelPosition='right'
                        />
                        <Button
                            onClick = {this.toggleCommentsVisibility}
                            style = {{marginLeft: '10px'}}
                            content='Comment'
                            icon='comments outline'
                            label={{ as: 'a', basic: true, content: '2,048' }}
                            labelPosition='right'
                        />
                    </Box>
                </Box>
                {this.state.showComments && (<PostComments handleNewComment = {this.handleNewComment} comments={this.state.comments}/>)}
            </Box>
        )}
}

export default PostCard