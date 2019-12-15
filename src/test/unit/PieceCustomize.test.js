import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PieceCustomize from '../../components/customization/PieceCustomize';

describe('testing SparePieces', () => {
  const onChangeOffsets = jest.fn();
  const onChangeRepeatOffsets = jest.fn();

  test('changing offsets field executes the offsets change callback', () => {
    const { getByTestId } = render(
      <PieceCustomize
        offsets={[]}
        repeatOffsets={[]}
        onChangeOffsets={onChangeOffsets}
        onChangeRepeatOffsets={onChangeRepeatOffsets}
      />,
    );
    const input = getByTestId('test-offset-input');
    fireEvent.change(input, { target: { value: '16' } });
    expect(input.value).toBe('16');
    expect(onChangeOffsets).toHaveBeenCalled();
    expect(onChangeRepeatOffsets).not.toHaveBeenCalled();
  });
});
