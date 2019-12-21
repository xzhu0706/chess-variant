import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function SearchUsersTextField(props) {
  const {
    options, onChange, width, open, anchorEl, dismissPopper, handleMenuItemClick,
  } = props;
  const originalOptionsCount = options.length;
  if (!originalOptionsCount) options.push({ username: 'no users found', id: 0 });
  return (
    <div>
      <TextField
        id="outlined-margin-dense"
        margin="dense"
        variant="outlined"
        placeholder="Search for Users"
        onChange={onChange}
        size="lg"
        style={{ width, backgroundColor: '#F8F8F8' }}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        style={{ width }}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <Paper>
              <ClickAwayListener onClickAway={dismissPopper}>
                <MenuList id="split-button-menu">
                  {options.map((user) => (
                    <MenuItem
                      disabled={!originalOptionsCount}
                      key={user.id}
                      onClick={(event) => handleMenuItemClick(event, user)}
                    >
                      {user.username}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default SearchUsersTextField;
