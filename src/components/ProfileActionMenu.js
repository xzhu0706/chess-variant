import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';

export default function ProfileActionMenu({
  handleOpenMenu, handleCloseMenu, handleClickAction, anchorEl, options,
}) {
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        data-testid='menu-icon'
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClickAction} data-testid={option}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

ProfileActionMenu.propTypes = {
  options: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  handleClickAction: PropTypes.func.isRequired,
  anchorEl: PropTypes.node.isRequired,
};
