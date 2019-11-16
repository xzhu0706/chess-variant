import React from 'react';
import { render } from '@testing-library/react';
import PopularVariants from './PopularVariants';

test('renders without crashing', () => {
  render(<PopularVariants />);
});
