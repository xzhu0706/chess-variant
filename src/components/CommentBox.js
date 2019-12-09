import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import './CommentBox.css'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: 1, author: "abc", text: "Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. Hello. " },
        { id: 2, author: "def", text: "Hello."},
        { id: 3, author: "ghi", text: ""}
      ]
    };
  }
  
  handleComment(author, text) {
    const comment = {
      // id: 
      // author: 
      // text: 
    };
    this.setState({
      comments: [...this.state.comments, [comment]]
    });
  }
  
  formatComments() {    
    return this.state.comments.map(comment => { 
      return (
        <Comment 
          key={comment.id}
          author={comment.author} 
          text={comment.text} 
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
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <div style={{ fontStyle: 'italic', padding: '0.25rem 0' }}>
          <TextField multiline={true} rows="6" placeholder="Comment" required ref={input => this._text = input}></TextField>
        </div>
        <Button type="submit" variant="contained" color="primary">Post</Button>
      </form>
    );
  }
  
  handleSubmit(event) { 
    event.preventDefault();
    alert('this doesn\'t do anything yet');
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className='comment'>
        <p>{this.props.author}</p>
        <p>{this.props.text}</p>
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