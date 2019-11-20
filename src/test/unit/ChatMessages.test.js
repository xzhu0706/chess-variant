import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatMessages from '../../components/ChatMessages';

afterEach(cleanup);

test('render messages successfully', () => {
  const messages = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      member: {
        username: 'alan',
      },
    },
    {
      text: 'testing',
      member: {
        username: 'xiao',
      },
    },
  ];
  const currentMember = 'xiao';
  const { getByText } = render(
    <ChatMessages
      messages={messages}
      currentMember={currentMember}
    />,
  );
  expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
  expect(getByText('testing')).toBeInTheDocument();
  expect(getByText('alan')).toBeInTheDocument();
  expect(getByText('xiao')).toBeInTheDocument();
});
