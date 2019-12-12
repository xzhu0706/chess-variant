import React, {Component} from 'react';
import {List, Container, Box} from '@material-ui/core';
import PostCard from '../components/PostCard';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import NewPost from '../components/NewPost';


const content = `Blackboard’s discussion board feature allows participants to carry on discussions online, 
                at any time of the day or night, with no need for the participants to be logged into the site 
                at the same time.  The discussion is recorded on the course site for all to review and respond`
const posts = [
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
]
class DiscussionBoard extends Component{

    constructor(props){
        super(props)
        this.state = {
            showNewPostDialog: false,
            posts: []
        }
    }

    componentDidMount() {
        /*let limit = 1000
        let queryResult = await API.graphql(graphqlOperation(customQueries.listGames, { limit, filter }));
        if(queryResult){
            queryResult = queryResult.data.listGames.items
            let posts = queryResult.map((post) => {
                let author = post.author.username
                let title = post.title
                let content = post.content
                return (<PostCard author={author} title={title} content={content} />)
            })
            this.setState({posts})
        }*/
    }

    showNewPostDialog = () => {
        alert('clicked')
        this.setState({showNewPostDialog: true})
    }

    render() {
        let postCards = posts.map((post) => {
            let author = post.author
            let title = post.title
            let content = post.content
            return (<PostCard author={author} title={title} content={content} />)
        } )
        return (
            <Box display='flex' flexDirection='column' style={{backgroundColor: 'white', marginLeft: '26%', width: '50%', marginTop: '70px'}}>
                <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                    <Fab onClick={this.showNewPostDialog} color="primary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                </Box>
                <NewPost open={this.state.showNewPostDialog}/>
                <List style={{marginTop: '10px'}}>{postCards}</List>
            </Box>
        )
    }
}

export default DiscussionBoard