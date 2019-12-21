import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Auth } from 'aws-amplify';

export default class CommentForm extends React.Component {
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
      content: event.target.value,
    });
  }

  // store comment when user submits comment
  async handleSubmit(event) {
    event.preventDefault();
    // get currently logged in user
    const author = await Auth.currentUserInfo();
    if (!author) {
      alert('Please log in to comment.');
      return;
    }
    const { handleComment } = this.props;
    const { content } = this.state;
    // pass user details and content to callback
    handleComment(author.attributes.sub, author.username, content);
  }

  render() {
    /* render controlled comment form */
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <div style={{ fontStyle: 'italic', padding: '0.25rem 0' }}>
          <TextField
            className="comment-field"
            multiline
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
