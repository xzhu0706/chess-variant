import React from 'react';
import { Link } from 'react-router-dom';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as customMutations from '../customGraphql/mutations';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import './CommentBox.css'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      isAdmin: false,
    };
  }
  
  async componentDidMount() {
    try {
      this.checkAdmin();
      const queryResult = await API.graphql(graphqlOperation(
        queries.getCustomizedVariant, { id: this.props.variant },
      ));
      const comments = queryResult.data.getCustomizedVariant.comments;
      const formatted = comments.items.map(comment => {
        const { id, content, createdAt, user } = comment; 
        return { id, author: user.username, content, createdAt };
      });
      this.setState({
        comments: formatted
      });
    } catch(error) {
      throw new Error("error getting comment data");
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

  async handleComment(authorId, authorName, content) {
    try {
      const storedComment = await API.graphql(graphqlOperation(mutations.createComment, {
        input: {
          content,
          commentUserId: authorId,
          commentVariantId: this.props.variant
        } 
      }));
      const commentId = storedComment.data.createComment.id;
      const createdAt = storedComment.data.createComment.createdAt;

      const comment = {
        id: commentId,
        author: authorName,
        content,
        createdAt
      };

      this.setState({
        comments: [...this.state.comments, comment]
      });
    } catch {
      throw new Error("error saving comment");
    }
  }

  deleteComment = async (event, id) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete this comment?')) {
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
            const deletedIndex = comments.findIndex(c => c.id === id)
            comments.splice(deletedIndex, 1);
            return { ...prevState, comments };
          });
        }
      } catch (e) {
        console.log(e);
        alert('Something went wrong.');
      }
    }
  }
  
  formatComments() {
    return this.state.comments.map(comment => {
      console.log(comment)
      return (
        <Comment 
          key={comment.id}
          id={comment.id}
          author={comment.author}
          content={comment.content}
          createdAt={comment.createdAt}
          isAdmin={this.state.isAdmin}
          deleteComment={this.deleteComment}
        />
      ); 
    });
  }

  render() {
    const comments = this.formatComments();

    return (
      <div className="comment-box">
        <h2>Comment Box</h2>
        <CommentForm handleComment={this.handleComment.bind(this)}/>
        <h3>
          {comments.length === 1 ? "1 comment" : `${comments.length} comments`}
        </h3>
        {comments}
      </div>
    );
  }
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  // update this.state.content with user input
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  // store comment when user submits comment
  async handleSubmit(event) { 
    event.preventDefault();
    // get currently logged in user
    const author = await Auth.currentUserInfo();
    if (!author) {
      alert("Please log in to comment.");
      return;
    }
    // pass user details and content to callback
    this.props.handleComment(author.attributes.sub, author.username, this.state.content)
  }

  render() {
    /* render controlled comment form */
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <div style={{ fontStyle: 'italic', padding: '0.25rem 0' }}>
          <TextField
            className="comment-field"
            multiline={true}
            rows="8"
            placeholder="Comment"
            required
            onChange={this.handleContentChange}
          />
        </div>
        <button className="comment-button" type="submit">Post Comment</button>
      </form>
    );
  }
}

class Comment extends React.Component {
  render() {
    const { id, author, content, createdAt, isAdmin, deleteComment } = this.props;
    return (
      <div className="comment row">
        <div className="col-2">
          <Link to={`/account/${author}`}>
            <Avatar
              className="text-center"
              src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
            />
            <span>{author}</span>
          </Link>
        </div>
        <div className="col-10">
          {isAdmin && (
            <a href="/#" className="float-right">
              <DeleteForeverTwoToneIcon onClick={(e) => deleteComment(e, id)} style={{ color: '#708070' }} />
            </a>
          )}
          <p>{content}</p>
          <span className="float-right text-muted">{createdAt.slice(0,10)} {createdAt.slice(11,19)}</span>
        </div>
      </div>
    );
  }
}



export default CommentBox;