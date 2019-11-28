import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

class FenInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleSubmit = () => {
    this.setState({
      redirect: true
    });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        { this.state.redirect ?
            <Redirect to={{
              pathname: '/analysis',
              state: { fen: this.props.fen }
            }} />
            : null
        }
        <form onSubmit={this.handleSubmit}>
          <Button type='submit'>Play</Button>
        </form>
        <input
          value={this.props.fen}
          readOnly
          style={{ margin: '0.25em' }}
        >
        </input>
      </div>
    );
  }
}

export default FenInput;