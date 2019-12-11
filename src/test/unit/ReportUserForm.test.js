import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReportUserForm from '../../components/ReportUserForm';

describe('ReportUserForm test suite', () => {
  afterEach(cleanup);
  const handleSubmit = jest.fn();
  const handleClose = jest.fn();
  const username = 'testuser';
  const showDialog = true;
  global.alert = jest.fn();

  test('Empty required field should not be submitted', () => {
    const { getByTestId, getByText } = render(
      <ReportUserForm
        handleSubmit={handleSubmit}
        closeDialog={handleClose}
        showDialog={showDialog}
        reportedUser={username}
      />,
    );
    expect(getByText(username)).toBeInTheDocument();
    fireEvent.click(getByTestId('submit-btn'));
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(window.alert).toBeCalled();
    expect(window.alert).toBeCalledWith('You have to fill out the required field.');
  });

  test('Cancel button works', () => {
    const { getByTestId, getByText } = render(
      <ReportUserForm
        handleSubmit={handleSubmit}
        closeDialog={handleClose}
        showDialog={showDialog}
        reportedUser={username}
      />,
    );
    expect(getByText(username)).toBeInTheDocument();
    fireEvent.click(getByTestId('cancel-btn'));
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(handleClose).toHaveBeenCalled();
  });

  test('Submit button works', () => {
    const { getByTestId, getByText } = render(
      <ReportUserForm
        handleSubmit={handleSubmit}
        closeDialog={handleClose}
        showDialog={showDialog}
        reportedUser={username}
      />,
    );
    fireEvent.change(
      getByTestId('reason'),
      {
        target: {
          value: 'test reason',
        },
      },
    );
    expect(getByText(username)).toBeInTheDocument();
    fireEvent.click(getByTestId('submit-btn'));
    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith({
      reason: 'test reason',
      link: '',
    });
  });
});
