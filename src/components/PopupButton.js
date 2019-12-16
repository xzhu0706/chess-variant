import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grid from '@material-ui/core/Grid';

 
class PopupButton extends Component{

    render(){
        let options = this.props.options
        return(
            <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="split button"
                >
                    <Button>{this.props.username}</Button>
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={this.props.open ? "split-button-menu" : undefined}
                        aria-expanded={this.props.open ? "true" : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={this.props.handleToggle}
                    > <ArrowDropDownIcon />
                    </Button>
                    </ButtonGroup>
                <Popper
                    open={this.props.open}
                    anchorEl = {this.props.anchorEl}
                    role={undefined}
                    style = {{marginTop: '10px'}}
                    transition
                    disablePortal
                    placement = 'center-bottom'
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                        >
                            <Paper>
                                <ClickAwayListener>
                                    <MenuList id="split-button-menu">
                                        {Object.keys(options).map((key, index) => (
                                            options[key] &&
                                            <MenuItem
                                                key={key}
                                                onClick={event => this.props.handleMenuItemClick(event, index)}
                                            >{key}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                </Grid>
                </Grid>
        )
    }
}

export default PopupButton