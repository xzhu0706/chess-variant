/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { List, Box } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { API, graphqlOperation } from 'aws-amplify';
import NewPost from '../components/NewPost';
import PostCard from '../components/PostCard';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import getUserInfo from '../Utils/CurrentUser';
import getElapsedTime from '../Utils/ElapsedTime';
import * as Colors from '../Constants/Colors';


class DiscussionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewPostDialog: false,
      posts: [],
    };
    this.currentUser = null;
    this.postCreationSubscription = null;
  }

  componentWillMount() {
    if (this.postCreationSubscription) this.postCreationSubscription.unsubscribe();
  }

  async componentDidMount() {
    this.currentUser = await getUserInfo();
    const limit = 100;
    let queryResult = await API.graphql(graphqlOperation(queries.listPosts, { limit }));
    if (queryResult) {
      queryResult = queryResult.data.listPosts.items;
      const posts = queryResult.map((post) => {
        const author = post.author.username;
        return this.generatePostCard(post, author);
      });
      this.setState({ posts });

      this.postCreationSubscription = API.graphql(graphqlOperation(subscriptions.onCreatePost)).subscribe({
        next: (postData) => {
          const post = postData.value.data.onCreatePost;
          if (this.currentUser.id === post.author.id) return;
          const postCard = this.generatePostCard(post, post.author.username);
          this.setState({ posts: [postCard, ...this.state.posts] });
        },
      });
    }
  }

    showNewPostDialog = () => { this.setState({ showNewPostDialog: true }); }

    dismissNewPostDialog = () => { this.setState({ showNewPostDialog: false }); }

    handleNewPost = async (post) => {
      const createdAt = new Date().toJSON();
      post.author = this.currentUser;
      post.createdAt = createdAt;
      try {
        const createdPost = await API.graphql(graphqlOperation(mutations.createPost, { input: post }));
        const author = this.currentUser.username;
        const newPostCard = this.generatePostCard(createdPost.data.createPost, author);
        this.setState({ posts: [newPostCard, ...this.state.posts] });
      } catch (error) { console.log(error); } finally {
        this.setState({ showNewPostDialog: false });
      }
    }

    generatePostCard(post, author) {
      const elapsedTime = getElapsedTime(post.createdAt);
      const likeInfo = this.userLikesPost(post);
      return (
        <PostCard
          key={post.id}
          postId={post.id}
          postLikeId={likeInfo.postLikeId}
          author={author}
          elapsedTime={elapsedTime}
          createdAt={post.createdAt}
          title={post.title}
          content={post.content}
          likesCount={post.likes.items.length}
          commentsCount={post.comments.items.length}
          liked={likeInfo.like}
        />
      );
    }

    userLikesPost = (post) => {
      const likers = post.likes.items;
      for (let i = 0; i < likers.length; i++) {
        const likeObject = likers[i];
        if (likeObject.liker.id === this.currentUser.id) return { like: true, postLikeId: likeObject.id };
      }
      return { like: false, postLikeId: null };
    }

    render() {
      const { props, state } = this;
      return (
        <Box
          display="flex"
          flexDirection="column"
          style={{
            marginLeft: props.marginLeft,
            width: props.width,
          }}
        >
          <Box display="flex" flexDirection="row" justifyContent="flex-end">
            <Fab
              style={{
                backgroundColor: Colors.ROYAL_BLUE,
              }}
              onClick={this.showNewPostDialog}
              color="primary"
              aria-label="edit"
            >
              <EditIcon />
            </Fab>
          </Box>
          <NewPost
            handleNewPost={this.handleNewPost}
            onClose={this.dismissNewPostDialog}
            open={state.showNewPostDialog}
          />
          <List style={{ marginTop: '10px' }}>{state.posts}</List>
        </Box>
      );
    }
}

export default DiscussionBoard;
