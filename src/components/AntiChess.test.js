import React from 'react';
import { render } from '@testing-library/react';
import AntiChess from './AntiChess';

test('renders without crashing', () => {
  render(<AntiChess />);
});
