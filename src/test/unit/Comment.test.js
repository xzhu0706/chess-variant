import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comment from '../../components/Comment';

describe('Comment test', () => {
  test('display comment', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Comment
          key="1"
          id="2"
          author="test author"
          content="test comment"
          createdAt="2019"
          isAdmin
        />
      </BrowserRouter>,
    );
    expect(getByText('test author')).toBeInTheDocument();
    expect(getByText('test comment')).toBeInTheDocument();
    expect(getByText('2019')).toBeInTheDocument();
  });

  test('delete icon does not show if isAdmin is false', () => {
    const mockDeleteComment = jest.fn();
    const { queryByTestId } = render(
      <BrowserRouter>
        <Comment
          key="1"
          id="2"
          author="test author"
          content="test comment"
          createdAt="2019"
          isAdmin={false}
          deleteComment={mockDeleteComment}
        />
      </BrowserRouter>,
    );
    expect(queryByTestId('test-element')).toBeNull();
  });

  test('delete icon calls deleteComment()', () => {
    const mockDeleteComment = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <Comment
          key="1"
          id="2"
          author="test author"
          content="test comment"
          createdAt="2019"
          isAdmin
          deleteComment={mockDeleteComment}
        />
      </BrowserRouter>,
    );
    expect(mockDeleteComment).not.toHaveBeenCalled();
    const deleteIcon = getByTestId('test-element');
    fireEvent.click(deleteIcon);
    expect(mockDeleteComment).toHaveBeenCalled();
  });
});
