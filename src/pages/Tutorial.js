import React from 'react';
import Button from '@material-ui/core/Button';
import PieceCustomize from '../components/customization/PieceCustomize';
import CustomPlayOption from '../components/customization/CustomPlayOption';
import './Tutorial.css';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsets: [],
      repeatOffsets: [],
    };
  }

  handleClick = (offsets, repeatOffsets) => {
    this.setState({
      offsets,
      repeatOffsets,
    });
  }

  render() {
    const paragraphStyle = { marginTop: '1rem' };
    const { offsets, repeatOffsets } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Customization Tutorial</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ margin: '1em' }} className="tutorial">
            <PieceCustomize
              offsets={offsets}
              repeatOffsets={repeatOffsets}
              hideInput
            />
          </div>
          <div style={{ width: '26rem', padding: '0.5em', textAlign: 'left' }}>
            Chess pieces have two types of move offsets: exact offsets, which generate instantaneous moves,
            and repeating offsets, which generate moves that can recur in a particular direction.
            <div>
              <div style={paragraphStyle}>
                For example, the rook has the repeating offsets -1, -16, 1 and 16.
                Repeating offsets are limited by any pieces in the movement path.
                <br />
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={
                    () => this.handleClick([], [-1, 1, 16, -16])
                  }
                >
                  rook
                </Button>
              </div>
              <p>
                A rook that can move two steps at a time would have the repeating offsets -2, -32, 2 and 32.
                Click play below to test it.
                <br />
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={
                    () => this.handleClick([], [-2, 2, 32, -32])
                  }
                >
                  modified rook
                </Button>
              </p>
              <div>
                <CustomPlayOption
                  fen="4k3/8/8/8/2R1P3/8/8/4K3 w - - 0 1"
                  customPiece={{ r: { 0: [], 1: [-2, 2, -32, 32] } }}
                />
              </div>
            </div>
            <hr />
            <div>
              <p style={paragraphStyle}>
                The knight has the exact offsets -18, -33, -31, -14, 18, 33, 31 and 14.
                <br />
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={
                    () => this.handleClick([-18, -33, -31, -14, 18, 33, 31, 14], [])
                  }
                >
                  knight
                </Button>
              </p>
              <p>
                The nightrider has the same offsets of the knight, but they are repeating.
                In other words it can move like a knight any number of steps in each direction
                but its movement is limited by other pieces on the board.
                Click play below to test it.
                <br />
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={
                    () => this.handleClick([], [-18, -33, -31, -14, 18, 33, 31, 14])
                  }
                >
                  nightrider
                </Button>
              </p>
              <div>
                <CustomPlayOption fen="8/8/7k/8/5P2/8/1D6/K7 w - - 0 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;
