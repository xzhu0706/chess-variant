import React, {Component} from 'react'
import {Box, Avatar, Typography } from '@material-ui/core'
import PostComments from './PostComments'
import { Button } from 'semantic-ui-react'
import { API, graphqlOperation, Auth } from 'aws-amplify';
import getUserInfo from '../Utils/CurrentUser'
import getElapsedTime from '../Utils/ElapsedTime'
import {computeTimeInterval} from '../Utils/ElapsedTime'
import {createPostComment, createPostLike, deletePostLike} from '../graphql/mutations'
import {listComments, getPost} from '../graphql/queries'
import PostComment from './PostComment'
import * as subscriptions from '../graphql/subscriptions';
import * as Time from '../Constants/TimeConstants';


const LIKED_COLOR = 'blue'
const DISLIKED_COLOR = 'gray'

class PostCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            showComments: false,
            comments: null,
            likesCount: this.props.likesCount,
            commentsCount: this.props.commentsCount,
            elapsedTime: this.props.elapsedTime,
            highlightLikeButton: this.props.liked
        }
        this.postId = this.props.postId
        this.postLikeId = this.props.postLikeId
        this.currentUser = null
        this.createdAt = this.props.createdAt
        this.postUpdateSubscription = null
        this.commentCreationSubscription = null
        this.likeCreationSubscription = null
        this.likeDeletionSubscription = null
    }

    async componentDidMount(){
        this.currentUser = await getUserInfo()
        let interval = computeTimeInterval(this.state.elapsedTime)
        this.interval = setInterval(() => this.updateElapsedTime(), interval);
        this.commentCreationSubscription = API.graphql(graphqlOperation(subscriptions.onCreatePostComment)).subscribe({
            next: (commentData) => {
                //if the comment component hasn't been expanded yet for some reasons,
                //just ignore the updates.
                if(this.state.comments === null) return
                let comment = commentData.value.data.onCreatePostComment
                
                //if the post shown on this card is not the one that received the comment,
                //ignore it.
                if(this.postId !== comment.post.id) return

                if(this.currentUser.id === comment.author.id) return

                let commentCard = this.generateCommentCard(comment)
                this.setState({
                    commentsCount: this.state.commentsCount+1, 
                    comments: [commentCard, ...this.state.comments]
                })
            },
        });

        this.likeCreationSubscription = API.graphql(graphqlOperation(subscriptions.onCreatePostLike)).subscribe({
            next: (likeData) => {
                let like = likeData.value.data.onCreatePostLike
                //if the post shown on this card is not the one that received the like,
                //ignore it.

                 //if the post has been liked by the current user, ignore it
                //everything has already been taken care of in likePost
                if(like.post.id !== this.postId) return

                if(this.currentUser.id === like.liker.id) return
                this.setState({likesCount: this.state.likesCount+1})
            },
        });

        this.likeDeletionSubscription = API.graphql(graphqlOperation(subscriptions.onCreatePostLike)).subscribe({
            next: (dislikeData) => {
                let dislike = dislikeData.value.data.onCreatePostLike
                //if the post shown on this card is not the one that received the dislike,
                //ignore it.
                if(dislike.post.id !== this.postId) return

                //if the post has been disliked by the current user, ignore it
                //everything has already been taken care of in dislikePost
                if(this.currentUser.id === dislike.liker.id) return

                this.setState({likesCount: this.state.likesCount-1})
            },
        });
    }

    componentWillMount(){
        clearInterval(this.interval)
    }

    updateElapsedTime = () => {
        let elapsedTime = getElapsedTime(this.createdAt)
        this.setState({elapsedTime})
    }

    toggleCommentsVisibility = async () => {
        //There is no need to load the comments if the user doesn't need them.
        // We can just wait until the comments are expanded and load them if they haven't 
        //already been loaded.
        if(this.state.comments === null){
            try {
                let queryResult = await API.graphql(graphqlOperation(getPost, {id: this.postId}))
                let comments = queryResult.data.getPost.comments.items
                comments = comments.map((comment) => { return this.generateCommentCard(comment) })
                this.setState({showComments: !this.state.showComments, comments})
            }
            catch(error) {console.log(error)}
        }
        else this.setState({showComments: !this.state.showComments})
    }

    generateCommentCard(comment) {
        let elapsedTime = getElapsedTime(comment.createdAt)
        return (
            <PostComment
                key={comment.id}
                author={comment.author.username} 
                content={comment.content} 
                createdAt = {comment.createdAt}
                elapsedTime={elapsedTime} 
            />
        )
    }

    handleNewComment = async (commentText) => {
        let comment = {}
        comment.author = this.currentUser
        comment.content = commentText
        comment.createdAt = new Date().toJSON()
        comment.postCommentPostId = this.postId
        try {
            let createdComment = await API.graphql(graphqlOperation(createPostComment, { input: comment}));
            let newCommentCard = this.generateCommentCard(createdComment.data.createPostComment)
            this.setState({comments: [newCommentCard, ...this.state.comments], commentsCount: this.state.commentsCount+1})
        }
        catch(error) {console.log(error)}
    }

    handleLikeButtonClick = () => {
        //Don't allow users to like posts anonymously
        if(this.currentUser.username === 'anonymous') return

        //if the like button is highlighted, user is disliking the post.
        if(this.state.highlightLikeButton){
            this.dislikePost()
            return
        }
        
        //user must have liked the post
        this.likePost()
        
    }

    likePost = async () => {
        let like = {}
        like.liker = this.currentUser
        like.postLikePostId = this.postId
        try {
            let createdPostLike = await API.graphql(graphqlOperation(createPostLike, { input: like}));
            this.postLikeId = createdPostLike.data.createPostLike.id
            this.setState({likesCount: this.state.likesCount+1, highlightLikeButton: true})
        } 
        catch (error) {console.log(error)}
    }

    dislikePost = async () => {
        let deleteInput = {}
        deleteInput.id = this.postLikeId
        try {
            await API.graphql(graphqlOperation(deletePostLike, { input: deleteInput }));
            this.postLikeId = null
            this.setState({likesCount: this.state.likesCount-1, highlightLikeButton: false})
        }
        catch (error) {console.log(error)}
    }

    render(){
        let likeButtonColor = this.state.highlightLikeButton? LIKED_COLOR : DISLIKED_COLOR
        let elapsedTime = this.state.elapsedTime
        elapsedTime = elapsedTime[elapsedTime.length-1] === Time.SECONDS_REPRESENTATION? 'just now' : elapsedTime

        /* will turn likesCount and commentsCount into something like 1k, 100k, etc if get a chance*/
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
                            <Typography style={{ marginTop: '-2px' }} variant='subtitle2'>{elapsedTime}</Typography>
                        </Box>
                    </Box>
                    <Typography style={{ marginTop: '10px', fontFamily: 'Arial', fontSize: '16px' }} variant='body1' color='black' component='p'>
                        {this.props.content}
                    </Typography>
                    <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                        <Button
                            color = {likeButtonColor}
                            onClick = {this.handleLikeButtonClick}
                            content='Like'
                            icon='thumbs up outline'
                            label={{ color: likeButtonColor, as: 'a', basic: true, content: this.state.likesCount }}
                            labelPosition='right'
                        />
                        <Button
                            onClick = {this.toggleCommentsVisibility}
                            style = {{marginLeft: '10px'}}
                            content='Comment'
                            icon='comments outline'
                            label={{ as: 'a', basic: true, content: this.state.commentsCount }}
                            labelPosition='right'
                        />
                    </Box>
                </Box>
                {this.state.showComments && (<PostComments handleNewComment = {this.handleNewComment} comments={this.state.comments}/>)}
            </Box>
        )}
}
export default PostCard