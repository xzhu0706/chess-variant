import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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
            <Dialog open={this.props.showDialog} maxWidth="sm" fullWidth onClose={this.props.closeDialog}>
                <DialogTitle id="form-dialog-title">Create a game</DialogTitle>
                <DialogContent>
                    <FormControl style={{ minWidth: 120 }}>
                        <InputLabel htmlFor="select-variant">Game Type</InputLabel>
                        <select
                            id="select-variant"
                            data-testid="select-variant"
                            value={this.state.variant}
                            onChange={this.setVariant}
                        >
                            <option value="Standard">Standard</option>
                            <option value="Antichess">Antichess</option>
                            <option value="Gridchess">Grid chess</option>
                            <option value="Extinction">Extinction chess</option>
                        </select>
                        <br />
                    </FormControl>
                    <div style={{ width: '100%', marginTop: '15px' }}>

                        <input
                            onChange={this.setMinutesPerSide}
                            type="range"
                            defaultValue={5}
                            min={1}
                            max={180}
                            className="custom-range"
                            id="customRange1"
                        />
                        <InputLabel htmlFor="customRange1">
                            Minutes per side: {this.state.minutesPerSide}
                        </InputLabel>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <InputLabel htmlFor="white-button">White</InputLabel>
                        <Button
                            style={{ marginRight: '20px', padding: '20px', color: 'black' }}
                            variant="contained"
                            onClick={(gameInfo, event) => this.props.createGame(event, { creatorOrientation: 'white', variant: this.state.variant, time: this.state.minutesPerSide })}
                            id="btnwhite"
                        >
                            WHITE
              </Button>
                        <Button
                            style={{ padding: '20px', backgroundColor: '#333333', color: 'white' }}
                            variant="contained"
                            onClick={(event) => this.props.createGame(event, { creatorOrientation: 'black', variant: this.state.variant, time: this.state.minutesPerSide })}
                            id="btnblack"
                        >
                            BLACK
              </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}

export default CreateGameDialog;
