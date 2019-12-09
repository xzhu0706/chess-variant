import React, {Component} from 'react';
import {List, Container} from '@material-ui/core';
import PostCard from '../components/PostCard';
const content = `Blackboard’s discussion board feature allows participants to carry on discussions online, at any time of the day or night, with no need for the participants to be logged into the site at the same time.  The discussion is recorded on the course site for all to review and respond at their convenience. The discussions may be graded as well.  You may have multiple discussion board forums in your course – for example, you might choose to have a different forum for each topic.  If you are using the Blackboard Groups feature, you may find it useful to have a discussion board for each group. A course discussion board can contain multiple forums; each forum may contain multiple threads; and each thread may contain multiple postings.`
const posts = [
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
    {author: 'Daouda Gueye', title: 'This is my first post on this discussion board', content},
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
                <Container style={{width: '50%'}}>
                    <List>{postCards}</List>
                </Container>
        )
    }
}

export default DiscussionBoard