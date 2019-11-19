import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateGameDialog from './CreateGameDialog'

afterEach(cleanup)

test('desc', () =>{
    const handleSubmit = jest.fn()

    const {getByLabelText,getByText} = render(
        <CreateGameDialog

        />,
    )

    fireEvent(
        getByText('Create A Game'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,}
        )
      )

    // getByLabelText('select-variant')
    getByText('Submit')
})