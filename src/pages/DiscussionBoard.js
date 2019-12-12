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
            isDrawerOpen: false,
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

    toggleDrawer = () => {
        alert('clicked')
        this.setState({isDrawerOpen: !this.state.isDrawerOpen})
    }

    render() {
        let postCards = posts.map((post) => {
            let author = post.author
            let title = post.title
            let content = post.content
            return (<PostCard author={author} title={title} content={content} />)
        } )
        return (
            <Box display='flex' flexDirection='column' style={{backgroundColor: '#Fff', marginLeft: '25%', width: '55%', marginTop: '70px'}}>
                <NewPost />
                <List style={{marginTop: '10px'}}>{postCards}</List>
                <Drawer anchor="bottom" open={this.state.isDrawerOpen} onClose={this.toggleDrawer}>
                    <TextField 
                        id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        multiline={true}
                    />
                </Drawer>
            </Box>
        )
    }
}

export default DiscussionBoard