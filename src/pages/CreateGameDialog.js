import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


function CreateGameDialog() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

        return (
            <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                 Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth={true}>
                <DialogTitle id="form-dialog-title">Create a Game</DialogTitle>
                <DialogContent>
                    <FormControl style={{minWidth: 120}}>
                        <InputLabel id="demo-simple-select-label">Variant</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="Variant"
                        
                        >
                            <MenuItem value={10}>Standard</MenuItem>
                            <MenuItem value={20}>Crazyhouse</MenuItem>
                            <MenuItem value={30}>King of the hill</MenuItem>
                            <MenuItem value={30}>Horde</MenuItem>
                        </Select>
                        
                    </FormControl>
                    
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    
}

export default CreateGameDialog