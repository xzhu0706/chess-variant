import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class GameResignationDialog extends Component {

    render(){
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.hideResignationDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Do you really want to quit?"}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={this.props.leaveGame} color="primary">Yes</Button>
                    <Button onClick={this.props.hide} color="primary" autoFocus>No</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default GameResignationDialog