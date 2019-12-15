import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SparePieces from '../../components/customization/SparePieces';

describe('testing SparePieces', () => {
  const handleIconChange = jest.fn();

  test('selecting a spare piece executes the icon change callback', () => {
    const { getByTestId } = render(
      <SparePieces handleChange={handleIconChange} />,
    );
    const element = getByTestId('test-element');
    fireEvent.click(element);
    expect(handleIconChange).toHaveBeenCalled();
  });
});
