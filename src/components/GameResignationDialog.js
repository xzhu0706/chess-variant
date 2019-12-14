import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function GameResignationDialog({
  open, hideResignationDialog, leaveGame, hide,
}) {
  return (
    <Dialog
      open={open}
      onClose={hideResignationDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Do you really want to quit?</DialogTitle>
      <DialogActions>
        <Button autoFocus onClick={leaveGame} color="primary">Yes</Button>
        <Button onClick={hide} color="primary" autoFocus>No</Button>
      </DialogActions>
    </Dialog>
  );
}

export default GameResignationDialog;
