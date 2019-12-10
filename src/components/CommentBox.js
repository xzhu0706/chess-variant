import React from 'react';
import { Link } from 'react-router-dom';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import TextField from '@material-ui/core/TextField';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import './CommentBox.css'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }
  
  async componentDidMount() {
    try {
      const queryResult = await API.graphql(graphqlOperation(
        queries.getCustomizedVariant, { id: this.props.variant },
      ));
      const comments = queryResult.data.getCustomizedVariant.comments;
      const formatted = comments.items.map(comment => {
        const { id, content, createdAt } = comment; 
        return { id, content, createdAt };
      });
      this.setState({
        comments: formatted
      });
    } catch(error) {
      throw new Error("error getting comment data");
    }
  }

  async handleComment(authorId, authorName, content) {
    // if user is not logged in, authorId is expected to be blank
    if (!authorId) {
      alert("Please log in to comment.");
      return;
    }

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
  }
  
  formatComments() {
    return this.state.comments.map(comment => {
      return (
        <Comment 
          key={comment.id}
          author={comment.author} 
          content={comment.content}
          createdAt={comment.createdAt}
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
      authorId: '',
      authorName: '',
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  async componentDidMount() {
    // get currently logged in user when comment form mounts
    const author = await Auth.currentUserInfo();
    if (!author) return;    
    this.setState({
      authorId: author.attributes.sub,
      authorName: author.username
    });
    // 
  }

  // keep track of user comment input in this.state.content
  handleCommentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  // store comment when user submits comment
  handleSubmit(event) { 
    event.preventDefault();
    this.props.handleComment(this.state.authorId, this.state.authorName, this.state.content)
  }

  render() {
    /* render controlled comment form */
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <div style={{ fontStyle: 'italic', padding: '0.25rem 0' }}>
          <TextField
            style={{ width: '92.5%', backgroundColor: '#fcfcfc' }}
            multiline={true}
            rows="8"
            placeholder="Comment"
            required
            onChange={this.handleCommentChange}
          />
        </div>
        <button className="comment-button" type="submit">Post Comment</button>
      </form>
    );
  }

}

class Comment extends React.Component {
  render() {
    return (
      <div className='comment'>
        <p>{this.props.author} ({this.props.createdAt.slice(0,10)} {this.props.createdAt.slice(11,19)})</p>
        <p>{this.props.content}</p>
          <Link to='/#' onClick={this.deleteComment}>
            <DeleteForeverTwoToneIcon style={{ color: '#708070' }} className={this.props.icon} />
          </Link>
      </div>
    );
  }
  deleteComment(event) {
    event.preventDefault();
    alert('this doesn\'t do anything yet');
  }
}



export default CommentBox;