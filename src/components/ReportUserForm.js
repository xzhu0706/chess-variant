import React, { useState } from 'react';
import { func, string, bool } from 'prop-types';
import {
  Dialog,
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

export default function ReportUserForm({
  showDialog, closeDialog, reportedUser, handleSubmit,
}) {
  const [formData, setForm] = useState({
    reason: '',
    link: '',
  });

  const onChange = (e) => {
    const updatedForm = { ...formData };
    updatedForm[e.target.name] = e.target.value;
    setForm(updatedForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.reason.trim()) {
      alert('You have to fill out the required field.');
      return;
    }
    handleSubmit(formData);
  };

  return (
    <Dialog
      open={showDialog}
      onClose={closeDialog}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Report a User</DialogTitle>
      <DialogContent>
        <span><strong>User: </strong></span>
        {reportedUser}
        <TextField
                  inputProps={{ 'data-testid': 'reason' }}
          variant="outlined"
          rows="4"
          multiline
          margin="normal"
          label="Reason"
          name="reason"
          type="text"
          onChange={onChange}
          fullWidth
          required
          helperText="Please describe the reason why you want to report this user."
        />
        <TextField
                  inputProps={{ 'data-testid': 'link' }}
          variant="outlined"
          margin="normal"
          label="Link"
          name="link"
          type="text"
          onChange={onChange}
          fullWidth
          helperText="Please provide a game link or a user-created variant link for evidence if applicable."
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary" variant="outlined" data-testid="cancel-btn">Cancel</Button>
        <Button onClick={onSubmit} color="primary" variant="contained" data-testid="submit-btn">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

ReportUserForm.propTypes = {
  showDialog: bool.isRequired,
  closeDialog: func.isRequired,
  reportedUser: string.isRequired,
  handleSubmit: func.isRequired,
};
