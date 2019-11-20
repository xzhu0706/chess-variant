import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatInput from '../../components/ChatInput';

afterEach(cleanup);
const onSendMessage = jest.fn();

test('send message button is working', () => {
  const { getByTestId } = render(
    <ChatInput
      onSendMessage={onSendMessage}
    />,
  );
  fireEvent(
    getByTestId('chat-input-submit-btn'),
    new MouseEvent('click'),
  );
  expect(onSendMessage).toHaveBeenCalled();
  expect(onSendMessage).toHaveBeenCalledWith('');
});

test('input text is sent to onSendMessge function', () => {
  const { getByTestId, getByPlaceholderText } = render(
    <ChatInput
      onSendMessage={onSendMessage}
    />,
  );
  fireEvent.change(
    getByPlaceholderText('Chat with your opponent'),
    {
      target: {
        value: 'hello world',
      },
    },
  );
  fireEvent.click(
    getByTestId('chat-input-submit-btn'),
  );
  expect(onSendMessage).toHaveBeenCalled();
  expect(onSendMessage).toHaveBeenCalledWith('hello world');
});
