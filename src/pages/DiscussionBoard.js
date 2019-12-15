import React, {Component} from 'react';
import {List, Box} from '@material-ui/core';
import PostCard from '../components/PostCard';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import NewPost from '../components/NewPost';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import getUserInfo from '../Utils/CurrentUser';
import getElapsedTime from '../Utils/ElapsedTime'


class DiscussionBoard extends Component{

    constructor(props){
        super(props)
        this.state = {
            showNewPostDialog: false,
            posts: []
        }
        this.currentUser =  null
    }

    async componentDidMount() {
        this.currentUser = await getUserInfo()
        let queryResult = await API.graphql(graphqlOperation(queries.listPosts,{}));
        if(queryResult) {
            queryResult = queryResult.data.listPosts.items
            let posts = queryResult.map((post) => {
                let author = post.author.username
                let likesCount = post.likes.length
                let commentsCount = post.comments.length
                return this.generatePostCard(post, author)
            })
            this.setState({posts})
        }
    }

    showNewPostDialog = () => {this.setState({showNewPostDialog: true})}

    dismissNewPostDialog = () => {this.setState({showNewPostDialog: false})}

    handleNewPost = async (post) => {
        let createdAt = new Date().toJSON()
        post.author = this.currentUser
        post.createdAt = createdAt
        try {
            let createdPost = await API.graphql(graphqlOperation(mutations.createPost, { input: post}));
            let author = this.currentUser.username
            let newPostCard = this.generatePostCard(createdPost.data.createPost, author)
            this.setState({posts: [newPostCard, ...this.state.posts],})
        }
        catch(error) {console.log(error)}
        finally{
            this.setState({showNewPostDialog: false})
        }
    }

    generatePostCard(post, author){
        let elapsedTime = getElapsedTime(post.createdAt)
        let likeInfo = this.userLikesPost(post)
        return (
            <PostCard
                key = {post.id} 
                postId = {post.id}
                postLikeId = {likeInfo.postLikeId }
                author={author} 
                elapsedTime={elapsedTime} 
                title={post.title} 
                content={post.content} 
                likesCount={post.likes.items.length}
                commentsCount={post.comments.items.length}
                liked = {likeInfo.like}
            />
        )
    }

    userLikesPost = (post) => {
        let likers = post.likes.items
        for(let i = 0; i < likers.length; i++){
            let likeObject = likers[i]
            if(likeObject.liker.id === this.currentUser.id) return {like:true, postLikeId: likeObject.id}
        }
        return {like:false, postLikeId: null}
    }

    render() {
        return (
            <Box display='flex' flexDirection='column' style={{backgroundColor: 'rgb(253, 253, 253)', marginLeft: '5%', width: '45%', marginTop: '0px'}}>
                <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                    <Fab onClick={this.showNewPostDialog} color="primary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                </Box>
                <NewPost handleNewPost = {this.handleNewPost} onClose = {this.dismissNewPostDialog} open={this.state.showNewPostDialog}/>
                <List style={{marginTop: '10px'}}>{this.state.posts}</List>
            </Box>
        )
    }
}

export default DiscussionBoard