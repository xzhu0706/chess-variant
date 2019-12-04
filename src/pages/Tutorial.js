import React from 'react';
import Button from '@material-ui/core/Button';
import PieceCustomize from '../components/customization/PieceCustomize';
import CustomPlayOption from '../components/customization/CustomPlayOption';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsets: [],
      repeatOffsets: []
    }
  }

  handleClick = (offsets, repeatOffsets) => {
    this.setState({
      offsets,
      repeatOffsets
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Customizing Moves</h1>
        <div style={{ display: 'inline-block', textAlign: 'left', maxWidth: 500}}>
          <PieceCustomize
            offsets={this.state.offsets}
            repeatOffsets={this.state.repeatOffsets}
            hideInput={true}
          />
          <div style={{ padding: '0.5em' }}>
            Chess pieces have two types of move offsets: regular offsets and repeating offsets, which recur in a particular direction.
            <div>
              <p>
                The rook has repeating offsets of -1, -16, 1 and 16. Repeating offsets stop repeating on the first square that is occupied by a piece.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([],[-1,1,16,-16])}>rook</Button>
              </p>
              <p>
                If we double these offsets we get a rook that can step two squares at a time. Click play below to test it.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([],[-2,2,32,-32])}>modified rook</Button>
              </p>
              <div>
                <CustomPlayOption fen={'4k3/8/8/8/2R1P3/8/8/4K3 w - - 0 1'} customPiece={{ 'r': { 0: [], 1: [-2,2,-32,32] } }}/>
              </div>
            </div>
            <hr/>
            <div>
              <p>
                The knight has regular offsets of -18, -33, -31, -14, 18, 33, 31 and 14.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([-18, -33, -31, -14, 18, 33, 31, 14], [])}>knight</Button>
              </p>
              <p>
                The nightrider assumes the regular offsets of the knight as repeating offsets.
                It can jump any number of steps in each direction given by its offsets, but other pieces can block the movement.
                Click play below to test it.
                <br/>
                <Button size="small" color="secondary" variant="outlined" onClick={() => this.handleClick([], [-18, -33, -31, -14, 18, 33, 31, 14])}>nightrider</Button>
              </p>
              <div>
                <CustomPlayOption fen={'8/8/7k/8/5P2/8/1D6/K7 w - - 0 1'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Tutorial;