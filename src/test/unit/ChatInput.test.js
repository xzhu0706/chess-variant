import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatInput from '../../components/ChatInput';

afterEach(cleanup);

test('send message button is working', () => {
  const onSendMessage = jest.fn();
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
});
