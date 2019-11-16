import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PopularVariants from './PopularVariants';

test('renders without crashing', () => {
  render(
    <Router>
      <PopularVariants />
    </Router>,
  );
});
