import React from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as customMutations from '../customGraphql/mutations';
import './CommentBox.css';
import CommentForm from './CommentForm';
import Comment from './Comment';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      isAdmin: false,
    };

    this.handleComment = this.handleComment.bind(this);
  }

  async componentDidMount() {
    const { variant } = this.props;
    try {
      this.checkAdmin();
      const queryResult = await API.graphql(graphqlOperation(
        queries.getCustomizedVariant, { id: variant },
      ));
      const { comments } = queryResult.data.getCustomizedVariant;
      const formatted = comments.items.map((comment) => {
        const {
          id, content, createdAt, user,
        } = comment;
        return {
          id, author: user.username, content, createdAt,
        };
      });
      this.setState({
        comments: formatted,
      });
    } catch (error) {
      throw new Error('error getting comment data');
    }
  }

  checkAdmin = async () => {
    try {
      const currentUser = await Auth.currentUserPoolUser();
      const groups = currentUser.signInUserSession.idToken.payload['cognito:groups'];
      this.setState({
        isAdmin: groups && groups[0] === 'Admin',
      });
    } catch (e) {
      console.log(e);
    }
  }

  deleteComment = async (event, id) => {
    event.preventDefault();
    try {
      const deletedComment = await API.graphql({
        query: customMutations.deleteComment,
        variables: {
          input: {
            id,
          },
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      if (deletedComment) {
        this.setState((prevState) => {
          const comments = [...prevState.comments];
          const deletedIndex = comments.findIndex((c) => c.id === id);
          comments.splice(deletedIndex, 1);
          return { ...prevState, comments };
        });
      }
    } catch (e) {
      throw new Error('Something went wrong.');
    }
  }

  async handleComment(authorId, authorName, content) {
    try {
      const { variant } = this.props;
      const { comments } = this.state;

      const storedComment = await API.graphql(graphqlOperation(mutations.createComment, {
        input: {
          content,
          commentUserId: authorId,
          commentVariantId: variant,
        },
      }));
      const commentId = storedComment.data.createComment.id;
      const { createdAt } = storedComment.data.createComment;

      const comment = {
        id: commentId,
        author: authorName,
        content,
        createdAt,
      };

      this.setState({
        comments: [...comments, comment],
      });
    } catch {
      throw new Error('error saving comment');
    }
  }

  formatComments() {
    const { comments, isAdmin } = this.state;
    return comments.map((comment) => (
      <Comment
        key={comment.id}
        id={comment.id}
        author={comment.author}
        content={comment.content}
        createdAt={comment.createdAt}
        isAdmin={isAdmin}
        deleteComment={this.deleteComment}
      />
    ));
  }

  render() {
    const comments = this.formatComments();

    return (
      <div className="comment-box">
        <h2>Comment Box</h2>
        <CommentForm handleComment={this.handleComment} />
        <h3>
          {comments.length === 1 ? '1 comment' : `${comments.length} comments`}
        </h3>
        {comments}
      </div>
    );
  }
}

export default CommentBox;
