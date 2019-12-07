import React, {Component} from 'react';
import {List} from '@material-ui/core';
import PostCard from '../components/PostCard';

const posts = [
    {author: 'Daouda Gueye', title: 'Something', content: 'This my first post on this discussion board.'}
]
class DiscussionBoard extends Component{

    render(){
        let postCards = posts.map((post) => {
            let author = post.author
            let title = post.title
            let content = post.content
            return (<PostCard author={author} title={title} content={content} />)
        } )
        return (
            <List>{postCards}</List>
        )
    }
}