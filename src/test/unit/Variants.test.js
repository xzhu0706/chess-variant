import React from 'react';
import { render } from '@testing-library/react';
import Variants from '../../pages/Variants';

test('renders without crashing', () => {
  render(
    <Variants />,
  );
});
