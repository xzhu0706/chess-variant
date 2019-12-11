import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileActionMenu from '../../components/ProfileActionMenu';

describe('ProfileActionMenu test suite', () => {
  afterEach(cleanup);
  const handleOpen = jest.fn();
  const handleClose = jest.fn();
  const handleClick = jest.fn();
  const anchorEl = () => document.createElement('div');
  const options = ['test1', 'test2'];

  test('Options shows up correctly', () => {
    const { getByText } = render(
      <ProfileActionMenu
        handleOpenMenu={handleOpen}
        handleCloseMenu={handleClose}
        handleClickAction={handleClick}
        anchorEl={anchorEl}
        options={options}
      />,
    );
    expect(getByText(options[0])).toBeInTheDocument();
    expect(getByText(options[1])).toBeInTheDocument();
  });

  test('Click on an option', () => {
    const { getByTestId } = render(
      <ProfileActionMenu
        handleOpenMenu={handleOpen}
        handleCloseMenu={handleClose}
        handleClickAction={handleClick}
        anchorEl={anchorEl}
        options={options}
      />,
    );
    fireEvent.click(getByTestId(options[0]));
    expect(handleClick).toHaveBeenCalled();
  });

  test('Click on menu icon should open menu', () => {
    const { getByTestId } = render(
      <ProfileActionMenu
        handleOpenMenu={handleOpen}
        handleCloseMenu={handleClose}
        handleClickAction={handleClick}
        anchorEl={anchorEl}
        options={options}
      />,
    );
    fireEvent.click(getByTestId('menu-icon'));
    expect(handleOpen).toHaveBeenCalled();
  });
});
