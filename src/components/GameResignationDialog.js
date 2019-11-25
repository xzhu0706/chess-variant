import React, {Component} from 'react';

class GameResignationDialog extends Component {

    render(){
        return (
            <Dialog
                fullScreen={fullScreen}
                open={this.props.open}
                onClose={this.props.hideResignationDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Do you really want to quit?"}</DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={this.props.leaveGame} color="primary">Yes</Button>
                    <Button onClick={this.props.hideGameDialog} color="primary" autoFocus>No</Button>
                </DialogActions>
            </Dialog>
        )
    }
}