import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid #333333',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333333',
  },
})(Slider);

class CreateGameDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutesPerSide: '5',
      variant: 'standard',
    };
  }

    setVariant = (e) => {
      this.setState({ variant: e.target.value });
    }

    setMinutesPerSide = (e) => {
      this.setState({ minutesPerSide: e.target.value });
      console.log(e.target.value);
    }

    render() {
      return (
        <Dialog open={this.props.showDialog} maxWidth="sm" fullWidth>
          <DialogTitle id="form-dialog-title">Create a game</DialogTitle>
          <DialogContent>
            <FormControl style={{ minWidth: 120 }}>
              <select
                value={this.state.variant}
                onChange={this.setVariant}
              >
                <option value="Standard">Standard</option>
                <option value="Antichess">Antichess</option>
              </select>

            </FormControl>
            <div style={{ width: '100%', marginTop: '15px' }}>
              <InputLabel id="demo-simple-select-label">
                Minutes per side: {this.state.minutesPerSide}
              </InputLabel>
              <input
                onChange={this.setMinutesPerSide}
                type="range"
                className="custom-range"
                id="customRange1"
              />

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                style={{ marginRight: '20px', padding: '20px', color: 'black' }}
                variant="contained"
                onClick={(gameInfo, event) => this.props.createGame(event, {creatorOrientation: 'white', variant: this.state.variant, time: this.state.minutesPerSide})}
              >WHITE
              </Button>
              <Button
                style={{ padding: '20px', backgroundColor: '#333333', color: 'white' }}
                variant="contained"
                onClick={(event) => this.props.createGame(event, {creatorOrientation: 'black', variant: this.state.variant, time: this.state.minutesPerSide})}
              >BLACK
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      );
    }
}

export default CreateGameDialog;
