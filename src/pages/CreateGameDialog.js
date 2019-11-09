import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class CreateGameDialog extends Component{

    render(){
        return (
            <Dialog open={this.props.showDialog} maxWidth='sm' fullWidth={true}>
                <DialogTitle id="form-dialog-title">Create a game</DialogTitle>
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
            </Dialog>
        )
    }
}

export default CreateGameDialog