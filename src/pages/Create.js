import React from 'react';
import ReactDOM from 'react-dom';
import Board from '../WithMoveValidation';
import SparePieces from '../components/customization/SparePieces.js';
import PieceCustomize from '../components/customization/PieceCustomize.js';
import Button from '@material-ui/core/Button'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import './Create.css';

/* /create page that contains
(a) the board in edit mode,
(b) spare pieces that can be added to the board,
(c) customization,
*/

const START_FEN = '4k3/8/8/8/8/8/8/4K3 w - - 0 1';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'cursor',
      startFen: START_FEN,
      offsets: [],
      repeatOffsets: []
    };
    this.handleIconChange = this.handleIconChange.bind(this);
    this.handleRepeatOffsetsChange = this.handleRepeatOffsetsChange.bind(this);
    this.handleOffsetsChange = this.handleOffsetsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFenChange = this.handleFenChange.bind(this);
  }

  handleIconChange(event) {
    this.setState({
      icon: event.target.value
    });
  };

  handleOffsetsChange(event) {
    // separate input into list of numbers (separation criterion: any number of spaces/commas/semicolons); e.g.,
    // '1 2 , -3,4' -> [ 1, 2, -3, 4 ]
    const offsets = (event.target.value).split(/[\s,;]+/).map(Number);
    // remove everything from the list except for numbers that are valid offsets
    const filtered = offsets.filter(offset => offset && offset >= -119 && offset <= 119 && offset !== 0);
    this.setState({
      offsets: filtered
    });
  }

  handleRepeatOffsetsChange(event) {
    const offsets = (event.target.value).split(/[\s,;]+/).map(Number);
    const filtered = offsets.filter(offset => offset && offset >= -119 && offset <= 119 && offset !== 0);
    this.setState({
      repeatOffsets: filtered
    });
  }

  customPiece() {
    return { 'c': { '0': this.state.offsets, '1': this.state.repeatOffsets } };
  }

  async handleSubmit(event) {
    event.preventDefault();
    const name = this._name.value;
    const { startFen } = this.state;
    const customPiece = JSON.stringify(this.customPiece());
    const creator = await Auth.currentUserInfo();
    if (!creator) {
      alert("Please log in to save a variant.");
      return;
    }
    const creatorId = creator.attributes.sub;

    // return if name input is empty or is just whitespaces
    if (!name.replace(/\s/g, '')) {
      const saved = document.getElementById('saved');
      ReactDOM.render(<span style={{ color: 'red' }}><ErrorOutlineIcon className={this.props.icon}/> Empty name! </span>, saved);
      return;
    }

    const customVariant = await API.graphql(graphqlOperation(mutations.createCustomizedVariant, {
      input: {
        approved: false, submitted: false, name, startFen, customPiece, customizedVariantCreatorId: creatorId
      } 
    }));
    if (customVariant) {
      const saved = document.getElementById('saved');
      ReactDOM.render(<CheckCircleOutlineIcon style={{ color: 'green' }} className={this.props.icon}/>, saved);
    }
    else {
      const saved = document.getElementById('saved');
      ReactDOM.render(<ErrorOutlineIcon className={this.props.icon}/>, saved);
    }
  }

  // callback that we will pass to Board (not ideal...)
  handleFenChange(startFen) {
    this.setState({
      startFen
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div id='board' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', }}>
          {/* render the board */}
          <div>
            {Board(START_FEN, 0, false, false, true, this.state.icon, this.customPiece(), this.handleFenChange)}
            <div style={{
            textAlign: 'left',
            padding: '0.75em',
            backgroundColor:'#e5e5e6',
            maxWidth: '540px',
            margin: 'auto',
            border: '0.2em solid black' }}>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your variant name" ref={input => this._name = input} />
                <Button type="submit">Save as Variant</Button>
                <span id="saved"></span>
              </form>
              <div>Exact offsets: {this.state.offsets.length !== 0 ? this.state.offsets.join(', ') : 'N/A'}</div>
              <div>Regular offsets: {this.state.repeatOffsets.length !== 0 ? this.state.repeatOffsets.join(', ') : 'N/A'}</div>
            </div>
          </div>
          {/* render controlled inputs */}
          <div>
            <SparePieces handleChange={this.handleIconChange} />
            <div><a href="/pieces">View current fairy pieces</a></div>
            <div><a href="/tutorial">View the customization tutorial</a></div>
            <PieceCustomize
              offsets={this.state.offsets}
              repeatOffsets={this.state.repeatOffsets}
              onChangeOffsets={this.handleOffsetsChange}
              onChangeRepeatOffsets={this.handleRepeatOffsetsChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Create;