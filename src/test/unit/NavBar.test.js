import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../../components/NavBar';

test('nav bar renders guest view', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );
  expect(getByTestId('login-button')).toHaveTextContent('SIGN IN');
});
