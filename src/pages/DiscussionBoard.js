import React, {Component} from 'react';
import {List, Container, Box} from '@material-ui/core';
import PostCard from '../components/PostCard';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import NewPost from '../components/NewPost';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
//import getUserInfo from '../Utils/CurrentUser';

const SECONDS_IN_A_MINUTE = 60
const SECONDS_IN_AN_HOUR = 3600
const SECONDS_IN_A_DAY = 86400

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
        this.currentUser = await this.getUserInfo()
        let limit = 1000
        let queryResult = await API.graphql(graphqlOperation(queries.listPosts,{}));
        if(queryResult){
            queryResult = queryResult.data.listPosts.items
            let posts = queryResult.map((post) => {
                let author = post.author.username
                let title = post.title
                let content = post.content
                let elapsedTime = this.getElapsedTime(post.createdAt)
                return (<PostCard author={author} elapsedTime={elapsedTime} title={title} content={content} />)
            })
            this.setState({posts})
        }
    }

    showNewPostDialog = () => {this.setState({showNewPostDialog: true})}

    dismissNewPostDialog = () => {this.setState({showNewPostDialog: false})}

    handleNewPost = async (post) => {
        let createdAt = new Date().toJSON()
        post['author']= this.currentUser
        post['createdAt'] = createdAt
        try {
            let createdPost = await API.graphql(graphqlOperation(mutations.createPost, { input: post}));
            alert(JSON.stringify(createdPost))
            let elapsedTime = this.getElapsedTime(createdAt)
            let newPostCard = (<PostCard author={this.currentUser.username} elapsedTime={elapsedTime} title={post.title} content={post.content} />)
            this.setState({posts: [newPostCard, ...this.state.posts]})
        }
        catch(err) {console.log(err)}
    }

    getUserInfo = async () => {
        const currentUser = {};
        await Auth.currentAuthenticatedUser().then((user) => {
          currentUser.id = user.attributes.sub;
          currentUser.username = user.username;
        }).catch(async (e) => {
          await Auth.currentCredentials().then((credential) => {
            currentUser.id = credential.identityId.split(':')[1];
            currentUser.username = 'anonymous';
          });
        });
        return currentUser;
    }

    getElapsedTime = (creationDate) => {
        /**
         * 1min = 60s = 
         * 1hour = 60 mins = 3600s
         * 1 day = 24h = 86400s
         */
        let date = new Date(creationDate)
        let now = new Date()
        //timeDiff is converted to seconds from milliseconds
        let timeDiff = parseInt((now-date)/1000)
        let elapsedTime;
        if((elapsedTime = parseInt(timeDiff/SECONDS_IN_A_DAY)) > 0) return elapsedTime + 'd'
        if((elapsedTime = parseInt(timeDiff/SECONDS_IN_AN_HOUR)) > 0) return elapsedTime + 'h'
        if((elapsedTime = parseInt(elapsedTime/SECONDS_IN_A_DAY)) > 0) return elapsedTime + 'm'
        return timeDiff + 's'
    }

    render() {
        
        return (
            <Box display='flex' flexDirection='column' style={{backgroundColor: 'white', marginLeft: '10%', width: '40%', marginTop: '70px'}}>
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