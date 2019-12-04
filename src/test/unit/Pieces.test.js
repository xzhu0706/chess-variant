import React from 'react';
import { render } from '@testing-library/react';
import Pieces from '../../pages/Pieces';

test('renders without crashing', () => {
  render(
    <Pieces />,
  );
});
