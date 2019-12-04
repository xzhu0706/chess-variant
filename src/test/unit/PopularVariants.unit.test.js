import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PopularVariants from '../../components/PopularVariants';

test('renders without crashing', () => {
  render(
    <Router>
      <PopularVariants src="src" name="name" description="description" link="link" />
    </Router>,
  );
});
